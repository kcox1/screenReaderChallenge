import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', () => {
  const messages = ref([])

  function addMessage(text) {
    messages.value.push(text)
  }

  function clearMessages() {
    messages.value = []
  }

  return { messages, addMessage, clearMessages }
})
