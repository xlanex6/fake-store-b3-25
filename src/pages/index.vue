<script setup>
import { onMounted, computed ,ref, watch } from 'vue';
import Loading from "../components/Loading.vue";
import Card from "../components/Product/Card.vue";
import Cart from "../components/Cart.vue";
import { useLocalStorage } from '@vueuse/core';
import Fuse from 'fuse.js';


const loading = ref(false);
const products = useLocalStorage('products', []);
let fuse
const searchQuery = ref('');
const results = ref([]);


onMounted(async () => {
  fuse = new Fuse(products.value, {
    keys: ['title', 'category', 'description'],
    threshold: 0.3
  })
  if (products.value.length > 0) return
  loading.value = true;
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products.value = await response.json();
    // 
    // 
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    loading.value = false;
  }
})

const filteredProducts = computed(() => {
  return searchQuery.value.length > 0 ? results.value : products.value;
});

watch(searchQuery, () => {
  results.value = fuse.search(searchQuery.value).map(result => result.item);
});



</script>

<template>
  <Loading :loading />
  <div class="container relative pt-16 mx-auto">

    <Cart />

    <input
      v-model.trim="searchQuery"
      type="text"
      placeholder="Search products..."
      class="w-full p-2 mb-4 border border-gray-300 rounded"/>

    <section id="users-list" class="grid grid-cols-2 md:grid-cols-4">

      <Card v-for="product in filteredProducts" :key="product.id" :product />
    
    </section>

  </div>
</template>

