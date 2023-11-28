<template>
  <div class="main">
    <h2>Player Norris details</h2>
    <div class="list-header">
      <div class="filter">
        <input type="text" />
        <select type="text">
          <option value="">Positions</option>
        </select>
      </div>
      <button class="add-button">
        <span><i class="tabler-plus"></i></span> Ajouter
      </button>
    </div>
    <PlayersList />
  </div>
</template>

<script setup lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
