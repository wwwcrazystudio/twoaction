<template>
  <div class="group-info">
    <div class="group-info__content">
      <div class="group-info__logo">
        <div
          v-for="logo in logos"
          :key="logo.title"
          class="group-info__logo-item"
        >
          <img :src="logo.src" alt="Crypto BIT" />
        </div>
      </div>

      <div class="group-info__info">
        <div class="group-info__title">Crypto BIT</div>
        <div class="group-info__count"><var>1 268 846</var> подписчика</div>
        <div class="group-info__cat">кино и игры</div>
      </div>

      <div class="group-info__meta">
        <div class="group-info__meta-list">
          <div class="group-info__meta-item">
            <var>26,32%</var>
            ERP
          </div>
          <div class="group-info__meta-item">
            <var>3,22 ₽</var>
            CPV
          </div>
        </div>
        <NuxtLink to="/" class="group-info__link">
          Открыть в отдельном окне
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    logos: {
      type: Array,
      required: true,
    },
    /* info: {
      type: Object,
      required: true,
    }, */
  },
})
</script>

<style lang="scss" scoped>
.group-info {
  &__content {
    padding: rem(20px 24px);
    display: flex;
    align-items: center;
    background: $lightblue;
    border-radius: 8px;
    flex: 1;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__count {
    font-size: rem(13px);
    var {
      font-weight: 500;
      color: $main;
    }
  }

  &__title {
    font-size: rem(22px);
    font-weight: 500;
    margin-bottom: rem(8px);

    @include media-breakpoint-down(sm) {
      text-align: center;
    }
  }

  &__cat {
    font-weight: 500;
    font-size: rem(13px);
    padding: rem(4px 24px);
    background-color: $main;
    color: #fff;
    border-radius: 20px;
    width: max-content;
    margin-top: rem(12px);

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
      margin-bottom: rem(8px);
    }

    @include media-breakpoint-down(sm) {
      margin: 8px auto;
    }
  }

  &__logo {
    margin-right: rem(24px);
    display: flex;

    @include media-breakpoint-down(sm) {
      margin-right: 0;
      margin-bottom: rem(18px);
    }
  }

  &__logo-item {
    display: flex;
    margin-left: rem(-15px);

    img {
      width: 74px;
      height: 74px;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid #cbdef0;
    }

    &:first-of-type {
      margin-left: 0;
    }
  }

  &__subscribers {
    font-size: rem(15px);
    margin-bottom: rem(6px);

    var {
      color: $main;
      font-size: rem(13px);
    }
  }

  &__meta {
    flex-grow: 1;

    &-list {
      @include unlist;

      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      background: $main;
      color: #fff;
      width: 100%;
      max-width: 114px;
      font-size: 11px;
      text-transform: uppercase;
      padding: rem(17px);
      line-height: 18px;
      margin-left: rem(8px);

      var {
        font-size: rem(14.5px);
        display: block;
      }

      @include media-breakpoint-down(md) {
        max-width: 80px;
      }
    }
  }

  &__link {
    font-size: rem(13.5px);
    margin-top: rem(8px);
    display: flex;
    justify-content: flex-end;
  }
}
</style>
