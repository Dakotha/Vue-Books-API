<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import SideBar from './views/partials/Sidebar.vue'
</script>

<template>
  <div class="flex min-h-screen">
    <SideBar />
    
    <div class="flex-1 p-10 bg-slate-100"><RouterView /></div>
  </div>
</template>

