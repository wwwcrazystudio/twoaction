<template>
  <div>
    <LandingHeader />
    <Nuxt />
    <LandingFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AOS from 'aos'

export default Vue.extend({
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
