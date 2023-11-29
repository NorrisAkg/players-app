<template>
  <div class="main">
    <h2>Player Norris details</h2>
    
    <PlayerDetails v-if="player" :player="player!" />
  </div>
</template>

<script setup lang="ts">
import PlayerDetails from "@/components/PlayerDetails.vue";
import { PlayerOutput } from "@/dto/types.dto";
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import {getPlayer} from "@/api/player"

const route = useRoute()

const player = ref<PlayerOutput>(<PlayerOutput>{})

onMounted(() => {
  getPlayer(route.params?.id!.toString()).then((response) => {
    console.log(response)
    player.value = response
  })
  console.log(route.params?.id!.toString())
  console.log("details mounted");
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
