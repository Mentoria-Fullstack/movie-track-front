<template>
    <div class="flex flex-row w-full gap-2 bg-[#EBF8F8] rounded-xl overflow-hidden">
        <img :src="cover" class="w-28 h-28 rounded-s-xl" />
        <div class="flex flex-col space-y-1 max-h-[112px] ">
            <p class="text-sm font-bold">{{ title }}</p>
            <p class="text-xs text-ellipsis"> {{ description }}</p>
            <p class="text-xs">{{ duration }} Min</p>
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
    description: String,
    duration: Number,
    cover: String
})


</script>