<template>
  <div class="textarea">
    <label
      :for="id"
      class="textarea__label"
      :class="!showLabel && 'textarea__label--hidden'"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      class="textarea__control"
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
.textarea {
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
    border-radius: 8px;
    width: 100%;
    background: rgba(0, 133, 229, 0.08);
    resize: none;
    height: 145px;

    &::placeholder {
      color: rgba($main, 0.8);
    }
  }
}
</style>
