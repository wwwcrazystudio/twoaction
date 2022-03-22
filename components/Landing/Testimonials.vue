<template>
  <div class="testimonials">
    <div class="container">
      <div class="testimonials__wrap">
        <h2 class="testimonials__heading">К нам возвращаются</h2>
        <div class="testimonials__content">
          <button
            ref="prev"
            class="testimonials__control testimonials__control--prev"
          >
            <img src="~/assets/img/icons/arrow.png" alt="" />
          </button>
          <div ref="wrap" class="testimonials__carousel swiper">
            <div class="testimonials__carousel-wrap swiper-wrapper">
              <div
                v-for="(item, key) in items"
                :key="key"
                class="testimonials__testimonials-item testimonials-item swiper-slide"
              >
                <div class="testimonials-item__wrap">
                  <div class="testimonials-item__head">
                    <div class="testimonials-item__rating">
                      <img src="~/assets/img/icons/starblue.png" alt="" />
                      {{ item.rating }}
                    </div>
                    <div class="testimonials-item__tag">{{ item.tag }}</div>
                  </div>
                  <div class="testimonials-item__icon">
                    <img :src="item.img" :alt="item.title" />
                  </div>
                  <h3 class="testimonials-item__title">{{ item.title }}</h3>
                  <div class="testimonials-item__content">
                    {{ item.content }}
                  </div>
                  <div class="testimonials-item__foot">
                    <div class="testimonials-item__meta">
                      <div
                        v-if="item.likes"
                        class="testimonials-item__meta-item"
                      >
                        <img src="~/assets/img/icons/heart.png" alt="" />
                        {{ item.likes }}
                      </div>
                      <div
                        v-if="item.messages"
                        class="testimonials-item__meta-item"
                      >
                        <img src="~/assets/img/icons/messagewhite.png" alt="" />
                        {{ item.messages }}
                      </div>
                    </div>
                    <div class="testimonials-item__date">{{ item.date }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            ref="next"
            class="testimonials__control testimonials__control--next"
          >
            <img src="~/assets/img/icons/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { Navigation } from 'swiper'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  mounted(this: any) {
    this.$nextTick(() => {
      const wrap = this.$refs.wrap as HTMLElement
      const prev = this.$refs.prev as HTMLElement
      const next = this.$refs.next as HTMLElement

      const args = {
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
          991: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          640: {
            slidesPerView: 3,
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
.testimonials {
  &__wrap {
    padding: rem(80px 0);
  }

  &__heading {
    margin-bottom: rem(48px);
    text-align: center;
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
    }

    &--next {
      right: -68px;
    }
  }

  &__content {
    position: relative;
  }
}

.testimonials-item {
  &__wrap {
    padding: rem(34px);
    border: 1px solid rgba(203, 203, 203, 0.4);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(34px);
  }

  &__rating {
    font-weight: 500;
    font-size: rem(15px);
    color: $main;
    display: flex;
    align-items: center;

    img {
      margin-right: 4px;
    }
  }

  &__tag {
    margin-left: auto;
    margin-top: -4px;
    background: $main;
    color: #fff;
    border-radius: 20px;
    font-weight: 500;
    font-size: rem(13px);
    padding: rem(5px 26px);
  }

  &__icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: rem(18px);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-bottom: rem(18px);
  }

  &__content {
    font-size: rem(13.5px);
    line-height: rem(24px);
    margin-bottom: rem(35px);
  }

  &__foot {
    margin-top: auto;
    display: flex;
    align-items: center;
  }

  &__meta {
    display: flex;
    &-item {
      width: 56px;
      height: 56px;
      background-color: $main;
      color: #fff;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 500;
      font-size: rem(13px);
      border: 2px solid #ffffff;

      &:not(:first-of-type) {
        margin-left: -8px;
      }
    }
  }

  &__date {
    margin-left: auto;
    font-weight: 400;
    font-size: rem(13px);
    color: $main;
  }
}
</style>
