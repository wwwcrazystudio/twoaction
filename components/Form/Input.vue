<template>
  <div class="input">
    <div
      class="input__wrap"
      :class="[
        hasFocus && 'input__wrap--focus',
        showLabel && 'input__wrap--simple',
      ]"
    >
      <label :for="id" class="input__label">
        {{ label }}
      </label>
      <input
        :id="id"
        ref="input"
        :type="inputType"
        class="input__control"
        :class="type === 'search' && 'input__control--search'"
        :value="value"
        :name="label"
        :placeholder="placeholder || label"
        :min="min"
        :max="max"
        :readonly="readonly"
        @focus="!readonly ? (focus = true) : null"
        @blur="focus = false"
        @input="handleInput"
      />

      <button
        v-if="type === 'password'"
        class="input__show-pwd"
        @click.stop="showPW = !showPW"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4177_244)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8274 12.0336C13.8021 10.9017 15.2602 9.22198 15.8135 8.53316C16.0622 8.23127 16.0622 7.78732 15.8135 7.46768C14.9434 6.38444 11.8357 2.85059 8 2.85059C7.10722 2.85059 6.25389 3.04203 5.45903 3.34945L6.39903 4.63127C6.8841 4.40042 7.42693 4.27123 8 4.27123C10.0599 4.27123 11.7292 5.94049 11.7292 8.00042C11.7292 8.98136 11.3507 9.87371 10.7317 10.5394L11.8274 12.0336ZM5.27023 5.45941C4.65012 6.12531 4.27081 7.01848 4.27081 8.00042C4.27081 10.0604 5.94007 11.7296 8 11.7296C8.57406 11.7296 9.11777 11.6 9.60347 11.3684L10.5436 12.6504C9.74799 12.9584 8.89376 13.1503 8 13.1503C4.16426 13.1503 1.0566 9.6164 0.18646 8.53316C-0.0621532 8.21352 -0.0621532 7.76956 0.18646 7.46768C0.74 6.77858 2.19902 5.09775 4.17495 3.96584L5.27023 5.45941Z"
              fill="#0085E5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0306 9.58343C10.372 9.14652 10.5756 8.59686 10.5756 8.00022C10.5756 6.57957 9.42135 5.42529 8.00071 5.42529C7.68405 5.42529 7.38063 5.48264 7.10027 5.5875L10.0306 9.58343ZM5.97166 6.4159C5.62972 6.85298 5.42578 7.40307 5.42578 8.00022C5.42578 9.42086 6.58006 10.5751 8.00071 10.5751C8.31786 10.5751 8.62173 10.5176 8.90245 10.4124L5.97166 6.4159Z"
              fill="#0085E5"
            />
          </g>
          <defs>
            <clipPath id="clip0_4177_244">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
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
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      id: undefined,
      focus: false,
      masked: null as any,
      showPW: false,
    }
  },
  computed: {
    hasFocus(this: any) {
      if (this.focus || this.value) {
        return true
      }

      return false
    },
    inputType(this: any) {
      if (this.showPW) return 'text'
      if (this.type === 'search') return 'text'
      return this.type
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
      .input__wrap:not(.input-wrap__simple) {
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

    &--simple {
      .input__label {
        position: static;
        font-weight: 500;
        font-size: rem(15px);
        margin-bottom: rem(20px);
        color: $dark;
      }

      .input__control {
        &::placeholder {
          opacity: 1;
        }
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
      color: $main;
    }

    &--search {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.21259 2.07689C4.82947 2.07689 2.0769 4.82945 2.0769 8.21258C2.0769 11.5959 4.82947 14.3483 8.21259 14.3483C11.5959 14.3483 14.3483 11.5959 14.3483 8.21258C14.3483 4.82945 11.5959 2.07689 8.21259 2.07689ZM8.21259 13.2155C5.45399 13.2155 3.20965 10.9712 3.20965 8.2126C3.20965 5.454 5.45399 3.20963 8.21259 3.20963C10.9712 3.20963 13.2155 5.45397 13.2155 8.21258C13.2155 10.9712 10.9712 13.2155 8.21259 13.2155Z' fill='%230085E5'/%3E%3Cpath d='M15.8436 15.0427L12.5964 11.7955C12.3752 11.5743 12.0168 11.5743 11.7956 11.7955C11.5743 12.0166 11.5743 12.3753 11.7956 12.5964L15.0428 15.8436C15.1534 15.9542 15.2982 16.0095 15.4432 16.0095C15.588 16.0095 15.733 15.9542 15.8436 15.8436C16.0649 15.6225 16.0649 15.2638 15.8436 15.0427Z' fill='%230085E5'/%3E%3C/svg%3E%0A");
      background-position: calc(100% - 12px);
      background-repeat: no-repeat;
      padding-right: rem(32px);
    }
  }

  &__show-pwd {
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
