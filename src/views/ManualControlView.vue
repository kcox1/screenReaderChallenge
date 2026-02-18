<template>

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
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useMessagesStore } from '@/stores/messages'

const messagesStore = useMessagesStore();

const focusTarget = ref(null);

onMounted(() => {
  focusTarget.value.focus();
});

const color1 = ref("");
const color2 = ref("");
const color3 = ref("");

const router = useRouter();

function execute(e) {
  e.preventDefault();
  if (
    color1.value.toUpperCase() === "FF0000" &&
    color2.value.toUpperCase() === "00FF00" &&
    color3.value.toUpperCase() === "0000FF"
  ) {
    clearForm();
    // nextTick not technically needed here, but I like symmetry
    messagesStore.addMessage("Rocket Countdown Halted at 3 seconds to launch.");
    setTimeout(() => {
      router.push({ name: "win" });
    }, 1000);
  } else if (
    color1.value.toUpperCase() === "0000FF" &&
    color2.value.toUpperCase() === "0000FF" &&
    color3.value.toUpperCase() === "00FF00"
  ) {
    clearForm();
    messagesStore.addMessage("Rocket Countdown already in progress.");
  } else if (
    color1.value.toUpperCase() === "0000FF" &&
    color2.value.toUpperCase() === "0000FF" &&
    color3.value.toUpperCase() === "FF0000"
  ) {
    clearForm();
    messagesStore.addMessage("Docking Clamps have already been released.");
  } else {
    messagesStore.addMessage("Invalid Code!");
  }
}

function clearForm() {
  color1.value = "";
  color2.value = "";
  color3.value = "";
}
</script>
