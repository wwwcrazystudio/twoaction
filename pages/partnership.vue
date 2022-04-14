<template>
  <div class="partnership">
    <div class="partnership__wrap">
      <div class="container">
        <h1 class="partnership__heading">Партнерская программа</h1>
        <div class="partnership__subheading">
          Вы можете получать дополнительный доход от заказов привлеченных
          рекламодателей
        </div>
        <div class="partnership__partnership-info partnership-info">
          <div class="partnership-info__wrap">
            <div class="partnership-info__icon">
              <img src="~/assets/img/icons/percentage.png" alt="" />
            </div>
            <h2 class="partnership-info__heading">Как это работает?</h2>
            <div class="partnership-info__description">
              <p>
                Вы можете получать дополнительный доход от заказов привлеченных
                рекламодателей. За приведенного клиента (рекламодатель оформил
                покупку) предусмотрено вознаграждение в <span>3,9%</span> от
                стоимости сделки.
              </p>
              <p>
                Например, клиент заказал размещение в канале за
                <span>10 000 руб.</span> (цена в каталоге), из этой суммы
                <span>3,9% </span>составляет <span>390 руб.</span>
              </p>
              <p>
                Для того, чтобы пригласить рекламодателя, отправьте вашу
                уникальную реферальную ссылку. В пользование представлены 5
                видов ссылок.
              </p>
            </div>
            <NuxtLink to="/" class="partnership-info__btn">
              Стать партнером
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'landing',
})
</script>

<style lang="scss" scoped>
.partnership {
  &__wrap {
    background-color: rgba(255, 175, 40, 0.14);
    position: relative;
    padding-bottom: rem(50px);
    z-index: 10;

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

    @include media-breakpoint-down(md) {
      font-size: rem(26px);
    }
  }

  &__subheading {
    font-size: rem(13.5px);
    margin-bottom: rem(32px);
    text-align: center;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(22px);
    }
  }
}

.partnership-info {
  &__wrap {
    padding: rem(40px 80px);
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    max-width: 880px;
    margin: auto;

    @include media-breakpoint-down(md) {
      padding: rem(26px 22px);
    }
  }

  &__icon {
    width: 52px;
    height: 52px;
    background-color: $main;
    margin: auto;
    margin-bottom: rem(24px);
    box-shadow: 0px 9px 20px rgba(0, 98, 169, 0.2);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__heading {
    font-weight: 500;
    font-size: rem(24px);
    margin-bottom: rem(24px);
    text-align: center;

    @include media-breakpoint-down(md) {
      font-size: rem(16px);
      margin-bottom: rem(14px);
    }
  }

  &__description {
    font-size: rem(14px);
    line-height: 186%;
    margin-bottom: rem(38px);
    text-align: center;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(28px);
    }

    span {
      color: $main;
    }
  }

  &__btn {
    @extend %btn-main;

    display: flex;
    width: 100%;
    max-width: 400px;
    margin: auto;
  }
}
</style>
