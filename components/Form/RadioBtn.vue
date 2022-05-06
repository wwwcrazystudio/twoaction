<template>
  <div class="radio-btn">
    <input :id="id" type="radio" :name="name" class="radio-btn__control" />
    <label :for="id" class="radio-btn__label">
      <slot name="icon"></slot>
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuid } from 'uuid'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      id: undefined,
      focus: false,
    }
  },
  mounted(this: any) {
    this.id = uuid() as string
  },
})
</script>

<style lang="scss" scoped>
.radio-btn {
  &__control {
    position: absolute;
    z-index: -999;
    appearance: none;
    opacity: 0;

    &:checked {
      ~ .radio-btn__label {
        background-color: $main;
        transition: 350ms;
        color: #fff;

        svg path {
          fill: #fff;
          transition: 350ms;
        }
      }
    }
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: rem(12px 36px);
    border: 1px solid $main;
    border-radius: 8px;
    font-weight: 500;
    font-size: rem(14px);
    color: $main;
    cursor: pointer;
    transition: 350ms;

    @include media-breakpoint-down(md) {
      font-size: rem(14px);
      padding: rem(10px 24px);
    }

    svg {
      margin-right: rem(8px);

      path {
        transition: 350ms;
      }
    }
  }
}
</style>