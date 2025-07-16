<template>
    <Entry v-if="inputType(value)" :name="name" :value="value" :path="path" class="pl-3 statamic-localize-pr-0" />
    <fieldset v-else class="border dark:border-dark-900 rounded shadow-sm !statamic-localize-p-2 statamic-localize-mt-5 section">
        <legend class="statamic-localize-translate-y-[-65%] absolute">
            <component :is="parent ? 'h3' : 'h4'" class="bg-white dark:bg-dark-600 inline-block statamic-localize-px-3">
                {{ deslug(name) }}
            </component>
        </legend>

        <Group :name="key" :value="children" :path="[...path, name]" v-for="(children, key) in value" :key="key" />

    </fieldset>
</template>

<script>
import Entry from './Entry.vue'
import { deslug, inputType } from '../utils'
export default {
    name: "Group",
    components: {
        Entry,
    },
    props: {
        parent: Boolean,
        name: String,
        value: Object,
        path: Array,
    },
    methods: {
        deslug,
        inputType
    },
}
</script>
