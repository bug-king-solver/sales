<template>
    <div class="flex h-[100dvh] overflow-auto">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" />
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';

const sidebarOpen = ref(false);
</script>