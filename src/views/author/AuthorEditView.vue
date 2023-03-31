<script setup>
    import useAuthors from '../../composables/authors';
    import FormEditAuthor from '../../components/author/FormEditAuthor.vue';
    import Heading from '../../components/Heading.vue';
    import { onMounted } from 'vue';

    const { author, errors, getAuthor, updateAuthor } = useAuthors();

    const props = defineProps(['id']);

    onMounted(() => getAuthor(props.id));
</script>

<template>
    <Heading text="Edytuj autora" />

    <RouterLink
        :to="{name: 'author.index'}"
        class="btn-back"
    >powrót</RouterLink>

    <FormEditAuthor :author="author" :errors="errors" @updateAuthor="updateAuthor" />
</template>