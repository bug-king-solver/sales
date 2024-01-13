<template>
    <div class="relative overflow-x-auto rounded-[0.1875rem] border pt-6 bg-[#FFF]">
        <div class="max-h-[calc(100vh-25.5rem)] overflow-y-auto">
            <table class="table-auto w-full">
                <thead
                    class="sticky bg-white top-0 text-[#000] font-lato text-base font-semibold border-b border-[#F2F2F2]">
                    <tr class="flex">
                        <th class="pb-6 pl-6 flex items-center whitespace-nowrap min-w-[20rem] w-[20%]">
                            <div class="flex justify-start gap-6">
                                <input id="checkAll" type="checkbox" :checked="checked" @change="selectAll"
                                    class="w-6 h-6 border [border-color:rgba(19,19,19,0.25)]" />
                                Title
                            </div>
                            <i @click="toggleSort('title')" class="cursor-pointer">
                                <SortIcon />
                            </i>
                        </th>
                        <th class="pb-6 min-w-[8.7rem] w-[15%]">
                            <div class="flex items-center justify-start">
                                Category
                            </div>
                        </th>
                        <th class="pb-6 min-w-[15rem] w-[25%]">
                            <div class="flex items-center justify-start">
                                brand
                                <i @click="toggleSort('brand')" class="cursor-pointer">
                                    <SortIcon />
                                </i>
                            </div>
                        </th>
                        <th class="pb-6 min-w-[14.5rem] w-[20%]">
                            <div class="flex items-center justify-start">
                                Price
                            </div>
                        </th>
                        <th class="pb-6 min-w-[12.8rem] w-[20%]">
                            <div class="flex items-center justify-start">
                                Stock
                            </div>
                        </th>
                        <th class="pb-6 min-w-[12rem] w-[10%]">
                            <div class="flex items-center justify-start">
                                Rating
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="isLoading">
                        <td colspan="6" class="py-10 text-center">
                            <DefaultSpinner />
                        </td>
                    </tr>
                    <ProductTableItem v-else v-for="product in products" :key="product.id" :product="product"
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
import DefaultSpinner from '../common/DefaultSpinner.vue';

const props = defineProps<{
    products: IProduct[];
    isLoading: boolean
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