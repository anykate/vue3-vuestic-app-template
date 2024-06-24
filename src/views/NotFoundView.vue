<script setup></script>

<template>
    <router-link
        :to="{ name: 'Home' }"
        class="my-5 fw-bold link-underline-light fs-4 text-danger"
    >
        <i class="bi bi-arrow-left-circle-fill ms-3"></i>
        Go back home
    </router-link>
    <div class="d-flex align-items-center justify-content-center custom-height">
        <h1 class="display-1 fw-bold">404 - Page Not Found</h1>
    </div>
</template>

<style scoped>
.custom-height {
    min-height: 95vh;
}
</style>
