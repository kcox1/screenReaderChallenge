<template>
  <div class="about">
    <h1 ref="focusTarget" tabindex="-1">Code Book</h1>

    <p>
      CAUTION! Be sure to use the correct
      <RouterLink to="/rocket-models">Rocket Model</RouterLink> so we don't have
      a repeat of TongueGooSka!
      <!-- Trying to get it to pronounce Tunguska -->
    </p>

    <Expandable title="Alpha Rocket">
      <ul>
        <li>Start Launch Countdown: blue, blue, green</li>
        <li>Release Docking Clamps: blue, blue, red</li>
        <li>Abort Launch: red, red, red</li>
      </ul>
    </Expandable>
    <Expandable title="Yo Mama Rocket">
      <ul>
        <li>Start Launch Countdown: blue, blue, red</li>
        <li>Release Docking Clamps: blue, red, red</li>
        <li>Abort Launch: blue, green, red</li>
      </ul>
    </Expandable>
    <Expandable title="You Never Existed Rocket">
      <ul>
        <li>Start Launch Countdown: blue, blue, red</li>
        <li>Release Docking Clamps: green, green, blue</li>
        <li>Abort Launch: red, green, blue</li>
      </ul>
    </Expandable>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Expandable from "../components/Expandable.vue";
import { ref, onMounted } from "vue";
const focusTarget = ref(null);

onMounted(() => {
  focusTarget.value.focus();
});
</script>

<style></style>
