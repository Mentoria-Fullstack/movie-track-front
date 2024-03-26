<script setup>
import MediaCard from '@/components/MediaCard.vue';
import MenuBar from '@/components/MenuBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios'
import { reactive, onMounted } from 'vue'

const data = reactive({})

onMounted(async () => {
  const response = await axios.get('http://localhost/api/tvshows')
  data.value = response.data
})
    
</script>
<template>
  <!-- <SearchBar/> -->
  <div class="bg-[#263537] pb-12 p-5">
    <div class="" v-for="movie in data.value">
      <MediaCard 
        :title="movie.media.title" 
        :description="movie.media.description" 
        :seasons="movie.seasons" 
        :episodes="movie.episodes" 
        :cover="movie.media.cover"
      />
    </div>
  </div>
  <MenuBar/>
</template>

