<template>
  <section class="promotion">
    <div class="container">
      <div class="promotion__wrap" data-aos="fade-down">
        <div class="promotion__head">
          <h2 class="promotion__heading">Рекламодателю</h2>

          <div class="promotion__current">
            <div class="promotion__current-text">
              Прямо сейчас активных предложений
            </div>

            <div class="promotion__current-icon">37</div>
          </div>
        </div>

        <StepsList class="promotion__steps-list" :steps="steps" />

        <NuxtLink to="/" class="promotion__btn">Стать рекламодателем</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      steps: [
        {
          img: require('~/assets/img/icons/step1.svg'),
          title: 'Шаг 1',
          description:
            '<b>Выбираете подходящую группу из всего каталога,</b> в соответствии с необходимой статистикой группы',
        },
        {
          img: require('~/assets/img/icons/step2.svg'),
          title: 'Шаг 2',
          description:
            '<b>Заполняете анкету, выбираете шаблоны</b> рекламного материала или загружаете свои',
        },
        {
          img: require('~/assets/img/icons/step3.svg'),
          title: 'Шаг 3',
          description:
            '  <b>Выбираете комплексную отправку</b> рекламного заказа (больше 1 группы) или одиночную',
        },
        {
          img: require('~/assets/img/icons/step4.svg'),
          title: 'Шаг 4',
          description:
            '<b>Подтверждаете заказ</b> и отслеживаете активность! Наслаждайтесь результатом и не дамайте о лишнем.',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.promotion {
  &__wrap {
    background: url("data:image/svg+xml,%3Csvg width='1400' height='230' viewBox='0 0 1400 230' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-12 29.9756C211 -17.5 216 340.915 455.5 151.415C695 -38.0849 856 233.951 932 94.9757C1008 -43.9998 1241 -6.49995 1271 69.0009C1301 144.502 1280 195 1325 221.5C1370 248 1412 183.915 1412 183.915' stroke='%23FFA000' stroke-width='3'/%3E%3C/svg%3E%0A"),
      #fff4e1;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 60px;
    padding: rem(52px 108px);

    @include media-breakpoint-down(xxl) {
      padding: rem(52px);
    }

    @include media-breakpoint-down(md) {
      padding: rem(40px 20px);
      margin: rem(0 -20px);
      border-radius: 0;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(40px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
      flex-direction: column;
      align-items: flex-start;
    }
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

    @include media-breakpoint-down(md) {
      margin: 0;
      margin-top: rem(20px);
      font-size: rem(13px);
    }

    &-text {
      max-width: 148px;
    }

    &-icon {
      width: 50px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: rem(14px);
      color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='50' viewBox='0 0 40 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.7756 0.219727C16.2066 0.607031 16.0949 0.851856 15.9384 2.05586C15.4915 5.4917 14.1064 8.5792 11.8573 11.1516C10.9729 12.1633 10.2411 12.8047 8.42169 14.1633C3.55108 17.8 0.7379 22.8409 0.258701 28.7901C-0.115029 33.4302 1.41202 38.4726 4.36046 42.334C4.99298 43.1624 6.63458 44.8366 7.49923 45.5351C11.5719 48.8248 16.7544 50.3996 21.8688 49.9015C27.1021 49.3918 31.8102 46.8949 35.2174 42.8223C38.4666 38.9386 40.1389 33.7622 39.7398 28.8242C39.3643 24.1788 37.7111 20.3172 34.624 16.8741C33.6855 15.8273 33.3884 15.6259 32.7822 15.6254C32.1032 15.6248 31.7876 15.9009 31.0373 17.1515C30.4152 18.1882 29.3203 19.6811 28.917 20.0421C28.7315 20.2082 28.7297 20.1982 28.815 19.4562C28.9403 18.3654 28.8327 15.8557 28.6046 14.5508C27.9027 10.5356 26.1184 6.98008 23.3694 4.11875C22.1591 2.85889 21.3005 2.12891 20.0371 1.28545C18.119 0.00498069 17.4245 -0.221972 16.7756 0.219727Z' fill='%23FFA000'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-size: 50px 50px;

      @include media-breakpoint-down(md) {
        font-size: rem(11px);
        background-size: 42px 42px;
        background-position: 4px 4px;
      }
    }
  }

  &__steps-list {
    &::v-deep {
      .steps-item__wrap {
        box-shadow: 0px 14px 75px rgba(221, 121, 0, 0.23),
          0px 1.75302px 9.39116px rgba(221, 121, 0, 0.115);
      }
    }
  }

  &__btn {
    @extend %btn-accent;

    display: flex;
    width: 100%;
    margin: auto;
    max-width: 244px;

    @include media-breakpoint-down(md) {
      max-width: 100%;
    }
  }
}
</style>
