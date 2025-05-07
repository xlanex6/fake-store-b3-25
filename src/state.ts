import { ref } from 'vue';
import { Product } from './types/products';
import { useLocalStorage } from '@vueuse/core';

const cart = useLocalStorage('cart', [] as Product[]);

const addToCart = (product: Product) => {
  cart.value.push(product);
};

export { cart, addToCart };
