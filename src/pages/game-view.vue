<template>
  <div style="height: 40px">
    <p class="text-h3 text-center">{{ formattedTime }}</p>
  </div>
  <ScrollView :items="data" @start="onStart" />
  <v-overlay v-model="overlay" class="align-center justify-center">
    <v-btn size="x-large" @click="onStart">继续</v-btn>
  </v-overlay>
  <audio ref="audioPlayer" controls style="display: none">
    <source src="@/assets/dd.wav" type="audio/wav" />
  </audio>
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

const TIME = 120;
const totalSeconds = ref(TIME);
const overlay = ref(false);
const formattedTime = ref("02:00");
const interval = ref();
const timer = ref();
const audioPlayer = ref();

const onStart = () => {
  overlay.value = false;
  interval.value = setInterval(() => {
    playAudio();
    if (totalSeconds.value > 0) {
      totalSeconds.value--;
      updateFormattedTime();
    } else {
      clearInterval(interval.value);
    }
  }, 1000);
  timer.value = setTimeout(() => {
    stopAudio();
    overlay.value = true;
    clearInterval(interval.value);
    clearTimeout(timer.value);
    formattedTime.value = "02:00";
    totalSeconds.value = TIME;
  }, TIME * 1000);
};

const playAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.play();
  }
};

const stopAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
  }
};

const updateFormattedTime = () => {
  const minutes = Math.floor(totalSeconds.value / 60);
  const seconds = totalSeconds.value % 60;
  formattedTime.value = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

onMounted(() => {
  onUnmounted(() => {
    clearInterval(interval.value);
    clearTimeout(timer.value);
  });
});
</script>

<style scoped></style>
