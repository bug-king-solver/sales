<template>
    <div class="flex flex-col pt-[3.44rem] pr-[1.44rem] pb-[1.88rem]">
        <div class="ml-[1.81rem]">
            <p class="text-[#013CC6] font-poppins text-2xl font-medium">Sales.</p>
        </div>
        <div class="flex flex-col gap-[2.56rem] mt-[3.62rem]">
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/' }">
                <DashboardIcon :isActive="$route.path === '/'" />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Dashboard
                </label>
            </router-link>
            <router-link to="/lab-test" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/lab-test' }">
                <LabTestIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Lab Test
                </label>
            </router-link>
            <router-link to="/appointment" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/appointment' }">
                <AppointmentIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Appointment
                </label>
            </router-link>
            <router-link to="/medicine-order" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/medicine-order' }">
                <MedicineOrderIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer whitespace-nowrap">
                    Medicine Order
                </label>
            </router-link>
            <router-link to="/message" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/message' }">
                <MessageIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Message
                </label>
            </router-link>
            <router-link to="/payment" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/payment' }">
                <PaymentIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Payment
                </label>
            </router-link>
            <router-link to="/settings" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]"
                :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/settings' }">
                <SettingsIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Settings
                </label>
            </router-link>
        </div>
        <router-link to="/help" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem] mt-auto"
            :class="{ 'border-l-4 border-[#0B63F8] text-[#0B63F8]': $route.path === '/help' }">
            <HelpIcon />
            <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">Help</label>
        </router-link>
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
</script>