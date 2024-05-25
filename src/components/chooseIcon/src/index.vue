<template>
    <el-button @click="handleClick" type="primary">
        <slot></slot>
    </el-button>
    <div class="m-choose-icon-dialog-body-height">
        <el-dialog :title="title" v-model="visPop">
            <div class="container">
                <div v-for="(item, index) in Object.keys(ElIcons)" :key="index" class="item" @click="clickItem(item)">
                    <div class="text">
                        <component :is="item"></component>
                    </div>
                    <div class="icon">{{ item }}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import * as ElIcons from '@element-plus/icons-vue'
import {watch, ref} from 'vue'
import {useCopy} from '../../../hooks/useCopy/index'
let props = defineProps<{
    title: string, //弹出框的标题
    visible: boolean, //控制弹出框的显示与隐藏
}>()
let visPop = ref<boolean>(props.visible)
let emits = defineEmits(['update:visible'])
let handleClick = ()=>{
    emits('update:visible', !props.visible)
}
// 监听visible的变化
watch(()=>props.visible, val=>{
    visPop.value = val
})
watch(()=>visPop.value, val=>{
    emits('update:visible', val)
})
// 点击图标
let clickItem = (item:string)=>{
    let text = `el-icon-${item}`
    useCopy(text)
    visPop.value = false
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.item{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    height: 70px;
    cursor: pointer;
}
.text{
    font-size: 14px;
}
.icon{
    flex: 1;
}
svg{
    width: 2em;
    height: 2em;;
}
</style>