<template>
  <div class="tabs">
    <div class="tabs__wrap">
      <ul class="tabs__list">
        <li v-for="tab in tabs" :key="tab.label" class="tabs__item">
          <button
            v-if="type === 'buttons'"
            class="tabs__link"
            :class="active.label === tab.label && 'tabs__link--active'"
            @click="$emit('click', tab)"
          >
            {{ tab.label }}
          </button>
          <NuxtLink
            v-if="type === 'links'"
            :to="tab.val"
            class="tabs__link"
            active-class="tabs__link--active"
          >
            {{ tab.label }}
          </NuxtLink>
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
    type: {
      type: String,
      default: 'buttons',
    },
    active: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style lang="scss" scoped>
.tabs {
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
    &:first-of-type {
      .tabs__link {
        padding-left: rem(8px);
      }
    }

    &:last-of-type {
      .tabs__link {
        padding-right: rem(8px);
      }
    }
  }

  &__link {
    display: flex;
    color: rgba(72, 72, 72, 0.6);
    padding: rem(8px 16px);
    font-size: rem(13.5px);
    border-bottom: 2px solid rgba(0, 133, 229, 0.06);
    text-decoration: none;
    white-space: nowrap;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }

    &--active {
      border-bottom-color: $main;
      color: $main;
    }
  }
}
</style>
