<template>
  <div ref="parent" class="dropdown" @click.stop>
    <ul v-show="show" ref="popper" class="dropdown__list">
      <li v-for="option in options" :key="option.label" class="dropdown__item">
        <button
          class="dropdown__btn"
          :class="value.value === option.value && 'dropdown__btn--active'"
          @click="$emit('select', option)"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createPopper } from '@popperjs/core'

export default Vue.extend({
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    options: {
      type: Array,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dropdown: undefined,
    }
  },
  watch: {
    show(this: any) {
      this.$nextTick(() => {
        this.dropdown.update()
      })
    },
  },
  mounted(this: any) {
    document.body.addEventListener('click', this.handleClick)
    this.$nextTick(() => {
      const parent = this.$refs.parent as HTMLElement
      const popper = this.$refs.popper as HTMLElement

      this.dropdown = createPopper(parent, popper, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ],
      })
    })
  },
  methods: {
    handleClick(this: any) {
      this.$emit('hide')
    },
  },
})
</script>

<style lang="scss" scoped>
.dropdown {
  &__list {
    @include unlist;

    background: #ffffff;
    box-shadow: 0px 12px 80px rgba(41, 57, 82, 0.04),
      0px 5.01331px 33.4221px rgba(41, 57, 82, 0.0287542),
      0px 2.68036px 17.869px rgba(41, 57, 82, 0.0238443),
      0px 1.50259px 10.0172px rgba(41, 57, 82, 0.02),
      0px 0.798012px 5.32008px rgba(41, 57, 82, 0.0161557),
      0px 0.332071px 2.21381px rgba(41, 57, 82, 0.0112458);
    border-radius: 12px;
    width: max-content;
    min-width: 100%;
    overflow: hidden;
    z-index: 10;
  }

  &__btn {
    padding: rem(12px 16px);
    font-size: rem(15px);
    width: 100%;
    text-align: left;
    transition: 350ms;

    &--active {
      background: #f4f6fa;
      transition: 350ms;

      &:hover {
        background: darken(#f4f6fa, 1);
        transition: 350ms;
      }
    }

    &:hover {
      background: #f4f6fa;
      transition: 350ms;
    }
  }
}
</style>
