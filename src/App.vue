<script setup>
import { onMounted, ref } from 'vue';
import  Loading from "./components/Loading.vue";
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
  <div class="container mx-auto">

    <Loading :loading />
    <pre>
      {{ products }}
    </pre>
    
  </div>
</template>

<style scoped>

</style>
