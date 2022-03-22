<template>
  <div class="banners">
    <div class="container">
      <div class="banners__wrap">
        <div class="banners__list">
          <AdvantageBanner
            class="banners__advantage-banner"
            color="accent-light"
            title="Начните получать прибыль </br> с вашей группы уже сейчас!"
            type="btn"
            url="/"
            :img="require('~/assets/img/icons/piggy2.svg')"
          />

          <AdvantageBanner
            class="banners__advantage-banner"
            color="main-light"
            title="Закажите рекламу у одной из </br> тысяч групп на любой платформе!"
            type="btn"
            url="/"
            :img="require('~/assets/img/icons/coworking.svg')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banners {
  &__wrap {
    padding-bottom: rem(80px);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(62px);

    @include media-breakpoint-down(xxl) {
      gap: rem(24px);
    }
  }
}
</style>
