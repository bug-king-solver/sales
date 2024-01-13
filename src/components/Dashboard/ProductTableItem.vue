<template>
    <tr class="border-b flex border-[#F2F2F2] text-[#000] font-poppins text-base font-normal text-opacity-65">
        <td class="pb-6  pt-[1.88rem] pl-6 flex items-center min-w-[20rem] w-[20%]">
            <div class="flex justify-start gap-6">
                <input id="default-checkbox" type="checkbox" value="" :checked="props.selectedProducts.includes(product.id)"
                    class="w-6 h-6 border [border-color:rgba(19,19,19,0.25)]">
                <router-link :to="'/products/' + props.product.id"
                    class="text-[#0B63F8] font-poppins text-base font-normal">
                    {{ props.product.title }}
                </router-link>
            </div>
        </td>
        <td class="pb-6 pt-[1.88rem] min-w-[8.7rem] w-[15%]">
            <div class="flex items-center justify-start">
                {{ props.product.category }}
            </div>
        </td>
        <td class="pb-6 pt-[1.88rem] min-w-[15rem] w-[25%]">
            <div class="flex items-center justify-start">
                {{ props.product.brand }}
            </div>
        </td>
        <td class="pb-6 pt-[1.88rem] min-w-[14.5rem] w-[20%]">
            <div class="flex items-center justify-start">
                ${{ props.product.price }}
            </div>
        </td>
        <td class="pb-6 pt-[1.88rem] min-w-[12.8rem] w-[20%]">
            <div class="flex items-center justify-start">
                {{ props.product.stock }}
            </div>
        </td>
        <td class="pb-6 pt-[1.88rem] min-w-[12rem] w-[10%]">
            <div class="flex items-center justify-start">
                ${{ props.product.rating }}
            </div>
        </td>
    </tr>
</template>

<script setup lang="ts">
import { IProduct } from '../../types';

const props = defineProps<{
    product: IProduct,
    selectedProducts: number[]
}>();
</script>