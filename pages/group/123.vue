<template>
  <div class="group-page">
    <div class="container">
      <div class="group-page__wrap">
        <div class="group-page__content">
          <GroupInfo class="group-page__group-info" :group="group" />
          <GroupStats class="group-page__group-stats" />
          <GroupSchedule class="group-page__group-schedule" />
          <GroupServices class="group-page__group-services" />
        </div>
        <aside class="group-page__sidebar">
          <GroupReviews
            class="group-page__group-reviews"
            :reviews="group.reviews"
          />
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      group: {
        img: require('~/assets/img/placeholder/group1.png'),
        title: 'Business marketing',
        type: 'inst',
        cat: 'кино и игры',
        description:
          'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
        meta: {
          ERP: '26,32%',
          CPV: '3,22 ₽',
          clients: '100%',
        },
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
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.group-page {
  &__wrap {
    display: grid;
    grid-template-columns: auto 325px;
    gap: rem(46px);
    margin-bottom: rem(70px);

    @include media-breakpoint-down(xl) {
      display: block;
    }
  }

  &__content {
    min-width: 1px;
  }

  &__group-info {
    margin-bottom: rem(48px);
  }

  &__group-stats {
    margin-bottom: rem(40px);
  }

  &__group-schedule {
    margin-bottom: rem(34px);
  }

  &__sidebar {
    @include media-breakpoint-down(lg) {
      margin-top: rem(32px);
    }
  }
}
</style>
