<template>
  <main class="profile-page">
    <div class="profile-page__wrap">
      <div class="container">
        <div class="profile-page__content">
          <div class="profile-page__user-card user-card">
            <div class="user-card__name">Николай Мирный</div>
            <div class="user-card__online-status">
              Был на сайте 4 ч. 19 мин. назад
            </div>
            <div class="user-card__box">
              <div class="user-card__box-wrap">
                <div class="user-card__img">
                  <img src="~/assets/img/profile-page__ex.png" alt="" />
                </div>
                <div class="user-card__role">Рекламодатель</div>
                <div class="user-card__reg-date">
                  на TwoAction с 12 июня 2022 г.
                </div>
                <div class="user-card__score">
                  <div class="user-card__score-text">Средняя оценка:</div>
                  <div class="user-card__score-icon">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.71989 0.910628C6.54369 0.960612 6.36568 1.07127 6.24296 1.20712C6.16894 1.28904 5.92583 1.75295 5.42139 2.77481C5.02734 3.57306 4.68809 4.23964 4.6675 4.25613C4.64688 4.27262 3.92251 4.38782 3.05777 4.5121C2.11115 4.64813 1.42953 4.75866 1.34482 4.78983C1.04825 4.89901 0.830865 5.12935 0.733686 5.43744C0.639924 5.73469 0.678205 6.02812 0.845029 6.29097C0.888643 6.35969 1.44014 6.91758 2.07055 7.53074C2.70096 8.14389 3.22197 8.66599 3.22834 8.69096C3.23474 8.71589 3.11932 9.43769 2.97188 10.2949C2.82444 11.1521 2.70345 11.9097 2.70304 11.9784C2.70145 12.2464 2.86997 12.6003 3.07286 12.7551C3.23143 12.876 3.46131 12.9667 3.64719 12.9816C3.95937 13.0067 3.84707 13.0577 6.21132 11.8152C6.61484 11.6032 6.9685 11.4297 6.99729 11.4297C7.02606 11.4297 7.69262 11.7676 8.4785 12.1806C9.45517 12.6938 9.95444 12.9415 10.056 12.9632C10.638 13.0876 11.2272 12.6491 11.277 12.0544C11.2888 11.9135 11.2401 11.5829 11.0182 10.2967C10.8481 9.31051 10.7536 8.69637 10.7679 8.66974C10.7805 8.64619 11.303 8.12923 11.9289 7.52089C12.5548 6.91257 13.1024 6.35886 13.1459 6.29042C13.3123 6.02812 13.3506 5.73447 13.2569 5.43744C13.1597 5.12946 12.9426 4.89931 12.6457 4.78966C12.5607 4.75824 11.8833 4.64808 10.9328 4.51109C10.068 4.38645 9.34306 4.27101 9.32173 4.25455C9.3004 4.23809 8.96041 3.57068 8.56617 2.77142C7.77831 1.17422 7.7525 1.13301 7.4457 0.981968C7.24303 0.88219 6.92891 0.851319 6.71989 0.910628ZM7.06926 1.77179C7.09789 1.79 7.82529 3.2305 8.37033 4.34836C8.68074 4.98498 8.83939 5.09386 9.62027 5.20624C9.88345 5.24412 10.5725 5.34321 11.1515 5.42647C11.7305 5.50973 12.2503 5.59067 12.3065 5.60634C12.424 5.6391 12.4678 5.73488 12.4056 5.82323C12.3851 5.85232 11.8515 6.37926 11.2197 6.9942C9.97615 8.20478 9.95518 8.2298 9.89458 8.57548C9.86311 8.7551 9.85105 8.67422 10.2926 11.2445C10.4193 11.9818 10.4215 12.0042 10.3728 12.058C10.3453 12.0884 10.3023 12.1133 10.2773 12.1133C10.2523 12.1133 9.59933 11.7813 8.82623 11.3755C8.05314 10.9697 7.36578 10.619 7.29876 10.5962C7.11523 10.5336 6.82071 10.5434 6.6398 10.618C6.55709 10.6521 5.87612 11.0025 5.12654 11.3966C4.37697 11.7908 3.7421 12.1133 3.71574 12.1133C3.68938 12.1133 3.64517 12.0883 3.61752 12.0577C3.56849 12.0035 3.57391 11.9635 3.83748 10.4376C3.99582 9.52092 4.10659 8.80509 4.10495 8.70898C4.10167 8.51557 4.03821 8.31536 3.93053 8.15885C3.8879 8.09689 3.35108 7.55786 2.73763 6.96097C2.12414 6.36411 1.60546 5.85205 1.58498 5.82304C1.52264 5.73483 1.56649 5.63901 1.68402 5.60675C1.74026 5.5913 2.47535 5.47938 3.31753 5.35803C4.67458 5.16252 4.86746 5.1287 5.01285 5.06075C5.18536 4.98008 5.34819 4.83615 5.44827 4.67578C5.48111 4.62314 5.81328 3.95869 6.18639 3.19922C6.55952 2.43974 6.8842 1.80299 6.90791 1.78418C6.95658 1.7456 7.02034 1.7407 7.06926 1.77179Z"
                        fill="#0085E5"
                      />
                    </svg>
                  </div>
                  <div class="user-card__score-valu">4.8</div>
                </div>
                <button class="user-card__report-btn">Пожаловаться</button>
              </div>
            </div>
          </div>
          <div class="profile-page__info profile-info">
            <div class="profile-info__verify">
              <div class="profile-info__verify-icon">
                <img src="~/assets/img/icons/verification-icon.png" alt="" />
              </div>
              <div class="profile-info__verify-text">
                Подтвержденный аккаунт
              </div>
            </div>
            <div class="profile-info__about-heading">О себе</div>
            <div class="profile-info__about-text">
              Отличная и коммуникабельная администрация! Очень оперативно и
              осторожно исполнили заказ. Обязательно буду обращаться еще.
            </div>

            <ul class="profile-info__meta">
              <li class="profile-info__meta-item">
                <div class="profile-info__meta-item-icon">
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.996094 0.290846C0.842719 0.339189 0.581125 0.610064 0.534094 0.769252C0.504719 0.868658 0.496094 2.56832 0.496094 8.24722V15.5966L0.572813 15.6733C0.648875 15.7494 0.654344 15.75 1.24609 15.75C1.83784 15.75 1.84331 15.7494 1.91937 15.6733L1.99609 15.5966V8.24722C1.99609 2.65991 1.98719 0.868158 1.95894 0.773877C1.9045 0.592158 1.68256 0.359939 1.50578 0.299689C1.34062 0.243408 1.15672 0.240221 0.996094 0.290846ZM8.71484 0.922346C8.21103 0.979189 7.92591 1.02644 6.63672 1.26672C6.05234 1.37563 5.36328 1.49531 5.10547 1.53272C4.32487 1.64594 3.018 1.65044 2.56641 1.54144L2.49609 1.52447V5.77447V10.0245L2.56641 10.0417C2.80844 10.1011 3.38497 10.1314 3.94922 10.1144C4.8765 10.0866 5.58425 9.99663 6.81162 9.7506C8.33587 9.44504 9.04553 9.36213 9.94922 9.384C10.5828 9.39935 11.0324 9.45735 11.5156 9.5861C11.7733 9.65482 11.8497 9.64647 11.933 9.54057C11.9956 9.461 11.9961 9.42638 11.9961 5.39063C11.9961 0.681065 12.0412 1.20891 11.6294 1.098C11.0635 0.945565 10.6738 0.899127 9.87109 0.888471C9.3535 0.881564 8.97891 0.892564 8.71484 0.922346Z"
                      fill="#0085E5"
                    />
                  </svg>
                </div>
                <var>12</var> созданных заказов
              </li>
              <li class="profile-info__meta-item">
                <div class="profile-info__meta-item-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.16069 0.0466265C8.01976 0.148439 7.99682 0.246158 7.99682 0.744815C7.99682 1.28163 8.01857 1.24878 7.66247 1.24957C7.55594 1.24982 7.30282 1.27172 7.09997 1.29828C4.26038 1.67003 1.88376 3.62235 0.995944 6.31251C0.817507 6.8532 0.730726 7.24048 0.668195 7.77498C0.33957 10.5844 1.68226 13.3704 4.09057 14.876C5.82841 15.9624 8.00929 16.2805 9.96776 15.7333C10.4409 15.6011 10.7828 15.4697 11.2624 15.2357C13.2246 14.2785 14.6644 12.4898 15.1861 10.3612C15.2998 9.89707 15.3821 9.31757 15.3646 9.10345C15.3473 8.89117 15.2318 8.71604 15.0515 8.62879C14.9235 8.56685 14.8651 8.56251 14.1578 8.56251C13.3492 8.56251 13.2579 8.57673 13.0958 8.72807C12.9784 8.83767 12.9402 8.93935 12.8864 9.28501C12.7619 10.0855 12.5221 10.7099 12.0935 11.3504C10.8121 13.265 8.37538 14.0249 6.20529 13.1867C4.88532 12.6768 3.80941 11.5537 3.34707 10.2031C3.18132 9.71889 3.11804 9.35085 3.09988 8.76564C3.08223 8.19529 3.12235 7.82035 3.25144 7.34973C3.79507 5.36829 5.52557 3.91897 7.58751 3.71832C7.75247 3.70226 7.9111 3.68876 7.94004 3.68832C7.98682 3.6876 7.99369 3.74444 8.00254 4.20576L8.01244 4.72404L8.11847 4.81869C8.30951 4.98922 8.2886 4.99769 10.5906 3.81854C11.7335 3.23307 12.7214 2.71016 12.7859 2.6565C12.9322 2.53472 12.9419 2.41825 12.8171 2.28257C12.6952 2.14997 8.53176 0.0271265 8.35807 0.00897022C8.27291 9.52072e-05 8.20801 0.0124702 8.16069 0.0466265Z"
                      fill="#0085E5"
                    />
                  </svg>
                </div>
                <var>4</var> повторных заказа
              </li>
            </ul>
          </div>
        </div>

        <div class="profile-page__reviews">
          <Reviews class="profile__profile-reviews" :reviews="reviews" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      personalInputs: [
        {
          label: 'Ваш E-mail',
          type: 'email',
          value: 'kudryavtsevadarya@gmail.com',
        },
        {
          label: 'Ваш номер телефона',
          type: 'tel',
          value: '+ 7 (940) 730 - 04 - 20 ',
        },
        {
          label: 'Ваш логин',
          type: 'text',
          value: 'kudryavtsevadarya',
        },
      ],
      reviews: [
        {
          img: require('~/assets/img/placeholder/group1.png'),
          author: 'Николай',
          date: '18.11.2021',
          title: 'Рекалмный пост',
          content:
            'Отличная и коммуникабельная администрация! Очень оперативно и осторожно исполнили заказ. Обязательно буду обращаться еще.',
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          author: 'Алексей',
          date: '08.11.2021',
          title: 'Реклама в сториз',
          content:
            'Отличная и коммуникабельная администрация! Очень оперативно и осторожно исполнили заказ. Обязательно буду обращаться еще.',
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          author: 'Юрий',
          date: '24.10.2021',
          title: 'Накрутка подписчиков',
          content:
            'Отличная и коммуникабельная администрация! Очень оперативно и осторожно исполнили заказ. Обязательно буду обращаться еще.',
        },
        {
          img: require('~/assets/img/placeholder/group1.png'),
          author: 'Николай',
          date: '18.11.2021',
          title: 'Рекалмный пост',
          content:
            'Отличная и коммуникабельная администрация! Очень оперативно и осторожно исполнили заказ. Обязательно буду обращаться еще.',
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          author: 'Алексей',
          date: '08.11.2021',
          title: 'Реклама в сториз',
          content:
            'Отличная и коммуникабельная администрация! Очень оперативно и осторожно исполнили заказ. Обязательно буду обращаться еще.',
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          author: 'Юрий',
          date: '24.10.2021',
          title: 'Накрутка подписчиков',
          content:
            'Отличная и коммуникабельная администрация! Очень оперативно и осторожно исполнили заказ. Обязательно буду обращаться еще.',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.profile-page {
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: rem(34px);

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;
    }
  }

  &__reviews {
    margin-top: rem(50px);
  }
}

.user-card {
  &__name {
    font-size: rem(36px);
    font-weight: 700;
    margin-bottom: rem(6px);
  }

  &__online-status {
    font-size: rem(14px);
    font-weight: 400;
    color: rgba(0, 133, 229, 0.8);
    margin-bottom: rem(27px);
  }

  /* box */

  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 325px;
    height: 360px;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 22px;
  }
  &__img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: rem(22px);
  }
  &__role {
    font-size: rem(18px);
    font-weight: 500;
    text-align: center;
    margin-bottom: rem(6px);
  }
  &__reg-date {
    font-size: rem(13px);
    text-align: center;
    color: rgba(0, 133, 229, 0.8);
    margin-bottom: rem(19px);
  }
  /* User score */
  &__score {
    width: 204px;
    height: 36px;
    border: 1px solid rgba(0, 133, 229, 1);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: rem(28px);
  }
  &__score-text {
    font-size: rem(13px);
  }
  &__score-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem(14px);
    height: rem(14px);
    margin-left: rem(4px);
    margin-right: rem(4px);
  }
  &__score-valu {
    font-size: rem(15px);
    font-weight: 500;
    color: rgba(0, 133, 229, 0.8);
  }
  /* report btn */
  &__report-btn {
    display: block;
    font-size: rem(14px);
    text-decoration-line: underline;
    color: #0085e5;
    width: 100%;
    text-align: center;
  }
}

.profile-info {
  &__verify {
    display: flex;
    align-items: center;
    margin-top: rem(11px);
    margin-bottom: rem(105px);
  }
  &__verify-icon {
    width: 28px;
    height: 28px;
    text-align: center;
    margin-right: rem(12px);
  }
  &__verify-text {
    font-size: rem(15px);
    font-weight: 500;
  }
  &__about-heading {
    font-size: rem(16px);
    font-weight: 500;
    margin-bottom: rem(26px);
  }
  &__about-text {
    font-size: rem(13.5px);
  }
}

.profile-info {
  &__meta {
    @include unlist;

    padding-top: rem(26px);
    margin-top: rem(40px);
    border-top: 1px solid rgba(186, 186, 186, 0.2);

    @include media-breakpoint-down(md) {
      margin-top: rem(22px);
      padding-top: rem(22px);
    }

    &-item {
      display: flex;
      align-items: center;
      margin-bottom: rem(18px);
      font-size: rem(13px);

      @include media-breakpoint-down(md) {
        margin-bottom: rem(14px);
        font-size: rem(12px);
      }

      var {
        color: $main;
        font-weight: 500;
        margin-right: rem(4px);
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      &-icon {
        border: 1px solid $main;
        border-radius: 14px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: rem(14px);
      }
    }
  }
}
</style>
