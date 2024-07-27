import { ref } from "vue"
// 监听页面滚动的hook
export default function useScrollPosition() {
    const scrollX = ref(0)
    const scrollY = ref(0)

    document.addEventListener('scroll', () => {
        scrollX.value = window.scrollX;
        scrollY.value = window.scrollY;

    })


    // 返回
    return {scrollX, scrollY};
}