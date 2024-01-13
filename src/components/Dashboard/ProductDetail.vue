<template>
    <MainLayout>
        <div class="bg-[#F8F8F8] w-full px-[2.5rem] pb-[2.06rem] flex flex-col h-screen text-black">
            <div v-if="isLoading" class="flex items-center h-[100%]">
                <DefaultSpinner />
            </div>
            <div v-else class="flex flex-col text-start gap-4 mt-[8rem]">
                <h1 class="text-3xl">
                    Title: {{ product?.title }}
                </h1>
                <p class="text-lg">
                    category: {{ product?.category }}
                </p>
                <p class="text-lg">
                    brand: {{ product?.brand }}
                </p>
                <p class="text-lg">
                    price: {{ product?.price }}
                </p>
                <p class="text-lg">
                    stock: {{ product?.stock }}
                </p>
                <p class="text-lg">
                    rating: {{ product?.rating }}
                </p>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { IProduct } from '../../types';
import fetchHelper from '../../utils/fetchHelper';
import MainLayout from '../../layouts/MainLayout.vue';
import DefaultSpinner from '../common/DefaultSpinner.vue';

const route = useRoute();
const product = ref<IProduct>();
const isLoading = ref<boolean>(false);

const fetchProduct = async (productId: string) => {
    const data = await fetchHelper(`https://dummyjson.com/products/${productId}`);
    product.value = data;
};

onMounted(async () => {
    const productId = route.params.productId as string;
    isLoading.value = true;
    await fetchProduct(productId);
    isLoading.value = false;
})
</script>