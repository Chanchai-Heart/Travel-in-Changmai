<template>
  <main class="font-[Poppins] bg-gradient-to-t from-[#4A7856] to-[#C2EABA] h-max">
    <div >
      <navbar class="sticky top-0 z-[1]"/>
      <router-view/>
    </div>
  </main>
</template>

<script setup>
import navbar from './components/navbar.vue';
</script>

<style>

</style>