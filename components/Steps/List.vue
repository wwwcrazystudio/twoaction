<template>
  <div class="steps-list">
    <ul class="steps-list__wrap">
      <StepsItem
        v-for="(item, key) in steps"
        :key="key"
        :item="item"
        class="steps-list__step-item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    steps: { type: Array, required: true },
  },
})
</script>

<style lang="scss" scoped>
.steps-list {
  &__wrap {
    @include unlist;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: rem(40px);
    margin-bottom: rem(46px);

    @include media-breakpoint-down(xxl) {
      gap: rem(20px);
    }
  }
}
</style>
