<template>
  <div class="advantage-banner">
    <div class="advantage-banner__wrap" :class="modifier">
      <div class="advantage-banner__content">
        <div class="advantage-banner__title" v-html="title"></div>
        <div class="advantage-banner__description">
          {{ description }}
        </div>
        <NuxtLink
          v-if="type === 'link'"
          :to="url"
          class="advantage-banner__link"
        >
          {{ linkText }}
          <img src="~/assets/img/icons/arrow.png" alt="" />
        </NuxtLink>
        <NuxtLink v-if="type === 'btn'" :to="url" class="advantage-banner__btn">
          {{ linkText }}
        </NuxtLink>
      </div>
      <div class="advantage-banner__img">
        <img :src="img" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    url: {
      type: String,
      default: '/',
    },
    linkText: {
      type: String,
      default: 'Приступить',
    },
    img: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'main-light',
    },
  },
  computed: {
    modifier(this: any) {
      const bg = this.color as string
      let modifier

      switch (bg) {
        case 'main':
          modifier = 'advantage-banner__wrap--main'
          break
        case 'main-light':
          modifier = 'advantage-banner__wrap--main-light'
          break
        case 'accent':
          modifier = 'advantage-banner__wrap--accent'
          break
        case 'accent-light':
          modifier = 'advantage-banner__wrap--accent-light'
          break
        default:
          break
      }

      return modifier
    },
  },
})
</script>

<style lang="scss" scoped>
.advantage-banner {
  &__wrap {
    padding: rem(42px 50px);
    border-radius: 20px;
    position: relative;
    overflow: hidden;

    @include media-breakpoint-down(xxl) {
      padding: rem(32px);
    }

    &--main {
      background-color: $main;
      color: #fff;

      .advantage-banner__link {
        color: #fff;
        img {
          filter: grayscale(100) brightness(100);
        }
      }
    }

    &--accent {
      background-color: $accent;
    }

    &--main-light {
      background-color: rgba($main, 0.04);

      .advantage-banner__title {
        color: $main;
      }
    }

    &--accent-light {
      background-color: rgba($accent, 0.12);
    }
  }

  &__content {
    max-width: 70%;

    @include media-breakpoint-down(xxl) {
      max-width: 80%;
    }
  }

  &__title {
    font-weight: 500;
    font-size: rem(22px);
    margin-bottom: rem(20px);
  }

  &__description {
    font-size: rem(13.5px);
    margin-bottom: rem(25px);
  }

  &__link {
    font-weight: 500;
    font-size: rem(14px);
    color: $main;
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      margin-left: rem(8px);
    }
  }

  &__img {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-width: 50%;
    max-height: 100%;

    @include media-breakpoint-down(xxl) {
      max-width: 40%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__btn {
    @extend %btn-main;
  }
}
</style>
