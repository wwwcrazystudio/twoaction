<template>
  <div class="promotion">
    <div class="container">
      <div class="promotion__wrap">
        <div class="promotion__head">
          <h2 class="promotion__heading">Рекламодателю</h2>

          <div class="promotion__current">
            Прямо сейчас активных предложений

            <div class="promotion__current-icon">37</div>
          </div>
        </div>

        <ul class="promotion__steps-list">
          <li class="promotion__steps-item">
            <div class="promotion__steps-item-img">
              <img src="~/assets/img/icons/step1.svg" alt="" />
            </div>
            <div class="promotion__steps-item-title">Шаг 1</div>
            <div class="promotion__steps-item-description">
              <b>Выбираете подходящую группу из всего каталога,</b> в
              соответствии с необходимой статистикой группы
            </div>
          </li>
          <li class="promotion__steps-item">
            <div class="promotion__steps-item-img">
              <img src="~/assets/img/icons/step2.svg" alt="" />
            </div>
            <div class="promotion__steps-item-title">Шаг 2</div>
            <div class="promotion__steps-item-description">
              <b>Заполняете анкету, выбираете шаблоны</b> рекламного материала
              или загружаете свои
            </div>
          </li>
          <li class="promotion__steps-item">
            <div class="promotion__steps-item-img">
              <img src="~/assets/img/icons/step3.svg" alt="" />
            </div>
            <div class="promotion__steps-item-title">Шаг 3</div>
            <div class="promotion__steps-item-description">
              <b>Выбираете комплексную отправку</b> рекламного заказа (больше 1
              группы) или одиночную
            </div>
          </li>
          <li class="promotion__steps-item">
            <div class="promotion__steps-item-img">
              <img src="~/assets/img/icons/step4.svg" alt="" />
            </div>
            <div class="promotion__steps-item-title">Шаг 4</div>
            <div class="promotion__steps-item-description">
              <b>Подтверждаете заказ</b> и отслеживаете активность!Наслаждайтесь
              результатом и не дамайте о лишнем.
            </div>
          </li>
        </ul>

        <NuxtLink to="/" class="promotion__btn">Стать рекламодателем</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promotion {
  &__wrap {
    background: url("data:image/svg+xml,%3Csvg width='1400' height='230' viewBox='0 0 1400 230' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-12 29.9756C211 -17.5 216 340.915 455.5 151.415C695 -38.0849 856 233.951 932 94.9757C1008 -43.9998 1241 -6.49995 1271 69.0009C1301 144.502 1280 195 1325 221.5C1370 248 1412 183.915 1412 183.915' stroke='%23FFA000' stroke-width='3'/%3E%3C/svg%3E%0A"),
      #fff4e1;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 60px;
    padding: rem(52px 108px);
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(40px);
  }

  &__heading {
    margin-bottom: 0;
  }

  &__current {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: rem(14px);
    margin-left: auto;

    &-icon {
      width: 50px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: rem(14px);
      color: #fff;
      background-image: url('~/assets/img/icons/fire.png');
      background-repeat: no-repeat;
    }
  }

  &__steps {
    &-list {
      @include unlist;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: rem(40px);
      margin-bottom: rem(46px);
    }

    &-item {
      background: #ffffff;
      box-shadow: 0px 14px 75px rgba(221, 121, 0, 0.23),
        0px 1.75302px 9.39116px rgba(221, 121, 0, 0.115);
      padding: rem(24px 32px);
      padding-bottom: rem(40px);
      border-radius: 24px;
      text-align: center;

      &-img {
        width: 130px;
        height: 130px;
        margin: auto;
        margin-bottom: rem(12px);

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      &-title {
        color: $main;
        font-weight: 500;
        font-size: rem(13px);
        margin-bottom: rem(5px);
      }

      &-description {
        font-size: rem(13.5px);
        line-height: 180%;

        b {
          font-weight: 700;
          display: block;
        }
      }
    }
  }

  &__btn {
    @extend %btn-accent;

    display: flex;
    width: 100%;
    margin: auto;
    max-width: 244px;
  }
}
</style>
