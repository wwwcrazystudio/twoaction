<template>
  <form class="addgroup">
    <div class="addgroup__wrap">
      <div class="container">
        <div class="addgroup__content">
          <h1 class="addgroup__heading">Создание сетки групп</h1>
          <AddGroupHead :logos="logos" class="addgroup__grid-info" />

          <div class="addgroup__info">Название сетки</div>

          <div class="addgroup__input-group">
            <FormInput
              class="security-form__input"
              type="text"
              label="Дайте название группы сообществ"
            />
          </div>

          <div class="addgroup__info">Описание</div>

          <div class="addgroup__input-group">
            <FormTextarea
              class="form__textarea"
              label="Опишите свой вопрос или проблему.."
              :show-label="false"
            />
          </div>

          <div class="addgroup__info">Возраст</div>

          <div class="addgroup__age-categories age-categories">
            <ul class="age-categories__list">
              <li class="age-categories__item">
                <var class="age-categories__age">13-17</var>
                <var class="age-categories__percent">18 %</var>
              </li>
              <li class="age-categories__item">
                <var class="age-categories__age">18-24</var>
                <var class="age-categories__percent">16 %</var>
              </li>
              <li class="age-categories__item">
                <var class="age-categories__age">25-34</var>
                <var class="age-categories__percent">32 %</var>
              </li>
              <li class="age-categories__item">
                <var class="age-categories__age">35-44</var>
                <var class="age-categories__percent">16 %</var>
              </li>
              <li class="age-categories__item">
                <var class="age-categories__age">45-54</var>
                <var class="age-categories__percent">12 %</var>
              </li>
              <li class="age-categories__item">
                <var class="age-categories__age">55-64</var>
                <var class="age-categories__percent">6 %</var>
              </li>
            </ul>
          </div>

          <div class="addgroup__info">Пол</div>

          <div class="addgroup__sex">
            <div class="addgroup__sex-item">
              <span>Мужской</span>
              <div class="addgroup__sex-wrap">
                <svg
                  width="8"
                  height="18"
                  viewBox="0 0 8 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.65047 0.0383938C3.09426 0.147413 2.61863 0.63387 2.50016 1.2149C2.27744 2.30703 3.27163 3.25062 4.3505 2.97106C5.49913 2.67342 5.86243 1.23852 4.99653 0.419593C4.63586 0.0785071 4.14906 -0.0593757 3.65047 0.0383938ZM3.66629 3.71563C3.10361 3.78865 2.64504 3.91303 2.29709 4.08702C0.968153 4.75161 0.158294 6.52496 0.21145 8.65382C0.226145 9.24226 0.231876 9.28413 0.32177 9.46241C0.474665 9.76556 0.71545 9.90953 1.07464 9.91251C1.29591 9.91434 1.45261 9.85363 1.58103 9.71624C1.74159 9.54453 1.75541 9.46037 1.72988 8.80907C1.69452 7.9053 1.78701 7.19413 2.02063 6.57316L2.11941 6.31055L2.12989 8.68359C2.13566 9.98877 2.12005 12.2432 2.09516 13.6934C2.0703 15.1436 2.04973 16.5923 2.04952 16.9128C2.0491 17.4889 2.05019 17.4972 2.14501 17.6403C2.41272 18.0446 3.04835 18.1154 3.44871 17.7854C3.67104 17.6021 3.72577 17.4489 3.75836 16.9182C3.79254 16.3624 3.85923 13.1396 3.85947 12.0322L3.85965 11.25H3.9827H4.10574L4.10602 11.874C4.10652 12.8798 4.17574 16.3201 4.20668 16.875C4.22974 17.2883 4.24929 17.4124 4.31004 17.5308C4.59726 18.0906 5.47986 18.1546 5.82038 17.6403C5.91545 17.4968 5.91629 17.4904 5.91594 16.8952C5.91573 16.5651 5.89629 15.1242 5.8727 13.6934C5.84907 12.2625 5.82077 9.98437 5.8098 8.63086L5.78983 6.16992L5.8664 6.309C5.97982 6.51502 6.09949 6.88946 6.18601 7.30934C6.25252 7.63186 6.26332 7.80384 6.2669 8.5957C6.26961 9.19691 6.28448 9.53385 6.31036 9.58008C6.51676 9.94911 7.10418 10.027 7.47659 9.73466C7.53566 9.68832 7.62798 9.56338 7.68177 9.45703L7.77957 9.26367L7.77918 8.47266C7.77887 7.8081 7.76639 7.61421 7.70107 7.25977C7.37654 5.49925 6.50185 4.29778 5.25514 3.90002C4.84638 3.7696 4.0039 3.67183 3.66629 3.71563Z"
                    fill="#0085E5"
                  />
                </svg>

                <var>64 %</var>
              </div>
            </div>
            <div class="addgroup__sex-item">
              <span>Женский</span>
              <div class="addgroup__sex-wrap">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.68359 0.0385986C4.26348 0.120653 3.82205 0.463638 3.62718 0.859462C3.12392 1.88181 3.86262 3.07286 5 3.07286C5.75136 3.07286 6.38618 2.53719 6.51088 1.79792C6.68979 0.737153 5.7483 -0.169315 4.68359 0.0385986ZM3.56035 3.62418C3.04014 3.69151 2.5996 4.05425 2.31413 4.65036C2.22874 4.82867 1.92622 5.63115 1.64191 6.43359C1.35757 7.23603 0.968527 8.32422 0.777313 8.85181C0.542082 9.5009 0.429688 9.85939 0.429688 9.96057C0.429688 10.1693 0.55632 10.4009 0.740328 10.5288C0.87357 10.6214 0.923035 10.6348 1.13281 10.6348C1.34277 10.6348 1.39163 10.6215 1.5228 10.5293C1.61199 10.4666 1.70407 10.3597 1.75002 10.2656C1.79248 10.1786 2.12411 9.28125 2.48696 8.27149L3.14667 6.43552L3.24117 6.58399C3.29313 6.66562 3.36207 6.75415 3.39438 6.78065C3.4443 6.82168 3.45312 6.90483 3.45312 7.33451V7.84012L2.83789 9.39171C2.49951 10.2451 2.22266 10.9886 2.22266 11.0439C2.22266 11.2283 2.33175 11.2891 2.92578 11.4353L3.11914 11.4829L3.13672 14.4514L3.1543 17.4199L3.24876 17.5806C3.53683 18.0706 4.22909 18.1334 4.60632 17.7037C4.82668 17.4528 4.82422 17.4883 4.82422 14.5483V11.8828H5H5.17578V14.5483C5.17578 17.4883 5.17332 17.4528 5.39368 17.7037C5.77091 18.1334 6.46317 18.0706 6.75124 17.5806L6.8457 17.4199L6.86328 14.4514L6.88086 11.4829L7.07422 11.4353C7.65746 11.2917 7.77734 11.2238 7.77734 11.0373C7.77734 10.9856 7.50049 10.2451 7.16211 9.39171L6.54688 7.84012V7.33451C6.54688 6.90483 6.5557 6.82168 6.60562 6.78065C6.63793 6.75415 6.70687 6.66562 6.75883 6.58399L6.85333 6.43552L7.51304 8.27149C7.87589 9.28125 8.20752 10.1786 8.24998 10.2656C8.29593 10.3597 8.38801 10.4666 8.4772 10.5293C8.60837 10.6215 8.65723 10.6348 8.86719 10.6348C9.07696 10.6348 9.12643 10.6214 9.25967 10.5288C9.44368 10.4009 9.57031 10.1693 9.57031 9.96057C9.57031 9.85939 9.45792 9.5009 9.22269 8.85181C9.03147 8.32422 8.64243 7.23603 8.35809 6.43359C8.07378 5.63115 7.77126 4.82867 7.68587 4.65036C7.39217 4.03706 6.96523 3.69394 6.40625 3.62204C6.08858 3.58115 3.87999 3.58284 3.56035 3.62418Z"
                    fill="#0085E5"
                  />
                </svg>
                <var>36 %</var>
              </div>
            </div>
          </div>

          <div class="addgroup__info">География (страна)</div>

          <div class="addgroup__group-geography group-geography">
            <ul class="group-geography__list">
              <li
                v-for="country in countries"
                :key="country.name"
                class="group-geography__item"
              >
                <span>{{ country.name }}</span>
                <var>{{ country.percent }}</var>
              </li>
            </ul>
          </div>

          <div class="addgroup__info">География (город)</div>

          <div class="addgroup__group-geography group-geography">
            <ul class="group-geography__list">
              <li
                v-for="city in citys"
                :key="city.name"
                class="group-geography__item"
              >
                <span>{{ city.name }}</span>
                <var>{{ city.percent }}</var>
              </li>
            </ul>
          </div>

          <div class="addgroup__info">Охват</div>

          <div class="addgroup__group-coverage group-coverage">
            <div class="group-coverage__row">
              <div class="group-coverage__item">
                <span>Просмотры сторис</span>

                <var>84 000</var>
              </div>

              <div class="group-coverage__item">
                <span>Просмотры ленты</span>

                <var>62 000</var>
              </div>
            </div>
          </div>

          <h2 class="addgroup__subtitle">Реклама в группе</h2>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      logos: [
        {
          src: require('~/assets/img/placeholder/group1.png'),
          title: 'logoOne',
        },
        {
          src: require('~/assets/img/placeholder/group2.png'),
          title: 'logoTwo',
        },
      ],
      countries: [
        {
          name: 'Россия',
          percent: '28 %',
        },
        {
          name: 'Азербайджан',
          percent: '9 %',
        },
        {
          name: 'Армения',
          percent: '26 %',
        },
        {
          name: 'Грузия',
          percent: '7 %',
        },
        {
          name: 'Казахстан',
          percent: '12 %',
        },
        {
          name: 'Киргизия',
          percent: '5 %',
        },
        {
          name: 'Молдавия',
          percent: '10 %',
        },
        {
          name: 'Таджикистан',
          percent: '3 %',
        },
      ],
      citys: [
        {
          name: 'Москва',
          percent: '76 %',
        },
        {
          name: 'Ереван',
          percent: '24 %',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.addgroup {
  &__heading {
    font-size: rem(36px);
    margin-bottom: rem(32px);
    text-align: center;
  }

  &__wrap {
    padding-bottom: rem(112px);
  }

  &__content {
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    padding: rem(50px 128px);
    padding-bottom: rem(70px);
    background: #ffffff;
    box-shadow: 0px 4px 50px rgba(117, 117, 117, 0.08),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
  }

  &__grid-info {
    margin-bottom: rem(32px);
  }

  &__input-group {
    margin-bottom: rem(32px);
  }

  &__input-info {
    margin-bottom: rem(20px);
    font-size: rem(15px);
    font-weight: 500;
  }

  &__info {
    margin-bottom: rem(18px);
  }

  &__age-categories {
    margin-bottom: rem(20px);
  }

  &__sex {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 14px;
  }

  &__sex-item {
    display: block;
    margin-bottom: rem(32px);
    span {
      display: block;
      font-size: rem(13px);
      margin-bottom: rem(13px);
    }
  }

  &__sex-wrap {
    display: flex;
    justify-content: center;
    border: 1px solid $main;
    width: 100%;
    color: $main;
    margin: 0;
    padding: rem(14px 0);
    border-radius: 8px;
    svg {
      width: 18px;
      height: 18px;
      display: block;
      margin-right: rem(8px);
    }
  }

  &__group-geography {
    margin-bottom: rem(32px);
  }

  .group-coverage {
    &__row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: rem(40px);
    }

    &__item {
      width: 100%;
      display: flex;
      align-items: center;
      span {
        font-size: rem(13px);
        display: block;
        margin-right: rem(14px);
        font-weight: 500;
      }
      var {
        display: flex;
        justify-content: center;
        border: 1px solid $main;
        width: 100%;
        max-width: 92px;
        padding: rem(14px 0);
        border-radius: 8px;
      }
    }
  }

  .age-categories {
    &__list {
      @include unlist;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: 14px;
    }

    &__item {
      display: block;
    }

    &__age {
      display: block;
      margin-bottom: rem(12px);
      font-size: rem(13px);
    }
    &__percent {
      display: flex;
      justify-content: center;
      border: 1px solid $main;
      width: 100%;
      color: $main;
      padding: rem(14px 0);
      border-radius: 8px;
    }
  }

  .group-geography {
    &__list {
      @include unlist;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    &__item {
      border-radius: 8px;
      background: $main;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $white;
      width: 100%;
      padding: rem(8px 24px);
      padding-right: rem(18px);
      font-size: rem(13px);
      line-height: 20px;
      span {
        display: block;
      }

      var {
        background: rgba(255, 255, 255, 0.1);
        width: 100%;
        max-width: 160px;
        display: flex;
        justify-content: center;
        padding: rem(8px 0);
        border-radius: 8px;
      }
    }
  }
}
</style>
