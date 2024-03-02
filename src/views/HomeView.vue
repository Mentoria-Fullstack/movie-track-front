<script setup>
import MovieCard from '@/components/MovieCard.vue';


import axios from 'axios'

import { reactive, onMounted, computed } from 'vue'

const data = reactive({})

onMounted(async () => {
  const response = await axios.get('http://localhost:8000/api/movies')

  data.value = response.data
})


</script>

<template>
  <v-container class="bg-[#263537] ">
    <div class="mb-2" v-for="movie in data.value">
      <MovieCard :title="movie.media.title" :description="movie.media.description" :duration="movie.duration"
        :cover="movie.media.cover" />
    </div>
  </v-container>
</template>

<style scoped></style>
