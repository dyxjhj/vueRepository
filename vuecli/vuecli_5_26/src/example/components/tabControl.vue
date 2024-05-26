<template>
<div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
        <div class="tab-control-item"
        :class="{active:index===currentIndex}"
        @click="itemClick(index)">
            {{ item }}
        </div>
    </template>

    
</div>
  
</template>

<script>
export default {
    props: {
        titles: { 
            type: Array,
            default:[]
        }
    },
    data () {
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            // console.log(this.currentIndex)
            this.$emit("tabItemClick", index)
        }
    }

}
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        height: 44px;
        line-height: 44px;
    }
    .tab-control-item {
        flex: 1;
    }
    .active {
        border-bottom: 3px solid red;
        color: red;
        font-weight: 700;
    }
</style>