<template>
  <div class="group-reviews">
    <h2 class="group-reviews__heading">
      Отзывы <span>{{ reviews.length }}</span>
    </h2>

    <div
      ref="wrap"
      class="group-reviews__content"
      :class="isTablet && 'swiper'"
    >
      <ul class="group-reviews__list" :class="isTablet && 'swiper-wrapper'">
        <li
          v-for="(review, key) in reviews"
          :key="key"
          class="group-reviews__review-item review-item"
          :class="isTablet && 'swiper-slide'"
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

    <button class="group-reviews__btn">Показать еще</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper from 'swiper'

export default Vue.extend({
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isTablet(this: any) {
      return this.$isTablet()
    },
  },
  mounted(this: any) {
    if (window.matchMedia('(max-width: 1199px)').matches) {
      this.$nextTick(() => {
        const wrap = this.$refs.wrap as HTMLElement

        const args = {
          slidesPerView: 1.1,
          spaceBetween: 20,
          loop: true,
          breakpoints: {
            991: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          },
        }

        this.carouselRowFirst = new Swiper(wrap, args)
      })
    }
  },
})
</script>

<style lang="scss" scoped>
.group-reviews {
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

  &__content {
    overflow: visible;
  }

  &__list {
    @include unlist;
  }

  &__review-item {
    margin-bottom: rem(14px);

    @include media-breakpoint-down(md) {
      margin-bottom: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__btn {
    @extend %btn-main;

    margin-top: rem(24px);
    width: 100%;

    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}

.review-item {
  &__wrap {
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
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
