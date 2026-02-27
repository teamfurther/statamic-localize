<template>
    <div class="flex flex-wrap gap-3 py-1">
        <!-- label -->
        <div class="md:w-64 mt-2 truncate w-full">
            <label :for="`${site}.${pathName}`" :title="pathName" class="font-medium text-sm">
                <a :href="`#${site}.${pathName}`" @click="setAnchor">
                    {{ deslug(name) }}
                </a>
            </label>
        </div>

        <div class="flex flex-col grow">
            <!-- main input -->
            <div class="flex gap-3">
                <TrackedInput :id="`${site}.${pathName}`" :name="formName" :value="value" :placeholder="value" />
                <Button icon="hierarchy" @click="expanded" />
            </div>

            <!-- alternatives -->
            <div
                v-if="details"
                class="-mr-1 mt-4 overflow-hidden transition-all"
                :style="{
                    height: grow ? altCount * (40 + 12) + 2 + 'px' : 0
                }"
            >
                <div class="flex flex-col gap-3 pr-1 pt-2">
                    <div v-for="alt in alternatives" :key="alt.handle" class="flex gap-4 items-center">
                        <div class="truncate w-40">
                            <label
                                :for="`${alt.handle}.${pathName}`"
                            >
                                <a :href="`#${alt.handle}.${pathName}`" @click="setAnchor">
                                    {{ alt.name }}
                                </a>
                            </label>
                        </div>
                        <TrackedInput
                            :id="`${alt.handle}.${pathName}`"
                            :name="`${formName.replace(`translations[${site}]`, `translations[${alt.handle}]`)}`"
                            :value="alt.value"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TrackedInput from './TrackedInput.vue'
import { deslug, walkObject } from '../utils'
import { Button } from '@ui';
export default {
    components: {
        Button,
        TrackedInput,
    },
    props: {
        name: String,
        value: String,
        path: Array,
    },
    inject: ['site', 'sites'],
    data() {
        return {
            details: false,
            grow: false,
        }
    },
    computed: {
        formName() {
            return 'translations' + [this.site, ...this.path, this.name].map(s => `[${s}]`).join('')
        },
        pathName() {
            return [...this.path, this.name].join('.')
        },
        alternatives() {
            return Object.values(this.sites)
                .filter(alt => alt.handle != this.site)
                .map((alt) => ({
                    handle: alt.handle,
                    name: alt.name,
                    value: walkObject(alt.translations, this.path, this.name)
                }))
        },
        altCount() {
            return Object.keys(this.sites).length - 1
        },
    },
    methods: {
        deslug,
        expanded() {
            this.details = !this.details
            setTimeout(() => { this.grow = !this.grow }, 10)
        },
        setAnchor(e) {
            e.preventDefault()
            window.history.replaceState(window.history.state, '', e.target.href)
            const input = document.getElementById(e.target.href.split('#')[1])
            input?.focus()
        }
    },
    mounted() {
        const hash = window.location.hash.substring(1)
        const site = hash.substring(0, hash.indexOf('.'))
        const path = hash.substring(hash.indexOf('.') + 1)

        if (path === this.pathName) {
            if (site !== this.site) {
                this.details = true
                this.grow = true
            }

            setTimeout(() => {
                const el = document.getElementById(window.location.hash.substring(1))
                if (!el) return

                el.focus()
            }, 10)
        }
    }
}
</script>
