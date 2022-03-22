<template>
  <div class="switchbox">
    <input
      :id="id"
      type="checkbox"
      :checked="value === label[1]"
      class="switchbox__control"
      @change="handleSwitch($event.target.checked)"
    />
    <label :for="id" class="switchbox__label">
      {{ label[0] }}
      <span class="switchbox__label-switch"></span>
      {{ label[1] }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuid } from 'uuid'

export default Vue.extend({
  props: {
    label: {
      type: Array,
      required: true,
    },
    value: {
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
  methods: {
    handleSwitch(this: any, checked: boolean) {
      let val: string
      if (checked) val = this.label[1] as string
      else val = this.label[0] as string
      this.$emit('update:value', val)
    },
  },
})
</script>

<style lang="scss" scoped>
.switchbox {
  &__control {
    position: absolute;
    z-index: -999;
    appearance: none;
    opacity: 0;

    &:checked {
      ~ .switchbox__label .switchbox__label-switch {
        &::before {
          left: calc(100% - rem(22px));
          transition: 350ms;
        }
      }
    }
  }

  &__label {
    color: $main;
    font-weight: 500;
    font-size: rem(14px);
    display: flex;
    align-items: center;

    &-switch {
      border-radius: 12px;
      background-color: $main;
      position: relative;
      width: rem(42px);
      height: rem(24px);
      margin: rem(0 14px);
      cursor: pointer;

      &::before {
        content: '';
        background: #ffffff;
        box-shadow: 0px 27px 80px rgba(0, 0, 0, 0.26);
        width: rem(20px);
        height: rem(20px);
        border-radius: 50%;
        position: absolute;
        left: 2px;
        top: 2px;
        transition: 350ms;
      }
    }
  }
}
</style>
