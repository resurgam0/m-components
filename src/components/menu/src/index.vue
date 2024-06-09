<template>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      :router="router"
      v-bind="$attrs"
    >
      <template v-for="item in data" :key="item.index">
        <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
          <component v-if="item[icon]" :is="item[icon]"></component>
          <span>{{ item[name] }}</span>
        </el-menu-item>
        <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
          <template #title>
            <component v-if="item[icon]" :is="item[icon]"></component>
            <span>{{ item[name] }}</span>
          </template>
          <el-menu-item v-for="(item1, index1) in item[children]" :key="index1" :index="item1.index">
            <component v-if="item1[icon]" :is="item1[icon]"></component>
            <span>{{ item1[name] }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </template>

<script setup lang="ts">
// $attrs是一个内置对象，它包含了传递给组件但没有在props中显式声明的所有属性和监听器。这些属性和监听器会被自动应用到组件的根元素上，除非显示使用v-bind="$attrs"将它们传递给其它子组件
//npm i -D @vitejs/plugin-vue-jsx安装jsx的命令
import {PropType} from 'vue'
let props = defineProps({
    // 导航菜单的数据
    data:{
        type: Array as PropType<any[]>, //它的类型是一个MenuItem类型的数组
        required: true
    },
    //默认选中的菜单
    defaultActive:{
        type: String,
        default: ''
    },
    // 是否是路由模式
    router:{
        type: Boolean,
        default: false
    },
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name'
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children'
    },
})
</script>

<style lang="less" scoped>
svg{
    margin-right: 4px;
    width: 1em;
    height: 1em;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>