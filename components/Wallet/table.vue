<template>
  <div class="wallet-page__wallet-table wallet-table">
    <div class="wallet-table__wrap">
      <table>
        <thead>
          <th colspan="2">Выполненные операции</th>
          <th>Дата создания</th>
          <th>Дата исполнения</th>
          <th>Бюджет</th>
        </thead>
        <tbody>
          <tr>
            <td class="wallet-table__count">01</td>
            <td>Рекламный пост в сообществе Instagram «Marvel/DC»</td>
            <td class="wallet-table__medium">10.10.2021, 14:33</td>
            <td class="wallet-table__medium">12.10.2021, 17:08</td>
            <td class="wallet-table__accent">2 850 ₽</td>
          </tr>
          <tr>
            <td class="wallet-table__count">02</td>
            <td>Рекламный пост в сообществе Instagram «Marvel/DC»</td>
            <td class="wallet-table__medium">10.10.2021, 14:33</td>
            <td class="wallet-table__medium">12.10.2021, 17:08</td>
            <td class="wallet-table__accent">2 850 ₽</td>
          </tr>
          <tr>
            <td class="wallet-table__count">03</td>
            <td>Рекламный пост в сообществе Instagram «Marvel/DC»</td>
            <td class="wallet-table__medium">10.10.2021, 14:33</td>
            <td class="wallet-table__medium">12.10.2021, 17:08</td>
            <td class="wallet-table__accent">2 850 ₽</td>
          </tr>
          <tr>
            <td class="wallet-table__count">04</td>
            <td>Рекламный пост в сообществе Instagram «Marvel/DC»</td>
            <td class="wallet-table__medium">10.10.2021, 14:33</td>
            <td class="wallet-table__medium">12.10.2021, 17:08</td>
            <td class="wallet-table__accent">2 850 ₽</td>
          </tr>
          <tr>
            <td class="wallet-table__count">05</td>
            <td>Рекламный пост в сообществе Instagram «Marvel/DC»</td>
            <td class="wallet-table__medium">10.10.2021, 14:33</td>
            <td class="wallet-table__medium">12.10.2021, 17:08</td>
            <td class="wallet-table__accent">2 850 ₽</td>
          </tr>
          <tr>
            <td class="wallet-table__count">06</td>
            <td>Рекламный пост в сообществе Instagram «Marvel/DC»</td>
            <td class="wallet-table__medium">10.10.2021, 14:33</td>
            <td class="wallet-table__medium">12.10.2021, 17:08</td>
            <td class="wallet-table__accent">2 850 ₽</td>
          </tr>
        </tbody>
      </table>
      <div class="wallet-table__footer">
        <div class="wallet-table__total">Всего: <var>26</var> операции</div>

        <div class="wallet-table__num-to-show num-to-show">
          <div class="num-to-show__wrap">
            <div class="num-to-show__title">Показывать по:</div>
            <FormSelect
              class="num-to-show__select"
              label="Показывать по:"
              :value.sync="numToShow"
              :options="numToShowOptions"
            />
          </div>
        </div>
        <Pagination
          :count="8"
          :active="page"
          class="groups-list__pagination"
          @change="page = $event"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      numToShow: {},
      numToShowOptions: [
        {
          label: 20,
          value: 20,
        },
        {
          label: 50,
          value: 50,
        },
        {
          label: 100,
          value: 100,
        },
      ],
      page: 1,
    }
  },
  created(this: any) {
    this.numToShow = this.numToShowOptions[0]
  },
})
</script>

<style lang="scss" scoped>
.wallet-table {
  &__wrap {
    padding-top: 38px;
    border: 1px solid rgba(244, 190, 190, 0.2);
    box-shadow: 0px 6px 26px rgba(117, 117, 117, 0.1);
    border-radius: 22px;
  }
  table {
    width: 100%;
  }
  &__count {
    color: lightblue;
  }
  &__accent {
    color: $main;
    font-weight: 500;
  }
  &__medium {
    font-weight: 500;
  }
  &__footer {
    display: flex;
    padding: rem(44px);
    padding-right: rem(62px);
    background: rgba(0, 133, 229, 0.04);
  }
  &__num-to-show {
    margin-left: auto;
    margin-right: rem(28px);
  }
  &__total {
    font-size: rem(13.5px);
    color: rgba(72, 72, 72, 0.6);
    var {
      color: $main;
      font-weight: 500;
    }
  }
  th {
    padding-bottom: rem(28px);
    font-size: rem(15px);
    border-bottom: 1px solid rgba(186, 186, 186, 0.2);
    &:first-of-type {
      padding-left: rem(44px);
    }
    &:last-of-type {
      padding-right: rem(62px);
    }
  }
  td {
    padding: rem(30px 0);
    font-size: rem(14px);
    &:first-of-type {
      padding-left: rem(44px);
    }
    &:last-of-type {
      padding-right: rem(62px);
    }
  }
  tr {
    border-bottom: 1px solid rgba(186, 186, 186, 0.2);
  }
  .num-to-show {
    &__wrap {
      display: flex;
      align-items: center;
    }

    &__title {
      font-size: rem(13.5px);
      margin-right: rem(10px);
    }

    &__select {
      &::v-deep {
        .select__value,
        .select__control {
          font-size: rem(13px);
          font-weight: 500;
          background-color: $main;
          background-position: calc(100% - 8px);
          background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.75 5.5L0 0.5H7.5L3.75 5.5Z' fill='%23fff'/%3E%3C/svg%3E%0A");

          color: #fff;
          padding: rem(4px 14px);
          padding-right: rem(26px);
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
