<template>
  <p v-if="message" aria-live="polite">
    {{ message }}
  </p>

  <h1 ref="focusTarget" tabindex="-1">Home</h1>

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
    <h2>Welcome Boss Evil, let's do some evil today!</h2>

    <p>Use the navigation above to execute your diabolical deeds.</p>

    <button @click="logout" type="button">Logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref, nextTick } from "vue";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const authStore = useAuthStore();
const username = ref("");
const password = ref("");
const message = ref("");

const focusTarget = ref(null);

function login(e) {
  e.preventDefault();
  // TODO: Make this more secure before Boss Evil finds
  // out and hunts us for sport!
  message.value = "";
  if (username.value === "BossEvil" && password.value === "kitty") {
    authStore.login();
    cookies.set("evilAuthCookie", "1");
    clearLogin();
    message.value = "access granted!";
    focusTarget.value.focus();
  } else {
    nextTick(() => {
      message.value =
        "Unauthorized Access: Violators will be hunted for sport!";
    });
  }
}
function logout() {
  message.value = "";
  authStore.logout();
  cookies.set("evilAuthCookie", "0");
  clearLogin();
  message.value = "logout successful. Have an evil day!";
}

function clearLogin() {
  username.value = "";
  password.value = "";
}
</script>
