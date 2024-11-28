<template>
  <v-btn
    color="primary"
    size="x-large"
    v-for="btn in buttons"
    :key="btn.text"
    :prepend-icon="btn.icon"
    @click="navigateToPage(btn.path)"
  >
    {{ btn.text }}
  </v-btn>
</template>

<script lang="ts" setup>
const router = useRouter();
const buttons = [
  { text: "成语", path: "/game-view?id=1", icon: "mdi-atom" },
  { text: "动物", path: "/game-view?id=2", icon: "mdi-rabbit-variant-outline" },
  { text: "物品", path: "/game-view?id=3", icon: "mdi-paper-roll-outline" },
  { text: "食物", path: "/game-view?id=4", icon: "mdi-fruit-cherries" },
  { text: "人物", path: "/game-view?id=5", icon: "mdi-alien-outline" },
  { text: "电影", path: "/game-view?id=6", icon: "mdi-movie-roll" },
];

const navigateToPage = (path: any) => {
  router.push(path);
};
</script>
