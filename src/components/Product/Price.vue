<template>
  <p class="mt-2 font-bold text-gray-800">{{ displayPrice }} €</p>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  price: {
    type: Number,
    required: false
  }
});

const displayPrice = computed(() => {
  return props.price.toString().replace('.', ',')
});
</script>
