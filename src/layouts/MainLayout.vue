<template>
    <div class="flex h-[100dvh] overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
        <div>
            <slot :toggle-sidebar="toggleSidebar"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from '../components/Sidebar.vue';

const sidebarOpen = ref(false);
console.log(sidebarOpen.value)
const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};
</script>