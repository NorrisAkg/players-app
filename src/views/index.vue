<template>
  <div class="main">
    <h2>Players list</h2>
    <!-- <div class="list-header">
      <div class="filter">
        <input type="text" />
        <select type="text">
          <option value="">Positions</option>
        </select>
      </div>
      <button @click="isDialogVisible = true" class="add-button">
        <span><i class="tabler-plus"></i></span> Ajouter
      </button>
    </div> -->
    <PlayersList v-model:can-fetch="canFetchList" />
  </div>

  <!-- <AddPlayerModal
    v-if="isDialogVisible"
    v-model:is-dialog-visible="isDialogVisible"
    @success="onCreateSucceed"
  /> -->
</template>

<script setup lang="ts">
// import { ref, onMounted } from "vue";
import PlayersList from "@/components/PlayersList.vue";
// import AddPlayerModal from "@/components/AddPlayerModal.vue";

// const isDialogVisible = ref(false);
// const canFetchList = ref(false);
// const name = ref<string>()
// const positionSelected = ref<PositionOutput>()

// const onCreateSucceed = () => {
//   canFetchList.value = true;
//   isDialogVisible.value = false;
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
