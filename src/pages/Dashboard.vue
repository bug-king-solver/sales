<template>
    <MainLayout>
        <div class="bg-[#F8F8F8] w-full pt-[3.51rem] px-[2.5rem] pb-[2.06rem] flex flex-col h-screen">
            <div class="flex justify-between items-center">
                <SearchInput />
                <div class="flex gap-5">
                    <div class="relative rounded-[0.1875rem] bg-[#FFF] p-[0.88rem]">
                        <BellIcon />
                        <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                            <NotificationIcon />
                        </div>
                    </div>
                    <div>
                        <img src="../assets/avatar/Profile Avtar.png" alt="avatar" />
                    </div>
                </div>
            </div>
            <div class="mt-[2.74rem]">
                <h1 class="text-[#000] font-poppins text-2xl font-medium">
                    Products Information
                </h1>
            </div>
            <div class="flex gap-[1.38rem] mt-[1.88rem]">
                <div class="flex flex-col gap-4">
                    <label class="text-[#000] font-poppins text-base font-normal">
                        Title
                    </label>
                    <input
                        class="py-[0.81rem] pl-[1.5rem] rounded-[0.1875rem] bg-[#FFF] border [border-color:rgba(19,19,19,0.25)] placeholder:text-base placeholder:font-poppins placeholder:font-light"
                        placeholder="Enter Title" />
                </div>
                <div class="flex flex-col gap-4">
                    <label class="text-[#000] font-poppins text-base font-normal">
                        Brand
                    </label>
                    <input
                        class="py-[0.81rem] pl-[1.5rem] rounded-[0.1875rem] bg-[#FFF] border [border-color:rgba(19,19,19,0.25)] placeholder:text-base placeholder:font-poppins placeholder:font-light"
                        placeholder="Enter Brand" />
                </div>
            </div>
            <div class="mt-[2.12rem] flex-grow">
                <ProductTable />
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import SearchInput from '../components/Dashboard/SearchInput.vue';
import BellIcon from '../components/icons/BellIcon.vue';
import NotificationIcon from '../components/icons/NotificationIcon.vue';
import ProductTable from '../components/Dashboard/ProductTable.vue';
</script>