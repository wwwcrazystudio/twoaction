<template>
  <div class="question-group">
    <div class="question-group__wrap">
      <h2 v-if="heading" class="question-group__heading">{{ heading }}</h2>

      <div class="question-group__list">
        <ul class="question-group__list-col">
          <QuestionItem
            v-for="(item, key) in questions.slice(0, perColumn)"
            :key="key"
            :item="item"
            class="question-group__question-item"
          />
        </ul>
        <ul class="question-group__list-col">
          <QuestionItem
            v-for="(item, key) in questions.slice(perColumn, questions.length)"
            :key="key"
            :item="item"
            class="question-group__question-item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    heading: {
      type: String,
      default: '',
    },
    questions: {
      type: Array,
      required: true,
    },
  },
  computed: {
    perColumn(this: any) {
      const length = this.questions.length as number
      const perColumn = ~~(length / 2)

      return perColumn
    },
  },
})
</script>

<style lang="scss" scoped>
.question-group {
  &__wrap {
    padding-bottom: rem(66px);
    padding-top: rem(40px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    @include media-breakpoint-down(md) {
      padding-top: rem(22px);
    }
  }

  &__heading {
    font-size: rem(36px);
    margin-bottom: rem(32px);
    color: #fff;

    @include media-breakpoint-down(md) {
      font-size: rem(18px);
      margin-bottom: rem(28px);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(64px);

    @include media-breakpoint-down(md) {
      gap: rem(20px);
      grid-template-columns: 1fr;
    }
  }

  &__list-col {
    @include unlist;
  }

  &__question-item {
    margin-bottom: rem(28px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
