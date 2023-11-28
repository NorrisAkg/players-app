<template>
  <div>
    <VDialog
      :model-value="props.isDialogVisible"
      @update:model-value="updateDialogVisibilityProp"
      width="500"
    >
      <!-- Dialog Content -->
      <VCard title="Add new player">
        <VCardText>
          <VForm @submit.prevent="onSubmit">
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="credentials.firstname"
                  label="Player firstname"
                  required
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="credentials.lastname"
                  label="Player lastname"
                  required
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  type="number"
                  v-model="credentials.jersey_number"
                  label="Player jersey number"
                  required
                />
              </VCol>
              <VCol cols="12">
                <label>Position <i class="text-error">*</i> </label>
                <VAutocomplete
                  :loading="fetchingPositions"
                  :disabled="fetchingPositions"
                  :items="positions"
                  v-model="credentials.position_id"
                  item-title="label"
                  item-value="id"
                  no-data-text="Aucune donnée"
                >
                </VAutocomplete>
              </VCol>

              <VCol cols="12" class="d-flex justify-end">
                <VBtn
                  variant="tonal"
                  @click="updateDialogVisibilityProp(false)"
                  class="me-2"
                  color="error"
                  :disabled="isSubmitting"
                >
                  Cancel
                </VBtn>
                <VBtn
                  type="submit"
                  :loading="isSubmitting"
                  :disabled="isSubmitting"
                >
                  Save
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getAllPositions } from "@/api/position";
import { PlayerInput, PositionOutput } from "@/dto/types.dto";
import { addPlayer } from "@/api/player";

interface Emit {
  (e: "update:isDialogVisible", value: boolean): void;
  (e: "success"): void;
}

const props = defineProps<{ isDialogVisible: boolean }>();
const emit = defineEmits<Emit>();

const credentials = ref<PlayerInput>(<PlayerInput>{});

const positions = ref<PositionOutput[]>([]);
const fetchingPositions = ref(false);
const isSubmitting = ref(false);

const updateDialogVisibilityProp = (value: boolean) => {
  emit("update:isDialogVisible", value);
};

const fetchPositions = () => {
  fetchingPositions.value = true;
  getAllPositions()
    .then((response) => {
      console.log(response);
      positions.value = response;
    })
    .catch()
    .finally(() => (fetchingPositions.value = false));
};

const onSubmit = () => {
  // Create player
  isSubmitting.value = true;
  addPlayer(credentials.value)
    .then(() => {
      emit("success");
    })
    .catch(() => {})
    .finally(() => (isSubmitting.value = false));
};

onMounted(fetchPositions);
</script>

<style scoped></style>
