<template>
    <div class="w-2/12 min-h-full text-slate-200 bg-slate-800">
        <div class="flex items-center h-20 pl-10 font-black border-b border-slate-700 mb-10 bg-slate-900">Vue Books Api</div>

        <nav class="flex flex-col space-y-2">
            <RouterLink :to="{name: 'dashboard'}" class="link">Kokpit</RouterLink>
            <RouterLink :to="{name: 'book.index'}" class="link">Książki</RouterLink>
            <RouterLink :to="{name: 'author.index'}" class="link">Autorzy</RouterLink>
            <RouterLink :to="{name: 'category.index'}" class="link">Kategorie</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    .link {
        @apply relative pl-10 py-3 hover:bg-slate-700;
    }

    .router-link-active {
        @apply bg-slate-700 after:block after:absolute after:top-1/2 after:-right-2 after:-translate-y-1/2 after:rotate-45 after:w-4 after:h-4 after:bg-slate-100;
    }
</style>