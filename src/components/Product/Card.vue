<template>
  <div class="bg-white border border-gray-200">
    <img :src="product.image" alt="" class="object-cover w-auto h-32 m-auto mb-4 rounded-lg">
    <div class="p-2">

      <h2 class="font-semibold leading-none text-md line-clamp-2">{{ product.title }}</h2>
      <p class="text-sm text-gray-400 line-clamp-1">{{ product.category }}</p>
      <div class="flex items-center justify-between mt-2">
        <Rating :rating="product.rating" />
        <Price :price="product.price" />
      </div>

      <AddToCart @addToCartCta="$emit('addToCart', product)" />
      
    </div>
  </div>
</template>

<script setup lang="ts">
import Rating from "./Rating.vue";
import Price from "./Price.vue";
import AddToCart from "./AddToCart.vue";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface Rating {
  rate: number;
  count: number;
}
defineEmits(['addToCart']);
const props = defineProps<{
  product: Product;
}>();
</script>
