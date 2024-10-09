<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params);
</script>

<template>
  <main>
    <h1>{{ route.params.username }}</h1>
  </main>
</template>
