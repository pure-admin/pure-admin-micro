<script setup lang="ts">
const { VITE_PORT_VUE3 } = import.meta.env;
</script>

<template>
  <div>
    <WujieVue width="100%" height="100%" name="vue3" :url="VITE_PORT_VUE3" />
  </div>
</template>

<style scoped></style>
