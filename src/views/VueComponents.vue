<script setup>
    import { ref } from 'vue'
    import ConditionalRendering from '../components/Component/ConditionalRendering.vue'
    import ListRendering from '../components/Component/ListRendering.vue'
    import TabNavigation from '../components/Tab/TabNavigation.vue'
    
    const aTabs = ref({ 
        name: 'Conditional Rendering', 
        component: ConditionalRendering 
    })
    const lisx = ref([
        { name: 'Conditional Rendering', component: ConditionalRendering },
        { name: 'List Rendering', component: ListRendering }
    ])
</script>

<template>
    <div class="flex flex-col h-full">
        <p class="mb-3">Vue component</p>
        <TabNavigation :lists="lisx" v-model="aTabs" />
        
        <div class="bg-[#FFDEB6] rounded-xl p-5 w-full h-full">
            <component :is="aTabs.component"></component>
        </div>
    </div>
</template>