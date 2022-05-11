<template>
  <div class="dashboard-orders">
    <div class="dashboard-orders__head">
      <div class="dashboard-orders__heading">Заявки</div>

      <NuxtLink to="/" class="dashboard-orders__link">
        Перейти на страницу заявок
      </NuxtLink>
    </div>

    <ul class="dashboard-orders__list">
      <li
        v-for="(order, key) in orders"
        :key="key"
        class="dashboard-orders__item"
      >
        <div class="dashboard-orders__item-wrap">
          <div class="dashboard-orders__item-info">
            <div class="dashboard-orders__item-date">{{ order.date }}</div>
            <div v-if="order.new" class="dashboard-orders__item-tag">новая</div>
            <NuxtLink to="/" class="dashboard-orders__item-group">
              {{ order.group }}
            </NuxtLink>
            <div class="dashboard-orders__item-type">
              {{ order.type }}
            </div>
            <div class="dashboard-orders__item-title">
              {{ order.title }}
            </div>
          </div>
          <NuxtLink to="/" class="dashboard-orders__item-link">
            Перейти

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
                d="M0.0163219 9.44979C0.0639392 9.65186 0.217143 9.83516 0.415034 9.92682C0.514565 9.97291 0.557222 9.98102 0.698238 9.98061C1.01056 9.97971 0.799625 10.1672 3.3191 7.65129C4.83862 6.13391 5.57468 5.38573 5.60753 5.32514C5.68423 5.18367 5.71118 5.0166 5.68101 4.86963C5.66722 4.80248 5.63415 4.70737 5.60753 4.65826C5.57468 4.59768 4.83862 3.84949 3.3191 2.33211C0.79941 -0.184004 1.01043 0.00353527 0.698238 0.00296879C0.556851 0.00271511 0.514155 0.0109186 0.410464 0.058301C0.0517128 0.222246 -0.100046 0.659161 0.0774353 1.01709C0.10265 1.06797 0.794918 1.77473 2.06225 3.04346L4.00834 4.9917L2.06225 6.93994C0.789957 8.21364 0.102807 8.91524 0.0775721 8.96631C0.00413438 9.11498 -0.019186 9.29914 0.0163219 9.44979Z"
                fill="#0186E6"
              />
            </svg>
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.dashboard-orders {
  &__heading {
    font-size: rem(22px);
    font-weight: 500;

    @include media-breakpoint-down(md) {
      font-size: rem(17px);
    }
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(24px);
  }

  &__link {
    font-size: rem(13.5px);
    text-decoration: underline;
    color: $main;
    margin-left: auto;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }
  }

  &__list {
    @include unlist;
    max-height: 485px;
    overflow: auto;
    padding-left: rem(16px);
    margin-left: rem(-16px);
    padding-right: rem(16px);
    padding-bottom: rem(16px);

    @include media-breakpoint-down(lg) {
      max-height: none;
      padding: 0;
      margin: 0;
      overflow: visible;
    }

    &::-webkit-scrollbar {
      width: 22px;
      border: none;
    }

    &::-webkit-scrollbar-thumb {
      background: #0085e5;
      border: none;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 133, 229, 0.04);
    }

    &::-webkit-scrollbar-button:single-button {
      background-color: rgba(0, 133, 229, 0.04);
      border: none;
      height: 16px;
      width: 16px;
      background-position: center;
      background-repeat: no-repeat;
    }

    &::-webkit-scrollbar-button:single-button:vertical:decrement {
      background-image: url('~/assets/img/icons/bararrow.png');
    }

    &::-webkit-scrollbar-button:single-button:vertical:increment {
      background-image: url('~/assets/img/icons/bararrow2.png');
    }
  }

  &__item {
    margin-bottom: rem(22px);

    &:last-of-type {
      margin-bottom: 0;
    }

    &-wrap {
      padding: rem(26px 34px);
      background-color: #fff;
      box-shadow: 0px 8px 30px rgba(117, 117, 117, 0.06),
        0px 10px 30px rgba(29, 29, 29, 0.04);
      border-radius: 20px;
      display: flex;
      align-items: center;

      @include media-breakpoint-down(md) {
        padding: rem(26px);
        display: block;
      }
    }

    &-info {
      display: flex;
      flex-wrap: wrap;
    }

    &-date {
      width: 100%;
      font-size: rem(13px);
      color: $main;
      margin-bottom: rem(10px);

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
        margin-bottom: rem(6px);
      }
    }

    &-tag {
      padding: rem(4px 16px);
      font-size: rem(13px);
      font-weight: 500;
      background-color: $main;
      border-radius: 20px;
      color: #fff;
      margin-right: rem(10px);
    }

    &-group {
      color: $main;
      font-size: rem(13px);
      font-weight: 500;
      margin-right: rem(6px);
    }

    &-type {
      color: $main;
      font-size: rem(13px);
      margin-right: rem(10px);
    }

    &-title {
      font-size: rem(14px);
      font-weight: 500;

      @include media-breakpoint-down(md) {
        width: 100%;
        margin-bottom: rem(12px);
        margin-top: rem(16px);
      }
    }

    &-link {
      margin-left: auto;
      font-size: rem(14px);
      font-weight: 500;
      color: $main;
      text-decoration: none;
      display: flex;
      align-items: center;

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }

      svg {
        margin-left: rem(8px);
      }
    }
  }
}
</style>
