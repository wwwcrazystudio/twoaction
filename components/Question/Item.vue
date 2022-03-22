<template>
  <li class="question-item">
    <div
      class="question-item__wrap"
      :class="expanded && 'question-item__wrap--expanded'"
      @click.prevent="expanded = !expanded"
    >
      <h3 class="question-item__title">{{ item.title }}</h3>

      <div
        class="question-item__content"
        :class="expanded && 'question-item__content--expanded'"
      >
        {{ item.content }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      expanded: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.question-item {
  &__wrap {
    background: #0290f5;
    padding: rem(34px 40px);
    color: #fff;
    box-shadow: 0px 14px 75px rgba(86, 86, 86, 0.23),
      0px 1.75302px 9.39116px rgba(221, 121, 0, 0.115);
    border-radius: 15px;
    transition: 500ms;
    cursor: pointer;

    &--expanded {
      background: #ffffff;
      color: #484848;
      transition: 500ms;

      .question-item__title {
        &::before {
          background-color: $main;
          transition: 500ms;
        }

        &::after {
          opacity: 0;
          transition: 500ms;
        }
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: rem(15px);
    margin-bottom: 0;
    position: relative;

    &::before,
    &::after {
      content: '';
      background-color: #fff;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      transition: 500ms;
    }

    &::before {
      width: 10px;
      height: 2px;
    }

    &::after {
      right: 4px;
      width: 2px;
      height: 10px;
    }
  }

  &__content {
    font-size: rem(14px);
    line-height: 185%;
    max-height: 0;
    transition: 500ms;
    overflow: hidden;
    color: #fff;
    opacity: 0;

    &--expanded {
      margin-top: rem(30px);
      max-height: 200px;
      transition: 500ms;
      color: #484848;
      opacity: 1;
    }
  }
}
</style>
