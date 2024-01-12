<template>
    <tr class="border-b border-[#F2F2F2] text-[#000] font-poppins text-base font-normal text-opacity-65">
        <td scope="col" class="pb-6  pt-[1.88rem] pl-6 flex items-center">
            <div class="flex justify-start gap-4">
                <input id="default-checkbox" type="checkbox" value="" :checked="props.selectedProducts.includes(product.id)"
                    class="w-6 h-6 border [border-color:rgba(19,19,19,0.25)]">
                <a href="#" class="text-[#0B63F8] font-poppins text-base font-normal">
                    {{ props.product.title }}
                </a>
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                {{ props.product.category }}
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                {{ props.product.brand }}
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                ${{ props.product.price }}
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
            <div class="flex items-center justify-start">
                {{ props.product.stock }}
            </div>
        </td>
        <td scope="col" class="pb-6 pt-[1.88rem]">
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