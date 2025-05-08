<template>
  <div class="flex items-center mt-2 font-light text-gray-800">
    <span v-for="i in 5" :key="i" class="text-xs" :class="{'filed': i <= rating?.rate}">★</span>
    <span class="mr-1 text-xs">({{ rating?.count }})</span>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Object,
    required: false
  }
});
</script>
<style scoped>
.filed {
  color: #fbbf24;
}
</style>
