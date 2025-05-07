<template>
  <div class="text-gray-800 font-light mt-2 flex items-center">
    <span v-for="i in 5" :key="i" class="text-xs" :class="{'filed': i <= rating.rate}">★</span>
    <span class="mr-1 text-xs">({{ rating.count }})</span>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Object,
    required: true
  }
});
</script>
<style scoped>
.filed {
  color: #fbbf24;
}
</style>
