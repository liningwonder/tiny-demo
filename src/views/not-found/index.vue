<template>
    <div class="content">
      <div>
        <h3>404 not found</h3>
        <tiny-button type="primary" class="login-form-btn" @click="back">返回首页</tiny-button>
      </div>
    </div>
  </template>

  <script setup>
    import { useRouter } from 'vue-router';
    import {Button as TinyButton} from '@opentiny/vue';
    const router = useRouter();
    const back = () => {
      // warning： Go to the node that has the permission
      router.push('/');
    };

    function handleSubmit() {
      router.push('/register');
    }
  </script>
  <style scoped lang="less"></style>
