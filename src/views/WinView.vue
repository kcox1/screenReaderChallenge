<template>
  <h1 tabindex="-1" ref="focusTarget">I'll get you next time!</h1>

  <p>
    If you're reading this, then you managed to somehow stop my rocket from
    launching. What you don't know is that the man you subdued to do this was my
    twin brother! I was never on the island to begin with, and will be back soon
    with an even more dastardly plan.
  </p>

  <p>Stay evil, B.E.</p>

  <p>PS: Ignore the self-destruct timer countdown, I'm sure it's nothing</p>
</template>

<script setup>
import { ref, onMounted } from "vue";
const focusTarget = ref(null);

onMounted(() => {
  focusTarget.value.focus();
});
</script>

<style></style>
