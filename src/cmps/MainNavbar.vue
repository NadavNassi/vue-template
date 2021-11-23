<template>
    <nav class="main-navbar flex-space-between">
        <span>Hi {{ username }}</span>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/user-details">User details</router-link>
    </nav>
</template>

<script>
export default {
    computed: {
        username() {
            const { loggedInUser } = this.$store.getters;
            return loggedInUser?.username || 'Guest';
        }
    }
};
</script>