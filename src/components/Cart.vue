<template>
  <RouterLink to="/cart" class="absolute grid w-24 h-24 bg-blue-400 rounded-full cursor-pointer -top-5 -right-8 place-items-center">
    <svg class="text-white" width="44" height="44" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor"
        d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" />
    </svg>
    {{ cart.length }}
  </RouterLink>
</template>

<script setup>

import { cart } from '../state.ts';

// defineProps({
//   cart: {
//     type: Array,
//     default: () => []
//   }
// });

</script>
