<template>
  <div class="select">
    <label :for="id" class="select__label">{{ label }}</label>
    <div
      class="select__control-wrap"
      :class="focus && 'select__control-wrap--focus'"
    >
      <select
        v-show="isMobile"
        :id="id"
        v-model="val"
        class="select__control"
        @focus="focus = true"
        @blur="focus = false"
      >
        <option v-for="option in options" :key="option.value" :value="option">
          {{ option.label }}
        </option>
      </select>

      <div
        v-show="!isMobile"
        class="select__value"
        :class="focus && 'select__value--focus'"
        @click.stop="focus = !focus"
      >
        {{ val.label }}
      </div>
      <Dropdown
        :show="focus"
        :options="options"
        :value="val"
        class="select__dropdown"
        @hide="focus = false"
        @select="val = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuid } from 'uuid'

export default Vue.extend({
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      id: '' as string,
      val: {} as object,
      focus: false as boolean,
    }
  },
  computed: {
    isMobile(this: any): boolean {
      return this.$isMobile()
    },
  },
  watch: {
    val(val: object) {
      this.focus = false
      this.$emit('update:value', val)
    },
  },
  created(this: any) {
    if (this.value) this.val = this.value
    else this.val = this.options[0]
  },
  mounted() {
    this.id = uuid() as string
  },
})
</script>

<style lang="scss" scoped>
.select {
  &__label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &__control-wrap {
    position: relative;
  }

  &__control,
  &__value {
    padding: rem(4px 14px);
    padding-right: rem(26px);
    background-color: $main;
    border-radius: 12px;
    font-size: rem(13px);
    width: 100%;
    color: #fff;
    border: 1px solid transparent;
    transition: 350ms;
    font-weight: 500;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.75 5.5L0 0.5H7.5L3.75 5.5Z' fill='%23fff'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: calc(100% - 8px);
    cursor: pointer;
  }
}
</style>
