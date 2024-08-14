<template>
  <ScrollView :items="data" />
</template>

<script setup lang="ts">
import { nbwc_data } from "@/data";
const route = useRoute();
const data = computed<any>(() => {
  const id = route.query.id as string;
  return nbwc_data[id];
});
</script>

<style scoped></style>
