<template>
  <div class="favorite-page">
    <div class="favorite-page__wrap">
      <div class="container">
        <div class="favorite-page__content">
          <h1 class="favorite-page__heading">Избранные сообщества</h1>

          <div class="favorite-page__head">
            <Tabs
              class="support-page__tabs"
              :tabs="tabs"
              :active="activeTab"
              @click="activeTab = $event"
            />
          </div>

          <div class="favorite-page__list">
            <FavoriteItem
              v-for="(item, key) in items"
              :key="key"
              :item="item"
              class="favorite-page__favorite-item"
            />
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
      tabs: [
        {
          label: 'Инстаграм',
          val: 'inst',
        },
        {
          label: 'Телеграм',
          val: 'tel',
        },
      ],
      activeTab: {},
      items: [
        {
          img: require('~/assets/img/placeholder/group1.png'),
          title: 'Business marketing',
          subscribers: '1 268 846',
          price: '3 050 - 6 000 ₽',
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          title: 'Фармер',
          subscribers: '1 268 846',
          price: '2 250 - 4 500 ₽',
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          title: 'Marvel/DC',
          subscribers: '1 268 846',
          price: '1 080 - 2 400 ₽',
        },
        {
          img: require('~/assets/img/placeholder/group4.png'),
          title: 'DeCenter',
          subscribers: '1 268 846',
          price: '2 850 - 5 250 ₽',
        },
        {
          img: require('~/assets/img/placeholder/group5.png'),
          title: 'UMI Новости',
          subscribers: '1 268 846',
          price: '3 050 - 6 000 ₽',
        },
        {
          img: require('~/assets/img/placeholder/group6.png'),
          title: 'Media SIGEN.pro',
          subscribers: '1 268 846',
          price: '3 050 - 6 000 ₽',
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
.favorite-page {
  &__heading {
    margin-bottom: rem(20px);
  }
  &__content {
    padding-bottom: rem(320px);
    @include media-breakpoint-down(lg) {
      padding-bottom: rem(220px);
    }
    @include media-breakpoint-down(md) {
      padding-bottom: rem(38px);
    }
  }
  &__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: rem(32px);
  }
  &__list {
    @include unlist;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
    @include media-breakpoint-down(xxl) {
      grid-template-columns: repeat(3, 1fr);
    }
    @include media-breakpoint-down(lg) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
