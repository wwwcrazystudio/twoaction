<template>
  <div class="select">
    <div
      class="select__control-wrap"
      :class="focus && 'select__control-wrap--focus'"
    >
      <label v-show="!innerVal.label" :for="id" class="select__label">
        {{ label }}
      </label>
      <select
        v-show="isMobile"
        :id="id"
        v-model="innerVal"
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
        {{ innerVal.label || label }}
      </div>
      <Dropdown
        :show="focus"
        :options="options"
        :value="innerVal"
        class="select__dropdown"
        @hide="focus = false"
        @select="innerVal = $event"
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
    preselect: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: '' as string,
      innerVal: {} as object,
      focus: false as boolean,
    }
  },
  computed: {
    isMobile(this: any): boolean {
      return this.$isMobile()
    },
  },
  watch: {
    innerVal(val: object) {
      this.focus = false
      this.$emit('update:value', val)
    },
    value(val: object) {
      this.innerVal = val
    },
  },
  created(this: any) {
    if (this.value) this.innerVal = this.value
    else if (this.preselect) this.innerVal = this.options[0]
  },
  mounted() {
    this.id = uuid() as string
  },
})
</script>

<style lang="scss" scoped>
.select {
  &__label {
    font-size: rem(12px);
    top: 14px;
    left: rem(22px);
    position: absolute;
    color: $main;
    margin: auto;
    pointer-events: none;
    transition: 350ms;
    display: flex;
    align-items: center;

    @include media-breakpoint-up(md) {
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

  &__control-wrap {
    position: relative;
  }

  &__control,
  &__value {
    padding: rem(14px 24px);
    padding-right: rem(32px);
    background-color: #fff;
    font-size: rem(14px);
    width: 100%;
    color: $main;
    border: 1px solid rgba(186, 186, 186, 0.2);
    border-radius: 8px;
    transition: 350ms;
    font-weight: 500;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg transform='rotate(90)' width='10' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.0163219 9.44979C0.0639392 9.65186 0.217143 9.83516 0.415034 9.92682C0.514565 9.97291 0.557222 9.98102 0.698238 9.98061C1.01056 9.97971 0.799625 10.1672 3.3191 7.65129C4.83862 6.13391 5.57468 5.38573 5.60753 5.32514C5.68423 5.18367 5.71118 5.0166 5.68101 4.86963C5.66722 4.80248 5.63415 4.70737 5.60753 4.65826C5.57468 4.59768 4.83862 3.84949 3.3191 2.33211C0.79941 -0.184003 1.01043 0.00353544 0.698238 0.00296903C0.556851 0.00271513 0.514155 0.0109184 0.410464 0.0583012C0.0517128 0.222247 -0.100046 0.659161 0.0774353 1.01709C0.10265 1.06797 0.794918 1.77473 2.06225 3.04346L4.00834 4.9917L2.06225 6.93994C0.789957 8.21364 0.102807 8.91524 0.0775721 8.96631C0.00413438 9.11498 -0.019186 9.29914 0.0163219 9.44979Z' fill='%230085E6'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: calc(100% - 18px);
    cursor: pointer;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      padding: rem(14px 22px);
    }
  }

  &__dropdown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
