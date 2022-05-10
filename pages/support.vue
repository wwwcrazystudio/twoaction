<template>
  <div class="support-page">
    <div class="support-page__wrap">
      <div class="container">
        <h1 class="support-page__heading">Служба поддержки</h1>
        <div class="support-page__head">
          <Tabs
            class="support-page__tabs"
            :tabs="tabs"
            :active="activeTab"
            @click="activeTab = $event"
          />
          <button class="support-page__btn">Новый тикет</button>
        </div>
        <ul class="support-page__list">
          <SupportItem
            v-for="(item, key) in items"
            :key="key"
            :item="item"
            class="support-page__group-item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          label: 'Все тикеты',
          val: 'all',
        },
        {
          label: 'Открытые тикеты',
          val: 'open',
        },
        {
          label: 'Закрытые тикеты',
          val: 'closed',
        },
      ],
      activeTab: {},
      items: [
        {
          status: 'Открытая заявка',
          date: '06.01.2022, 18:14',
          title: 'Не удается отправить жалобу на исполнителя',
          info: 'Я бы с радостью хотел обойтись, но так как исполнитель мало того,что запорол сделку, так еще и вел себя нагло. Я бы хотел настоять на его перманентной блокировке, но вот проблема, отправить жалобу не могу.',
        },
        {
          status: 'Закрытая заявка',
          date: '24.12.2021, 12:52',
          title: 'Не удается отправить жалобу на исполнителя',
          info: 'Я бы с радостью хотел обойтись, но так как исполнитель мало того,что запорол сделку, так еще и вел себя нагло. Я бы хотел настоять на его перманентной блокировке, но вот проблема, отправить жалобу не могу.',
        },
        {
          status: 'Закрытая заявка',
          date: '19.08.2021, 09:17',
          title: 'Не удается отправить жалобу на исполнителя',
          info: 'Я бы с радостью хотел обойтись, но так как исполнитель мало того,что запорол сделку, так еще и вел себя нагло. Я бы хотел настоять на его перманентной блокировке, но вот проблема, отправить жалобу не могу.',
        },
      ],
    }
  },
  created(this: any) {
    this.activeTab = this.tabs[0]
  },
})
</script>

<style lang="scss" scoped>
.support-page {
  &__wrap {
    padding-bottom: rem(117px);
    @include media-breakpoint-down(md) {
      padding-bottom: rem(36px);
    }
  }

  &__heading {
    margin-bottom: rem(20px);
  }

  &__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: rem(32px);
    align-items: center;
  }
  &__list {
    @include unlist;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 64px;
    grid-row-gap: 30px;
    @include media-breakpoint-down(lg) {
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &__group-item {
    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
    }
  }
  &__btn {
    @extend %btn-main;
    width: 100%;
    max-width: 216px;
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
}
</style>
