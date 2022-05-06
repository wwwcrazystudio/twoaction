<template>
  <div class="service-item">
    <div class="service-item__wrap">
      <div class="service-item__head">
        <div class="service-item__icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.17691 0.130629C1.66238 0.451918 0.443164 1.67793 0.130234 3.19426C0.0602344 3.53348 0.0566406 3.81524 0.0566406 9.00001C0.0566406 14.1848 0.0602344 14.4665 0.130234 14.8058C0.434219 16.2787 1.53555 17.4256 3.04391 17.8399L3.35641 17.9258H9.00094H14.6455L14.9775 17.8354C16.5019 17.4204 17.62 16.2043 17.8889 14.6687C17.9746 14.1795 17.9746 3.82051 17.8889 3.33129C17.7091 2.30465 17.1279 1.37657 16.2904 0.77891C15.9731 0.552543 15.3878 0.274379 14.9913 0.161605L14.6845 0.0743395L9.09859 0.0668786C3.82531 0.0598082 3.49387 0.063402 3.17691 0.130629ZM14.6234 1.36668C14.7645 1.40079 15.0293 1.50129 15.2119 1.58997C15.4767 1.7186 15.612 1.81875 15.8799 2.08461C16.2351 2.43707 16.4252 2.73219 16.5854 3.17969L16.6763 3.4336L16.6873 7.10548C16.6933 9.12501 16.6934 11.1196 16.6875 11.538L16.6767 12.2986L14.9543 10.3263C14.0069 9.24157 13.1387 8.27032 13.0248 8.16801C12.7949 7.96126 12.3755 7.74661 12.0478 7.66786C11.7725 7.60173 11.2301 7.60161 10.9541 7.66762C10.6399 7.74278 10.1969 7.97032 9.97316 8.17145C9.8657 8.26809 9.24141 8.95985 8.58586 9.70872C7.93031 10.4576 7.38898 11.0703 7.38289 11.0703C7.3768 11.0703 7.19203 10.8512 6.9723 10.5834C6.47387 9.97579 6.19641 9.71719 5.87125 9.55712C5.48746 9.36817 5.14527 9.3002 4.70406 9.32532C4.24066 9.35169 3.92937 9.45555 3.54672 9.71149C3.29176 9.882 3.14168 10.0445 2.29117 11.0705L1.32516 12.2359L1.31391 7.95192C1.30125 3.14403 1.28684 3.41368 1.59 2.78907C1.80738 2.34122 2.31516 1.8236 2.75273 1.60379C3.3818 1.28786 2.92395 1.30969 8.97891 1.30704C13.7718 1.30497 14.3954 1.31153 14.6234 1.36668ZM4.33246 3.24778C3.85902 3.41676 3.53258 3.70852 3.32379 4.14922C3.20824 4.39305 3.20016 4.43836 3.20016 4.84067C3.20016 5.25192 3.20613 5.28337 3.3341 5.54379C3.85266 6.5993 5.22812 6.81919 6.02719 5.9743C6.81301 5.1434 6.5759 3.83977 5.54699 3.33426C5.30598 3.21586 5.23602 3.20016 4.90246 3.18965C4.61859 3.18071 4.48102 3.19473 4.33246 3.24778Z"
              fill="white"
            />
          </svg>
        </div>
        <h3 class="service-item__title">Рекламный пост</h3>
      </div>

      <div class="service-item__description">
        Размещение рекламного поста в Инстаграм с вашим креативом, на 12 или 24
        часа
      </div>

      <div class="service-item__form">
        <div class="service-item__form-row">
          <div class="service-item__form-label">Формат размещения</div>
          <FormSelect
            class="service-item__select"
            :options="[{ label: '123', value: '123' }]"
          />
          <div class="service-item__form-price">от <span>550 ₽</span></div>
        </div>
      </div>

      <button class="service-item__btn">Заказать рекламу</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-item {
  &__wrap {
    padding: rem(34px);
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;

    @include media-breakpoint-down(md) {
      padding: rem(24px);
    }
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(22px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }
  }

  &__icon {
    margin-right: rem(20px);
    width: 52px;
    height: 52px;
    background-color: $main;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 9px 20px rgba(0, 98, 169, 0.2);
    border-radius: 14px;

    @include media-breakpoint-down(md) {
      margin-right: rem(16px);
    }
  }

  &__title {
    font-size: rem(22px);

    @include media-breakpoint-down(md) {
      font-size: rem(16px);
    }
  }

  &__description {
    font-size: rem(13px);
    margin-bottom: rem(24px);

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(20px);
    }
  }

  &__form {
    margin-bottom: rem(36px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }

    &-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    &-label {
      font-weight: 500;
      font-size: rem(14px);
      max-width: 100px;

      @include media-breakpoint-down(md) {
        font-size: rem(13px);
        width: 100%;
        max-width: none;
        margin-bottom: rem(12px);
      }
    }

    &-price {
      color: $main;
      font-size: rem(14px);

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }

      span {
        font-size: rem(20px);
        font-weight: 500;

        @include media-breakpoint-down(md) {
          font-size: rem(18px);
        }
      }
    }
  }

  &__select {
    margin: rem(0 16px);
    max-width: 180px;
    flex: 1 1 50%;

    @include media-breakpoint-down(md) {
      margin: 0;
      margin-right: rem(16px);
    }
  }

  &__btn {
    @extend %btn-main;

    width: 100%;
  }
}
</style>
