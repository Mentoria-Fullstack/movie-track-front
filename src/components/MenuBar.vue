
<template>
    <div>
        <button type="button" ><a href="/">Movies</a></button>
        <button type="button" ><a href="/tvshows">Tv Shows</a></button>
        <button type="button" ><a href="/signin">Profile</a></button>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
    div{
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        background-color: #248588;
        width: 100%;
        height: 3rem;
    }
    button{
        color: #FFFFFF;
    }
</style>