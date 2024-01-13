<template>
    <div class="min-w-fit">
        <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
            :class="props.sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" aria-hidden="true"></div>
        <div id="sidebar"
            class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 transition-all duration-200 ease-in-out pt-[3.44rem] pr-[1.44rem] pb-[1.88rem] bg-white"
            :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'">
            <div class="flex justify-between pr-3 px-2">
                <!-- Close button -->
                <button ref="trigger" class="lg:hidden text-slate-500 hover:text-slate-400"
                    @click.stop="$emit('close-sidebar')" aria-controls="sidebar" :aria-expanded="sidebarOpen">
                    <span class="sr-only">Close sidebar</span>
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-col h-[100%] ">
                <div class="ml-[1.81rem] lg:hidden lg:sidebar-expanded:block 2xl:block">
                    <p class="text-[#013CC6] font-poppins text-2xl font-medium">Sales.</p>
                </div>
                <div class="mt-[3.62rem] lg:hidden lg:sidebar-expanded:block 2xl:block">
                    <div class="flex flex-col gap-[2.56rem] ">
                        <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                            :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/' }">
                            <DashboardIcon :isActive="$route.path === '/'" />
                            <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                                Dashboard
                            </label>
                        </router-link>
                        <router-link to="/lab-test" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                            :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/lab-test' }">
                            <LabTestIcon :isActive="$route.path === '/lab-test'" />
                            <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                                Lab Test
                            </label>
                        </router-link>
                        <router-link to="/appointment" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                            :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/appointment' }">
                            <AppointmentIcon :isActive="$route.path === '/appointment'" />
                            <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                                Appointment
                            </label>
                        </router-link>
                        <router-link to="/medicine-order" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                            :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/medicine-order' }">
                            <MedicineOrderIcon :isActive="$route.path === '/medicine-order'" />
                            <label
                                class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer whitespace-nowrap">
                                Medicine Order
                            </label>
                        </router-link>
                        <router-link to="/message" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                            :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/message' }">
                            <MessageIcon :isActive="$route.path === '/message'" />
                            <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                                Message
                            </label>
                        </router-link>
                        <router-link to="/payment" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                            :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/payment' }">
                            <PaymentIcon :isActive="$route.path === '/payment'" />
                            <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                                Payment
                            </label>
                        </router-link>
                        <router-link to="/settings" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                            :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/settings' }">
                            <SettingsIcon :isActive="$route.path === '/settings'" />
                            <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                                Settings
                            </label>
                        </router-link>
                    </div>
                </div>
                <div class=" lg:hidden lg:sidebar-expanded:block 2xl:block  mt-auto">
                    <router-link to="/help" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                        :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/help' }">
                        <HelpIcon :isActive="$route.path === '/help'" />
                        <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">Help</label>
                    </router-link>
                </div>
            </div>
            <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
                <div class="px-3 py-2">
                    <button @click.prevent="sidebarExpanded = !sidebarExpanded">
                        <span class="sr-only">Expand / collapse sidebar</span>
                        <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                            <path class="text-slate-400"
                                d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                            <path class="text-slate-600" d="M3 23H1V1h2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DashboardIcon from '../components/icons/DashboardIcon.vue';
import LabTestIcon from '../components/icons/LabTestIcon.vue';
import AppointmentIcon from '../components/icons/AppointmentIcon.vue';
import MedicineOrderIcon from '../components/icons/MedicineOrderIcon.vue';
import MessageIcon from '../components/icons/MessageIcon.vue';
import PaymentIcon from '../components/icons/PaymentIcon.vue';
import SettingsIcon from '../components/icons/SettingsIcon.vue';
import HelpIcon from '../components/icons/HelpIcon.vue';
import { ref, watch } from 'vue';

const props = defineProps<{ sidebarOpen: boolean }>();

const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

watch(sidebarExpanded, () => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.value.toString())
    if (sidebarExpanded.value) {
        document.querySelector('body')!.classList.add('sidebar-expanded')
    } else {
        document.querySelector('body')!.classList.remove('sidebar-expanded')
    }
})
</script>