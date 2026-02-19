<template>

  <h1 ref="focusTarget" tabindex="-1">Manual Rocket Control</h1>

  <section aria-labelledby="rocket-selection">
    <h2 id="rocket-selection">Rocket Selection</h2>

    <label for="rocket-select">Select Rocket Model:</label>
    <select v-model="selectedRocket" id="rocket-select">
      <option disabled value="">Please select</option>
      <option value="alpha">Alpha Rocket</option>
      <option value="beta">Beta Rocket</option>
      <option value="omega">Omega Rocket</option>
      <option value="delta">Delta Rocket</option>
    </select>
  </section>

  <section aria-labelledby="control-code">
    <h2 id="control-code">Abort Code Entry</h2>
    <p>
      Enter the 4 color code to manually control the rocket. Be sure to reference the <RouterLink to="/code-book">Code Book</RouterLink> for the correct code sequences. Incorrect codes may cause unintended consequences, including but not limited to: accidental launch, catastrophic system failure, or spontaneous combustion of the operator.
    </p>

    <div>
      <button @click="handleButton('red')">Red</button>
      <button @click="handleButton('green')">Green</button>
      <button @click="handleButton('blue')">Blue</button>
    </div>
    <div>
      <button @click="handleExecute">Execute Command</button>
      <button @click="resetCode">Reset</button>
    </div>
  </section>
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

const selectedRocket = ref("");
const buttonSequence = ref([]);

const router = useRouter();

function handleButton(color) {
  buttonSequence.value.push(color);
}

function validatePrefix() {
  return (buttonSequence.value.length === 4 &&
    buttonSequence.value[0] === "red" &&
    buttonSequence.value[1] === "red" &&
    buttonSequence.value[2] === "blue");
}

function validateSuffix() {
  return buttonSequence.value[3] === "green";
}

function validateRocket() {
  if (selectedRocket.value === "omega") {
    return true;
  }
  return false;
}

function handleExecute() {
  // Incorrect rocket
  if (!validateRocket()) {
    messagesStore.addMessage("Selected rocket is not on launch pad. Code reset.");
    resetCode();
    return;
  }
  // Too few or too many button presses
  if (buttonSequence.value.length !== 4) {
    messagesStore.addMessage("Error: invalid code length. Code reset.");
    resetCode();
    return;
  }

  // Invalid prefix
  if(!validatePrefix()) {
    messagesStore.addMessage("Error: Code invalid for rocket currently on launch pad. Code reset.");
    resetCode();
    return;
  }

  // Invalid suffix
  if(!validateSuffix()) {
    if(buttonSequence.value[3] === "red") {
      messagesStore.addMessage("Error: Launch Countdown already in progress. Code reset.");
    } else if (buttonSequence.value[3] === "blue") {
      messagesStore.addMessage("Error: Docking clamps may not be released while countdown is in progress. Code reset.");
    } else {
      messagesStore.addMessage("Error: Command code invalid. Code reset.");
    }
    resetCode();
    return;
  }

  // Correct code - route to win
  resetCode();
  messagesStore.addMessage("Command executed: Launch aborted. Rocket Countdown Halted at 2 seconds to launch.");
  setTimeout(() => {
    router.push({ name: "win" });
  }, 1000);

}

function resetCode() {
  buttonSequence.value = [];
}

</script>
