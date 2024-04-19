<template>
    <div class="login-form-container">
      <div>
        <LoginMail />
      </div>
    </div>
</template>

<script setup>
  import { provide, ref } from 'vue';
  import LoginMail from './LoginMail.vue';
</script>

<style lang="less" scoped>
  .login-form-container {
    margin-top: 5%;
  }

  .login-form-language {
    position: absolute;
    top: 10%;
    left: 93%;
  }

  :deep(.tiny-tabs__content) {
    margin-left: -6%;
  }
</style>