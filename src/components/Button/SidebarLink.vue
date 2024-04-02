<script setup>
    defineProps(['to', 'name'])
</script>

<template>
    <router-link 
    :to="to" 
    :class="$route.name == name ? 'bg-black text-white' : 'bg-gray-400 text-black'"
    class="text-sm p-3 px-5 rounded-lg hover:shadow-xl"
    >
        {{ name }}
    </router-link>
    
</template>