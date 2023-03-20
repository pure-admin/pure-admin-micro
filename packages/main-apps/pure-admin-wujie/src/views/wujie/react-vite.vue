<script setup lang="ts">
const { VITE_PORT_REACT_VITE } = import.meta.env;
</script>

<template>
  <div>
    <WujieVue
      width="100%"
      height="100%"
      name="react-vite"
      :url="VITE_PORT_REACT_VITE"
    />
  </div>
</template>

<style scoped></style>
