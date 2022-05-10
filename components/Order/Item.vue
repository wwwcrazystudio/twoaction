<template>
  <li class="order-item">
    <div class="order-item__wrap">
      <div class="order-item__head">
        <div class="order-item__id">
          Номер заказа: <var>4860 2268 0846 1479</var>
        </div>
      </div>
      <div class="order-item__content">
        <div class="order-item__col">
          <h2 class="order-item__title">Рекламный пост</h2>

          <client-only>
            <button v-if="!isMobile" class="order-item__btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1364 0.484559C9.27201 0.622496 8.50876 0.940621 7.82394 1.4484C7.66335 1.56746 6.36913 2.83625 4.20457 4.99656C1.20088 7.9944 0.81294 8.39259 0.630158 8.66537C0.065564 9.50796 -0.130967 10.5328 0.086564 11.5C0.388439 12.8421 1.40156 13.8881 2.74163 14.241C3.14678 14.3477 3.84304 14.3741 4.27438 14.2993C4.82641 14.2035 5.38713 13.9607 5.83691 13.6227C5.97576 13.5184 7.33691 12.178 9.12338 10.3864C12.4785 7.02153 12.2917 7.22984 12.4686 6.65624C12.5619 6.35374 12.5697 5.80846 12.485 5.504C12.2679 4.72321 11.669 4.1354 10.8893 3.93768C10.3879 3.81056 9.86551 3.87068 9.37082 4.1125L9.07395 4.25759L7.0496 6.27724C5.64304 7.68053 5.00566 8.33724 4.9611 8.42921C4.7301 8.90577 5.09704 9.47009 5.63644 9.46787C5.91394 9.46674 5.93807 9.44553 7.99582 7.39053C9.3516 6.03659 9.98448 5.42531 10.0651 5.3919C10.2228 5.32656 10.5127 5.33146 10.6677 5.40206C10.9227 5.51818 11.0894 5.78568 11.0891 6.07812C11.0888 6.37071 11.1267 6.3294 7.94441 9.50134C4.73335 12.702 4.8016 12.6398 4.33957 12.7836C3.72782 12.9741 3.15138 12.9201 2.58097 12.6188C2.33963 12.4914 1.88716 12.0506 1.75328 11.8125C1.58269 11.5091 1.48994 11.1777 1.47335 10.8125C1.454 10.3869 1.5126 10.1063 1.70182 9.71874L1.84672 9.42187L5.14785 6.11521C6.96344 4.29656 8.55116 2.73115 8.67607 2.6365C9.53501 1.98568 10.6434 1.74875 11.7069 1.98859C12.8708 2.25109 13.8398 3.09446 14.2872 4.23437C14.4393 4.62206 14.4962 4.91265 14.5167 5.40625C14.5497 6.20203 14.3586 6.88521 13.9092 7.57812C13.8015 7.74415 12.9745 8.59131 10.477 11.0937C7.92741 13.6484 7.17238 14.4223 7.12319 14.5312C6.84504 15.1473 7.47188 15.7745 8.08957 15.4982C8.19945 15.4491 8.9416 14.7231 11.4831 12.1786C13.4893 10.1702 14.8083 8.82581 14.9244 8.67121C15.9012 7.37118 16.2216 5.79703 15.8243 4.24943C15.363 2.45271 13.9312 1.04031 12.1052 0.580809C11.5485 0.440715 10.6779 0.398153 10.1364 0.484559Z"
                  fill="#0085E6"
                />
              </svg>
              прикрепить креатив
            </button>
          </client-only>
        </div>

        <div class="order-item__col">
          <div class="order-item__group-info">
            <div class="order-item__group-img">
              <img src="~/assets/img/placeholder/group1.png" alt="" />
            </div>

            <div class="order-item__group-info-wrap">
              <div class="order-item__group-title-wrap">
                <div
                  class="order-item__group-type order-item__group-type--inst"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM10.2422 0H1.75781C0.7875 0 0 0.7875 0 1.75781V10.2422C0 11.2125 0.7875 12 1.75781 12H10.2422C11.2125 12 12 11.2125 12 10.2422V1.75781C12 0.7875 11.2125 0 10.2422 0ZM6 9.1875C4.25627 9.1875 2.83594 7.76716 2.83594 6.02344C2.83594 4.27966 4.25627 2.85938 6 2.85938C7.74373 2.85938 9.16406 4.27966 9.16406 6.02344C9.16406 7.76716 7.74373 9.1875 6 9.1875ZM9.86719 2.85938C9.48047 2.85938 9.16406 2.54297 9.16406 2.15625C9.16406 1.76953 9.48047 1.45312 9.86719 1.45312C10.2539 1.45312 10.5703 1.76953 10.5703 2.15625C10.5703 2.54297 10.2539 2.85938 9.86719 2.85938ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625Z"
                      fill="#FFA000"
                    />
                  </svg>
                </div>
                <h2 class="order-item__group-title">Business marketing</h2>
              </div>
              <div class="order-item__group-count">
                <var>4 590 620</var> подписчика
              </div>
            </div>
          </div>
        </div>

        <div class="order-item__col">
          <div class="order-item__meta">
            Бюджет проекта:
            <var>2 850 ₽</var>
          </div>
        </div>

        <div class="order-item__col">
          <div class="order-item__meta">
            Дата открытия заказа:
            <var>10.10.2021</var>
          </div>
        </div>

        <div class="order-item__col">
          <div class="order-item__meta">
            Период опубликования:
            <var>10.10.2021-17.10.2021</var>
          </div>
        </div>

        <div class="order-item__col">
          <NuxtLink to="/" class="order-item__link"> Подробнее </NuxtLink>

          <client-only>
            <button v-if="isMobile" class="order-item__btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1364 0.484559C9.27201 0.622496 8.50876 0.940621 7.82394 1.4484C7.66335 1.56746 6.36913 2.83625 4.20457 4.99656C1.20088 7.9944 0.81294 8.39259 0.630158 8.66537C0.065564 9.50796 -0.130967 10.5328 0.086564 11.5C0.388439 12.8421 1.40156 13.8881 2.74163 14.241C3.14678 14.3477 3.84304 14.3741 4.27438 14.2993C4.82641 14.2035 5.38713 13.9607 5.83691 13.6227C5.97576 13.5184 7.33691 12.178 9.12338 10.3864C12.4785 7.02153 12.2917 7.22984 12.4686 6.65624C12.5619 6.35374 12.5697 5.80846 12.485 5.504C12.2679 4.72321 11.669 4.1354 10.8893 3.93768C10.3879 3.81056 9.86551 3.87068 9.37082 4.1125L9.07395 4.25759L7.0496 6.27724C5.64304 7.68053 5.00566 8.33724 4.9611 8.42921C4.7301 8.90577 5.09704 9.47009 5.63644 9.46787C5.91394 9.46674 5.93807 9.44553 7.99582 7.39053C9.3516 6.03659 9.98448 5.42531 10.0651 5.3919C10.2228 5.32656 10.5127 5.33146 10.6677 5.40206C10.9227 5.51818 11.0894 5.78568 11.0891 6.07812C11.0888 6.37071 11.1267 6.3294 7.94441 9.50134C4.73335 12.702 4.8016 12.6398 4.33957 12.7836C3.72782 12.9741 3.15138 12.9201 2.58097 12.6188C2.33963 12.4914 1.88716 12.0506 1.75328 11.8125C1.58269 11.5091 1.48994 11.1777 1.47335 10.8125C1.454 10.3869 1.5126 10.1063 1.70182 9.71874L1.84672 9.42187L5.14785 6.11521C6.96344 4.29656 8.55116 2.73115 8.67607 2.6365C9.53501 1.98568 10.6434 1.74875 11.7069 1.98859C12.8708 2.25109 13.8398 3.09446 14.2872 4.23437C14.4393 4.62206 14.4962 4.91265 14.5167 5.40625C14.5497 6.20203 14.3586 6.88521 13.9092 7.57812C13.8015 7.74415 12.9745 8.59131 10.477 11.0937C7.92741 13.6484 7.17238 14.4223 7.12319 14.5312C6.84504 15.1473 7.47188 15.7745 8.08957 15.4982C8.19945 15.4491 8.9416 14.7231 11.4831 12.1786C13.4893 10.1702 14.8083 8.82581 14.9244 8.67121C15.9012 7.37118 16.2216 5.79703 15.8243 4.24943C15.363 2.45271 13.9312 1.04031 12.1052 0.580809C11.5485 0.440715 10.6779 0.398153 10.1364 0.484559Z"
                  fill="#0085E6"
                />
              </svg>
              прикрепить креатив
            </button>
          </client-only>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    isMobile(this: any) {
      return this.$isMobile()
    },
  },
})
</script>

<style lang="scss" scoped>
.order-item {
  &__wrap {
    background: #ffffff;
    border: 1px solid rgba(186, 186, 186, 0.2);
    box-shadow: 0px 6px 26px rgba(117, 117, 117, 0.1);
    border-radius: 22px;
    overflow: hidden;
  }

  &__head {
    padding: rem(12px 45px);
    color: #fff;
    background-color: $main;

    @include media-breakpoint-down(xxl) {
      padding: rem(12px 26px);
    }
  }

  &__col {
    flex: 1 1 auto;

    &:nth-of-type(2) {
      flex: 0 0 350px;

      @include media-breakpoint-down(xl) {
        flex: 1 1 auto;
      }
    }

    &:last-of-type {
      flex: 0 0 fit-content;
    }
  }

  &__content {
    padding: rem(30px 45px);
    display: flex;
    align-items: center;

    @include media-breakpoint-down(xxl) {
      padding: rem(26px);
    }

    @include media-breakpoint-down(xl) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__id {
    font-size: rem(13px);

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }

    var {
      text-decoration: underline;
    }
  }

  &__title {
    font-size: rem(22px);
    margin-bottom: rem(16px);

    @include media-breakpoint-down(md) {
      font-size: rem(17px);
    }
  }

  &__btn {
    @extend %btn-light;

    text-decoration: underline;
    padding: rem(8px 28px);
    font-size: rem(13.5px);
    border-radius: 11px;
    margin-left: auto;

    svg {
      margin-right: rem(8px);
    }

    @include media-breakpoint-down(xl) {
      margin-bottom: rem(12px);
    }

    @include media-breakpoint-down(md) {
      margin-bottom: 0;
      font-size: rem(12px);
    }
  }

  &__group {
    &-info {
      display: flex;
      align-items: center;

      @include media-breakpoint-down(xl) {
        margin-bottom: rem(22px);
      }
    }

    &-img {
      width: 74px;
      height: 74px;
      border: 1px solid #ecf7ff;
      border-radius: 50%;
      margin-right: rem(24px);

      @include media-breakpoint-down(md) {
        width: 54px;
        height: 54px;
        margin-right: rem(12px);
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &-title {
      font-size: rem(22px);
      font-weight: 500;
      margin-bottom: 0;

      @include media-breakpoint-down(md) {
        font-size: rem(16px);
        margin-bottom: 0;
      }
    }

    &-count {
      font-weight: 400;
      font-size: rem(13px);

      @include media-breakpoint-down(md) {
        font-size: rem(11px);
      }

      var {
        color: $main;
        font-weight: 500;
      }
    }

    &-title-wrap {
      display: flex;
      align-items: center;
      margin-bottom: rem(12px);

      @include media-breakpoint-down(md) {
        margin-bottom: 0;
      }
    }

    &-type {
      border-radius: 12px;
      margin-right: rem(8px);
      width: 12px;
      height: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__meta {
    font-size: rem(13px);

    @include media-breakpoint-down(xl) {
      margin-bottom: rem(10px);
    }

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }

    var {
      margin-top: rem(4px);
      font-size: rem(18px);
      display: block;
      font-weight: 500;
      color: $main;

      @include media-breakpoint-down(md) {
        font-size: rem(14px);
        display: inline;
      }
    }
  }

  &__link {
    font-size: rem(13.5px);
    color: $main;
    display: block;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(24px);
    }
  }
}
</style>
