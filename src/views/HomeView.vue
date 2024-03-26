<script setup>
import MediaCard from '@/components/MediaCard.vue';
import MenuBar from '@/components/MenuBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios'
import { reactive, onMounted, ref } from 'vue'

const data = reactive({})
const filteredData = reactive({})
const search_input = ref()
let searchTerm = ''

onMounted(async () => {
  const response = await axios.get('http://192.168.0.109:80/api/movies')
  data.value = response.data
  filteredData.value = response.data
})

const filterByDuration = () => {
  if (!searchTerm) {
    filteredData.value = data.value
    return
  }
  const durationFilter = parseInt(searchTerm)
  filteredData.value = data.value.filter(item => item.duration < durationFilter)
}

const handleInput = () => {
  const [hours=0, mins=0] = search_input.value.split(':').map(Number)
  searchTerm = hours * 60 + mins
  console.log(searchTerm)
  filterByDuration()
}

</script>

<template>
  <div class="fixed flex flex-row w-full p-2 bg-black/70">
    
    <!-- not implemented yet -->
    <select id="filter" name="filter" class="bg-white rounded-md mr-2 px-2 ">
      <option value="1">opcao 1</option>
      <option value="2">opcao 2</option>
      <option value="3">opcao 3</option>
      <option value="4">opcao 4</option>
    </select>

    <input @input="handleInput" v-model="search_input" type="text"  class=" bg-white rounded-md pl-1 py-0.5 w-full" placeholder="Pesquisar">
  </div>
  <!-- <SearchBar/> -->
  <div class="bg-[#263537] py-12 px-5 h-full">

    <div v-for="movie in filteredData.value">
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