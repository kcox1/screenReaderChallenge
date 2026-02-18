<script setup>
import { useMessagesStore } from '@/stores/messages'

const store = useMessagesStore()
</script>

<template>
  <div aria-live="polite" aria-atomic="true">
    <div v-for="(message, index) in store.messages" :key="index">
      {{ message.text }}
    </div>
  </div>
</template>
