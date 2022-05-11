<template>
  <div class="order-creatives">
    <div class="order-creatives__heading">Рекламные креативы</div>

    <div class="order-creatives__wrap">
      <button
        ref="prev"
        class="order-creatives__control order-creatives__control--prev"
      >
        <img src="~/assets/img/icons/arrow.png" alt="" />
      </button>
      <div ref="wrap" class="order-creatives__content swiper">
        <div class="order-creatives__content-carousel swiper-wrapper">
          <div
            v-for="(item, key) in creatives"
            :key="key"
            class="order-creatives__item swiper-slide"
          >
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
      <button
        ref="next"
        class="order-creatives__control order-creatives__control--next"
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
  props: {
    creatives: {
      type: Array,
      required: true,
    },
  },
  mounted(this: any) {
    this.$nextTick(() => {
      const wrap = this.$refs.wrap as HTMLElement
      const prev = this.$refs.prev as HTMLElement
      const next = this.$refs.next as HTMLElement

      const args = {
        slidesPerView: 1.1,
        spaceBetween: 20,
        breakpoints: {
          991: {
            slidesPerView: 5,
            spaceBetween: 22,
            direction: 'vertical',
            autoHeight: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 34,
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
      } as any

      this.carouselRowFirst = new Swiper(wrap, args)
    })
  },
})
</script>

<style lang="scss" scoped>
.order-creatives {
  &__heading {
    font-size: rem(22px);
    font-weight: 500;
    margin-bottom: rem(36px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(23px);
      font-size: rem(16px);
    }
  }

  &__wrap {
    position: relative;
    padding: rem(30px 0);

    @include media-breakpoint-down(md) {
      padding: 0;
    }
  }

  &__control {
    background: $main;
    border: 1px solid rgba(203, 203, 203, 0.2);
    border-radius: 50%;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    z-index: 10;

    @include media-breakpoint-down(lg) {
      display: none;
    }

    img {
      filter: grayscale(100) brightness(100);
    }

    &:disabled {
      border: 1px solid rgba(203, 203, 203, 0.2);
      background: transparent;
      img {
        filter: none;
      }
    }

    &--prev {
      top: 5px;
      transform: rotate(-90deg);

      @include media-breakpoint-down(lg) {
        top: -40px;
      }
    }

    &--next {
      bottom: 5px;
      transform: rotate(90deg);

      @include media-breakpoint-down(lg) {
        bottom: -40px;
      }
    }
  }

  &__content {
    height: calc(230px * 5);

    @include media-breakpoint-down(lg) {
      height: auto;
      overflow: visible;
    }
  }

  &__item {
    height: auto;
    border: 1px solid rgba(186, 186, 186, 0.4);
    border-radius: 8px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

      @include media-breakpoint-down(lg) {
        height: auto;
      }
    }
  }
}
</style>
