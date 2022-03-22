<template>
  <div class="input">
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
    />
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
    }
  },
  mounted(this: any) {
    this.id = uuid() as string
  },
})
</script>

<style lang="scss" scoped>
.input {
  &__label {
    font-weight: 500;
    font-size: rem(15px);
    margin-bottom: rem(20px);

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
    border-radius: 15px;
    width: 100%;
    background: rgba(0, 133, 229, 0.08);

    &::placeholder {
      color: rgba($main, 0.8);
    }
  }
}
</style>
