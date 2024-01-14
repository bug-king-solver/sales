<template>
    <div class="flex items-center relative">
        <SearchIcon class="absolute ml-5 mr-4 pointer-events-none" />
        <input type="text"
            class="rounded-[0.1875rem] border w-full border-[#000000] border-opacity-20 pl-[3.75rem] pr-[1.25rem] py-[0.88rem]"
            placeholder="Search">
    </div>
</template>

<script setup lang="ts">
import SearchIcon from '../icons/SearchIcon.vue';
</script>