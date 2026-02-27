<template>
    <div class="relative w-full">
        <span v-if="isDirty" class="absolute right-3 mt-[0.4rem] pointer-events-none text-[rgb(67,169,255)]" aria-label="has changed">•</span>
        <input v-bind="$attrs" v-model="trackedValue" :name="name" class="w-full block bg-white dark:bg-gray-900 border border-gray-300 with-contrast:border-gray-500 dark:border-gray-700 dark:with-contrast:border-gray-500 dark:inset-shadow-2xs dark:inset-shadow-black text-gray-925 dark:text-gray-300 placeholder:text-gray-500 dark:placeholder:text-gray-400/85 appearance-none antialiased shadow-ui-sm disabled:shadow-none disabled:opacity-50 read-only:border-dashed not-prose text-base rounded-lg px-3 py-2 h-10 leading-[1.375rem]">
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
        value(newValue) {
            this.trackedValue = newValue;
        }
    },
}
</script>
