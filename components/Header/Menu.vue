<template>
  <nav v-if="links.length" class="header-menu">
    <ul class="header-menu__list">
      <li v-for="link in links" :key="link.route" class="header-menu__item">
        <NuxtLink :to="link.route" class="header-menu__link">
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
    align-items: start;
  }

  &__item {
    margin: rem(0 14px);
  }

  &__link {
    font-weight: 500;
    font-size: rem(14px);
    color: #484848;
    text-decoration: none;
  }
}
</style>