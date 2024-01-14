<template>
    <div class="flex justify-between gap-5 items-center bg-[#F8F8F8] pt-[3.51rem] px-[2.5rem]">
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
        <div class="lg:hidden text-slate-500 cursor-pointer hover:text-slate-600" @click="toggleMenu">
            <SeeMoreIcon />
        </div>
        <div v-if="isMenuOpen" class="absolute right-[2rem]  mt-[12rem] py-2 w-48 bg-white rounded-lg shadow-xl">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <div class="relative rounded-[0.1875rem] bg-[#FFF] p-[0.88rem] cursor-pointer">
                    <BellIcon />
                    <div class="absolute top-1 right-28 transform translate-x-1/2 -translate-y-1/2">
                        <NotificationIcon />
                    </div>
                </div>
            </a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <img src="../assets/avatar/Profile Avtar.png" alt="avatar" class="object-cover cursor-pointer" />
            </a>
        </div>
        <div class="gap-5 hidden lg:flex">
            <div class="relative rounded-[0.1875rem] bg-[#FFF] p-[0.88rem] cursor-pointer">
                <BellIcon />
                <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <NotificationIcon />
                </div>
            </div>
            <div>
                <img src="../assets/avatar/Profile Avtar.png" alt="avatar" class="object-cover cursor-pointer" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchInput from './Dashboard/SearchInput.vue';
import NotificationIcon from './icons/NotificationIcon.vue';
import BellIcon from './icons/BellIcon.vue';
import SeeMoreIcon from './icons/SeeMoreIcon.vue';
import { ref } from 'vue';

const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>