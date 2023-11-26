<template>
  <div class="container">
    <PlayerCard />
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
import {getAllPlayers} from './../api/player'

const fetching = ref(false);
const players = ref<PlayerOutput[]>([])
const fetchPlayers = () => {
    fetching.value = true
    getAllPlayers().then((response) => {
        console.log(response)
    })
}

onMounted(() => fetchPlayers)
</script>
<style scoped></style>
