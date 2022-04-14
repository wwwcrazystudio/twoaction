<template>
  <section class="banners">
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
            data-aos="fade-right"
          />

          <AdvantageBanner
            class="banners__advantage-banner"
            color="main-light"
            title="Закажите рекламу у одной из </br> тысяч групп на любой платформе!"
            type="btn"
            url="/"
            :img="require('~/assets/img/icons/coworking.svg')"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banners {
  &__wrap {
    padding-bottom: rem(80px);

    @include media-breakpoint-down(lg) {
      padding-bottom: rem(40px);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(62px);

    @include media-breakpoint-down(xxl) {
      gap: rem(24px);
    }

    @include media-breakpoint-down(md) {
      gap: rem(22px);
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__advantage-banner {
    &::v-deep {
      @include media-breakpoint-down(md) {
        .advantage-banner__content {
          max-width: 100%;
        }

        .advantage-banner__title {
          margin-bottom: 140px;
        }

        .advantage-banner__btn {
          width: 100%;
        }

        .advantage-banner__img {
          top: 0;
          left: 0;
          max-width: 60%;
        }
      }
    }
  }
}
</style>
