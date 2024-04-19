<template>
    <div class="menu-router">
      <tiny-tree-menu
        ref="tree"
        :show-filter="true"
        node-key="id"
        wrap
        :default-expanded-keys="[expandeArr]"
      >
        <template>
          <template v-for="(item, index) in routerTitle" :key="index">
            <span class="menu-title">
              <component :is="item.icon"></component>
              <span :class="item.bold">123</span>
            </span>
          </template>
        </template>
      </tiny-tree-menu>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { computed, watch, ref } from 'vue';
    import { RouteRecordNormalized } from 'vue-router';
    import {
      IconDownloadCloud,
      IconFiles,
      IconSetting,
      IconSuccessful,
      IconCueL,
      IconUser,
      IconFiletext,
      IconApplication,
    } from '@opentiny/vue-icon';
    import { TreeMenu as tinyTreeMenu } from '@opentiny/vue';
    import router from '@/router';
    import { TabItem } from '@opentiny/vue';
  
    // icon图标
    const iconDownloadCloud = IconDownloadCloud();
    const iconFiles = IconFiles();
    const iconSetting = IconSetting();
    const iconSuccessful = IconSuccessful();
    const iconCueL = IconCueL();
    const iconUser = IconUser();
    const iconFiletext = IconFiletext();
    const iconApplication = IconApplication();
    const tree = ref();
    const expandeArr = ref();
    const routerTitle = [
      {
        value: 'Board',
        name: 'menu.board',
        icon: iconApplication,
        bold: 'main-title',
      },
      {
        value: 'Home',
        name: 'menu.home',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Work',
        name: 'menu.work',
        icon: null,
        bold: 'title',
      },
      {
        value: 'List',
        name: 'menu.list',
        icon: iconFiles,
        bold: 'main-title',
      },
      {
        value: 'Table',
        name: 'menu.list.searchTable',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Form',
        name: 'menu.form',
        icon: iconSetting,
        bold: 'main-title',
      },
      {
        value: 'Base',
        name: 'menu.form.base',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Step',
        name: 'menu.form.step',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Profile',
        name: 'menu.profile',
        icon: iconFiletext,
        bold: 'main-title',
      },
      {
        value: 'Detail',
        name: 'menu.profile.detail',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Result',
        name: 'menu.result',
        icon: iconSuccessful,
        bold: 'main-title',
      },
      {
        value: 'Success',
        name: 'menu.result.success',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Error',
        name: 'menu.result.error',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Cloud',
        name: 'menu.cloud',
        icon: iconDownloadCloud,
        bold: 'main-title',
      },
      {
        value: 'Hello',
        name: 'menu.cloud.hello',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Contracts',
        name: 'menu.cloud.contracts',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Exception',
        name: 'menu.exception',
        icon: iconCueL,
        bold: 'main-title',
      },
      {
        value: '403',
        name: 'menu.exception.403',
        icon: null,
        bold: 'title',
      },
      {
        value: '404',
        name: 'menu.exception.404',
        icon: null,
        bold: 'title',
      },
      {
        value: '500',
        name: 'menu.exception.500',
        icon: null,
        bold: 'title',
      },
      {
        value: 'User',
        name: 'menu.user',
        icon: iconUser,
        bold: 'main-title',
      },
      {
        value: 'Info',
        name: 'menu.user.info',
        icon: null,
        bold: 'title',
      },
      {
        value: 'Setting',
        name: 'menu.user.setting',
        icon: null,
        bold: 'title',
      },
    ];

  </script>
  
  <style lang="less" scoped>
    .main-title {
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      color: #000;
    }
  
    .title {
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }
  
    .menu-title {
      display: flex;
      gap: 10px;
      align-items: center;
      height: 20px;
  
      > svg {
        width: 1.3em;
        height: 1.3em;
      }
    }
    :deep(.tiny-tree-node__wrapper > .is-current > .tiny-tree-node__content) {
      color: #000 !important;
      background: none !important;
      margin-left: 0 !important;
      &:hover {
        background: #fff !important;
        color: #fff !important;
      }
    }
    :deep(.tiny-tree-node__wrapper > .is-expanded >  .tiny-tree-node__children
    > .tiny-tree-node__wrapper > .is-current > .tiny-tree-node__content
    ) {
      background-color: var(--ti-tree-menu-node-hover-bg-color) !important;
      margin-left: 0 !important;
      &:hover {
        background: var(--ti-tree-menu-node-hover-bg-color) !important;
      }
    }
    :deep(.tiny-tree-node > .tiny-tree-node__content) {
      margin-left: 0 !important;
    }
    .tiny-tree-menu
      .tiny-tree
      .tiny-tree-node.is-current
      > .tiny-tree-node__content
      .tree-node-name
      .tiny-svg {
      fill: var(--ti-base-icon-color);
    }
  </style>
  