<template>
  <li class="favorite-item">
    <div class="favorite-item__wrap">
      <div class="favorite-item__icon">
        <img :src="item.img" :alt="item.title" />
      </div>

      <div class="favorite-item__info">
        <div class="favorite-item__title-wrap">
          <button class="favorite-item__favourite">
            <svg
              width="16"
              height="16"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.46443 0.567208C1.84196 0.645372 1.32122 0.901231 0.878995 1.34625C0.48335 1.74437 0.245048 2.16654 0.106572 2.71471C-0.133897 3.66658 0.0409466 4.60386 0.623154 5.48384C0.996475 6.04808 1.4779 6.56597 2.36337 7.35582C2.92663 7.85824 4.64332 9.32277 4.72666 9.37195C4.80517 9.41827 4.83435 9.42382 5.00009 9.42382C5.16574 9.42382 5.19508 9.41825 5.27353 9.37202C5.35711 9.32277 7.07767 7.85478 7.63682 7.35566C8.52473 6.5631 9.00422 6.04732 9.37703 5.48384C9.95924 4.60386 10.1341 3.66658 9.89362 2.71471C9.75514 2.16654 9.51684 1.74437 9.12119 1.34625C8.72694 0.949512 8.30486 0.720567 7.75152 0.603321C7.47516 0.544747 6.96324 0.53963 6.71988 0.592969C6.04549 0.740821 5.52697 1.07908 5.05381 1.67984L5.00009 1.74805L4.94638 1.67984C4.48146 1.08953 3.97082 0.751309 3.3204 0.602872C3.12626 0.558575 2.68103 0.54002 2.46443 0.567208Z"
                fill="#0085E5"
              />
            </svg>
          </button>
          <div
            class="favorite-item__group-type favorite-item__group-type--inst"
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
          <h2 class="favorite-item__title">{{ item.title }}</h2>
        </div>
        <div class="favorite-item__cat">кино и игры</div>
      </div>

      <div class="favorite-item__count">
        <var>{{ item.subscribers }}</var> подписчика
      </div>

      <div class="favorite-item__footer">
        Стоимость рекламы ~
        <var class="favorite-item__price">{{ item.price }}</var>
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
})
</script>

<style lang="scss" scoped>
.favorite-item {
  &__wrap {
    padding: rem(25px 20px);
    padding-top: rem(35px);
    padding-bottom: rem(40px);
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 22px;
    position: relative;
    text-align: center;

    @include media-breakpoint-down(md) {
      padding: rem(24px 16px);
      padding-bottom: rem(40px);
      border-radius: 14px;
    }
  }

  &__favourite {
    width: 32px;
    height: 32px;
    position: absolute;
    left: rem(22px);
    top: rem(22px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.2;
  }

  &__group-type {
    width: 32px;
    height: 32px;
    border-radius: 12px;
    position: absolute;
    right: rem(22px);
    top: rem(22px);
    display: flex;
    align-items: center;
    justify-content: center;

    &--inst {
      background: rgba(255, 160, 0, 0.06);
    }
  }

  &__icon {
    width: 66px;
    height: 66px;
    border: 1px solid #ecf7ff;
    border-radius: 50%;
    margin: auto;
    margin-bottom: rem(18px);

    @include media-breakpoint-down(md) {
      width: 60px;
      height: 60px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__title {
    font-size: rem(18px);
    margin-bottom: rem(8px);

    @include media-breakpoint-down(md) {
      font-size: rem(17px);
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
    margin: auto;
    margin-bottom: rem(12px);

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
      margin-bottom: rem(8px);
    }
  }

  &__count {
    font-size: rem(13px);
    margin-bottom: rem(24px);

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
    }

    var {
      color: $main;
      font-weight: 500;
      font-style: normal;
    }
  }

  &__footer {
    width: fit-content;
    margin: 0 auto;
    font-size: rem(13px);
    @include media-breakpoint-down(md) {
      font-size: rem(11px);
    }
  }

  &__price {
    color: $main;
    font-size: rem(14px);
    font-weight: 500;
    @include media-breakpoint-down(md) {
      font-size: rem(11px);
    }
  }
}
</style>
