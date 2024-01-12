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
                            <i @click="toggleSort('title')" class="cursor-pointer">
                                <SortIcon />
                            </i>
                        </th>
                        <th scope="col" class="pb-6">
                            <div class="flex items-center justify-start">
                                Category
                            </div>
                        </th>
                        <th scope="col" class="pb-6">
                            <div class="flex items-center justify-start">
                                brand
                                <i @click="toggleSort('brand')" class="cursor-pointer">
                                    <SortIcon />
                                </i>
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
import { onMounted, reactive, ref } from 'vue';
import fetchHelper from '../../utils/fetchHelper';
import { IProduct, IApiResponse } from '../../types';

type ProductKeys = 'title' | 'brand' | 'price' | 'stock' | 'rating';

const products = ref<IProduct[]>([]);
const sortState = reactive({
    key: '' as ProductKeys | '',
    isAscending: true
});

const toggleSort = (key: ProductKeys) => {
    if (sortState.key === key) {
        sortState.isAscending = !sortState.isAscending;
    } else {
        sortState.key = key;
        sortState.isAscending = true;
    }
    sortProducts();
};

function isKeyOfProduct(key: string): key is keyof IProduct {
    return ['id', 'title', 'category', 'brand', 'price', 'stock', 'rating'].includes(key);
}

const sortProducts = () => {
    products.value.sort((a, b) => {
        if (isKeyOfProduct(sortState.key)) {
            if (a[sortState.key] < b[sortState.key]) {
                return sortState.isAscending ? -1 : 1;
            }
            if (a[sortState.key] > b[sortState.key]) {
                return sortState.isAscending ? 1 : -1;
            }
        }
        return 0;
    });
};

onMounted(async () => {
    const data: IApiResponse = await fetchHelper('https://dummyjson.com/products');
    products.value = data.products;
    console.log(data);
})
</script>