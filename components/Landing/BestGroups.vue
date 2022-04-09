<template>
  <section class="best-groups">
    <div class="container">
      <div class="best-groups__wrap">
        <div class="best-groups__head" data-aos="fade-down">
          <h2 class="best-groups__heading">
            {{ heading }}
          </h2>
          <div class="best-groups__actions">
            <div class="best-groups__carousel-controls">
              <button
                ref="prev"
                class="best-groups__carousel-control best-groups__carousel-control--prev"
              >
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.0163219 9.44979C0.0639392 9.65186 0.217143 9.83516 0.415034 9.92682C0.514565 9.97291 0.557222 9.98102 0.698238 9.98061C1.01056 9.97971 0.799625 10.1672 3.3191 7.65129C4.83862 6.13391 5.57468 5.38573 5.60753 5.32514C5.68423 5.18367 5.71118 5.0166 5.68101 4.86963C5.66722 4.80248 5.63415 4.70737 5.60753 4.65826C5.57468 4.59768 4.83862 3.84949 3.3191 2.33211C0.79941 -0.184003 1.01043 0.00353544 0.698238 0.00296903C0.556851 0.00271513 0.514155 0.0109184 0.410464 0.0583012C0.0517128 0.222247 -0.100046 0.659161 0.0774353 1.01709C0.10265 1.06797 0.794918 1.77473 2.06225 3.04346L4.00834 4.9917L2.06225 6.93994C0.789957 8.21364 0.102807 8.91524 0.0775721 8.96631C0.00413438 9.11498 -0.019186 9.29914 0.0163219 9.44979Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                ref="next"
                class="best-groups__carousel-control best-groups__carousel-control--next"
              >
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.0163219 9.44979C0.0639392 9.65186 0.217143 9.83516 0.415034 9.92682C0.514565 9.97291 0.557222 9.98102 0.698238 9.98061C1.01056 9.97971 0.799625 10.1672 3.3191 7.65129C4.83862 6.13391 5.57468 5.38573 5.60753 5.32514C5.68423 5.18367 5.71118 5.0166 5.68101 4.86963C5.66722 4.80248 5.63415 4.70737 5.60753 4.65826C5.57468 4.59768 4.83862 3.84949 3.3191 2.33211C0.79941 -0.184003 1.01043 0.00353544 0.698238 0.00296903C0.556851 0.00271513 0.514155 0.0109184 0.410464 0.0583012C0.0517128 0.222247 -0.100046 0.659161 0.0774353 1.01709C0.10265 1.06797 0.794918 1.77473 2.06225 3.04346L4.00834 4.9917L2.06225 6.93994C0.789957 8.21364 0.102807 8.91524 0.0775721 8.96631C0.00413438 9.11498 -0.019186 9.29914 0.0163219 9.44979Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <NuxtLink to="/" class="best-groups__link">
              <img v-if="linkImg" :src="linkImg" alt="" />
              {{ linkText }}
            </NuxtLink>
          </div>
        </div>
        <div ref="row1" class="best-groups__carousel swiper">
          <ul class="best-groups__carousel-wrap swiper-wrapper grid-container">
            <li
              v-for="(item, key) in items"
              :key="key"
              class="best-groups__group-item group-item swiper-slide"
              data-aos="fade-down"
              :data-aos-delay="100 * key"
            >
              <div class="group-item__wrap">
                <div class="group-item__head">
                  <div class="group-item__img">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="group-item__info">
                    <h3 class="group-item__title">
                      {{ item.title }}
                    </h3>
                    <div class="group-item__count">
                      <var>{{ item.count }}</var> подписчиков
                    </div>
                  </div>
                </div>
                <div class="group-item__meta-list">
                  <div
                    class="group-item__meta-item group-item__meta-item--scale"
                  >
                    <div class="group-item__meta-item-info">
                      <div class="group-item__meta-item-title">
                        Выполненные заказы
                      </div>
                      <div
                        class="group-item__meta-item-legend group-item__meta-item-legend--finished"
                      >
                        Выполненные
                      </div>
                      <div
                        class="group-item__meta-item-legend group-item__meta-item-legend--in-process"
                      >
                        В процессе
                      </div>
                    </div>
                    <div class="group-item__meta-item-circle">
                      <progress-circle
                        :diameter="60"
                        :completed-steps="5"
                        circle-color="rgba(255, 160, 0, 0.18)"
                        start-color="#FFA000"
                        stop-color="#FFA000"
                        :circle-width="4"
                        :animation-duration="10"
                        inner-color="transparent"
                        :total-steps="7"
                      >
                        2 384
                      </progress-circle>
                    </div>
                  </div>
                  <div class="group-item__meta-item">
                    <div class="group-item__meta-item-info">
                      <div class="group-item__meta-item-title">
                        Довольные клиенты
                      </div>
                      <div class="group-item__meta-item-legend">
                        В период с 12.04.2019
                      </div>
                    </div>
                    <div class="group-item__meta-item-circle">
                      <progress-circle
                        :diameter="60"
                        :completed-steps="5"
                        circle-color="#EEF8FF"
                        start-color="#0085E5"
                        stop-color="#FFFFFF"
                        :circle-width="4"
                        :animation-duration="10"
                        inner-color="transparent"
                        :total-steps="7"
                      >
                        96%
                      </progress-circle>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              v-for="(item, key) in items"
              :key="key"
              data-aos="fade-down"
              :data-aos-delay="100 * key"
              class="best-groups__group-item group-item swiper-slide"
            >
              <div class="group-item__wrap">
                <div class="group-item__head">
                  <div class="group-item__img">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="group-item__info">
                    <h3 class="group-item__title">
                      {{ item.title }}
                    </h3>
                    <div class="group-item__count">
                      <var>{{ item.count }}</var> подписчиков
                    </div>
                  </div>
                </div>
                <div class="group-item__meta-list">
                  <div
                    class="group-item__meta-item group-item__meta-item--scale"
                  >
                    <div class="group-item__meta-item-info">
                      <div class="group-item__meta-item-title">
                        Выполненные заказы
                      </div>
                      <div
                        class="group-item__meta-item-legend group-item__meta-item-legend--finished"
                      >
                        Выполненные
                      </div>
                      <div
                        class="group-item__meta-item-legend group-item__meta-item-legend--in-process"
                      >
                        В процессе
                      </div>
                    </div>
                    <div class="group-item__meta-item-circle">
                      <progress-circle
                        :diameter="60"
                        :completed-steps="5"
                        circle-color="rgba(255, 160, 0, 0.18)"
                        start-color="#FFA000"
                        stop-color="#FFA000"
                        :circle-width="4"
                        :animation-duration="10"
                        inner-color="transparent"
                        :total-steps="7"
                      >
                        2 384
                      </progress-circle>
                    </div>
                  </div>
                  <div class="group-item__meta-item">
                    <div class="group-item__meta-item-info">
                      <div class="group-item__meta-item-title">
                        Довольные клиенты
                      </div>
                      <div class="group-item__meta-item-legend">
                        В период с 12.04.2019
                      </div>
                    </div>
                    <div class="group-item__meta-item-circle">
                      <progress-circle
                        :diameter="60"
                        :completed-steps="5"
                        circle-color="#EEF8FF"
                        start-color="#0085E5"
                        stop-color="#FFFFFF"
                        :circle-width="4"
                        :animation-duration="10"
                        inner-color="transparent"
                        :total-steps="7"
                      >
                        96%
                      </progress-circle>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <NuxtLink to="/" class="best-groups__btn" data-aos="fade-down">
          Каталог
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { Navigation, Grid } from 'swiper'
import { ProgressCircle } from 'vue-progress-circle'

import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/grid/grid.scss'

export default Vue.extend({
  components: {
    ProgressCircle,
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
    linkImg: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: 'Все',
    },
    items: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default: 'main',
    },
  },
  data() {
    return {
      carouselRow: undefined,
    }
  },
  mounted(this: any) {
    this.$nextTick(() => {
      const row1 = this.$refs.row1 as HTMLElement
      const prev = this.$refs.prev as HTMLElement
      const next = this.$refs.next as HTMLElement

      const args = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          1199: {
            slidesPerView: 4,
            spaceBetween: 34,
            grid: {
              rows: 2,
            },
            loop: false,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 34,
            grid: {
              rows: 2,
            },
            loop: false,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        },
        modules: [Navigation, Grid],
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
      }

      this.carouselRow = new Swiper(row1, args)
    })
  },
})
</script>

<style lang="scss" scoped>
.best-groups {
  &__wrap {
    padding: rem(80px 0);

    @include media-breakpoint-down(md) {
      padding: rem(40px 0);
    }
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(40px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__heading {
    margin-bottom: 0;
    margin-right: auto;
  }

  &__actions {
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      flex-direction: row-reverse;
      margin-top: rem(22px);
    }
  }

  &__carousel-controls {
    margin-left: auto;
    background: $main;
    border-radius: 30px;
    width: 70px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__carousel-control {
    padding: rem(4px 8px);
    display: flex;
    transition: 350ms;

    &:disabled {
      opacity: 0.4;
      transition: 350ms;
    }

    &--prev {
      transform-origin: center;
      transform: rotate(180deg);
    }
  }

  &__link {
    padding: rem(10px 22px);
    text-decoration: none;
    background: #f8f8fd;
    border-radius: 10px;
    font-weight: 500;
    font-size: rem(12px);
    display: flex;
    align-items: center;
    margin-left: rem(16px);

    @include media-breakpoint-down(md) {
      margin-left: 0;
      margin-right: rem(16px);
    }

    img {
      margin-right: 4px;
    }
  }

  &__carousel {
    @include media-breakpoint-down(xs) {
      overflow: visible;
    }
  }

  &__carousel-wrap {
    @include unlist;

    padding: rem(13px 20px);
    margin: rem(0 -20px);
    flex-direction: row !important;

    @include media-breakpoint-down(xs) {
      margin: rem(0 -30px);
      padding: rem(0 30px);
    }
  }

  &__btn {
    @extend %btn-main;

    display: flex;
    margin: auto;
    margin-top: rem(40px);
    width: 100%;
    max-width: 170px;

    @include media-breakpoint-down(md) {
      margin-top: 0;
      max-width: 100%;
    }
  }

  &__group-item {
    margin-top: 0 !important;
    margin-bottom: rem(24px);
  }
}

.group-item {
  &__wrap {
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    text-align: center;
    background-color: #fff;
  }

  &__head {
    padding: rem(25px 0);

    @include media-breakpoint-down(md) {
      display: flex;
      align-items: center;
      padding: rem(26px);
    }
  }

  &__img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    margin-bottom: rem(18px);

    @include media-breakpoint-down(md) {
      width: 54px;
      height: 54px;
      margin: 0;
      margin-bottom: 0;
      margin-right: rem(12px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-bottom: rem(4px);

    @include media-breakpoint-down(md) {
      text-align: left;
    }
  }

  &__count {
    font-size: rem(13px);

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
    }

    var {
      font-weight: 500;
      font-style: normal;
      color: $main;
    }
  }

  &__meta-item {
    padding: rem(22px 26px);
    display: flex;
    align-items: center;
    width: 100%;

    &--scale {
      transform: scale(1.025);
      background: #ffffff;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
      border-radius: 6px;
    }

    &-info {
      flex: 0 0 70%;
    }

    &-title {
      font-size: rem(15px);
      font-weight: 500;
      text-align: left;
      margin-bottom: rem(6px);

      @include media-breakpoint-down(md) {
        font-size: rem(13px);
      }
    }

    &-legend {
      font-size: rem(13px);
      margin-bottom: rem(2px);
      display: flex;
      align-items: center;

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }

      &--finished,
      &--in-process {
        &::before {
          content: '';
          width: 6px;
          height: 6px;
          margin-right: rem(8px);
          border-radius: 50%;
        }
      }

      &--finished {
        &::before {
          background-color: $accent;
        }
      }

      &--in-process {
        &::before {
          background-color: rgba($accent, 0.2);
        }
      }
    }

    &-circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: rem(14px);
      position: relative;

      &::v-deep {
        svg {
          transform: rotate(105deg);
        }
      }
    }
  }

  &--main,
  &--accent {
    .group-item__meta-item--scale {
      color: #fff;

      .group-item__meta-item-circle {
        color: #fff;
      }
    }

    .group-item__meta-item-legend--finished {
      &::before {
        background-color: #fff;
      }
    }

    .group-item__meta-item-legend--in-process {
      &::before {
        background-color: rgba(#fff, 0.3);
      }
    }
  }

  &--main {
    .group-item__meta-item--scale {
      background-color: $main;
    }
  }

  &--accent {
    .group-item__meta-item--scale {
      background-color: $accent;
    }
  }
}
</style>
