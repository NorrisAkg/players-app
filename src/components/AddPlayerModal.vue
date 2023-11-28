<template>
  <div>
    <VDialog :model-value="props.isDialogVisible" @update:model-value="updateDialogVisibilityProp" width="500">

    </VDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {getAllPositions} from '@/api/position'

interface Emit {
    (e: 'update:isDialogVisible', value: boolean): void;
    (e: 'addWasSuccess'): void;
}

const props = defineProps<{ isDialogVisible: boolean }>();
const emit = defineEmits<Emit>();

const fetchingPositions = ref(false)

const updateDialogVisibilityProp = (value: boolean) => {
    emit("update:isDialogVisible", value);
}

const fetchPositions = () => {
    fetchingPositions.value = true;
    geAllPositions().then().catch().finally(() => fetchingPositions.value = false)
}

onMounted(fetchPositions);
</script>

<style scoped></style>
