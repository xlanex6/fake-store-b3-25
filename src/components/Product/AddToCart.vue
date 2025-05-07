<template>
  <button @click="$emit('addToCartCta')"
    class="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-400 rounded hover:bg-blue-600">Add to cart</button>
</template>

<script setup>
defineEmits(['addToCartCta']);
</script>
