<template>
  <nav v-if="links.length" class="footer-menu">
    <div v-if="title.length" class="footer-menu__title">{{ title }}</div>
    <ul class="footer-menu__list">
      <li v-for="link in links" :key="link.route" class="footer-menu__item">
        <NuxtLink :to="link.route" class="footer-menu__link">
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
    title: {
      type: String,
      default: '',
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.footer-menu {
  &__title {
    font-weight: 700;
    font-size: rem(14px);
    margin-bottom: rem(26px);
    color: #fff;

    @include media-breakpoint-down(md) {
      margin-bottom: rem(16px);
    }
  }

  &__list {
    @include unlist;
  }

  &__item {
    margin-bottom: rem(8px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(4px);
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    font-size: rem(14px);
    color: #fff;
    text-decoration: none;
  }
}
</style>
