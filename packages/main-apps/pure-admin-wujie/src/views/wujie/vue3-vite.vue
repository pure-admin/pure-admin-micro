<script setup lang="ts">
const { VITE_PORT_VUE3_VITE } = import.meta.env;
</script>

<template>
  <div>
    <WujieVue
      width="100%"
      height="100%"
      name="vue3-vite"
      :url="VITE_PORT_VUE3_VITE"
    />
  </div>
</template>

<style scoped></style>
