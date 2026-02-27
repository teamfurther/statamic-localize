<template>
    <form class="max-w-5xl 3xl:max-w-5xl 3xl:max-w-6xl mx-auto" @submit.prevent="save" ref="form">
        <Header :title="__('localize::general.title')" icon="dictionary-language-book">
            <Button :text="__('Save')" type="submit" variant="primary" />
        </Header>
        <p v-html="__('localize::general.intro')" class="mb-6 text-sm"></p>

        <Entry v-for="(value, first) in strings" :key="first" :name="first" :value="value" :path="[]" />

        <Panel v-for="(value, first) in objects" :heading="deslug(first)" :key="first" class="mt-6">
            <Card>
                <template v-for="(secondValue, second) in value" :key="second">
                    <Entry v-if="inputType(secondValue)" :name="second" :value="secondValue" :path="[first]" />
                    <Group v-else :name="second" :value="secondValue" :path="[first]" parent />
                </template>
            </Card>
        </Panel>

        <Card v-if="Object.values(translations).length === 0">
            <p>{{ __('localize::general.no_content') }}</p>
        </Card>
    </form>
</template>

<script>
import Entry from './Entry.vue'
import Group from './Group.vue'
import { deslug, inputType } from '../utils'
import { Button, Card, Header, Panel } from '@ui';
import { computed } from 'vue'

export default {
    components: {
        Button,
        Card,
        Entry,
        Group,
        Header,
        Panel,
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
            sites: computed(() => this.trackedSites),
        }
    },

    mounted() {
        this.saveKeyBinding = this.$keys.bindGlobal(
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
            this.$axios({
                method: "POST",
                url: this.action,
                data: this.$refs.form,
            })
                .then((response) => {
                    this.$toast.success(response.data.status)
                    this.trackedSites = Object.assign(this.trackedSites, response.data.sites)
                })
                .catch((error) => this.handleAxiosError(error))
        },
        handleAxiosError(e) {
            if (e.response && e.response.status === 422) {
                const { message, errors } = e.response.data
                console.error(errors);
                this.$toast.error(message)
            } else if (e.response) {
                this.$toast.error(e.response.data.message)
            } else {
                this.$toast.error(e || 'Something went wrong')
            }
        },
    },

    unmounted() {
        this.saveKeyBinding.destroy()
    },
}
</script>
