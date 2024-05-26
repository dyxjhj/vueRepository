<template>
<div>
    <h2>{{ title }}</h2>
    <div class="content">
        <slot>
            <p>插槽的默认内容</p>    
        </slot>    
    </div>   
     
</div>
  
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "默认值",
        },
        content: {
            type: String,
            default: "",
        }
    }

}
</script>

<style scoped>

</style>