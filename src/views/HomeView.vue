<script setup>
import MediaCard from '@/components/MediaCard.vue';
import MenuBar from '@/components/MenuBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios'
import { reactive, onMounted } from 'vue'

const data = reactive({})
onMounted(async () => {
  const response = await axios.get('http://192.168.0.109:80/api/movies')

    data.value = response.data

  }
)

</script>

<template>
  <SearchBar/>
  <div class="bg-[#263537] pb-12 p-5">
    <div class="" v-for="movie in data.value">
      <MediaCard 
        :title="movie.media.title" 
        :description="movie.media.description" 
        :duration="movie.duration" 
        :cover="movie.media.cover"
      />
    </div>
  </div>
  <MenuBar/>
</template>

<style scoped></style>
