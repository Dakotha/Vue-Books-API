import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default function useAuthors() {
    const authors = ref([]);
    const author = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getAllAuthors = async () => {
        let res = await axios.get('authors');
        authors.value = res.data.data;
    }

    const getAuthor = async (id) => {
        let res = await axios.get('authors/' + id);
        author.value = res.data.data;
    }

    const storeAuthor = async (data) => {
        try {
            await axios.post('authors', data);
            await router.push({name: 'author.index'});
        } catch (err) {
            if (err.response.status == 422) {
                errors.value = err.response.data.errors;
            }
        }
    }

    const updateAuthor = async (id) => {
        try {
            await axios.put('authors/' + id, author.value);
            await router.push({name: 'author.index'});
        } catch (err) {
            if (err.response.status == 422) {
                errors.value = err.response.data.errors;
            }
        }
    }

    const destroyAuthor = async (id) => {
        if (!window.confirm('Czy jesteś pewien?')) return;

        await axios.delete('authors/' + id);
        // await getAllAuthors();
        location.reload();
    }

    return {
        authors,
        author,
        errors,
        getAllAuthors,
        getAuthor,
        storeAuthor,
        updateAuthor,
        destroyAuthor
    }
}