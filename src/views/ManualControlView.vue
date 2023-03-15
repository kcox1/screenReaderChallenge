<template>
  <p v-if="message" aria-live="polite">
    {{ message }}
  </p>

  <h1 ref="focusTarget" tabindex="-1">Manual Rocket Control</h1>

  <h2>Instructions</h2>
  <p>
    Enter the code for each of the three colors used in the code in the fields
    below, then press the Execute Command button
  </p>

  <form @submit="($event) => execute($event)">
    <p>
      <label for="color1">Color 1:</label>
      <input
        type="text"
        id="color1"
        v-model="color1"
        aria-describedby="format"
      />
    </p>
    <p>
      <label for="color2">Color 2:</label>
      <input
        type="text"
        id="color2"
        v-model="color2"
        aria-describedby="format"
      />
    </p>
    <p>
      <label for="color3">Color 3:</label>
      <input
        type="text"
        id="color3"
        v-model="color3"
        aria-describedby="format"
      />
    </p>
    <p>
      <button type="submit">Execute Command</button>
    </p>
    <p id="format">Use a 6 digit hex color code like FF0000</p>
  </form>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";

const focusTarget = ref(null);

onMounted(() => {
  focusTarget.value.focus();
});

const authStore = useAuthStore();
const color1 = ref("");
const color2 = ref("");
const color3 = ref("");
const message = ref("");

const router = useRouter();

function execute(e) {
  e.preventDefault();
  message.value = "";
  // Multiple repeated codes were not announcing due to not enough
  // time between clearing and re-adding the same message for the a11y tree
  // to catch the change. NextTick got it working!
  if (
    color1.value.toUpperCase() === "FF0000" &&
    color2.value.toUpperCase() === "00FF00" &&
    color3.value.toUpperCase() === "0000FF"
  ) {
    clearForm();
    // nextTick not technically needed here, but I like symmetry
    nextTick(() => {
      message.value = "Rocket Countdown Halted at 3 seconds to launch.";
    });
    setTimeout(() => {
      router.push({ name: "win" });
    }, 10000);
  } else if (
    color1.value.toUpperCase() === "0000FF" &&
    color2.value.toUpperCase() === "0000FF" &&
    color3.value.toUpperCase() === "00FF00"
  ) {
    clearForm();
    nextTick(() => {
      message.value = "Rocket Countdown already in progress.";
    });
  } else if (
    color1.value.toUpperCase() === "0000FF" &&
    color2.value.toUpperCase() === "0000FF" &&
    color3.value.toUpperCase() === "FF0000"
  ) {
    clearForm();
    nextTick(() => {
      message.value = "Docking Clamps have already been released";
    });
  } else {
    clearForm();
    nextTick(() => {
      message.value = "Invalid Code!";
    });
  }
}

function clearForm() {
  color1.value = "";
  color2.value = "";
  color3.value = "";
}
</script>
