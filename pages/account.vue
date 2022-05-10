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
          val: '/account/orders',
        },
        {
          label: 'Шаблоны',
          val: '/account/templates',
        },
        {
          label: 'Профиль',
          val: '/account/profile',
        },
        {
          label: 'Безопасность',
          val: '/account/security',
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

  &__content {
    padding-bottom: rem(270px);
  }
}
</style>
