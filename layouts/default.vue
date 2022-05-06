<template>
  <div>
    <LayoutHeader />
    <Nuxt />
    <LayoutFooter />
  </div>
</template>

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

<style lang="scss">
body {
  padding-top: rem(160px);

  @include media-breakpoint-down(md) {
    padding-top: rem(95px);
  }
}
</style>
