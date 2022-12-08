import { computed, readonly, ref } from "vue";
import { getBlogContentList, getBlogContenBySlug } from "@/api/blog";


export default function useProducts() {
    const products = ref(null);

    const isLoading = ref(false);
    
    const isLoaded = ref(false);
    
    const error = ref(null);

    const exec = async (params = null) => {
        isLoading.value = true;
        await getBlogContentList(params).then(response => response.data?.data).then(data => {
            blog.value = data;
            isLoading.value = false;
            isLoaded.value = true;
        }).catch(errorObj => {
            error.value = errorObj?.response?.data;
        });
    }

    return {
        blog: readonly(blog),
        isLoaded: readonly(isLoaded),
        isLoading: readonly(isLoading),
        error: readonly(error),
        exec,
    };
}