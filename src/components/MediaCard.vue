<template>
    <div class="font-sans my-5 flex flex-row w-full gap-3 bg-[#EBF8F8] rounded-lg overflow-hidden">
        <img :src="cover" class="w-28 h-28 rounded-s-lg" />
        <div class="flex flex-col space-y-1 pr-1">
            <p class="text-lg font-medium truncate">{{ title }}</p>
            <div class="bg-[#D9D9D9] w-fit px-1.5 pb-0.5 rounded-xl">
                <p class="text-xs ">{{ genre }}</p>
            </div>
            <p class="font-normal text-xs text-wrap	truncate w-full h-8"> {{ description }}</p>
            <div class="flex flex-row">                
                <p class="font-normal text-xs mr-2" v-if="duration">{{ duration }} Min</p>
                <p class="font-normal text-xs mr-2" v-if="seasons">{{ seasons }} seasons</p>
                <p class="font-normal text-xs mr-2" v-if="episodes">{{ episodes }} episodes</p>
            </div >
        </div>
    </div>
</template>


<script setup>

//todo: truncate text with computed

defineProps({
    title: {
        type: String,
        default: "Mock Title"
    },
    genre: {
        type: String,
        default: "Media genre"
    },
    description: String,
    duration: Number,
    cover: String,
    seasons: {
        seasons: Number,
        default: ""
    },
    episodes: {
        episodes: Number,
        default: ""
    }

})


</script>