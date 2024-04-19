<template>
    <div class="login-form-container">
      <tiny-form ref="loginFormMail" :model="loginMail" class="login-form" :rules="rules" validate-type="text" label-width="0" size="medium">
        <tiny-form-item prop="mailname" size="medium">
          <tiny-input v-model="loginMail.mailname" placeholder="邮箱"></tiny-input>
        </tiny-form-item>
        <tiny-form-item prop="mailpassword" size="medium">
          <tiny-input v-model="loginMail.mailpassword" placeholder="密码" type="password" show-password></tiny-input>
        </tiny-form-item>
  
        <tiny-form-item size="medium">
          <tiny-button type="primary" class="login-form-btn" :loading="loading" @click="handleSubmit">登录</tiny-button>
        </tiny-form-item>
      </tiny-form>
    </div>
  </template>
  
  <script setup>
  import { inject, ref, reactive, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import {Form as TinyForm,
    FormItem as TinyFormItem,
    Input as TinyInput,
    Button as TinyButton,
  } from '@opentiny/vue';
  import useLoading from '@/hooks/loading';

  const router = useRouter();
  const { loading, setLoading } = useLoading();
  const loginFormMail = ref();

  const rules = computed(() => {
    return {
      mailname: [
        {
          required: true,
          message: '邮箱名不能为空',
          trigger: 'change',
        },
      ],
      mailpassword: [
        {
          required: true,
          message: '邮箱密码不能为空',
          trigger: 'change',
        },
      ],
    };
  });

  const loginMail = reactive({
    mailname: 'admin@example.com',
    mailpassword: 'admin',
    rememberPassword: true,
  });


  function waitFor10Seconds() {
    setTimeout(function() {
      console.log('10秒已过！');
    }, 20000);
  }

  function handleSubmit() {
    setLoading(true);
    setTimeout(console.log('wait 10 seconds'), 10000);
    waitFor10Seconds();
    setLoading(false);
    router.push('/register');
  }


  </script>
  
  <style lang="less" scoped>
    .login-form-container {
      margin-top: 5%;
    }
  
    .login-form {
      margin-left: 6%;
  
      .tiny-form-item {
        margin-bottom: 20px;
      }
  
      &-container {
        width: 320px;
      }
  
      &-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        font-size: 12px;
      }
  
      &-btn {
        display: block;
        width: 100%;
        max-width: 100%;
      }
    }
    .divide-line {
      margin: 0 5px;
    }
  </style>
  