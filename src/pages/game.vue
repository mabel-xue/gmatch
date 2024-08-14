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
  { text: "成语", path: "/game-view?id=1" },
  { text: "动物", path: "/game-view?id=2" },
  { text: "物品", path: "/game-view?id=3" },
  { text: "食物", path: "/game-view?id=4" },
];

const navigateToPage = (path: any) => {
  router.push(path);
};
</script>
