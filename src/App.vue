<script setup>
import { RouterView } from 'vue-router';
import SectionNavbar from './components/Section/SectionNavbar.vue'
import SectionMain from './components/Section/SectionMain.vue'
import SectionFooter from './components/Section/SectionFooter.vue'
import SectionSidebar from './components/Section/SectionSidebar.vue'
</script>

<template>
  <div class="flex flex-col h-screen w-screen gap-3">
      <SectionNavbar />
    <div class="flex w-full h-full gap-3">
      <SectionSidebar />
      <SectionMain>
        <RouterView />
      </SectionMain>
    </div>
    <SectionFooter />
  </div>
</template>
