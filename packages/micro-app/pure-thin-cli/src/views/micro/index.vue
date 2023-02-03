<script setup lang="ts"></script>

<template>
  <div>
    <h1>基于Webpack5的Vue3子应用</h1>
    <micro-app
      name="app1"
      url="http://localhost:8080/"
      baseroute="/micro/index"
    />
  </div>
</template>

<style scoped></style>
