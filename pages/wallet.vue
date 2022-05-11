<template>
  <div class="wallet-page">
    <div class="wallet-page__wrap">
      <div class="container">
        <div class="wallet-page__row">
          <div class="wallet-page__col">
            <h1 class="wallet-page__heading">Мой баланс</h1>
            <div class="wallet-page__summary">
              <div class="wallet-page__icon">
                <img :src="profileimage" :alt="profilename" />
              </div>
              <div class="wallet-page__info">На счету</div>
              <div class="wallet-page__total">
                <var>8 330 ₽</var>
              </div>
              <button class="wallet-page__btn">Пополнить баланс</button>
            </div>
          </div>
          <div class="wallet-page__col">
            <div class="wallet-page__table-head">
              <div class="wallet-page__story">История операций</div>
              <FormSelect
                class="wallet-page__select"
                label="За последнюю неделю"
                :options="timeInterval.options"
                :value.sync="timeInterval.value"
              />
            </div>

            <WalletTable :items="items" class="wallet-page__wallet-table" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      profileimage: require('~/assets/img/placeholder/account.png'),
      profilename: 'name',
      timeInterval: {
        value: {} as Object,
        options: [
          {
            label: 'За последнюю неделю',
            value: 'lastWeek',
          },
          {
            label: 'За последний месяц',
            value: 'lastMonth',
          },
          {
            label: 'За последний год',
            value: 'lastYear',
          },
        ],
      },
      items: [
        {
          title: 'Рекламный пост в сообществе Instagram «Marvel/DC»',
          creationDate: '10.10.2021, 14:33',
          executionDate: '12.10.2021, 17:08',
          budget: '2 850 ₽',
        },
        {
          title: 'Пополнение баланса с карты',
          executionDate: '12.10.2021, 17:08',
          budget: '3 500 ₽',
        },
        {
          title: 'Рекламный пост в сообществе Instagram Crypto BIT',
          creationDate: '10.10.2021, 14:33',
          executionDate: '12.10.2021, 17:08',
          budget: '750 ₽',
        },
        {
          title: 'Реклама в сторис в сообществе Instagram Фармер',
          creationDate: '10.10.2021, 14:33',
          executionDate: '12.10.2021, 17:08',
          budget: '2 130 ₽',
        },
        {
          title: 'Пополнение баланса с карты',
          executionDate: '12.10.2021, 17:08',
          budget: '18 000 ₽',
        },
        {
          title: 'Реклама в сторис в сообществе Instagram DeCenter',
          creationDate: '10.10.2021, 14:33',
          executionDate: '12.10.2021, 17:08',
          budget: '2 130 ₽',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.wallet-page {
  &__wrap {
    padding-bottom: rem(200px);
    @include media-breakpoint-down(xl) {
      display: block;
      padding-bottom: rem(100px);
    }
    @include media-breakpoint-down(md) {
      padding-bottom: rem(38px);
    }
  }
  &__row {
    display: grid;
    grid-template-columns: 325px auto;
    grid-column-gap: 68px;
    @include media-breakpoint-down(xxl) {
      grid-column-gap: 32px;
      grid-template-columns: 260px auto;
    }
    @include media-breakpoint-down(xl) {
      display: block;
    }
  }

  &__table-head {
    margin-top: rem(5px);
    margin-bottom: rem(35px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include media-breakpoint-down(xl) {
      display: block;
      margin-bottom: rem(20px);
    }
  }

  &__select {
    &::v-deep {
      .select__value,
      .select__control {
        background-color: rgba(0, 133, 229, 0.04);
        border-radius: 8px;
        padding-right: rem(60px);
        border: 1px solid transparent;
      }
    }
  }

  &__story {
    font-size: rem(24px);
    font-weight: 500;
    @include media-breakpoint-down(lg) {
      margin-bottom: rem(20px);
    }
  }

  &__heading {
    line-height: 60px;
    margin-bottom: rem(30px);
  }
  &__summary {
    padding: rem(30px);
    padding-bottom: rem(50px);
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 22px;
    position: relative;
    text-align: center;
    @include media-breakpoint-down(lg) {
      margin-bottom: rem(38px);
    }

    @include media-breakpoint-down(md) {
      padding: rem(26px);
      padding-bottom: rem(38px);
      border-radius: 14px;
    }
  }

  &__icon {
    width: 66px;
    height: 66px;
    border: 1px solid #ecf7ff;
    border-radius: 50%;
    margin: auto;
    margin-bottom: rem(20px);

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

  &__btn {
    @extend %btn-main;
    border-radius: 8px;
    width: 100%;
    @include media-breakpoint-down(xl) {
      border-radius: 16px;
    }
  }

  &__info {
    font-size: rem(15px);
    font-weight: 500;
    margin-bottom: rem(10px);
    @include media-breakpoint-down(md) {
      margin-bottom: rem(8px);
    }
  }

  &__total {
    font-size: rem(24px);
    color: $main;
    font-weight: 500;
    margin-bottom: rem(32px);
    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }
  }
}
</style>
