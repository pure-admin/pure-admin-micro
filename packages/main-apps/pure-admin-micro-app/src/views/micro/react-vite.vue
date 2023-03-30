<script setup lang="ts">
const { VITE_PORT_VITE_REACT } = import.meta.env;
</script>

<template>
  <micro-app
    name="react-vite"
    :url="VITE_PORT_VITE_REACT"
    inline
    disableSandbox
  />
</template>
