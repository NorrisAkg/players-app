<template>
  <div class="details-wrapper">
    <div class="infos-card">
      <div class="details-picture">
        <img src="./../assets/images/avatar.png" alt="player_picture" />
      </div>
      <div class="infos">
        <p>
          <span class="info-key">Firstname: </span>
          <span class="info-value">{{ player.firstname }}</span>
        </p>
        <p>
          <span class="info-key">Lastname: </span>
          <span class="info-value">{{ player.lastname }}</span>
        </p>
        <p>
          <span class="info-key">Position: </span>
          <span class="info-value">{{ player.position?.label }}</span>
        </p>
        <p>
          <span class="info-key">Jersey number: </span>
          <span class="info-value">{{ player.jersey_number }}</span>
        </p>
      </div>
    </div>
    <div class="stats-card">
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayerOutput } from "@/dto/types.dto";

const props = defineProps<{ player: PlayerOutput }>();
</script>

<style scoped></style>
