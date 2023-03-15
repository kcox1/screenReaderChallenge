<template>
  <main>
    <h1 ref="focusTarget" tabindex="0">Manual Rocket Control</h1>

    <p v-if="message" aria-live="polite">
      {{ message }}
    </p>

    <h2>Instructions</h2>
    <p>
      Enter the hex code for each of the three colors used in the code in the
      fields below, then press the Execute Command button
    </p>

    <form @submit="($event) => execute($event)">
      <p>
        <label for="color1">Color 1:</label>
        <input type="text" id="color1" v-model="color1" />
      </p>
      <p>
        <label for="color2">Color 2:</label>
        <input type="text" id="color2" v-model="color2" />
      </p>
      <p>
        <label for="color3">Color 3:</label>
        <input type="text" id="color3" v-model="color3" />
      </p>
      <p>
        <button type="submit">Execute Command</button>
      </p>
    </form>
  </main>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref, onMounted } from "vue";
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
  if (
    color1.value === "FF0000" &&
    color2.value === "00FF00" &&
    color3.value === "0000FF"
  ) {
    clearForm();
    message.value = "Rocket Countdown Halted at 3 seconds to launch.";
    setTimeout(() => {
      router.push({ name: "win" });
    }, 10000);
  } else {
    message.value = "Invalid Code!";
  }
}

function clearForm() {
  color1.value = "";
  color2.value = "";
  color3.value = "";
}
</script>
