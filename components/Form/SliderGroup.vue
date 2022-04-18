<template>
  <div class="slider-group">
    <FormSlider
      class="slider-group__slider"
      :value="value"
      :label="label"
      :min="min"
      :max="max"
      @drag="$emit('update:value', $event)"
    />

    <div class="slider-group__controls">
      <FormInput
        class="slider-group__input"
        :value="value[0]"
        :min="min"
        :max="max"
        :mask="mask"
        label="от"
        type="text"
        @input="handleInput($event, 0)"
      />
      <FormInput
        class="slider-group__input"
        :value="value[1]"
        :min="min"
        :max="max"
        :mask="mask"
        label="до"
        type="text"
        @input="handleInput($event, 1)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Array,
      default: () => [1, 100],
    },
    label: {
      type: String,
      required: true,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
    mask: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(val: string | number, key: number) {
      const value = this.value
      value.splice(key, 1, val)

      this.$emit('input', value)
      this.$emit('update:value', value)
    },
  },
})
</script>

<style lang="scss" scoped>
.slider-group {
  &__slider {
    margin-bottom: rem(24px);
  }

  &__controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(12px);
  }
}
</style>
