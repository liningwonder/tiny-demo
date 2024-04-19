<template>
  <div class="container-image">
    <div class="container-login">
      <div class="content">
        <div class="login">
          <div class="login-header">
            <div class="login-logo">
              <img class="login-logo-img" alt="Tiny Design" src="@/assets/images/pro.png"/>
              <span class="login-logo-text">企业数字化解决方案</span>
            </div>
            <div class="login-desc">万物之始，大道至简 | 知易行难，悟在天成</div>
          </div>
          <LoginForm />
        </div>
      </div>
      <div class="footer">
        <Footer />
      </div>
   </div>
  </div>
</template>
  
  <script setup>
    import Footer from '@/components/footer/index.vue';
    import LoginForm from '@/views/login/components/LoginForm.vue'
  </script>
  
  <style lang="less" scoped>
    .container-image {
      background-image: url('@/assets/images/img_log.png');
      background-size: cover; /* 拉长横向铺满容器 */
      background-position: center; /* 背景图片居中 */
      background-repeat: no-repeat; /* 背景图片不重复 */
      width: 100%; /* 容器宽度 */
    }

    .container-login {
      display: flex;
      flex-direction: column;
      width: 80vw;
      height: 100vh;
    }
  
    .content {
      position: relative;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 0;
    }
  
    .login {
      width: 450px;
      height: 550px;
      padding: 60px 40px;
      font-size: var(--ti-common-font-size-1);
      background: #fff;
      box-shadow: 0 0 2px 2px var(--ti-common-color-bg-normal);
  
      &-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
  
      &-logo {
        margin-right: 20px;
  
        &-img {
          margin-right: 10px;
          vertical-align: middle;
        }
  
        &-text {
          display: inline-block;
          color: rgba(0, 0, 0, 0.7);
          font-weight: bold;
          font-size: 30px;
          vertical-align: middle;
        }
      }
  
      &-desc {
        margin-top: 12px;
        margin-bottom: 40px;
        color: rgba(0, 0, 0, 0.5);
        font-size: 18px;
      }
    }
  
    // 登录页面的tiny-link不保留hover后的下划线展示
    :deep(.tiny-link.is-underline:hover::after) {
      border-bottom: none;
    }
  </style>
  