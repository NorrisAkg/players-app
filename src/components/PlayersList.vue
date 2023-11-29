<template>
  <VRow>
    <VCol cols="12" md="3">
      <VTextField v-model="name" placeholder="Filter by player name" />
    </VCol>
    <VCol cols="12" md="3">
      <VAutocomplete
        placeholder="Filter by position"
        :loading="fetchingPositions"
        :disabled="fetchingPositions"
        :items="positions"
        item-title="label"
        clearable
        v-model="positionSelected"
        return-object
      >
      </VAutocomplete>
    </VCol>
    <VSpacer />
    <VBtn @click="isDialogVisible = true" class="add-button"> Add player </VBtn>
    <!-- <V @click="isDialogVisible = true" class="add-button">
      <span><i class="tabler-plus"></i></span> Ajouter
    </button> -->
  </VRow>

  <div class="container">
    <!-- <div style="" v-for="(player, index) in players" :key="index"> -->
    <PlayerCard
      v-for="(player, index) in players"
      :key="index"
      :player="player"
      @click="router.push(`infos/${player.id}`)"
    />
    <!-- </div> -->
  </div>

  <!-- <PlayerCard /> -->

  <AddPlayerModal
    v-if="isDialogVisible"
    v-model:is-dialog-visible="isDialogVisible"
    @success="onCreateSucceed"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import PlayerCard from "./PlayerCard.vue";
import { PlayerOutput, PositionOutput } from "@/dto/types.dto";
import { getAllPlayers } from "./../api/player";
import { useRouter } from "vue-router";
import AddPlayerModal from "./AddPlayerModal.vue";
import { getAllPositions } from "@/api/position";

const router = useRouter();

const props = defineProps<{ canFetch: boolean }>();

const fetchingPlayers = ref(false);
const fetchingPositions = ref(false);
const positions = ref<PositionOutput[]>([]);
const players = ref<PlayerOutput[]>([]);
const isDialogVisible = ref(false);
const name = ref<string>();
const positionSelected = ref<PositionOutput>();

const fetchPositions = () => {
  fetchingPositions.value = true;
  getAllPositions()
    .then((response) => {
      positions.value = response;
    })
    .catch()
    .finally(() => (fetchingPositions.value = false));
};

const fetchPlayers = () => {
  fetchingPlayers.value = true;
  getAllPlayers(name.value, positionSelected.value?.id)
    .then((response) => {
      players.value = response.data;
      console.log(response);
    })
    .catch(() => {})
    .finally(() => (fetchingPlayers.value = false));
};

watch(name, fetchPlayers);
watch(positionSelected, fetchPlayers);

const onCreateSucceed = () => {
  isDialogVisible.value = false;
  fetchPlayers();
};

onMounted(() => {
  fetchPositions();
  fetchPlayers();
});
</script>
<style scoped></style>
