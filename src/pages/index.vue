<template>
  <v-btn
    size="x-large"
    v-for="btn in buttons"
    :key="btn.text"
    @click="navigateToPage(btn.path)"
  >
    {{ btn.text }}
  </v-btn>
</template>

<script lang="ts" setup>
const router = useRouter();
const buttons = [
  { text: "QA1", path: "/qa-easy" },
  { text: "QA2", path: "/qa-2" },
  { text: "game1", path: "/game" },
  // { text: "game2", path: "/game-2" },
];

const navigateToPage = (path: any) => {
  router.push(path);
};
</script>
