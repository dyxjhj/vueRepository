<template>
<div>
    <!-- 展示个人信息 -->
    <!-- :age="18" js代码 加："18"表示数字18 -->
    <!-- <stu-info name="zhang" :age="18" height=1.88></stu-info> -->
    <stu-info name="zhang" age=18 height=1.88></stu-info>
    <stu-info name="li" age=28 height=1.81></stu-info>
    <stu-info></stu-info>
    <!-- 非prop的Attribute address="西安市" -->
    <!-- props中没有对应的变量接受 该属性默认添加到子组件的根元素上 -->
    <stu-info name="li" age=28 height=1.81 address="西安市"></stu-info>

    
</div>
  
</template>

<script>
import stuInfo from "./components/stuInfo.vue"
export default {
    components: {
        stuInfo,
    }

}
</script>

<style scoped>

</style>