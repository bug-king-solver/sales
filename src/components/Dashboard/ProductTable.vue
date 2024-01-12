<template>
    <div class="relative overflow-x-auto rounded-[0.1875rem] border pt-6 bg-[#FFF]">
        <div class="max-h-[calc(100vh-400px)] overflow-y-auto">
            <table class="w-full">
                <thead class="text-[#000] font-lato text-base font-semibold">
                    <tr class=" border-b border-[#F2F2F2]">
                        <th scope="col" class="pb-6 pl-6 flex items-center">
                            <div class="flex justify-start gap-4">
                                <input id="checkAll" type="checkbox" :checked="checked" @change="selectAll"
                                    class="w-6 h-6 border [border-color:rgba(19,19,19,0.25)]" />
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
                    <ProductTableItem v-for="product in products" :key="product.id" :product="product"
                        :selectedProducts="selectedProducts" />
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import SortIcon from '../icons/SortIcon.vue';
import ProductTableItem from './ProductTableItem.vue';
import { ref, watch } from 'vue';
import { IProduct } from '../../types';
import { useSorting } from '../../composables';

const props = defineProps<{
    products: IProduct[];
}>();

const checked = ref<boolean>(false);
const selectedProducts = ref<number[]>([]);

const { sortState, toggleSort, sortArray } = useSorting<IProduct>();

const selectAll = () => {
    checked.value = !checked.value;
    if (checked.value) {
        selectedProducts.value = props.products.map(product => product.id);
    } else
        selectedProducts.value = [];
}

watch(() => sortState, () => sortArray(props.products), { deep: true });

</script>