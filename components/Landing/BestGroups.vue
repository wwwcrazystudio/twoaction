<template>
  <div class="best-groups">
    <div class="container">
      <div class="best-groups__wrap">
        <div class="best-groups__head">
          <h2 class="best-groups__heading">
            {{ heading }}
          </h2>
          <div class="best-groups__carousel-controls">
            <button
              ref="prev"
              class="best-groups__carousel-control best-groups__carousel-control--prev"
            >
              <img src="~/assets/img/icons/arrowwhite.png" alt="" />
            </button>
            <button
              ref="next"
              class="best-groups__carousel-control best-groups__carousel-control--next"
            >
              <img src="~/assets/img/icons/arrowwhite.png" alt="" />
            </button>
          </div>
          <NuxtLink to="/" class="best-groups__link">
            <img v-if="linkImg" :src="linkImg" alt="" />
            {{ linkText }}
          </NuxtLink>
        </div>
        <div ref="row1" class="best-groups__carousel swiper">
          <ul class="best-groups__carousel-wrap swiper-wrapper">
            <li
              v-for="(item, key) in items"
              :key="key"
              class="best-groups__group-item group-item swiper-slide"
            >
              <div class="group-item__wrap">
                <div class="group-item__img">
                  <img :src="item.img" alt="" />
                </div>
                <h3 class="group-item__title">
                  {{ item.title }}
                </h3>
                <div class="group-item__count">
                  <var>{{ item.count }}</var> подписчиков
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

        <div ref="row2" class="best-groups__carousel swiper">
          <ul class="best-groups__carousel-wrap swiper-wrapper">
            <li
              v-for="(item, key) in items"
              :key="key"
              class="best-groups__group-item group-item swiper-slide"
              :class="`group-item--${color}`"
            >
              <div class="group-item__wrap">
                <div class="group-item__img">
                  <img :src="item.img" alt="" />
                </div>
                <h3 class="group-item__title">
                  {{ item.title }}
                </h3>
                <div class="group-item__count">
                  <var>{{ item.count }}</var> подписчиков
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
                        circle-color="rgba(255, 255, 255, 0.32)"
                        start-color="#ffffff"
                        stop-color="#ffffff"
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

        <NuxtLink to="/" class="best-groups__btn">Каталог</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { Navigation } from 'swiper'
import { ProgressCircle } from 'vue-progress-circle'

import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'

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
      carouselRowFirst: undefined,
      carouselRowSecond: undefined,
    }
  },
  mounted(this: any) {
    this.$nextTick(() => {
      const row1 = this.$refs.row1 as HTMLElement
      const row2 = this.$refs.row2 as HTMLElement
      const prev = this.$refs.prev as HTMLElement
      const next = this.$refs.next as HTMLElement

      const args = {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
        breakpoints: {
          991: {
            slidesPerView: 4,
            spaceBetween: 34,
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

      this.carouselRowFirst = new Swiper(row1, args)
      this.carouselRowSecond = new Swiper(row2, args)
    })
  },
})
</script>

<style lang="scss" scoped>
.best-groups {
  &__wrap {
    padding: rem(80px 0);
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(40px);
  }

  &__heading {
    margin-bottom: 0;
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

    img {
      margin-right: 4px;
    }
  }

  &__carousel-wrap {
    @include unlist;

    padding: rem(13px 20px);
    margin: rem(0 -20px);
  }

  &__btn {
    @extend %btn-main;

    display: flex;
    margin: auto;
    margin-top: rem(40px);
    width: 100%;
    max-width: 170px;
  }
}

.group-item {
  &__wrap {
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    padding-top: rem(25px);
    text-align: center;
    background-color: #fff;
  }

  &__img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    margin-bottom: rem(18px);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-bottom: rem(4px);
  }

  &__count {
    margin-bottom: rem(26px);
    font-size: rem(13px);

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
    }

    &-legend {
      font-size: rem(13px);
      margin-bottom: rem(2px);
      display: flex;
      align-items: center;

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
