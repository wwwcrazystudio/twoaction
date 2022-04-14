<template>
  <nav class="pagination">
    <div class="pagination__wrap">
      <ul class="pagination__list">
        <li
          v-for="(page, key) in pages.slice(0, 4)"
          :key="key"
          class="pagination__item"
        >
          <button
            class="pagination__link"
            :class="active === page && 'pagination__link--active'"
            @click="$emit('change', page)"
          >
            {{ page }}
          </button>
        </li>
        <li v-if="pages.length > 4" class="pagination__item">
          <button class="pagination__link" @click="$emit('change', page)">
            ...
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    count: {
      type: Number,
      required: true,
    },
    active: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pages(this: any): Array<number> {
      const pagesArray = [...Array(this.count).keys()].map(
        (el) => el + 1
      ) as Array<number>
      return pagesArray
    },
  },
})
</script>

<style lang="scss" scoped>
.pagination {
  &__list {
    @include unlist;

    display: flex;
    align-items: center;
    margin: rem(0 -10px);
  }

  &__item {
    margin: rem(0 10px);
  }

  &__link {
    font-size: rem(14px);
    color: $main;
    opacity: 0.4;

    &--active {
      opacity: 1;
    }
  }
}
</style>
