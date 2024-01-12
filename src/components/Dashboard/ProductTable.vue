<template>
    <div class="relative overflow-x-auto rounded-[0.1875rem] border pt-6 bg-[#FFF]">
        <div class="max-h-[calc(100vh-400px)] overflow-y-auto">
            <table class="w-full">
                <thead class="text-[#000] font-lato text-base font-semibold">
                    <tr class=" border-b border-[#F2F2F2]">
                        <th scope="col" class="pb-6 pl-6 flex items-center">
                            <div class="flex justify-start gap-4">
                                <BasicCheckbox />
                                Title
                            </div>
                            <SortIcon />
                        </th>
                        <th scope="col" class="pb-6">
                            <div class="flex items-center justify-start">
                                Category
                            </div>
                        </th>
                        <th scope="col" class="pb-6">
                            <div class="flex items-center justify-start">
                                Brand
                                <a href="#">
                                    <SortIcon />
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="pb-6">
                            <div class="flex items-center justify-start">
                                Price
                            </div>
                        </th>
                        <th scope="col" class="pb-6">
                            <div class="flex items-center justify-start">
                                Stock
                            </div>
                        </th>
                        <th scope="col" class="pb-6">
                            <div class="flex items-center justify-start">
                                Rating
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ProductTableItem v-for="product in products" :key="product.id" :product="product" />
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import SortIcon from '../icons/SortIcon.vue';
import BasicCheckbox from '../../components/common/BasicCheckbox.vue';
import ProductTableItem from './ProductTableItem.vue';
import { onMounted, ref } from 'vue';
import fetchHelper from '../../utils/fetchHelper';
import { IProduct, IApiResponse } from '../../types';

const products = ref<IProduct[]>([]);

onMounted(async () => {
    const data: IApiResponse = await fetchHelper('https://dummyjson.com/products');
    products.value = data.products;
})
</script>