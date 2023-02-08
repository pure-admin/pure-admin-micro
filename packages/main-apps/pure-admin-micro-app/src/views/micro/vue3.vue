<script setup lang="ts">
const { VITE_PORT_VUE3 } = import.meta.env;
</script>

<template>
  <micro-app name="vue3" :url="VITE_PORT_VUE3" baseroute="/micro/vue3" />
</template>
