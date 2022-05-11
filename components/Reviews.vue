<template>
  <div class="reviews">
    <h2 class="reviews__heading">
      Отзывы <span>{{ reviews.length }}</span>
    </h2>

    <div class="reviews__content">
      <button ref="next" class="reviews__control reviews__control--next">
        <img src="~/assets/img/icons/arrow.png" alt="" />
      </button>
      <div ref="wrap" class="reviews__list-wrap swiper">
        <ul class="reviews__list swiper-wrapper">
          <li
            v-for="(review, key) in reviews"
            :key="key"
            class="reviews__review-item review-item swiper-slide"
          >
            <div class="review-item__wrap">
              <div class="review-item__head">
                <div class="review-item__img">
                  <img :src="review.img" alt="" />
                </div>
                <div class="review-item__author">{{ review.author }}</div>
                <div class="review-item__date">{{ review.date }}</div>
              </div>
              <h3 class="review-item__title">{{ review.title }}</h3>
              <div class="review-item__content">
                {{ review.content }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button ref="prev" class="reviews__control reviews__control--prev">
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
    reviews: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isTablet(this: any) {
      return this.$isTablet()
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
          1200: {
            slidesPerView: 4,
            spaceBetween: 34,
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
      }

      this.carouselRowFirst = new Swiper(wrap, args)
    })
  },
})
</script>

<style lang="scss" scoped>
.reviews {
  &__heading {
    font-size: rem(18px);
    font-weight: 500;
    padding-bottom: rem(18px);
    margin-bottom: rem(22px);
    border-bottom: 1px solid rgba(186, 186, 186, 0.2);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(28px);
      padding-bottom: rem(18px);
      font-size: rem(16px);
    }

    span {
      color: $main;
      font-weight: 500;
      font-size: rem(13.5px);

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }
    }
  }

  &__list-wrap {
    padding: rem(34px 0);
    padding-top: 0;
  }

  &__list {
    @include unlist;
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

    @include media-breakpoint-down(md) {
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
      left: -68px;
      transform: rotate(180deg);

      @include media-breakpoint-down(lg) {
        left: -40px;
      }
    }

    &--next {
      right: -68px;

      @include media-breakpoint-down(lg) {
        right: -40px;
      }
    }
  }
}

.review-item {
  &__wrap {
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.01),
      0px 10px 30px rgba(29, 29, 29, 0.01);
    border-radius: 16px;
    padding: rem(24px);
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(20px);
    padding-bottom: rem(20px);
    border-bottom: 1px solid rgba(186, 186, 186, 0.2);
  }

  &__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__author {
    font-size: rem(15px);
    font-weight: 500;
    margin-left: rem(14px);

    @include media-breakpoint-down(md) {
      font-size: rem(13px);
    }
  }

  &__date {
    color: $main;
    font-size: rem(13px);
    margin-left: auto;

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
    }
  }

  &__title {
    font-size: rem(16px);
    font-weight: 500;
    margin-bottom: rem(18px);

    @include media-breakpoint-down(md) {
      font-size: rem(14px);
      margin-bottom: rem(14px);
    }
  }

  &__content {
    font-size: rem(12px);
    color: rgba(72, 72, 72, 0.8);
    line-height: 170%;
  }
}
</style>
