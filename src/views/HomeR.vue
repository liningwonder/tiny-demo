<script setup>
  import { ref } from 'vue'

  const count = ref(0)

  function increment() {
    count.value++
    this.$router.push('/login')
  }
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>

