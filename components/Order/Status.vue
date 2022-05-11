<template>
  <div class="order-status" :class="classModifier">
    <div class="order-status__wrap">
      <div class="order-status__info">
        <div class="order-status__title">Статус заказа:</div>
        <div class="order-status__name">{{ statusName }}</div>
      </div>
      <div v-if="status === 1" class="order-status__progress">
        <progress-circle
          :diameter="66"
          :completed-steps="5"
          circle-color="rgba(255, 255, 255, 0.32)"
          start-color="#fff"
          stop-color="#fff"
          :circle-width="4"
          :animation-duration="10"
          inner-color="transparent"
          :total-steps="7"
        >
          75%
        </progress-circle>
      </div>
      <div v-if="status === 2" class="order-status__foot">
        <button class="order-status__btn" @click="$emit('surcharge')">
          Доплатить
        </button>
        <button class="order-status__btn order-status__btn--outline">
          Оспорить
        </button>
      </div>

      <template v-if="status === 3">
        <div class="order-status__date">Дата закрытия: 27.11.2021, 16:24</div>
        <button class="order-status__link">Повторить заказ</button>
      </template>

      <div v-if="status === 4" class="order-status__foot">
        <button class="order-status__btn">Принять</button>
        <button class="order-status__btn order-status__btn--outline">
          Оспорить
        </button>
      </div>

      <template v-if="status === 5">
        <div class="order-status__date">Спор открыт: 27.11.2021, 16:24</div>
        <NuxtLink to="/" class="order-status__link">Перейти в спор</NuxtLink>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ProgressCircle } from 'vue-progress-circle'

export default Vue.extend({
  components: {
    ProgressCircle,
  },
  props: {
    status: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    classModifier(this: any): string {
      const status = this.status as number
      const prefix = 'order-status'
      switch (status) {
        case 1:
          return `${prefix}--in-progress`
        case 5:
          return `${prefix}--dispute`
        default:
          return ''
      }
    },
    statusName(this: any): string {
      const status = this.status as number
      switch (status) {
        case 1:
          return `Выполняется`
        case 2:
          return `Выполнен`
        case 3:
          return `Выполнен`
        case 4:
          return `Выполнен`
        case 5:
          return `В арбитраже`
        default:
          return 'Уточняется'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.order-status {
  &__wrap {
    padding: rem(28px 45px);
    height: 100%;
    background-color: $main;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    @include media-breakpoint-down(md) {
      padding: rem(20px 26px);
    }
  }

  &__title {
    font-size: rem(13px);
    margin-bottom: rem(6px);

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
      margin-bottom: rem(2px);
    }
  }

  &__name {
    font-weight: 500;
    font-size: rem(22px);

    @include media-breakpoint-down(md) {
      font-size: rem(18px);
    }
  }

  &__foot {
    margin-top: rem(25px);
    display: flex;
    justify-content: space-between;

    @include media-breakpoint-down(md) {
      margin-top: rem(18px);
    }
  }

  &__progress {
    padding-left: rem(26px);
    margin-left: rem(26px);
    border-left: 1px solid #fff;

    font-weight: 500;
  }

  &__btn {
    font-size: rem(14px);
    font-weight: 500;
    padding: rem(12px 24px);
    width: 47.5%;
    background-color: #fff;
    color: $main;
    border: 1px solid #fff;
    border-radius: 16px;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }

    &--outline {
      color: #fff;
      background: transparent;
    }
  }

  &__date {
    font-size: rem(13px);
    margin-top: rem(18px);
  }

  &__link {
    font-size: rem(13.5px);
    display: block;
    margin-top: rem(20px);
    text-decoration: underline;
    color: #fff;
  }

  &--in-progress {
    .order-status__wrap {
      flex-direction: row;
      align-items: center;
    }
  }

  &--dispute {
    .order-status__wrap {
      background: #363133;
    }
  }
}
</style>
