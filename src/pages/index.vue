<template>
  <v-btn v-for="btn in buttons" :key="btn.text" @click="navigateToPage(btn.path)">
    {{ btn.text }}
  </v-btn>
</template>

<script lang="ts" setup>
const buttons = [
  { text: 'QAE', path: 'qa-easy' },
]

const navigateToPage = (path) => {
  router.push({ name: path })
}
//
</script>
