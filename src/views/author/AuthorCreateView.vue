<script setup>
    import useAuthors from '../../composables/authors';
    import FormAuthors from '../../components/author/FormCreateAuthor.vue';
    import Heading from '../../components/Heading.vue';

    const { errors, storeAuthor } = useAuthors();
</script>

<template>
    <Heading text="Dodaj nowego autora" />

    <RouterLink
        :to="{name: 'author.index'}"
        class="btn-back"
    >powrót</RouterLink>

    <FormAuthors @storeAuthor="storeAuthor" :errors="errors" />
</template>