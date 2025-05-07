<script setup>
import { onMounted, ref } from 'vue';
import Loading from "../components/Loading.vue";
import Card from "../components/Product/Card.vue";
import Cart from "../components/Cart.vue";

const loading = ref(false);
const products = ref([]);


onMounted(async () => {
  loading.value = true;
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products.value = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    loading.value = false;
  }
})
</script>

<template>
  <Loading :loading />
  <div class="container relative pt-16 mx-auto">

    <Cart />

    <section id="users-list" class="grid grid-cols-2 md:grid-cols-4">

      <Card v-for="product in products" :key="product.id" :product />

    </section>

  </div>
</template>

