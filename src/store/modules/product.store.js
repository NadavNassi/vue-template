import { productService } from '@/services/product.service';

export const productStore = {
    state: {
        products: []
    },
    getters: {
        products(state) {
            return state.products;
        }
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products;
        }
    },
    actions: {
       async loadProducts(context) {
            const products = await productService.list();
            context.commit({ type: 'setProducts', products });
       }
    },
}