<template>
  <main>
    <h1>Home</h1>

    <p v-if="message" aria-live="polite">
      {{ message }}
    </p>

    <div v-if="!authStore.isAuthenticated">
      <h2>Login</h2>
      <p>
        <em>
          Reminder not to write down your password on sticky notes taped to your
          workstation! Violators will be hunted for sport.
        </em>
      </p>

      <form @submit="($event) => login($event)">
        <p>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </p>
        <p>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>

    <div v-if="authStore.isAuthenticated">
      <h2>Welcome Evil Boss, let's do some evil today!</h2>

      <nav>
        <RouterLink to="/">Authentication</RouterLink>
        <RouterLink to="/launch-control">Launch Control</RouterLink>
        <RouterLink to="/fuel-system">Fuel System</RouterLink>
        <RouterLink to="/code-book">Code Book</RouterLink>
        <RouterLink to="/help">Help</RouterLink>
      </nav>

      <button @click="logout" type="button">Logout</button>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";

const authStore = useAuthStore();
const username = ref("");
const password = ref("");
const message = ref("");

function login(e) {
  e.preventDefault();
  // TODO: Make this more secure before the Evil Boss finds
  // out and hunts us for sport!
  message.value = "";
  if (username.value === "EvilBoss" && password.value === "kitty") {
    authStore.login();
    clearLogin();
    message.value = "access granted!";
  } else {
    message.value = "Unauthorized Access: Violators will be hunted for sport!";
  }
}
function logout() {
  message.value = "";
  authStore.logout();
  clearLogin();
  message.value = "logout successful. Have an evil day!";
}

function clearLogin() {
  username.value = "";
  password.value = "";
}
</script>
