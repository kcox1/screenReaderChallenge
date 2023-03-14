import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const auth = ref(false);
  const isAuthenticated = computed(() => auth.value);
  function login() {
    auth.value = true;
  }
  function logout() {
    auth.value = false;
  }

  return { login, logout, isAuthenticated }
})
