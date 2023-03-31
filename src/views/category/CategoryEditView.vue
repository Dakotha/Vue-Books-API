<script setup>
    import useCategories from '../../composables/categories';
    import FormEditCategory from '../../components/category/FormEditCategory.vue';
    import Heading from '../../components/Heading.vue';
    import { onMounted } from 'vue';

    const { category, errors, getCategory, updateCategory } = useCategories();

    const props = defineProps(['id']);

    onMounted(() => getCategory(props.id));
</script>

<template>
    <Heading text="Edytuj kategorię" />

    <RouterLink
        :to="{name: 'category.index'}"
        class="btn-back"
    >powrót</RouterLink>

    <FormEditCategory :category="category" :errors="errors" @updateCategory="updateCategory" />
</template>