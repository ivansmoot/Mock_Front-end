<template>
  <el-button type="primary" round @click="addNum">{{ num }}</el-button>
</template>

<script setup>
  import { ref } from 'vue'

  const num = ref(0)

  function addNum() {
    num.value += 1
  }
</script>

<style scoped>
</style>