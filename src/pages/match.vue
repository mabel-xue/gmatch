<template>
  <v-container class="fill-height">
    <v-row class="fill-height" align="center" justify="center">
      <v-col class="fill-height d-flex flex-column">
        <h1>第{{ currentIndex + 1 }}轮</h1>
        <div
          style="height: calc(100vh - 100px)"
          class="d-flex justify-center align-center"
        >
          <v-row no-gutters v-if="random">
            <v-col v-for="(r, i) in randomNums" :key="i" cols="12">
              <v-sheet class="ma-3 pa-2 text-center text-h1" v-if="random">
                {{ r[0] }} - {{ r[1] }}
              </v-sheet>
            </v-col>
          </v-row>
          <v-row no-gutters v-else>
            <v-col v-for="(g, i) in arr[currentIndex]" :key="i" cols="12">
              <v-sheet class="ma-3 pa-2 text-center text-h1">
                {{ g[0] }} - {{ g[1] }}
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <v-row>
          <v-btn
            prepend-icon="mdi-skip-next"
            style="width: 160px"
            color="primary"
            @click="next"
            :disabled="currentIndex === arr.length - 1"
          >
            下一个
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const currentIndex = ref(-1);
const randomNums = ref([
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
]);
const random = ref(true);
const timer = ref();
const arr = [
  [
    [1, 4],
    [2, 8],
    [3, 9],
    [5, 6],
    [7, 10],
  ],
  [
    [1, 5],
    [2, 4],
    [3, 10],
    [6, 9],
    [7, 8],
  ],
  [
    [2, 3],
    [1, 9],
    [4, 7],
    [5, 8],
    [6, 10],
  ],
  [
    [1, 6],
    [2, 5],
    [3, 7],
    [4, 8],
    [9, 10],
  ],
];

const next = () => {
  currentIndex.value++;
  random.value = true;
  timer.value = setInterval(() => {
    randomNums.value = [
      [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1],
      [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1],
      [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1],
      [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1],
      [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1],
    ];
  }, 60);
  setTimeout(() => {
    random.value = false;
    clearInterval(timer.value);
  }, 1500);
};

onMounted(() => {
  next();
});
</script>
