import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default function useBooks() {
    const books = ref([]);
    const book = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getAllBooks = async () => {
        let res = await axios.get('books');
        books.value = res.data.data;
    }

    const getBook = async (id) => {
        let res = await axios.get('books/' + id);
        book.value = res.data.data;
    }

    const storeBook = async (data) => {        
        if ("category_id" in data && !data.category_id) {
            delete data.category_id;
        }

        const authors = { author_ids: [...data.author_ids] };

        delete data.author_ids;

        try {
            const book = await axios.post('books', data);
            await axios.post('books/' + book.data.data.id + '/authors', authors);
            await router.push({name: 'book.index'});
        } catch (err) {
            if (err.response.status == 422) {
                errors.value = err.response.data.errors;
            }
        }
    }

    const updateBook = async (id) => {
        try {
            await axios.put('books/' + id, book.value);
            await router.push({name: 'book.index'});
        } catch (err) {
            if (err.response.status == 422) {
                errors.value = err.response.data.errors;
            }
        }
    }

    const destroyBook = async (id) => {
        if (!window.confirm('Czy jesteś pewien?')) return;

        await axios.delete('books/' + id);
        // await getAllAuthors();
        location.reload();
    }

    return {
        books,
        book,
        errors,
        getAllBooks,
        getBook,
        storeBook,
        updateBook,
        destroyBook
    }
}