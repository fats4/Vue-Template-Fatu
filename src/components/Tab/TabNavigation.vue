<script setup>
    defineProps(['lists'])
    const active = defineModel()
</script>

<template>
    <div class="flex w-fit overflow-hidden pb-3 space-x-2 items-center">
        <button
            v-for="list in lists"
            :key="list"
            class="p-4 text-sm"
            @click="active = list"
            :class="active.name == list.name ? 'bg-blue-500 text-white' : 'bg-gray-400 text-black'"
        >
            {{ list.name }}
        </button>
    </div>
</template>