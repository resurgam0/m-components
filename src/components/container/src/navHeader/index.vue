<template>
    <div class="header">
        <span @click="toggle">
            <el-icon v-if="collapse"><Expand/></el-icon>
            <el-icon v-else><Fold/></el-icon>
        </span>
    </div>
</template>

<script setup lang="ts">
let props = defineProps<{
    collapse: boolean
}>()
let emits = defineEmits(['update:collapse'])
let toggle = ()=>{
    // 需要修改父组件的数据
    emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header{
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}
</style>