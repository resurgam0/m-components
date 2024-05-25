<template>
    <div style="display:flex">
        <el-select clearable placeholder="请选择省份" v-model="province">
            <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select clearable :disabled="!province" style="margin-left: 20px;" placeholder="请选择城市" v-model="city">
            <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select clearable :disabled="!province || !city" style="margin-left: 20px;"  placeholder="请选择区域" v-model="area">
            <el-option v-for="item in selectArea" :value="item.code" :label="item.name"></el-option>
        </el-select>
    </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import allAreas from '../lib/pca-code.json'

export interface AreaItem{
    name: string,
    code: string,
    children?: AreaItem[]
}
export interface Data{
    name: string,
    code: string
}

// 下拉框选择省份的值
let province = ref<string>('')
// 下拉框选择城市的值
let city = ref<string>('')
// 下拉框选择区域的值
let area = ref<string>('')
// 分发事件给父组件
let emits = defineEmits(['change'])

// 所有的省市区的值
let areas = ref(allAreas)
let selectCity = ref<AreaItem[]>([])
// 区域下拉框的所有的值
let selectArea = ref<AreaItem[]>([])
watch(()=>province.value, val=>{
    if(val){
        let cities = areas.value.find(item=>item.code===province.value)!.children!
        selectCity.value = cities
    }
    city.value = ''
    area.value = ''
})
watch(()=>city.value, val=>{
    if(val){
        let areas = selectCity.value.find(item=>item.code===city.value)!.children!
        selectArea.value = areas
    }
    area.value = ''
})

// 监听选择区域
watch(()=>area.value, val=>{
    if(val){
        let provinceData:Data = {
            code: province.value,
            name: province.value && allAreas.find(item=>item.code===province.value)!.name
        }
        let cityData:Data = {
            code: city.value,
            name: city.value && selectCity.value.find(item=>item.code===city.value)!.name
        }
        let areaData:Data = {
            code: val,
            name: val && selectArea.value.find(item=>item.code===val)!.name
        }
        emits('change',{
            province: provinceData,
            city: cityData,
            areaData: areaData
        })
    }
})
</script>

<style lang="less" scoped>

</style>