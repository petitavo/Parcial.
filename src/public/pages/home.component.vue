<script>
import EventSummary from "../../ registration/components/event-summary.component.vue";

export default {
  name: "Home",
  components: {
    EventSummary
  }
}
</script>

<template>
  <div class="card">
    <pv-toast/>
    <pv-card class="mb-4">
      <template #title>
        <div class="flex align-items-center">
          <i class="pi pi-home mr-2"></i>
          <span>{{ $t('home') }}</span>
        </div>
      </template>
      <template #subtitle>
        <div class="flex align-items-center">
          <i class="pi pi-info-circle mr-2"></i>
          <span>{{ $t('welcome') }}</span>
        </div>
      </template>
    </pv-card>
    <h2 class="text-2xl font-bold mb-4">{{ $t('registeredEvents') }}</h2>
    <event-summary></event-summary>
  </div>
</template>

<style scoped>

</style>