<template>
  <v-container class="">
    <v-row class="" align="center" justify="center">
      <v-col class="d-flex flex-column">
        <div
          style="height: calc(100vh - 160px)"
          class="d-flex justify-center align-center"
        >
          <h1 :style="{ fontSize: random ? '50px' : '120px' }">{{ currentHint }}</h1>
        </div>

        <div>
          <v-row>
            <template v-if="random">
              <v-btn
                size="x-large"
                prepend-icon="mdi-play"
                v-if="!timer"
                style="width: 160px"
                color="primary"
                @click="handleRandom"
              >
                随机
              </v-btn>
              <v-btn
                size="x-large"
                prepend-icon="mdi-stop"
                v-if="!!timer"
                style="width: 160px"
                color="primary"
                @click="handleStopRandom"
              >
                停
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                size="x-large"
                prepend-icon="mdi-skip-previous"
                style="width: 160px"
                color="primary"
                @click="prevHint"
                :disabled="currentIndex === 0"
              >
                上一个
              </v-btn>
              <v-btn
                size="x-large"
                prepend-icon="mdi-skip-next"
                style="width: 160px"
                color="primary"
                @click="nextHint"
                :disabled="currentIndex === items.length - 1"
              >
                下一个
              </v-btn>
            </template>
            <v-btn color="primary" @click="resetGame" size="x-large"> 返回 </v-btn>
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
const emit = defineEmits(["start"]);
const currentIndex = ref(-1);
const currentHint = computed(() => props.items?.[currentIndex.value] || "-");
const router = useRouter();
const timer = ref();

const prevHint = () => {
  currentIndex.value = Math.max(currentIndex.value - 1, 0);
};
const nextHint = () => {
  currentIndex.value = Math.min(currentIndex.value + 1, props.items.length - 1);
  emit("start");
};
const handleRandom = () => {
  timer.value = setInterval(() => {
    currentIndex.value = Math.floor(Math.random() * props.items.length);
  }, 70);
};
const handleStopRandom = () => {
  clearInterval(timer.value);
  timer.value = null;
};
const resetGame = () => {
  router.push("/");
};
</script>
