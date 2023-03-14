<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";

import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-if="authStore.isAuthenticated">
          <RouterLink to="/launch-control">Launch Control</RouterLink>
          <RouterLink to="/fuel-system">Fuel System</RouterLink>
          <RouterLink to="/code-book">Code Book</RouterLink>
          <RouterLink to="/help">Help</RouterLink>
        </template>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* .wrapper {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
  } */
</style>
