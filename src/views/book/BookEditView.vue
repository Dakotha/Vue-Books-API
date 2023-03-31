<script setup>
    import useBooks from '../../composables/books';
    import useAuthors from '../../composables/authors';
    import useCategories from '../../composables/categories';
    import FormEditBook from '../../components/book/FormEditBook.vue';
    import Heading from '../../components/Heading.vue';
    import { onMounted } from 'vue';

    const { book, errors, getBook, updateBook } = useBooks();
    const { authors, getAllAuthors } = useAuthors();
    const { categories, getAllCategories } = useCategories();

    const props = defineProps(['id']);

    onMounted(() => {
        getBook(props.id);
        getAllAuthors();
        getAllCategories();
    });
</script>

<template>
    <Heading text="Edytuj książkę" />

    <RouterLink
        :to="{name: 'book.index'}"
        class="btn-back"
    >powrót</RouterLink>

    <FormEditBook
        :book="book"
        :authors="authors"
        :categories="categories"
        :errors="errors"
        @updateBook="updateBook"
    />
</template>