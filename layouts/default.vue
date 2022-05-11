<template>
  <div class="app">
    <LayoutHeader header-type="platform" :routes="routes" />
    <Nuxt />
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      routes: [
        {
          label: 'Мои заказы',
          route: '/profile/orders',
        },
        {
          label: 'Каталог сообществ',
          route: '/catalogue',
        },
        {
          label: 'Служба поддержки',
          route: '/support',
        },
      ],
    }
  },
})
</script>

<style lang="scss">
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/containers';
@import '~bootstrap/scss/grid';
@import '~aos/dist/aos';
@import '~/assets/scss/base/reset';
@import '~/assets/scss/base/base';
@import '~/assets/scss/base/typography';
@import '~/assets/scss/base/fonts';
</style>

<style lang="scss" scoped>
.app {
  padding-top: rem(160px);

  @include media-breakpoint-down(md) {
    padding-top: rem(95px);
  }
}
</style>
