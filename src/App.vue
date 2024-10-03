<script>
import LanguageSwitcher from "./public/components/language-switcher.component.vue";

export default {
  name: 'app',
  components: { LanguageSwitcher },
  title: 'Eventify',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home' },
        { label: 'Check-In', to: '/registration/event-check-ins/new' },
      ]
    }
  }
}
</script>

<template>
  <pv-toast/>
  <header>
    <pv-toolbar class="bg-primary">
      <template #start>
        <div class="flex align-items-center">
          <img src="https://logo.clearbit.com/eventify.io" height="40" width="40" alt="Eventify logo" class="mr-2"/>
          <span class="text-xl font-bold">ISO 27001:2022 certified</span>
        </div>
      </template>
      <template #center>
        <div class="flex">
          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href }" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text" @click="navigate">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
      <template #end>
        <language-switcher />
      </template>
    </pv-toolbar>
    <pv-drawer v-model:visible="drawer"/>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style scoped>
.p-toolbar {
  justify-content: space-between;
}
</style>