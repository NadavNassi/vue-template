import Vue from 'vue';

/*
    FROM OFFICIAL DOCS:
    In addition to the default set of directives shipped in core (v-model and v-show),
    Vue also allows you to register your own custom directives. Note that in Vue 2.0,
    the primary form of code reuse and abstraction is components -
    however there may be cases where you need some low-level DOM access on plain elements,
    and this is where custom directives would still be useful.
*/


//// READ more about it here: https://vuejs.org/v2/guide/custom-directive.html
Vue.directive('focus', {
    inserted(el) {
        el.focus();
    }
})