<script setup>
import { ref } from 'vue'

defineProps({
    event: {
        type: Object,
        required: true,
    },
})

</script>

<template>
    <div class="event-card">
        <h2>{{ event.title }}</h2>
        <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
</template>

<style scoped>/* scoped permet d'éteindre et d'isoler ces styles à ce seul composant */
.event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39455c;
    margin-bottom: 18px;
}
.event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
