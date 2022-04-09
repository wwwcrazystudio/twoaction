<template>
  <li class="steps-item">
    <div class="steps-item__wrap">
      <div class="steps-item__img">
        <img :src="item.img" :alt="item.title" />
      </div>
      <div class="steps-item__title">{{ item.title }}</div>
      <div class="steps-item__description" v-html="item.description"></div>
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
})
</script>

<style lang="scss" scoped>
.steps-item {
  &__wrap {
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    padding: rem(24px 32px);
    padding-bottom: rem(40px);
    border-radius: 24px;
    text-align: center;
    height: 100%;

    @include media-breakpoint-down(xxl) {
      padding: rem(24px);
    }

    @include media-breakpoint-down(md) {
      padding: rem(36px 48px);
    }
  }

  &__img {
    width: 130px;
    height: 130px;
    margin: auto;
    margin-bottom: rem(12px);

    @include media-breakpoint-down(md) {
      width: 120px;
      height: 120px;
      margin-bottom: rem(14px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__title {
    color: $main;
    font-weight: 500;
    font-size: rem(13px);
    margin-bottom: rem(5px);
  }

  &__description {
    font-size: rem(13.5px);
    line-height: 180%;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }

    &::v-deep {
      b {
        font-weight: 700;
        display: block;
      }
    }
  }
}
</style>
