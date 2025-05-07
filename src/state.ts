import { ref } from 'vue';
import { Product } from './types/products';

const cart = ref<Product[]>([]);

const addToCart = (product: Product) => {
  cart.value.push(product);
};

export { cart, addToCart };
