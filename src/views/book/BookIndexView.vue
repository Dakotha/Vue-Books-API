<script setup>
    import useBooks from '../../composables/books';
    import TableBooks from '../../components/book/TableBooks.vue';
    import Heading from '../../components/Heading.vue';
    import { onMounted } from 'vue';

    const { books, getAllBooks } = useBooks();

    onMounted(() => getAllBooks())
</script>

<template>
    <Heading text="Lista książek" />

    <RouterLink
        :to="{name: 'book.create'}"
        class="btn-add-new"    
    >Dodaj nową książkę</RouterLink>

    <TableBooks :books="books" />
</template>