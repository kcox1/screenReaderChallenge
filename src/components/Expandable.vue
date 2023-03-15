<script setup>
import { ref } from "vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
});
const expanded = ref(false);
function toggle() {
  expanded.value = !expanded.value;
}
</script>

<template>
  <div class="expandable">
    <button type="button" :aria-expanded="expanded" @click="toggle">
      {{ title }}
    </button>
    <div v-if="expanded">
      <slot />
    </div>
  </div>
</template>
