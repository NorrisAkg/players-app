<template>
  <div class="container">
    <PlayerCard @click="router.push('/details')" />
    <PlayerCard />
    <PlayerCard />
    <PlayerCard />
    <PlayerCard />
    <PlayerCard />
    <PlayerCard />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import PlayerCard from "./PlayerCard.vue";
import { LengthAwarePaginator, PlayerOutput } from "@/dto/types.dto";
import { getAllPlayers } from "./../api/player";
import { useRouter } from "vue-router";

const router = useRouter();

const fetching = ref(false);
const players = ref<PlayerOutput[]>([]);
const fetchPlayers = () => {
  console.log("fetching");
  fetching.value = true;
  getAllPlayers().then((response) => {
    console.log(response);
  });
};

onMounted(fetchPlayers);
</script>
<style scoped></style>
