<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

const events = ref(null)

// hooks === méthodes
onMounted(() => {
  axios
    .get('https://my-json-server.typicode.com/JoaoVictor2023/api-Composition/events')
    .then(response => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error);
    })
})

</script>

<template>
    <h1>Events For Goods</h1>
    <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<style scoped>

.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
