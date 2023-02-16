<script setup lang="ts">
const { VITE_PORT_VITE_VUE3 } = import.meta.env;
</script>

<template>
  <micro-app
    name="vue3-vite"
    :url="VITE_PORT_VITE_VUE3"
    inline
    disableSandbox
  />
</template>
