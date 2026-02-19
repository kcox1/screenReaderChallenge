<template>

  <h1 tabindex="-1">Home</h1>

  <div v-if="!authStore.isAuthenticated">
    <h2 tabindex="-1" ref="loggedOutHeading">Authenticate to access the Evil Rocket Control System</h2>
    <p>
      <em>
        Reminder: Do not use insecure passwords such as pet names or the year pluto was discovered.
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
        <button type="button" @click="passwordHint">Forgot password?</button>
      </p>
      <p>
        <button type="submit">Log In</button>
      </p>
    </form>
  </div>

  <div v-else>
    <h2 tabindex="-1" ref="loggedInHeading">Welcome Boss Evil, let's do some evil today!</h2>

    <p>Select from the navigation above to execute your diabolical deeds.</p>

    <button @click="logout" type="button">Logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref, nextTick } from "vue";
import { useCookies } from "vue3-cookies";
import { useMessagesStore } from '@/stores/messages'

const messagesStore = useMessagesStore()

const { cookies } = useCookies();

const authStore = useAuthStore();
const username = ref("");
const password = ref("");

const loggedInHeading = ref();
const loggedOutHeading = ref();

function login(e) {
  e.preventDefault();
  // TODO: Make this more secure before Boss Evil finds out and hunts us for sport!
  console.log("Username", username.value.toLowerCase());
  console.log("Password", password.value.toLowerCase());
  if (username.value.toLowerCase() === "bossevil" && password.value.toLowerCase() === "kitty1987") {
    authStore.login();
    cookies.set("evilAuthCookie", "1");
    clearLogin();
    messagesStore.addMessage("Access granted!");
    nextTick(() => {
      loggedInHeading.value?.focus();
    });
  } else {
    messagesStore.addMessage("Unauthorized Access: Violators will be hunted for sport!");
  }
}
function logout() {
  authStore.logout();
  cookies.set("evilAuthCookie", "0");
  clearLogin();
  messagesStore.addMessage("Logout successful. Have an evil day!");
  nextTick(() => {
    loggedOutHeading.value?.focus();
  });
}

function clearLogin() {
  username.value = "";
  password.value = "";
}

function passwordHint() {
  if(username.value.toLowerCase() === "bossevil") {
    messagesStore.addMessage("Your password hint is: your pet name plus the year BossEvil Enterprises was founded");
  } else {
    messagesStore.addMessage("Enter a valid username to receive a password hint");
  }
}
</script>
