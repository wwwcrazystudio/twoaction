<template>
  <div class="account-page">
    <div class="container">
      <h1 class="account-page__heading">Личный кабинет</h1>

      <Tabs
        class="account-page__tabs"
        :tabs="tabs"
        :active="activeTab"
        type="links"
        @click="activeTab = $event"
      />

      <div class="account-page__content">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          label: 'Мои заказы',
          val: 'orders',
        },
        {
          label: 'Шаблоны',
          val: 'templates',
        },
        {
          label: 'Профиль',
          val: 'profile',
        },
        {
          label: 'Безопасность',
          val: 'security',
        },
      ],
      activeTab: {},
    }
  },
})
</script>

<style lang="scss" scoped>
.account-page {
  &__heading {
    margin-bottom: rem(20px);
  }

  &__tabs {
    margin-bottom: rem(30px);
  }
}
</style>
