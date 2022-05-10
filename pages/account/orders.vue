<template>
  <div class="orders">
    <TabsBtns
      class="orders__tabs-btns"
      :tabs="tabs"
      :active="activeTab"
      @click="activeTab = $event"
    />

    <ul class="orders__list">
      <OrderItem class="orders__order-item" />
      <OrderItem class="orders__order-item" />
      <OrderItem class="orders__order-item" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          label: 'Открытые заказы (3)',
          val: 'opened',
        },
        {
          label: 'Выполненные заказы (1)',
          val: 'finished',
        },
        {
          label: 'Спорные заказы (1)',
          val: 'disputes',
        },
      ],
      activeTab: {},
    }
  },
  created(this: any) {
    this.activeTab = this.tabs[0]
  },
})
</script>

<style lang="scss" scoped>
.orders {
  &__tabs-btns {
    margin-bottom: rem(30px);
  }

  &__list {
    @include unlist;
  }

  &__order-item {
    margin-bottom: rem(30px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
