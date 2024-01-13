<template>
    <div class="flex justify-between items-center bg-[#F8F8F8] pt-[3.51rem] px-[2.5rem]">
        <div class="flex gap-5">
            <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="$emit('toggle-sidebar')"
                aria-controls="sidebar">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="5" width="16" height="2" />
                    <rect x="4" y="11" width="16" height="2" />
                    <rect x="4" y="17" width="16" height="2" />
                </svg>
            </button>
            <SearchInput />
        </div>
        <div class="flex gap-5">
            <div class="relative rounded-[0.1875rem] bg-[#FFF] p-[0.88rem]">
                <BellIcon />
                <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <NotificationIcon />
                </div>
            </div>
            <div>
                <img src="../assets/avatar/Profile Avtar.png" alt="avatar" class="object-cover" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchInput from './Dashboard/SearchInput.vue';
import NotificationIcon from './icons/NotificationIcon.vue';
import BellIcon from './icons/BellIcon.vue';
</script>