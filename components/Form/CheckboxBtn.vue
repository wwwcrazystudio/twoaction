<template>
  <div class="checkbox-btn">
    <input
      :id="id"
      type="checkbox"
      :value="value"
      :name="name"
      :checked="checked"
      class="checkbox-btn__control"
      @change="handleChange"
    />
    <label :for="id" class="checkbox-btn__label">
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
    value: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      id: undefined,
      focus: false,
    }
  },
  computed: {
    checked(): boolean {
      return this.list.includes(this.value)
    },
  },
  mounted(this: any) {
    this.id = uuid() as string
  },
  methods: {
    handleChange() {
      let list = [...this.list]

      if (this.checked) {
        list = list.filter((el) => el !== this.value)
      } else {
        list.push(this.value)
      }

      this.$emit('update:list', list)
      this.$emit('change', this.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.checkbox-btn {
  &__control {
    position: absolute;
    z-index: -999;
    appearance: none;
    opacity: 0;

    &:checked {
      ~ .checkbox-btn__label {
        background-color: $main;
        transition: 350ms;
        color: #fff;

        &::before {
          border-color: #fff;
          transition: 350ms;
        }

        &::after {
          opacity: 1;
          transition: 350ms;
        }
      }
    }
  }

  &__label {
    display: flex;
    align-items: center;
    padding: rem(14px 24px);
    padding-left: rem(42px);
    border: 1px solid rgba(186, 186, 186, 0.2);
    border-radius: 8px;
    font-weight: 500;
    font-size: rem(13px);
    color: $main;
    cursor: pointer;
    transition: 350ms;
    position: relative;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      padding: rem(10px 24px);
    }

    &::before {
      content: '';
      left: rem(16px);
      top: 0;
      bottom: 0;
      position: absolute;
      width: 14px;
      height: 14px;
      border: 1px solid rgba(186, 186, 186, 0.2);
      border-radius: 2px;
      display: block;
      margin: auto;
      transition: 350ms;
    }

    &::after {
      content: '';
      left: rem(19px);
      top: 0;
      bottom: 0;
      position: absolute;
      width: 8px;
      height: 8px;
      display: block;
      margin: auto;
      opacity: 0;
      transition: 350ms;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.05029 1.30467L3.71692 5.63792C3.58691 5.76793 3.41626 5.83336 3.24561 5.83336C3.07495 5.83336 2.9043 5.76793 2.77429 5.63792L0.607666 3.4713C0.346924 3.21068 0.346924 2.78929 0.607666 2.52867C0.868286 2.26793 1.28955 2.26793 1.55029 2.52867L3.24561 4.22398L7.10767 0.362045C7.36829 0.101303 7.78955 0.101303 8.05029 0.362045C8.31091 0.622665 8.31091 1.04393 8.05029 1.30467Z' fill='white'/%3E%3C/svg%3E%0A");
    }
  }
}
</style>
