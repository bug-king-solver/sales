<template>
    <tr class="border-b border-[#F2F2F2] text-[#000] font-poppins text-base font-normal text-opacity-65">
        <td scope="col" class="pb-6  pt-[1.88rem] pl-6 flex items-center">
            <div class="flex justify-start gap-4">
                <BasicCheckbox />
                <a href="#" class="text-[#0B63F8] font-poppins text-base font-normal">
                    {{ product.title }}
                </a>
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                {{ product.category }}
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                {{ product.brand }}
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                ${{ product.price }}
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                {{ product.stock }}
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                ${{ product.rating }}
            </div>
        </td>
    </tr>
</template>

<script setup lang="ts">
import BasicCheckbox from '../common/BasicCheckbox.vue';
import { IProduct } from '../../types';

defineProps<{
    product: IProduct
}>();
</script>