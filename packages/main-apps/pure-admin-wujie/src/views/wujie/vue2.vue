<script setup lang="ts">
const { VITE_PORT_VUE2 } = import.meta.env;
</script>

<template>
  <div>
    <WujieVue width="100%" height="100%" name="vue2" :url="VITE_PORT_VUE2" />
  </div>
</template>

<style scoped></style>
