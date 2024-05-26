<template>
<div class="info">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>

    <!-- 继承属性 -->
    <h2 :class="$attrs.address"></h2>
    
</div>
  
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    // 接收父组件的传值
    // props的数组语法
    // 不能对类型进行验证
    // props: ["name", "age", "height"]
    // props的对象语法
    // props: {
    //     name: String,
    //     age: Number,
    //     height: Number,
    // }
    // 禁止将未定义的Attribute添加到根元素上
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            // 必传选项
            // required: true,
            default: "默认值",
        },
        age: {
            type: Number,
            default: "默认值",
        },
        height: {
            type: Number,
            default: "默认值",
        },
        stu: {
            type: Object,
            // 默认值为对象时 需要写成一个函数 函数返回默认值
            default: () => { {name: "zhang"}}
        }
    }

}


</script>

<style scoped>

</style>