<template>
    <div class="login-register-container">
      <tiny-form
        ref="ruleForm"
        :model="createData"
        :rules="rules"
        :validate-on-rule-change="isvalidate"
        :label-align="true"
        label-position="top"
        label-width="100px"
      >
        <tiny-form-item
          label="邮箱"
          prop="username"
          size="medium"
        >
          <tiny-input
            v-model="createData.username"
            placeholder="邮箱"
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item
          label="密码"
          prop="password"
          size="medium"
        >
          <tiny-input
            v-model="createData.password"
            placeholder="密码"
            type="password"
            show-password
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item
          label="确认密码"
          prop="passwordConfirm"
          size="medium"
        >
          <tiny-input
            v-model="createData.passwordConfirm"
            placeholder="确认密码"
            type="password"
            show-password
          ></tiny-input>
        </tiny-form-item>
  
        <div class="login-form-options">
          <tiny-link type="primary" @click="typeChange">使用已有账户登录</tiny-link>
        </div>
  
        <tiny-form-item size="medium">
          <tiny-button
            type="primary"
            class="login-form-btn"
            :loading="loading"
            @click="handleSubmit"
            >注册</tiny-button
          >
        </tiny-form-item>
      </tiny-form>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { inject, reactive, ref, computed } from 'vue';
    import {
      Form as TinyForm,
      FormItem as TinyFormItem,
      Input as TinyInput,
      Button as TinyButton,
      Link as TinyLink,
      Modal,
    } from '@opentiny/vue';
    import useLoading from '@/hooks/loading';
  
    // 注册
    const { loading, setLoading } = useLoading();
    const ruleForm = ref();
  
    // 切换模式
    const handle: any = inject('handle');
    const typeChange = () => {
      handle(false);
    };
  
    let createData = reactive({
      username: '',
      password: '',
      passwordConfirm: '',
    });
  
    let isvalidate = ref(true);
  
    // 校验格式
    const validatePass = (
      rule: any,
      value: string,
      callback: (arg?: Error) => void
    ) => {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
        callback(new Error('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字'));
      } else {
        callback();
      }
    };
  
    const validateMail = (
      rule: any,
      value: string,
      callback: (arg?: Error) => void
    ) => {
      if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
        callback(new Error('字母、数字、下划线、短线、点号字母、数字、短线'));
      } else {
        callback();
      }
    };
    const validatePassConfirm = (
      rule: any,
      value: string,
      callback: (arg?: Error) => void
    ) => {
      if (createData.password && createData.password !== value) {
        callback(new Error('密码输入不一致'));
      } else {
        callback();
      }
    };
  
    const rules = computed(() => {
      return {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
          },
          { validator: validateMail, trigger: 'blur' },
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          },
          { validator: validatePass, trigger: 'blur' },
        ],
        passwordConfirm: [
          {
            required: true,
            message: '确认密码不能为空',
            trigger: 'blur',
          },
          { validator: validatePassConfirm, trigger: 'blur' },
        ],
      };
    });
  
    // 注册提交
    function handleSubmit() {
    }
  </script>
  
  <style lang="less" scoped>
    .login-register-container {
      margin-top: -6%;
      margin-left: 6%;
  
      .tiny-form-item {
        margin-bottom: 20px;
      }
  
      &-container {
        width: 320px;
      }
  
      .login-form-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        margin-left: 65%;
      }
  
      .login-form-btn {
        display: block;
        width: 100%;
        max-width: 100%;
      }
    }
  </style>
  