<template>
    <section class="user-details">
        <section v-if="loggedInUser">
            USER DETAILS:
            <h2>
                {{ loggedInUser.username }}

                <span>
                    <img
                        :src="loggedInUser.avatar"
                        :alt="`${loggedInUser.username} avatar`"
                    >
                </span>
            </h2>

                <span>
                    {{ updatedAt }}
                </span>

        </section>
    </section>
</template>

<script>
export default {
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        updatedAt() {
            return new Date(this.loggedInUser.updatedAt).toLocaleDateString('he-IL');
        }
    }
}
</script>