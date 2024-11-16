<template>
  <ScrollView :items="data" />
</template>

<script setup lang="ts">
import { nbwc_data } from "@/data";
const route = useRoute();
const data = computed<any>(() => {
  const id = route.query.id as string;
  return shuffleArray(nbwc_data[id]);
});


function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
</script>

<style scoped></style>
