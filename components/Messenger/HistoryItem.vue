<template>
  <li class="history-item" :class="!item.author && 'history-item--self'">
    <div class="history-item__wrap">
      <div class="history-item__head">
        <div v-if="item.author" class="history-item__author">
          <div class="history-item__author-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="history-item__info">
            <div class="history-item__author-name">{{ item.author }}</div>
            <time datetime="" class="history-item__date">{{ item.date }}</time>
          </div>
        </div>
        <time v-else datetime="" class="history-item__date">
          {{ item.date }}
        </time>
      </div>

      <div class="history-item__content" v-html="item.content"></div>
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
.history-item {
  &__content {
    padding: rem(26px);
    border-radius: 20px;
    font-size: rem(13.5px);
    line-height: 180%;
    background: rgba(0, 133, 229, 0.04);

    @include media-breakpoint-down(md) {
      padding: rem(26px 22px);
      padding-right: rem(14px);
      font-size: rem(12px);
      font-weight: 500;
    }
  }

  &__wrap {
    width: fit-content;
    max-width: 55%;

    @include media-breakpoint-down(md) {
      max-width: 90%;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(16px);
  }

  &__info {
    margin-left: rem(14px);
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &__author {
    display: flex;
    align-items: center;
    margin-right: rem(12px);

    @include media-breakpoint-down(md) {
      margin-right: 0;
    }

    &-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;

      @include media-breakpoint-down(md) {
        width: 40px;
        height: 40px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-name {
      font-size: rem(15px);
      font-weight: 500;
      margin-right: rem(12px);

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }
    }
  }

  &__date {
    font-size: rem(13px);
    color: rgba(72, 72, 72, 0.6);

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }
  }

  &--self {
    .history-item__content {
      background-color: $main;
      color: #fff;
    }

    .history-item__wrap {
      margin-left: auto;
    }
  }
}
</style>
