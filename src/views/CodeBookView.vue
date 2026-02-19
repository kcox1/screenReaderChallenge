<template>
  <div class="about">
    <h1 ref="focusTarget" tabindex="-1">Code Book</h1>

    <p>
      This code book contains all required documentation for rocket codes.
    </p>


    <section aria-labelledby="prefixes">
      <h2 id="prefixes">Rocket Code Prefixes</h2>

      <p>
        CAUTION! Be sure to use the correct <RouterLink to="/rocket-models">Rocket Model</RouterLink> since each has their own unique code prefixes.
      </p>

      <Expandable title="Alpha Rocket">
        <p>Code prefix: blue, blue, green</p>
      </Expandable>
      <Expandable title="Beta Rocket">
        <p>Code prefix: green, green, red</p>
      </Expandable>
      <Expandable title="Omega Rocket">
        <p>Code prefix: red, red, blue</p>
      </Expandable>
      <Expandable title="Delta Rocket">
        <p>Code prefix: blue, red, green</p>
      </Expandable>
    </section>

    <section aria-labelledby="command-codes">
      <h2 id="command-codes">Rocket Command Codes</h2>

      <p>Append this code to any rocket code prefix to form a complete 4 color command sequence</p>

      <Expandable title="Start Launch Countdown">
        <p>Initiates the launch countdown sequence. The rocket will launch when the countdown reaches zero.</p>
        <p>Command code: red</p>
      </Expandable>

      <Expandable title="Release Docking Clamps">
        <p>Releases the docking clamps that hold the rocket in place.</p>
        <p>Command code: blue</p>
      </Expandable>

      <Expandable title="Abort Launch">
        <p>Aborts the launch sequence and resets the rocket to a safe state.</p>
        <p>Command code: green</p>
      </Expandable>

    </section>

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
