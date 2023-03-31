<script setup>
    const props = defineProps(['text'])
</script>

<template>
    <h1 class="mb-6 font-black text-2xl">{{ props.text }}</h1>
</template>