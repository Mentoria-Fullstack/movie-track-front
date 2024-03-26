<template>
    <div class="fixed flex flex-row w-full p-2 bg-black/70">
    
      <select id="cars" name="cars" class="bg-white rounded-md mr-2 px-2 ">
        <option value="not">100</option>
        <option value="implemented">200</option>
        <option value="yet">300</option>
        <option value="a">400</option>
      </select>

      <input @input="$emit('search', texto )" type="text" v-model="texto" class=" bg-white rounded-md pl-1 py-0.5 w-full" placeholder="Pesquisar">
  </div>
</template>

<script setup>
  let texto= ''
</script>