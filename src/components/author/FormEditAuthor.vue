<script setup>
    const props = defineProps(['author', 'errors']);
</script>

<template>
    <form
        @submit.prevent="$emit('updateAuthor', author.id)"
        class="p-10 bg-white shadow"
    >
        <div class="{{ errors ? '' : 'mb-6'">
            <label for="name" class="block mb-2 text-sm font-medium text-slate-900">Imię i nazwisko</label>
            <input
                v-model="author.name"
                type="text"
                id="name"
                class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Podaj imię i nazwisko autora"
                required
            >
        </div>

        <!-- Errors -->
        <div v-if="errors" class="mt-2 mb-6 text-sm text-red-400">
            <div v-for="error in errors.name">{{ error }}</div>
        </div>
        
        <!-- Submit -->
        <button type="submit" class="btn-add-new">Zapisz autora</button>
    </form>
</template>