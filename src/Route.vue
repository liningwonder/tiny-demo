<script setup>
/**
 * 监听浏览器 hashchange 事件或使用 History API 来更新当前组件
 */
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
const routes = {
  '/': HelloWorld,
  '/about': TheWelcome
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>
<template>
  <a href="#/">Home</a> |
  <a href="#/about">About</a>
  <component :is="currentView" />
</template>