<template>
  <div class="about">
    <h1 ref="focusTarget" tabindex="0">Evil Help</h1>

    <h2>Launch Control</h2>

    <p>
      The
      <RouterLink to="/launch-control-dashboard"
        >Launch Control Dashboard</RouterLink
      >is a quick and easy way to fuel, fire and control your doomsday rocket.
      Simply press the appropriate button and laugh as the world burns, or pause
      the countdown to do evil another day.
    </p>

    <h2>Manual Control Override</h2>

    <p>
      In the event that the Launch Control Dashboard is unavailable, or has been
      smashed to bits by meddlesome spies, Manual Control may be implemented by
      entering codes from the code book directly into the
      <RouterLink to="/manual-control">Manual Control Override Panel</RouterLink
      >. Please use extreme caution when controlling doomsday machines manually!
    </p>

    <h2>Code Book</h2>

    <p>
      Codes from the <RouterLink to="/code-book">Code Book</RouterLink> may be
      entered to manually control any doomsday rocket. Note that you will need
      to match the code version to the
      <RouterLink to="/rocket-models">Rocket Model</RouterLink> since we change
      them to keep the spies guessing.
    </p>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
const focusTarget = ref(null);
onMounted(() => {
  focusTarget.value.focus();
});
</script>

<style></style>
