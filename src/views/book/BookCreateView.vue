<script setup>
    import useBooks from '../../composables/books';
    import useCategories from '../../composables/categories';
    import useAuthors from '../../composables/authors';
    import FormBooks from '../../components/book/FormCreateBook.vue';
    import Heading from '../../components/Heading.vue';
    import { onMounted } from 'vue';

    const { errors, storeBook } = useBooks();
    const { categories, getAllCategories } = useCategories();
    const { authors, getAllAuthors } = useAuthors();

    onMounted(() => getAllCategories());
    onMounted(() => getAllAuthors());
</script>

<template>
    <Heading text="Dodaj nową książkę" />

    <RouterLink
        :to="{name: 'book.index'}"
        class="btn-back"
    >powrót</RouterLink>

    <FormBooks :categories="categories" :authors="authors" :errors="errors" @storeBook="storeBook" />
</template>