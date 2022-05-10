<template>
  <div class="tabs-btns">
    <div class="tabs-btns__wrap">
      <ul class="tabs-btns__list">
        <li v-for="tab in tabs" :key="tab.label" class="tabs-btns__item">
          <button
            class="tabs-btns__link"
            :class="active.label === tab.label && 'tabs-btns__link--active'"
            @click="$emit('click', tab)"
          >
            {{ tab.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    active: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style lang="scss" scoped>
.tabs-btns {
  &__list {
    @include unlist;

    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      overflow: auto;
      margin-right: -20px;
      padding-bottom: 8px;
    }
  }

  &__item {
    margin-right: rem(12px);

    @include media-breakpoint-down(md) {
      margin-right: rem(10px);
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $main;
    padding: rem(12px 28px);
    font-size: rem(14px);
    font-weight: 500;
    border: 1px solid $main;
    transition: 350ms;
    border-radius: 8px;
    white-space: nowrap;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      padding: rem(12px 20px);
    }

    &--active {
      color: #fff;
      background-color: $main;
      transition: 350ms;
    }
  }
}
</style>
