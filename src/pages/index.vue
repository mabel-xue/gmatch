<template>
  <v-btn
    size="x-large"
    color="primary"
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
  // { text: "QA1", path: "/qa-easy" },
  { text: "QA", path: "/qa-2" },
  { text: "G", path: "/game" },
  { text: "H", path: "/hot" },
  // { text: "M", path: "/match" },
  // { text: "game2", path: "/game-2" },
];

const navigateToPage = (path: any) => {
  router.push(path);
};
</script>
