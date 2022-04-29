<template>
  <div class="slider">
    <div class="slider__label">
      {{ label }}
    </div>
    <vue-slider
      :value="value"
      :dot-size="16"
      :min="min"
      :max="max"
      :contained="true"
      tooltip="none"
      class="slider__control"
      @dragging="handleDrag"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'

import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

export default Vue.extend({
  components: {
    VueSlider,
  },
  props: {
    value: {
      type: [Number, Array],
      default: 1,
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
  },
  methods: {
    handleDrag(val: Array<number> | number) {
      this.$emit('drag', val)
      this.$emit('update:value', val)
    },
  },
})
</script>

<style lang="scss" scoped>
.slider {
  &__label {
    margin-bottom: rem(32px);
    font-weight: 500;
    font-size: rem(15px);

    @include media-breakpoint-down(md) {
      font-size: rem(13px);
      margin-bottom: rem(22px);
    }
  }

  &__control {
    &::v-deep {
      .vue-slider-rail {
        background-color: rgba($main, 0.3);
        border-radius: 0;
      }

      .vue-slider-dot-handle {
        background-color: $main;
        box-shadow: 0px 0px 10px rgba(13, 93, 151, 0.25);
      }

      .vue-slider-process {
        background-color: $main;
      }
    }
  }
}
</style>
