<script setup lang="ts">
const { VITE_PORT_VUE2 } = import.meta.env;
</script>

<template>
  <micro-app name="vue2" :url="VITE_PORT_VUE2" baseroute="/micro/vue2" />
</template>
