<template>
  <nav v-if="links.length" class="header-menu">
    <ul class="header-menu__list">
      <li v-for="link in links" :key="link.route" class="header-menu__item">
        <NuxtLink
          :to="link.route"
          class="header-menu__link"
          active-class="header-menu__link--active"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.header-menu {
  &__list {
    @include unlist;

    display: flex;
    align-items: flex-start;
    margin: rem(0 -14px);

    @include media-breakpoint-down(xxl) {
      margin: rem(0 -7px);
    }

    @include media-breakpoint-down(xl) {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      min-height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #fff;
      margin: 0;
      z-index: 100;
    }
  }

  &__item {
    margin: rem(0 14px);

    @include media-breakpoint-down(xxl) {
      margin: rem(0 7px);
    }

    @include media-breakpoint-down(xl) {
      margin-bottom: rem(8px);
    }
  }

  &__link {
    font-weight: 500;
    font-size: rem(14px);
    color: #484848;
    text-decoration: none;

    &--active {
      color: $main;
    }

    @include media-breakpoint-down(xl) {
      font-size: rem(24px);
    }
  }
}
</style>
