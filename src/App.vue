<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useCookies } from "vue3-cookies";
import { useAuthStore } from "@/stores/auth";
import Announcer from "@/components/Announcer.vue";

const authStore = useAuthStore();
const { cookies } = useCookies();

onMounted(() => {
  let authCookieValue = cookies.get("evilAuthCookie");
  if (authCookieValue === "1") {
    authStore.login();
  }
});
</script>

<template>
  <div class="no-cheating">
    <a href="#main">Skip to main content</a>
    <header aria-label="header">
      <img src="" alt="Boss Evil Logo" />
      <nav aria-label="primary navigation">
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
    <main tabindex="-1" id="main">
      <RouterView />
    </main>
    <footer aria-label="footer">
      &copy; 2026 BossEvil Enterprises, a subsidiary of the Evil League of Evil inc.
      Inc.
    </footer>
    <Announcer />
  </div>
</template>

<style scoped>
.no-cheating{
  /* position: absolute;
  left: -1000px;
  overflow: hidden;
  width: 0px;
  height: 0px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  font-size: 0;
  line-height: 0; */
}
</style>
