<template>
  <li class="templates-item" :class="typeModifier">
    <NuxtLink to="/" class="templates-item__wrap">
      <div class="templates-item__title">{{ item.title }}</div>
      <div class="templates-item__description">{{ item.description }}</div>
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    typeModifier(this: any) {
      const type = this.item.type as string
      switch (type) {
        case 'tg':
          return 'templates-item--type--tg'
        case 'inst':
          return 'templates-item--type--inst'
        default:
          return ''
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.templates-item {
  &__wrap {
    display: block;
    padding: rem(34px);
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    text-decoration: none;
    position: relative;
    transition: 350ms;

    @include media-breakpoint-down(md) {
      padding: rem(26px);
    }

    &::after {
      content: '';
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='25' viewBox='0 0 20 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.8477 8.52627H17.8103C17.2994 8.52343 16.8058 8.71116 16.4257 9.05271C16.1181 8.20135 15.3363 7.58936 14.4206 7.58936C13.8594 7.5933 13.3233 7.8237 12.9345 8.2287C12.577 7.5049 11.8598 7.01391 11.0351 7.01391H10.9953C10.5533 7.00713 10.122 7.15088 9.77239 7.42132V2.26132C9.77239 1.01437 8.80157 0 7.62069 0C6.44113 0 5.47534 1.01371 5.47469 2.25979L5.46484 12.4975L4.88545 11.7939C4.37739 11.1613 3.62953 10.7686 2.8204 10.7093C2.0279 10.655 1.24831 10.9307 0.666296 11.4716L0.162177 11.8893C-0.000392719 12.024 -0.0467787 12.2538 0.0505881 12.4411L4.95197 21.8625C5.84818 23.5842 7.5533 24.6583 9.40196 24.6583H14.9256V24.6535C17.7263 24.6535 19.997 22.2233 19.9998 19.2392C20.0009 17.9041 19.9959 16.909 19.9968 16.1025C19.9996 13.9447 19.9974 13.1485 19.992 10.7712C19.9891 9.52707 19.0253 8.52627 17.8477 8.52627ZM19.094 16.0994C19.0931 16.9062 19.0918 17.9052 19.0905 19.2403C19.0881 21.731 17.2079 23.7619 14.8994 23.7619H9.40218C7.88894 23.7619 6.48839 22.8724 5.74731 21.4485L1.01266 12.3505L1.24634 12.1555C1.25225 12.1507 1.25794 12.145 1.26363 12.14C1.66556 11.7617 2.20644 11.5674 2.75717 11.6035C3.32014 11.6466 3.83958 11.9219 4.19163 12.3632L5.5633 14.0322C5.6832 14.1786 5.88231 14.2335 6.06042 14.1698C6.23852 14.1062 6.35755 13.9372 6.35755 13.7482L6.36565 2.26022C6.36608 1.50798 6.93497 0.895994 7.62113 0.895994C8.30729 0.895994 8.87618 1.50864 8.87618 2.26132V9.18793C8.87618 9.212 8.87508 9.23628 8.87508 9.26079C8.87508 9.27129 8.87618 9.28201 8.87618 9.2923V12.2538C8.87618 12.5012 9.07682 12.7019 9.32428 12.7019C9.57175 12.7019 9.77239 12.5012 9.77239 12.2538V9.20302C9.77239 8.47726 10.3268 7.91012 10.9953 7.91012H11.0351C11.7217 7.91012 12.293 8.50855 12.293 9.26123V11.9711C12.293 12.2186 12.4936 12.4192 12.7411 12.4192C12.9886 12.4192 13.1892 12.2186 13.1892 11.9711V9.84499C13.1892 9.09209 13.7331 8.47967 14.4235 8.47967C15.1098 8.47967 15.6538 9.09187 15.6538 9.84499V11.8507C15.6538 12.0982 15.8544 12.2989 16.1019 12.2989C16.3494 12.2989 16.55 12.0982 16.55 11.8507V10.7646C16.55 10.0117 17.1237 9.42248 17.8103 9.42248H17.8477C18.5326 9.42248 19.0907 10.0218 19.0925 10.7723C19.0979 13.1478 19.0968 13.9431 19.094 16.0994Z' fill='white'/%3E%3C/svg%3E%0A");
      width: 20px;
      height: 25px;
      pointer-events: none;
      position: absolute;
      right: rem(18px);
      bottom: rem(18px);
      opacity: 0;
      background-size: contain;
      background-repeat: no-repeat;
      transition: 350ms;

      @include media-breakpoint-down(md) {
        content: none;
      }
    }

    &::before {
      content: '';
      width: 85%;
      height: 75%;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      background-repeat: no-repeat;
      background-size: contain;
      margin: auto;
    }

    &:hover {
      &::after {
        opacity: 1;
        transition: 350ms;
      }

      .templates-item__title,
      .templates-item__description {
        color: #fff;
        transition: 350ms;
      }
    }
  }

  &__title {
    font-size: rem(18px);
    font-weight: 500;
    margin-bottom: rem(12px);
    color: $dark;
    transition: 350ms;

    @include media-breakpoint-down(md) {
      color: #fff;
      font-size: rem(16px);
    }
  }

  &__description {
    font-size: rem(12px);
    color: rgba(72, 72, 72, 0.8);
    line-height: 170%;
    transition: 350ms;

    @include media-breakpoint-down(md) {
      color: #fff;
    }
  }

  &--type {
    &--tg {
      .templates-item__wrap {
        &::before {
          background-image: url('~/assets/img/tgtemplate.png');
        }

        @include media-breakpoint-down(md) {
          background-color: $main;

          &::before {
            filter: brightness(100);
          }
        }

        &:hover {
          background-color: $main;
          transition: 350ms;

          &::before {
            filter: brightness(100);
            transition: 350ms;
          }
        }
      }
    }

    &--inst {
      .templates-item__wrap {
        &::before {
          background-image: url('~/assets/img/insttemplate.png');
        }

        @include media-breakpoint-down(md) {
          background-color: $accent;

          &::before {
            filter: brightness(100);
          }
        }

        &:hover {
          background-color: $accent;
          transition: 350ms;

          &::before {
            filter: brightness(100);
            transition: 350ms;
          }
        }
      }
    }
  }
}
</style>
