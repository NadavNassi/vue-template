<template>
    <button>{{ txtContent }}</button>
</template>

<script>
export default {
    props: {
        txtContent: {
            type: String,// will throw a warning in console if type will not be 'string'
            default: 'Click me!'
        },
        theme: {
            type: String,
            required: false // will throw a warning in console if set to 'true' and prop missing
        },
        someArray: {
            type: Array, /// yes, there is a type Array
            default: () => [] /// default value for non-primitives is a func returning a value!
        }
    }
}
</script>