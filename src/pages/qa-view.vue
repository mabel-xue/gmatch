<template>
  <v-container>
    <v-row class="mt-4">
      <v-col cols="12">
        <h1 class="text-h3 text-center mb-6">问题列表</h1>
        <v-card>
          <v-list lines="two">
            <v-list-item
              v-for="(item, index) in questions"
              :key="index"
              :title="item"
              density="comfortable"
              rounded="lg"
              class="my-1"
            >
              <template v-slot:prepend>
                <v-avatar color="primary" variant="tonal" class="mr-3">
                  {{ index + 1 }}
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12" class="text-center">
        <v-btn color="primary" size="large" to="/"> 返回首页 </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { QA_2 } from "@/data";

const questions = ref(QA_2);
</script>

<style scoped>
.v-list-item {
  transition: all 0.2s ease;
}

.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>
