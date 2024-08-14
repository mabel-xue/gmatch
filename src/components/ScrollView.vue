<template>
  <v-container class="fill-height">
    <v-row class="fill-height" align="center" justify="center">
      <v-col class="fill-height d-flex flex-column">
        <v-row class="flex-grow-1" align="center" justify="center">
          <h1 :style="{ fontSize: random ? '50px' : '120px' }">{{ currentHint }}</h1>
        </v-row>

        <div>
          <v-row justify="space-between">
            <template v-if="random">
              <v-btn color="primary" @click="handleRandom"> 随机 </v-btn>
              <v-btn color="primary" @click="handleStopRandom"> 停 </v-btn>
            </template>
            <template v-else>
              <v-btn color="primary" @click="prevHint" :disabled="currentIndex === 0">
                上一个
              </v-btn>
              <v-btn
                color="primary"
                @click="nextHint"
                :disabled="currentIndex === items.length - 1"
              >
                下一个
              </v-btn>
            </template>
            <v-btn color="primary" @click="resetGame"> Home </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  random: {
    type: Boolean,
    default: false,
  },
});
const currentIndex = ref(0);
const currentHint = computed(() => props.items[currentIndex.value]);
const router = useRouter();
const timer = ref();

const prevHint = () => {
  currentIndex.value = Math.max(currentIndex.value - 1, 0);
};
const nextHint = () => {
  currentIndex.value = Math.min(currentIndex.value + 1, props.items.length - 1);
};
const handleRandom = () => {
  timer.value = setInterval(() => {
    currentIndex.value = Math.floor(Math.random() * props.items.length);
  }, 80);
};
const handleStopRandom = () => {
  clearInterval(timer.value);
};
const resetGame = () => {
  router.push("/");
};
</script>
