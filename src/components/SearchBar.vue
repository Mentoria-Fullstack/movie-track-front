<template>
    <div class="fixed flex flex-row w-full p-2 bg-black/70">
    
    <select id="cars" name="cars" class="bg-white rounded-md mr-2 px-2 ">
      <option value="{{ maxduration = 100 }}">100</option>
      <option value="saab">200</option>
      <option value="mercedes">300</option>
      <option value="audi">400</option>
    </select>

    <input v-model="maxduration" type="number"  class=" bg-white rounded-md pl-1 py-0.5 w-full" placeholder="Pesquisar">
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>