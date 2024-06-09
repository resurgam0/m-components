<template>
    <m-choose-time @startChange="startChange" @endChange="endChange" :startOptions="startOptions"></m-choose-time>
    <br/>
    <br/>
    <m-choose-date @startChange="startChange2" @endChange="endChange2" :startOptions="startOptions2"></m-choose-date>
</template>

<script setup lang="ts">
interface endValue {
    startTime: string,
    endTime: string
}
interface endTime {
    startDate: string,
    endDate: string
}
let startChange = (val: string)=>{
    console.log(val);
}
let endChange = (val: endValue)=>{
    console.log(val)
}
let startOptions = {
    size: 'default',
    clearable: false
}
let startChange2 = (val: string)=>{
    console.log(val);
}
let endChange2 = (val: endTime)=>{
    console.log(val)
}
let startOptions2 = {
    size: 'default',
    clearable: true
}
</script>

<style lang="less" scoped>

</style>