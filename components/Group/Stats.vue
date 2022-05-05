<template>
  <div class="group-stats">
    <div class="group-stats__head">
      <h2 class="group-stats__heading">Статистика сообщества</h2>

      <button class="group-stats__btn">Полная статистика</button>
    </div>

    <div class="group-stats__content">
      <button
        ref="prev"
        class="group-stats__control group-stats__control--prev"
      >
        <img src="~/assets/img/icons/arrow.png" alt="" />
      </button>

      <div ref="wrap" class="group-stats__carousel swiper">
        <div class="group-stats__carousel-wrap swiper-wrapper">
          <div class="group-stats__carousel-item swiper-slide">
            <img src="~/assets/img/placeholder/stat1.jpg" alt="" />
          </div>
          <div class="group-stats__carousel-item swiper-slide">
            <img src="~/assets/img/placeholder/stat2.jpg" alt="" />
          </div>
          <div class="group-stats__carousel-item swiper-slide">
            <img src="~/assets/img/placeholder/stat3.jpg" alt="" />
          </div>
          <div class="group-stats__carousel-item swiper-slide">
            <img src="~/assets/img/placeholder/stat1.jpg" alt="" />
          </div>
          <div class="group-stats__carousel-item swiper-slide">
            <img src="~/assets/img/placeholder/stat2.jpg" alt="" />
          </div>
          <div class="group-stats__carousel-item swiper-slide">
            <img src="~/assets/img/placeholder/stat3.jpg" alt="" />
          </div>
        </div>
      </div>
      <button
        ref="next"
        class="group-stats__control group-stats__control--next"
      >
        <img src="~/assets/img/icons/arrow.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { Navigation } from 'swiper'

export default Vue.extend({
  mounted(this: any) {
    this.$nextTick(() => {
      const wrap = this.$refs.wrap as HTMLElement
      const prev = this.$refs.prev as HTMLElement
      const next = this.$refs.next as HTMLElement

      const args = {
        slidesPerView: 1.1,
        spaceBetween: 16,
        loop: true,
        breakpoints: {
          991: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        },
        modules: [Navigation],
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
      }

      this.carouselRowFirst = new Swiper(wrap, args)
    })
  },
})
</script>

<style lang="scss" scoped>
.group-stats {
  &__head {
    margin-bottom: rem(30px);
    display: flex;
    align-items: center;
  }

  &__heading {
    font-size: rem(18px);
    font-weight: 500;
    margin-bottom: 0;
  }

  &__btn {
    @extend %btn-light;

    padding: rem(10px 25px);
    font-size: rem(12px);
    margin-left: auto;
    border-radius: 10px;
  }

  &__content {
    position: relative;
  }

  &__control {
    background: $main;
    border: 1px solid rgba(203, 203, 203, 0.2);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: #fff;
    z-index: 10;

    @include media-breakpoint-down(md) {
      display: none;
    }

    &:disabled {
      opacity: 0;
    }

    &:hover {
      background-color: $main;
      img {
        filter: grayscale(100) brightness(100);
      }
    }

    &--prev {
      left: -25px;
      transform: rotate(180deg);

      @include media-breakpoint-down(lg) {
        left: -40px;
      }
    }

    &--next {
      right: -25px;

      @include media-breakpoint-down(lg) {
        right: -40px;
      }
    }
  }

  &__carousel-item {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
