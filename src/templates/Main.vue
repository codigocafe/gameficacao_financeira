<script setup>
import { ref } from 'vue'
import Header from '../parts/Header.vue'
import Count from '../components/count.vue'
import Dashboard from '../pages/Dashboard.vue'
const total = ref(66795);
const current = ref(0);
</script>

<template>
  <Header>
    <div v-once ><h1>Gamificação</h1></div>
    <Count :sumTotal="current" :meta="total" />
  </Header>
  <Dashboard v-model="current" />
</template>