<template>
  <p class="text-gray-800 font-bold mt-2">{{ displayPrice }} €</p>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  price: {
    type: Number,
    required: true
  }
});

const displayPrice = computed(() => {
  return props.price.toString().replace('.', ',')
});
</script>
