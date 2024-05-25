<template>
    <div class="trend">
        <div class="text" :style="{color: textColor}">
            <slot v-if="slots.default"></slot>
            <div v-else>{{ text }}</div>
        </div>
        <div class="icon">
            <!-- <el-icon :style="{color: !reverseColor ? upIconColor : '#f5222d'}" v-if="type==='up'"><ArrowUp /></el-icon>
            <el-icon :style="{color: !reverseColor ? downIconColor : '#52c41a'}" v-else><ArrowDown /></el-icon> -->
            <component :is="`${upIcon}`" :style="{color: !reverseColor ? upIconColor : '#f5222d'}" v-if="type==='up'"></component>
            <component :is="`${downIcon}`" :style="{color: !reverseColor ? downIconColor : '#52c41a'}" v-else></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue'
let slots = useSlots()
let props = defineProps({
    // 标记当前趋势是上升(up)还是下降(down)
    type: {
        type: String,
        default: 'up'
    },
    // 上升趋势显示的图标
    upIcon:{
        type: String,
        default: 'ArrowUp'
    },
    // 下降趋势显示的图标
    downIcon:{
        type: String,
        default: 'ArrowDown'
    },
    // 趋势显示的文字
    // 1.从父组件传递过来的数据
    // 2.插槽
    text:{
        type: String,
        default: '文字'
    },
    // 颜色翻转只在默认的颜色下生效，如果使用了自定义颜色 这个属性就不生效了
    reverseColor:{
        type: Boolean,
        default: false
    },
    // 上升趋势的图标颜色
    upIconColor:{
        type: String,
        default: '#f5222d'
    },
    // 下降趋势的图标颜色
    downIconColor:{
        type: String,
        default: '#52c41a'
    },
    // 上升趋势的文字颜色
    upTextColor:{
        type: String,
        default: 'rgb(0,0,0)'
    },
    // 下降趋势的文字颜色
    downTextColor:{
        type: String,
        default: 'rgb(0,0,0)'
    }
})
// 文字颜色
let textColor = computed(()=>{
    return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang="less" scoped>
.trend{
    display: flex;
    align-items: center;
    .text{
        font-size: 12px;
        margin-right: 4px;
    }
    .icon{
        svg{
            width: 1em;
            height: 1em;
        }
    }
}
</style>