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
.сheckbox-btn {
  &__control {
    position: absolute;
    z-index: -999;
    appearance: none;
    opacity: 0;

    &:checked {
      ~ .radio-btn__label {
        background-color: $main;
        transition: 350ms;
        color: #fff;

        svg path {
          fill: #fff;
          transition: 350ms;
        }
      }
    }
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: rem(12px 36px);
    border: 1px solid $main;
    border-radius: 8px;
    font-weight: 500;
    font-size: rem(14px);
    color: $main;
    cursor: pointer;
    transition: 350ms;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      padding: rem(10px 24px);
    }

    svg {
      margin-right: rem(8px);

      path {
        transition: 350ms;
      }
    }
  }
}
</style>
