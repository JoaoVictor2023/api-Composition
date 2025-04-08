<script setup>
import { ref, onMounted } from 'vue'

const event = ref(null)
const id = ref(5928101)

onMounted(() => {
    EventService.getEvent(id.value)
    .then((response) => {
        event.value = response.data
    })
    .catch((error) => {
        console.log(error);
    })
})
</script>

<template>
    <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>