<template>
  <div
    class="container"
    :model-value="props.canFetch"
    @update:model-value="updateCanFetchProp"
  >
    <div v-for="(player, index) in players" :key="index">
      <PlayerCard
        :player="player"
        @click="router.push(`/details/${player.id}`)"
      />
    </div>

    <!-- <PlayerCard /> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import PlayerCard from "./PlayerCard.vue";
import { PlayerOutput } from "@/dto/types.dto";
import { getAllPlayers } from "./../api/player";
import { useRouter } from "vue-router";

interface Emit {
  (e: "update:canFetch", value: boolean): void;
  (e: "success"): void;
}

const router = useRouter();

const emit = defineEmits<Emit>();

const props = defineProps<{ canFetch: boolean }>();

const fetching = ref(false);
const players = ref<PlayerOutput[]>([]);

const updateCanFetchProp = (value: boolean) => {
  emit("update:canFetch", value);
};
const fetchPlayers = () => {
  console.log("fetching");
  fetching.value = true;
  getAllPlayers().then((response) => {
    players.value = response.data;
    console.log(response);
  }).catch(() => {}).finally(() => fetching.value = false);
};

watch(
  () => props.canFetch,
  (val) => {
    if (val) fetchPlayers();
  }
);

onMounted(fetchPlayers);
</script>
<style scoped></style>
