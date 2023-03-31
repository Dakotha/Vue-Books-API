<script setup>
    import { reactive } from 'vue';

    const props = defineProps(['book', 'authors', 'categories', 'errors']);

    const form = reactive({
        title: '',
        category_id: '',
        author_ids: []
    });
</script>

<template>
    <form
        @submit.prevent="$emit('updateBook', props.book.id)"
        class="p-10 bg-white shadow"
    >
        <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-slate-900">Tytuł książki</label>
            <input
                v-model="props.book.title"
                type="text"
                id="title"
                class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Podaj tytuł książki"
                required
            >
        </div>

        <!-- TODO: zaznaczyć autorów książki, zapis nowych autorów -->
        <div class="mb-6">
            <label for="authors" class="block mb-2 text-sm font-medium text-slate-900">Autor</label>
            <select
                v-model="form.author_ids"
                id="authors"
                multiple
                required
                class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 h-60"
            >
                <option
                    v-for="author in props.authors"
                    :key="author.id"
                    :value="author.id"
                >{{ author.name }}</option>                
            </select>
        </div>

        <!-- TODO: umozliwić zapis bez wybrania kategorii -->
        <div class="{{ errors ? '' : 'mb-6'">
            <label for="category" class="block mb-2 text-sm font-medium text-slate-900">Kategoria</label>
            <select
                v-model="props.book.category_id"
                id="category"
                class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            >
                <option value="" selected disabled>Wybierz kategorię</option>
                <option v-for="category in props.categories" :key="category.id" :value="category.id">{{ category.name }}</option>                
            </select>
        </div>

        <!-- Errors -->
        <div v-if="errors" class="mt-2 mb-6 text-sm text-red-400">
            <div v-for="error in errors.name">{{ error }}</div>
        </div>
        
        <!-- Submit -->
        <button type="submit" class="btn-add-new">Zapisz książkę</button>
    </form>
</template>
