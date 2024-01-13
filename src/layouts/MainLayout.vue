<template>
    <div class="flex h-[100dvh] overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

        <div class="flex flex-col w-full">
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