<template>
    <div class="flex flex-col pt-[3.44rem] pr-[1.44rem] pb-[1.88rem]">
        <div class="ml-[1.81rem]">
            <p class="text-[#013CC6] font-poppins text-2xl font-medium">Sales.</p>
        </div>
        <div class="flex flex-col gap-[2.56rem] mt-[3.62rem]">
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]">
                <DashboardIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Dashboard
                </label>
            </router-link>
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]">
                <LabTestIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Lab Test
                </label>
            </router-link>
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]">
                <AppointmentIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Appointment
                </label>
            </router-link>
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]">
                <MedicineOrderIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Medicine Order
                </label>
            </router-link>
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]">
                <MessageIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Message
                </label>
            </router-link>
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]">
                <PaymentIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Payment
                </label>
            </router-link>
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]">
                <SettingsIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Settings
                </label>
            </router-link>
        </div>
        <div>
            <router-link to="/" class="flex gap-4 pt-[0.44rem] pb-[0.5rem] pl-[2.56rem]">
                <HelpIcon />
                <label class="font-poppins text-base font-normal tracking-[0.02rem] cursor-pointer">
                    Help
                </label>
            </router-link>
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
</script>