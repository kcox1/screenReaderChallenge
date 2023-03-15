<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <div class="no-cheating">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-if="authStore.isAuthenticated">
          <RouterLink to="/launch-control-dashboard"
            >Launch Control Dashboard</RouterLink
          >
          <RouterLink to="/manual-control">Manual Control</RouterLink>
          <RouterLink to="/rocket-models">Rocket Models</RouterLink>
          <RouterLink to="/code-book">Code Book</RouterLink>
          <RouterLink to="/help">Help</RouterLink>
        </template>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      &copy; 2023 BossEvil Enterprises, a subsidiary of the Evil League of Evil
      Inc.
    </footer>
  </div>
</template>

<style scoped>
.no-cheating2 {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
}
</style>
