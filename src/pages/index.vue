<script setup>
import { onMounted, ref } from 'vue';
import Loading from "../components/Loading.vue";
import Card from "../components/Product/Card.vue";
import Cart from "../components/Cart.vue";

const loading = ref(false);
const products = ref([]);
const cart = ref([]);

const addToCart = (product) => {
  cart.value.push(product);
};

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

    <Cart :cart />

    <section id="users-list" class="grid grid-cols-2 md:grid-cols-4">

      <Card v-for="product in products" :key="product.id" :product @add-to-cart="addToCart" />

    </section>

  </div>
</template>

