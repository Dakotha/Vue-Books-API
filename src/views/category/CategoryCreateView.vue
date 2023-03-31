<script setup>
    import useCategories from '../../composables/categories';
    import FormCategories from '../../components/category/FormCreateCategory.vue';
    import Heading from '../../components/Heading.vue';

    const { errors, storeCategory } = useCategories();
</script>

<template>
    <Heading text="Dodaj nową kategorię" />

    <RouterLink
        :to="{name: 'category.index'}"
        class="btn-back"
    >powrót</RouterLink>

    <FormCategories @storeCategory="storeCategory" :errors="errors" />
</template>