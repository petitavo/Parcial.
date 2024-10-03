<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center p-mt-5">
    <h1 class="p-mb-3">{{ $t('not-found')}}</h1>
    <p class="p-mb-3">
      Sorry, the route <strong>"{{ $route.path }}"</strong> does not exist.
    </p>
    <pv-button label="Return to Home" icon="pi pi-home" class="p-button-primary" @click="goHome" />
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  color: #ff6b6b;
}
</style>
