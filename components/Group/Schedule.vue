<template>
  <div class="group-schedule">
    <div class="group-schedule__head">
      <h2 class="group-schedule__heading">
        Расписание рекламных интеграций в сообществе
      </h2>

<!--       <FormDate
        class="group-schedule__datepicker"
        :value.sync="date"
        :show-label="false"
        label="Выберите нужную дату"
      /> -->

      <div class="group-schedule__carousel-controls">
        <button
          ref="prev"
          class="group-schedule__carousel-control group-schedule__carousel-control--prev"
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
          class="group-schedule__carousel-control group-schedule__carousel-control--next"
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
    </div>

    <div class="group-schedule__content">
      <div ref="wrap" class="group-schedule__carousel swiper">
        <div class="group-schedule__carousel-wrap swiper-wrapper">
          <div
            v-for="day in group.schedule"
            :key="day.date"
            class="group-schedule__schedule-item swiper-slide"
          >
            <div class="schedule-item__head">
              {{getDayName(day.date) }} <var>{{ getDate(day.date) }}</var>
            </div>
            <div class="schedule-item__hours">
              <ul class="schedule-item__hours-list">
                <li
                  v-for="(hour, key) in day.hours"
                  :key="day.date + hour"
                  class="schedule-item__hours-item"
                  :class="hour !== 'open' && 'schedule-item__hours-item--occupied'"
                  @click="$emit('update:time', `${day.date} ${key}:00:00` )"
                >
                  {{ key }}:00
                </li>
              </ul>
            </div>
          </div>
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
    group: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      date: null
    }
  },
  mounted(this: any) {
    this.$nextTick(() => {
      const wrap = this.$refs.wrap as HTMLElement
      const prev = this.$refs.prev as HTMLElement
      const next = this.$refs.next as HTMLElement

      const args = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: false,
        breakpoints: {
          1400: {
            slidesPerView: 7,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 4,
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
  methods: {
    getDayName(date:string) {
      const dateObj = new Date(date)
      return dateObj.toLocaleDateString('ru-RU' ,{
        weekday: 'short',
      })
    },
    getDate(date: string) {
      const dateObj = new Date(date)
      return dateObj.toLocaleDateString('ru-RU' ,{
        month: 'short',
        year: 'numeric',
        day: 'numeric',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.group-schedule {
  &__head {
    margin-bottom: rem(30px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
    }
  }

  &__heading {
    font-size: rem(18px);
    font-weight: 500;
    margin-bottom: 0;
    margin-right: auto;

    @include media-breakpoint-down(md) {
      font-size: rem(16px);
      margin-bottom: rem(22px);
      width: 100%;
    }
  }

  &__content {
    @include media-breakpoint-down(md) {
      margin-right: -20px;
    }
  }

  &__datepicker {
    margin-left: auto;

    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
  }

  &__carousel-controls {
    margin-left: rem(14px);
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
}

.schedule-item {
  &__head {
    padding: rem(12px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: $main;
    box-shadow: 0px 9px 20px rgba(0, 98, 169, 0.2);
    border-radius: 14px;
    font-weight: 500;
    font-size: rem(14px);

    var {
      font-style: normal;
      font-weight: 400;
      font-size: rem(13px);
    }
  }

  &__hours {
    padding: rem(22px);
    padding-right: rem(10px);
    background: rgba(0, 133, 229, 0.04);
    border-radius: 14px;
  }

  &__hours-list {
    @include unlist;

    height: 475px;
    overflow: auto;
    padding-right: rem(10px);

    &::-webkit-scrollbar {
      width: 2px;
      border: none;
      box-shadow: none;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: $main;
      border: none;
      box-shadow: none;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 133, 229, 0);
    }
  }

  &__hours-item {
    padding: rem(5px 20px);
    color: $main;
    opacity: 0.5;
    margin-bottom: rem(10px);
    border-radius: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }

    &--active {
      background: $main;
      color: #fff;
    }
  }
}
</style>
