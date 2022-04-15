<template>
  <div class="input">
    <div class="input__wrap" :class="focus && 'input__wrap--focus'">
      <label
        :for="id"
        class="input__label"
        :class="!showLabel && 'input__label--hidden'"
      >
        {{ label }}
      </label>
      <input
        :id="id"
        :type="type"
        class="input__control"
        :name="label"
        :placeholder="label"
        @focus="focus = true"
        @blur="focus = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuid } from 'uuid'

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    showLabel: {
      type: Boolean,
      default: true,
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
.input {
  &__wrap {
    position: relative;

    &--focus {
      .input__label {
        font-size: rem(11px);
        bottom: unset;
        top: 4px;
        transition: 350ms;
      }

      .input__control {
        padding-bottom: rem(8px);
        padding-top: rem(20px);
      }
    }
  }

  &__label {
    font-weight: 500;
    font-size: rem(14px);
    position: absolute;
    color: $main;
    left: rem(24px);
    top: 10px;
    margin: auto;
    pointer-events: none;
    transition: 350ms;
    display: flex;
    align-items: center;

    &--hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  }

  &__control {
    padding: rem(14px 24px);
    padding-right: rem(12px);
    color: $main;
    font-size: rem(13px);
    border-radius: 8px;
    width: 100%;
    background: rgba(0, 133, 229, 0.08);

    &::placeholder {
      opacity: 0;
    }
  }
}
</style>
