<script setup>
    import { ref } from 'vue';
        
    const showContent = ref(false);
    const buttonText = ref('Show');
        
    function toggleContent() {
        showContent.value = !showContent.value;
        buttonText.value = showContent.value ? 'Hide' : 'Show';
    }
</script>

<template>
    <div>
        <button @click="toggleContent" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
            {{ buttonText }}
        </button>
        <p v-if="showContent" class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae recusandae velit saepe explicabo fugit dignissimos quam. Minima, quam veniam! Sed aliquam incidunt laboriosam cum, iusto porro. Expedita, iure dolorem.</p>
    </div>
</template>

