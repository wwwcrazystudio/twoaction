<template>
  <div>
    <LayoutHeader type="landing" :routes="routes" />
    <Nuxt />
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AOS from 'aos'

export default Vue.extend({
  data() {
    return {
      routes: [
        {
          label: 'Услуги',
          route: '/',
        },
        {
          label: 'Рекламодателю',
          route: '/',
        },
        {
          label: 'Площадке',
          route: '/',
        },
        {
          label: 'Отзывы',
          route: '/',
        },
      ],
    }
  },
  mounted() {
    if (typeof window !== 'undefined')
      AOS.init({
        duration: 800,
      })
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
