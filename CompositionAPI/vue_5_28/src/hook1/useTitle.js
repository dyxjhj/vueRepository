import { ref, watch } from "vue"

export default function useTitle(titleValue) {
    // document.title = title
    // 定义ref的引入数据
    const title = ref(titleValue)
    // 监听title的改变
    watch(title, (newValue) => {
        document.title = newValue
    }, {
        immediate: true,  //立即侦听，进入页面时就执行一次
    })

    // 返回
    return title;
}