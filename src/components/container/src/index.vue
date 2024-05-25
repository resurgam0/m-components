<template>
    <el-container>
        <el-aside width="auto">
            <NavSide :collapse="isCollapse"></NavSide>
        </el-aside>
        <el-container>
        <el-header>
            <NavHeader v-model:collapse="isCollapse"></NavHeader>
        </el-header>
        <el-main>
            <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'
import {ref} from 'vue'
let isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-header{
    padding: 0;
    border-bottom: 1px solid #eee;
}
</style>