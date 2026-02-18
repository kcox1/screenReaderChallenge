import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', () => {
  const messages = ref([])

  function pruneOldMessages() {
    const now = Date.now()
    messages.value = messages.value.filter(
      (msg) => now - msg.timestamp < 10000
    )
  }

  function addMessage(text) {
    messages.value.push({
      text,
      timestamp: Date.now()
    })
    pruneOldMessages()
  }

  function clearMessages() {
    messages.value = []
  }

  return { messages, addMessage, clearMessages }
})
