<template>
  <section class="testimonials">
    <div class="container">
      <div class="testimonials__wrap">
        <h2 class="testimonials__heading" data-aos="fade-down">
          К нам возвращаются
        </h2>
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
                data-aos="fade-down"
                :data-aos-delay="100 * key"
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
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.46443 0.567208C1.84196 0.645372 1.32122 0.901231 0.878995 1.34625C0.48335 1.74437 0.245048 2.16654 0.106572 2.71471C-0.133897 3.66658 0.0409466 4.60386 0.623154 5.48384C0.996475 6.04808 1.4779 6.56597 2.36337 7.35582C2.92663 7.85824 4.64332 9.32277 4.72666 9.37195C4.80517 9.41827 4.83435 9.42382 5.00009 9.42382C5.16574 9.42382 5.19507 9.41825 5.27353 9.37202C5.35711 9.32277 7.07768 7.85478 7.63682 7.35566C8.52473 6.5631 9.00422 6.04732 9.37703 5.48384C9.95924 4.60386 10.1341 3.66658 9.89362 2.71471C9.75514 2.16654 9.51684 1.74437 9.12119 1.34625C8.72694 0.949512 8.30486 0.720567 7.75152 0.603321C7.47516 0.544747 6.96324 0.53963 6.71988 0.592969C6.04549 0.740821 5.52697 1.07908 5.05381 1.67984L5.00009 1.74805L4.94638 1.67984C4.48146 1.08953 3.97082 0.751309 3.3204 0.602872C3.12626 0.558575 2.68103 0.54002 2.46443 0.567208Z"
                            fill="#fff"
                          />
                        </svg>

                        {{ item.likes }}
                      </div>
                      <div
                        v-if="item.messages"
                        class="testimonials-item__meta-item"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.68214 0.0200183C2.31783 0.0583972 2.03267 0.143671 1.66941 0.32285C0.911539 0.696718 0.333825 1.39264 0.113356 2.19726C0.0149385 2.55648 0.0143916 2.56549 0.00499707 4.00391C-0.00455371 5.46922 0.00450878 5.68908 0.0888837 6.03756C0.38111 7.24441 1.41201 8.16031 2.64109 8.30506L2.83152 8.3275V9.0485C2.83152 9.67326 2.83576 9.7784 2.86322 9.83631C2.91927 9.95441 3.04365 10.0159 3.17628 9.99096C3.23382 9.98018 3.30747 9.91932 3.56296 9.67143C4.00966 9.23803 4.31511 9.01455 4.77659 8.78352C5.04044 8.65143 5.2931 8.55619 5.58542 8.47865C5.95226 8.38135 6.14218 8.3582 6.7304 8.3391C7.56675 8.31195 7.8621 8.24953 8.3647 7.99367C9.06026 7.63957 9.58819 7.02609 9.83993 6.2793C9.99147 5.82978 10.0039 5.64549 9.99362 4.00344C9.9846 2.56519 9.98409 2.55666 9.88561 2.19726C9.66514 1.39264 9.08743 0.696718 8.32956 0.32285C7.95548 0.138319 7.69354 0.0612488 7.29938 0.0197254C7.08767 -0.00257933 2.89413 -0.00232542 2.68214 0.0200183ZM2.99341 3.52514C3.35462 3.61922 3.57347 3.99312 3.47238 4.34344C3.41431 4.54463 3.2373 4.72984 3.03908 4.79682C2.90384 4.84248 2.67615 4.82732 2.54941 4.76422C2.2606 4.62039 2.10943 4.29162 2.1957 3.99488C2.25062 3.80596 2.36408 3.66373 2.52595 3.58094C2.68874 3.49766 2.82531 3.48135 2.99341 3.52514ZM5.27749 3.56857C5.40896 3.62699 5.54909 3.76717 5.61083 3.90201C5.64339 3.97312 5.65312 4.03209 5.65341 4.16045C5.65374 4.30943 5.64708 4.34037 5.58948 4.45748C5.51956 4.59965 5.41974 4.69879 5.27441 4.77041C5.14526 4.83404 4.8537 4.83404 4.72456 4.77041C4.57923 4.69879 4.47941 4.59965 4.40948 4.45748C4.35189 4.34037 4.34523 4.30943 4.34556 4.16045C4.34603 3.96254 4.38536 3.85947 4.51357 3.72041C4.71132 3.50586 5.00499 3.4475 5.27749 3.56857ZM7.44089 3.5667C7.94919 3.79711 7.95438 4.51283 7.44956 4.76422C7.32282 4.82732 7.09513 4.84248 6.95989 4.79682C6.60626 4.67736 6.41534 4.27976 6.54509 3.93299C6.67823 3.57711 7.09126 3.40824 7.44089 3.5667Z"
                            fill="#fff"
                          />
                        </svg>

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
  </section>
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
        slidesPerView: 1.1,
        spaceBetween: 16,
        breakpoints: {
          1400: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 32,
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
.testimonials {
  &__wrap {
    padding: rem(80px 0);

    @include media-breakpoint-down(lg) {
      padding: rem(40px 0);
    }
  }

  &__heading {
    margin-bottom: rem(48px);
    text-align: center;

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
      text-align: left;
    }
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

    @include media-breakpoint-down(md) {
      padding: rem(26px 32px);
    }
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(34px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
    }
  }

  &__rating {
    font-weight: 500;
    font-size: rem(15px);
    color: $main;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      font-size: rem(13px);
    }

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

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }
  }

  &__icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: rem(18px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(14px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-bottom: rem(18px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(14px);
    }
  }

  &__content {
    font-size: rem(13.5px);
    line-height: rem(24px);
    margin-bottom: rem(35px);
    height: 72px;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      line-height: 170%;
      margin-bottom: rem(22px);
    }
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

      @include media-breakpoint-down(md) {
        width: 50px;
        height: 50px;
        font-size: rem(12px);
      }

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
