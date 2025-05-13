<script setup>
import { onMounted, ref } from 'vue'
import EventService from '@/services/EventService.js'

const { id } = defineProps(['id'])

const event = ref(null)
onMounted(() => {
  EventService.getEvent(id)
  .then(response => {
    event.value = response.data
  })
  .catch(error => {
    console.log(error);
  })
})
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{name: 'EventDetails', params: { id } }"
        >Details</router-link
      >
      |
      <router-link :to="{name: 'EventRegister', params: { id } }"
        >Register</router-link
      >
      |
      <router-link :to="{name: 'EventEdit', params: { id } }"
        >Edit</router-link
      >
    </div>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>