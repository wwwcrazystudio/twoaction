<template>
  <div class="input">
    <div class="input__wrap" :class="hasFocus && 'input__wrap--focus'">
      <label
        :for="id"
        class="input__label"
        :class="!showLabel && 'input__label--hidden'"
      >
        {{ label }}
      </label>
      <input
        :id="id"
        ref="input"
        :type="type"
        class="input__control"
        :value="value"
        :name="label"
        :placeholder="label"
        :min="min"
        :max="max"
        :readonly="readonly"
        @focus="!readonly ? (focus = true) : null"
        @blur="focus = false"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuid } from 'uuid'
import IMask from 'imask'

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    mask: {
      type: String,
      default: '',
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: undefined,
      focus: false,
      masked: null as any,
    }
  },
  computed: {
    hasFocus(this: any) {
      if (this.focus || this.value) {
        return true
      }

      return false
    },
  },
  watch: {
    value(val) {
      if (this.masked) {
        this.$nextTick(() => {
          this.masked.typedValue = val.toString() as string
        })
      }
    },
  },
  mounted(this: any) {
    this.id = uuid() as string

    if (this.mask) {
      this.initMask()

      this.$nextTick(() => {
        this.masked.typedValue = this.value.toString() as string
      })
    }
  },
  methods: {
    handleInput(event: InputEvent) {
      if (!this.masked) {
        const input = event.target as HTMLInputElement
        const value = input.value as number | string

        this.$emit('update:value', value)
        this.$emit('input', value)
      }
    },
    handleMaskChange() {
      const value = this.masked.typedValue as string

      this.$emit('update:value', value)
      this.$emit('input', value)
    },
    initMask() {
      const input = this.$refs.input as HTMLInputElement

      let options: any = {}

      switch (this.mask) {
        case 'currency':
          options = {
            mask: 'num ₽',
            eager: true,
            blocks: {
              num: {
                mask: Number,
                min: this.min,
                max: this.max,
                thousandsSeparator: ' ',
              },
            },
          }
          break
        default:
          return
      }

      this.masked = IMask(input, options) as any

      this.masked.on('accept', this.handleMaskChange)
    },
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
    font-size: rem(14px);
    position: absolute;
    color: $main;
    left: rem(24px);
    top: 12px;
    margin: auto;
    pointer-events: none;
    transition: 350ms;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      top: 14px;
      left: rem(22px);
    }

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

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      padding: rem(14px 22px);
    }

    &::placeholder {
      opacity: 0;
    }
  }
}
</style>
