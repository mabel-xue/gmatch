<template>
  <v-container class="fill-height">
    <v-row class="fill-height" align="center" justify="center">
      <v-col class="fill-height d-flex flex-column">
        <div
          style="height: calc(100vh - 100px)"
          class="d-flex justify-center align-center"
        >
          <v-row no-gutters>
            <v-col v-for="(w, i) in words" :key="i" cols="3">
              <v-sheet class="ma-3 pa-2 text-center text-h3">
                {{ w }}
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <v-row>
          <v-btn color="primary" @click="resetGame"> 返回 </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const router = useRouter();
const words = [
  "沙漠",
  "超人",
  "风筝",
  "钓鱼",
  "眼镜",
  "月亮",
  "领导",
  "钥匙",
  "蜡烛",
  "老婆",
  "镜子",
  "手表",
  "热气球",
  "雨伞",
  "火箭",
  "石头",
  "寺庙",
  "游泳池",
  "土豆",
  "情侣",
  "钱包",
  "火柴",
  "床单",
  "快递",
  "自行车",
  "星星",
  "水杯",
  "手套",
  "剪刀",
  "铃铛",
  "报纸",
  "大象",
];

onMounted(() => {});

const resetGame = () => {
  router.push("/");
};
</script>
