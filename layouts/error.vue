<template>
  <div class="error-page">
    <div class="error-page__wrap">
      <div class="container">
        <h1 class="error-page__heading">Произошла ошибка</h1>
        <div v-if="error.statusCode === 404" class="error-page__subheading">
          Упс...Страница не найдена! Куда дальше?
        </div>
        <NuxtLink
          v-if="error.statusCode === 404"
          to="/"
          class="error-page__btn"
        >
          Каталог сообществ
        </NuxtLink>
        <div v-if="error.statusCode === 404" class="error-page__img">
          <img src="~/assets/img/404.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'landing',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.error-page {
  &__wrap {
    background-color: rgba(255, 175, 40, 0.14);
    padding-top: rem(160px);
    position: relative;
    padding-bottom: rem(50px);
    z-index: 10;
    min-height: 100vh;

    &::after {
      content: '';
      background-color: $main;
      position: absolute;
      left: -20%;
      right: 0;
      width: 135%;
      height: 370px;
      bottom: -110px;
      clip-path: ellipse(50% 50% at 50% 50%);
      z-index: -1;
    }
  }

  &__heading {
    text-align: center;
    font-size: rem(48px);
    margin-bottom: rem(16px);
  }

  &__subheading {
    font-size: rem(13.5px);
    margin-bottom: rem(32px);
    text-align: center;
  }

  &__btn {
    @extend %btn-main;

    display: flex;
    width: 100%;
    max-width: 400px;
    margin: auto;
    position: relative;
    z-index: 10;
  }

  &__img {
    margin: auto;
    margin-top: -70px;
    width: max-content;
    height: 70vh;

    img {
      max-height: 100%;
    }
  }
}
</style>
