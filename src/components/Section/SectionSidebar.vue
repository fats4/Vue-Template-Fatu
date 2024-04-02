<script setup>
  import SidebarLink from '../Button/SidebarLink.vue'
</script>

<template>
  <div class="flex-none p-5 h-full w-1/4 bg-orange-500 rounded-xl">
    <p>Menu</p>
    <div class="flex flex-col py-6 px-1 gap-3">
      <SidebarLink to="/" name="home"/>
      <SidebarLink to="/components" name="components"/>
    </div>
  </div>
</template>
