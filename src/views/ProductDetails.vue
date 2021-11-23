<template>
    <section class="product-details main-container">
        <nav class="flex-space-between" :class="{ 'class-name': 2 < 4, [`other-class-${1}`]: otherBituiBooleani }">
            <button @click="paginate(-1)">Prev</button>
            <awesome-btn
                txtContent="Next"
                @click.native="paginate(1)"
            />
        </nav>
        <pre>{{ product }}</pre>
    </section>
</template>

<script>
import { productService } from '@/services/product.service';

import AwesomeBtn from '@/cmps/AwesomeBtn';

export default {
    data() {
        return {
            product: null
        }
    },
    watch: {
        $route: {
            async handler(value) {
                console.log('NEW VAL:', value);/// doesn't matter what we are watching, the updated value comes like this!
                const { id } = this.$route.params;
                this.product = await productService.getById(id);
            },
            /// deep isn't relevant with $route - but it will DEEP WATCH an object!
            deep: true,
            /// this can replace the call we could do in created hook
            /// and keep all the logic here
            immediate: true
        }
    },
    computed: {
        // icon() {
        //     if (this.product.price > 500) {
        //         /// return some icon
        //     } else if (this.product.price > 200) {

        //     }
        // }  
    },
    methods: {
        async paginate(diff) {
            const { id } = this.product;
            this.product = await productService.getPrevNext(id, diff);
        }
    },
    components: {
        AwesomeBtn
    }
}
</script>