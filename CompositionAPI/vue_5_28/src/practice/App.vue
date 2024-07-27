<template>
<div>
    <el-form :model="formData" label-width="70px" style="max-width: 600px">
        <el-form-item label="姓名">
            <!-- <el-input v-model="formData.name" /> -->
            <el-select-com></el-select-com>
        </el-form-item>
        <el-form-item>
            <el-button @click="handleReset">重置</el-button>
        </el-form-item>
    </el-form>
</div>
  
</template>

<script setup>
import elSelectCom from './select';
import { ref } from 'vue';
let formData = ref(
    {
        name: ''
    }
)
function handleReset() {
    formData.value.name = '';
}


</script>

<style scoped>

</style>