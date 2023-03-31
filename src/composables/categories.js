import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default function useCategories() {
    const categories = ref([]);
    const category = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getAllCategories = async () => {
        let res = await axios.get('categories');
        categories.value = res.data.data;
    }

    const getCategory = async (id) => {
        let res = await axios.get('categories/' + id);
        category.value = res.data.data;
    }

    const storeCategory = async (data) => {
        try {
            await axios.post('categories', data);
            await router.push({name: 'category.index'});
        } catch (err) {
            if (err.response.status == 422) {
                errors.value = err.response.data.errors;
            }
        }
    }

    const updateCategory = async (id) => {
        try {
            await axios.put('categories/' + id, category.value);
            await router.push({name: 'category.index'});
        } catch (err) {
            if (err.response.status == 422) {
                errors.value = err.response.data.errors;
            }
        }
    }

    const destroyCategory = async (id) => {
        if (!window.confirm('Czy jesteś pewien?')) return;

        await axios.delete('categories/' + id);
        // await getAllAuthors();
        location.reload();
    }

    return {
        categories,
        category,
        errors,
        getAllCategories,
        getCategory,
        storeCategory,
        updateCategory,
        destroyCategory
    }
}