<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card>
          <v-card-title class="text-center">
            Guess the Word
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-center">
                  <h2>{{ currentHint }}</h2>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-btn color="primary" @click="prevHint" :disabled="currentIndex === 0">
                  Previous
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="primary" @click="nextHint" :disabled="currentIndex === hints.length - 1">
                  Next
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="primary" @click="resetGame">
                  Home
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const prevHint = () => {
  this.currentIndex = Math.max(this.currentIndex - 1, 0);
}
const nextHint = () => {
  this.currentIndex = Math.min(this.currentIndex + 1, this.hints.length - 1);
}
const resetGame = () => {
  this.currentIndex = 0;
}
</script>
