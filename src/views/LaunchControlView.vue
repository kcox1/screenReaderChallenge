<template>
  <div class="about">
    <h1 ref="focusTarget" tabindex="0">Launch Control Dashboard</h1>

    <img src="" alt="man digging with shovel icon" />

    <p>
      The Launch Control Dashboard is currently down for maintenance while being
      cleansed of CIA malware. Please use manual control.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const focusTarget = ref(null);

onMounted(() => {
  focusTarget.value.focus();
});
</script>

<style></style>
