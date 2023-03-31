<script setup>
    import useCategories from '../../composables/categories';
    import TableCategories from '../../components/category/TableCategories.vue';
    import Heading from '../../components/Heading.vue';
    import { onMounted } from 'vue';

    const { categories, getAllCategories } = useCategories();

    onMounted(() => getAllCategories())
</script>

<template>
    <Heading text="Lista kategorii" />

    <RouterLink
        :to="{name: 'category.create'}"
        class="btn-add-new"    
    >Dodaj nową kategorię</RouterLink>

    <TableCategories :categories="categories" />
</template>