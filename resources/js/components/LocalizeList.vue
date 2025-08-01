<template>
    <form @submit.prevent="save" ref="form">

        <header class="mb-8">
            <button class="statamic-localize-float-right btn-primary">{{ __('Save') }}</button>
            <h1>{{ __('localize::general.title') }}</h1>
            <p v-html="__('localize::general.intro')"></p>
        </header>

        <section v-if="Object.keys(strings).length" class="card py-5 px-6 content statamic-localize-mb-6 form-group">
            <Entry v-for="(value, first) in strings" :key="first" :name="first" :value="value" :path="[]" class="px-0" />
        </section>

        <section v-for="(value, first) in objects" :key="first" class="card p-0 content statamic-localize-mb-6 form-group">
            <header class="publish-section-header @container">
                <div class="publish-section-header-inner">
                    <h2 class="text-base font-semibold mb-1">{{ deslug(first) }}</h2>
                </div>
            </header>
            <div class="py-5 px-6">
                <template v-for="(secondValue, second) in value" :key="second">
                    <Entry v-if="inputType(secondValue)" :name="second" :value="secondValue" :path="[first]"
                        class="px-0" />
                    <Group v-else :name="second" :value="secondValue" :path="[first]" parent class="statamic-localize-mb-1" />
                </template>
            </div>
        </section>

        <section v-if="Object.values(translations).length === 0" class="card p-6 content">
            <p>{{ __('localize::general.no_content') }}</p>
        </section>

    </form>
</template>

<script>
import Entry from './Entry.vue'
import Group from './Group.vue'
import { deslug, inputType } from '../utils'

export default {
    components: {
        Entry,
        Group,
    },

    props: {
        site: String,
        sites: Object,
        action: String,
    },

    data() {
        return {
            trackedSites: this.sites,
            saveKeyBinding: null
        }
    },

    computed: {
        translations() {
            const createEmptyTranslationKeys = (obj1, obj2) => {
                for (let key in obj2) {
                    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
                        if (obj2[key] instanceof Object) {
                            obj1[key] = {}
                            obj1[key] = createEmptyTranslationKeys(obj1[key], obj2[key])
                        } else {
                            obj1[key] = ''
                        }
                    }
                }
                return obj1;
            }
            const otherSites = Object.keys(this.trackedSites).filter(x => x !== this.site)
            let result = this.trackedSites[this.site].translations
            otherSites.forEach((s) => {result = createEmptyTranslationKeys(result, this.trackedSites[s].translations)})
            return result
        },
        strings() {
            return Object.entries(this.translations).reduce((acc, [key, value]) => {
                if (inputType(value)) acc[key] = value
                return acc
            }, {})
        },
        objects() {
            return Object.entries(this.translations).reduce((acc, [key, value]) => {
                if (!inputType(value)) acc[key] = value
                return acc
            }, {})
        }
    },

    provide() {
        return {
            site: this.site,
            sites: this.trackedSites,
        }
    },

    mounted() {
        // In Vue 2, $keys is accessed directly
        this.saveKeyBinding = Statamic.$keys.bindGlobal(
            ['mod+s', 'mod+return'],
            (e) => {
                e.preventDefault()
                this.save()
            }
        )
    },

    methods: {
        deslug,
        inputType,
        save() {
            // In Vue 2, $axios is accessed directly
            Statamic.$axios({
                method: "POST",
                url: this.action,
                data: this.$refs.form,
            })
                .then((response) => {
                    // In Vue 2, $toast is accessed directly
                    Statamic.$toast.success(response.data.status)
                    this.trackedSites = Object.assign(this.trackedSites, response.data.sites)
                })
                .catch((error) => this.handleAxiosError(error))
        },
        handleAxiosError(e) {
            if (e.response && e.response.status === 422) {
                const { message, errors } = e.response.data
                console.error(errors);
                Statamic.$toast.error(message)
            } else if (e.response) {
                Statamic.$toast.error(e.response.data.message)
            } else {
                Statamic.$toast.error(e || 'Something went wrong')
            }
        },
    },

    // In Vue 2, use destroyed instead of unmounted
    destroyed() {
        this.saveKeyBinding.destroy()
    },
}
</script>
