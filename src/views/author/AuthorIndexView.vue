<script setup>
    import useAuthors from '../../composables/authors';
    import TableAuthors from '../../components/author/TableAuthors.vue';
    import Heading from '../../components/Heading.vue';
    import { onMounted } from 'vue';

    const { authors, getAllAuthors } = useAuthors();

    onMounted(() => getAllAuthors())
</script>

<template>
    <Heading text="Lista autorów" />

    <RouterLink
        :to="{name: 'author.create'}"
        class="btn-add-new"    
    >Dodaj nowego autora</RouterLink>

    <TableAuthors :authors="authors" />
</template>