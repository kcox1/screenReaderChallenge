<template>
  <h1 ref="focusTarget" tabindex="-1">Rocket Model Guide</h1>

  <h2>Alpha Rocket</h2>

  <img
    src=""
    alt="The Alpha rocket reading for launch on Saint Patrick's Day 2011"
  />

  <p>
    Where it all began. Not the most sleek or aerodynamic of machines, but was
    excellent for extorting small countries or blowing up small to medium sized
    urban centers. Replaced in 2013 after M I 6 found an exploitable flaw in the
    guidance system.
  </p>

  <h2>The Yo Mama Rocket</h2>

  <img
    src=""
    alt="The YMR under construction, casting a shadow on all of Greenland"
  />

  <p>
    Your rocket is so big the planet orbits you! Unfortunately, while it would
    have certainly struck fear in the hearts of many enemies, the rocket's
    massive size proved its undoing, with budget overruns and resource
    constraints forcing construction to be halted in 2019.
  </p>

  <h2>The You Never Existed Rocket</h2>

  <img src="" alt="The YIP rocket on the launch pad March 14th, 2023" />

  <p>
    Equipped with an improbability drive stolen from Area 51, this rocket is
    capable of going back in time to strike a target in the past.
  </p>
  <p>
    Note: While technically possible, blowing something up in the future is not
    recommended since it's hard to know where to aim.
  </p>
</template>

<script setup>
import { ref, onMounted } from "vue";
const focusTarget = ref(null);

onMounted(() => {
  focusTarget.value.focus();
});
</script>

<style></style>
