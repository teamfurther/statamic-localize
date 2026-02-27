<template>
    <Entry v-if="inputType(value)" :name="name" :value="value" :path="path" />

    <Panel v-else :heading="deslug(name)" class="mt-6">
        <Card>
            <Group :name="key" :value="children" :path="[...path, name]" v-for="(children, key) in value" :key="key" />
        </Card>
    </Panel>
</template>

<script>
import Entry from './Entry.vue'
import { deslug, inputType } from '../utils'
import { Card, Panel } from '@ui';
export default {
    name: "Group",
    components: {
        Card,
        Entry,
        Panel,
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
