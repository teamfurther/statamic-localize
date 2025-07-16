<template>
    <div class="relative w-full">
        <span v-if="isDirty" class="absolute statamic-localize-right-3 statamic-localize-mt-[0.4rem] statamic-localize-pointer-events-none statamic-localize-text-[rgb(67,169,255)]" aria-label="has changed">•</span>
        <input v-bind="$attrs" v-model="trackedValue" :name="name" class="input-text">
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        name: String,
        value: String,
    },
    data() {
        return {
            trackedValue: this.value,
        }
    },
    computed: {
        isDirty() {
            // handle "<empty string>" in firefox
            if (!this.trackedValue && !this.value) return false;

            return this.trackedValue != this.value
        },
    },
    watch: {
        isDirty(isDirty) {
            if (isDirty) Statamic.$dirty.add(this.name);
            else Statamic.$dirty.remove(this.name);
        },
        // In Vue 3, we need to update the tracked value when the prop changes
        value(newValue) {
            this.trackedValue = newValue;
        }
    },
}
</script>
