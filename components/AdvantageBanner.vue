<template>
  <div class="advantage-banner">
    <div class="advantage-banner__wrap" :class="modifier">
      <div class="advantage-banner__content">
        <div class="advantage-banner__title" v-html="title"></div>
        <div v-if="description" class="advantage-banner__description">
          {{ description }}
        </div>
        <NuxtLink
          v-if="type === 'link'"
          :to="url"
          class="advantage-banner__link"
        >
          {{ linkText }}
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
              fill="white"
            />
          </svg>
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

    @include media-breakpoint-down(md) {
      padding: rem(26px);
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

    @include media-breakpoint-down(md) {
      max-width: 70%;
    }
  }

  &__title {
    font-weight: 500;
    font-size: rem(22px);
    margin-bottom: rem(20px);

    @include media-breakpoint-down(md) {
      font-size: rem(16px);
      margin-bottom: rem(14px);
    }
  }

  &__description {
    font-size: rem(13.5px);
    margin-bottom: rem(25px);

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(18px);
    }
  }

  &__link {
    font-weight: 500;
    font-size: rem(14px);
    color: $main;
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
      margin-left: rem(8px);
    }

    @include media-breakpoint-down(md) {
      font-size: rem(12px);

      svg {
        width: 8px;
        height: 8px;
      }
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

    @include media-breakpoint-down(md) {
      top: unset;
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
