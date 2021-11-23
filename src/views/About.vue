<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
        You have been sent here because you tried to mess with us and our guards!
        We do not appreciate hackers and other bandits here!

        Take one of our magazines and chill!

        <ul>
            <li
                v-for="(magazine, idx) in magazines"
                :key="idx"
            >
                {{ magazine }}
            </li>
        </ul>
    </p>

    <hr />
    <button
        class="btn"
        @click="isSecretVisible = !isSecretVisible"
    >
        Toggle P
    </button>
    <!-- wrap in transition element - it will animate v-if/v-show toggle, route change -->
    <!-- CHECK THE SELECTORS DOWN IN STYLE HERE! -->
    <!-- more cool uses:  -->
    <!-- https://next.router.vuejs.org/guide/advanced/transitions.html#route-based-dynamic-transition  -->
    <!-- https://vuejs.org/v2/guide/transitioning-state.html  -->
    <transition name="my-fade">
        <p v-if="isSecretVisible">
            TOP SECRET!
        </p>
    </transition>

    <component
        v-for="(cmp, idx) in dynamicCmps"
        :key="idx"
        :is="cmp.type"
    >
        {{ cmp.txt }}
    </component>

  </div>
</template>

<script>
export default {
    data() {
        return {
            isSecretVisible: false,
            dynamicCmps: [
                {
                    type: 'section',
                    txt: 'AHA!',
                },
                {
                    type: 'span',
                    txt: 'WHOOO!',
                },
                {
                    type: 'h3',
                    txt: 'Brilliant!',
                },
            ],
            magazines: [
                'Blazer',
                'To the woman',
                'Vehicle',
                '7 days'
            ]
        }
    },
    created() {
        console.log('Hi everyone.. just created, BEFORE INITIAL RENDER');
    },
    mounted() {
        console.log('Hi everyone.. just mounted, AFTER INITIAL RENDER - refs are available');
    },
    updated() {
        console.log('Hi everyone.. just updated, my data / props / store that i use have changed!');
    },
    destroyed() {
        console.log('Hi everyone.. going down...');
    },
}
</script>

<style lang="scss" scoped>
// using scoped styles in the same file is possible! on file component approach 👊
.about {
    font-size: rem(22px);
    text-align: center;

    h1 {
        margin: 20px 0;
    }

    p {
        max-width: 450px;
        margin: 0 auto;
    }

    li::before {
        content: '***';
    }

    .my-fade-enter-active, .my-fade-leave-active {
        transition: opacity .5s;
    }
    .my-fade-enter, .my-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
}
</style>
