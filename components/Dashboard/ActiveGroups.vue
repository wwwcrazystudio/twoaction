<template>
  <div class="active-groups">
    <div class="active-groups__head">
      <div v-if="type" class="active-groups__type">{{ type }}</div>

      <NuxtLink to="/" class="active-groups__link">
        Посмотреть все группы
      </NuxtLink>
    </div>

    <div ref="wrap" class="active-groups__wrap swiper">
      <ul class="active-groups__list swiper-wrapper">
        <li
          v-for="item in groups"
          :key="item.title"
          class="active-groups__item swiper-slide"
        >
          <div class="active-groups__item-wrap">
            <div class="active-groups__item-icon">
              <img :src="item.img" :alt="item.title" />
            </div>
            <div class="active-groups__item-title">{{ item.title }}</div>
            <div class="active-groups__item-cat">кино и игры</div>
            <div class="active-groups__item-count">
              <var>1 268 846</var> подписчика
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper from 'swiper'

export default Vue.extend({
  props: {
    groups: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    isTablet(this: any): boolean {
      return this.$isTablet()
    },
  },
  mounted(this: any) {
    this.$nextTick(() => {
      const wrap = this.$refs.wrap as HTMLElement

      const args = {
        slidesPerView: 1.1,
        spaceBetween: 20,
        breakpoints: {
          1400: {
            spaceBetween: 28,
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        },
      }

      // eslint-disable-next-line no-new
      new Swiper(wrap, args)
    })
  },
})
</script>

<style lang="scss" scoped>
.active-groups {
  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(24px);
  }

  &__type {
    font-size: rem(15px);
    font-weight: 500;
    color: $main;
  }

  &__link {
    font-size: rem(13.5px);
    text-decoration: underline;
    color: $main;
    margin-left: auto;
  }

  &__wrap {
    overflow: visible;
  }

  &__list {
    @include unlist;
  }

  &__item {
    &-wrap {
      padding: rem(35px 20px);
      background: #ffffff;
      box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
        0px 10px 30px rgba(29, 29, 29, 0.04);
      border-radius: 22px;

      @include media-breakpoint-down(md) {
        padding: rem(24px);
      }
    }

    &-icon {
      width: 66px;
      height: 66px;
      margin: auto;
      border-radius: 50%;
      margin-bottom: rem(18px);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @include media-breakpoint-down(md) {
        width: 50px;
        height: 50px;
        margin-bottom: rem(10px);
      }
    }

    &-title {
      font-weight: 500;
      font-size: rem(18px);
      margin-bottom: rem(8px);
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: rem(14px);
      }
    }

    &-cat {
      font-weight: 500;
      font-size: rem(13px);
      padding: rem(4px 24px);
      background-color: $main;
      color: #fff;
      border-radius: 20px;
      width: max-content;
      margin: auto;
      margin-bottom: rem(12px);

      @include media-breakpoint-down(md) {
        font-size: rem(11px);
        margin-bottom: rem(8px);
      }
    }

    &-count {
      font-size: rem(13px);
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: rem(11px);
      }

      var {
        color: $main;
        font-weight: 500;
        font-style: normal;
      }
    }
  }
}
</style>
