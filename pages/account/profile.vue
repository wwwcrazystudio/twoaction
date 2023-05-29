<template>
  <div class="profile">
    <div class="profile__wrap">
      <ProfileInfo class="profile__profile-info" />

      <ProfileForm class="profile__profile-form" />

      <ProfileAbout class="profile__profile-about" />

      <ProfileVerification class="profile__profile-verification" />
    </div>

    <Reviews class="profile__profile-reviews" :reviews="reviews" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
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
  computed: {
    userData() {
      return this.$store.state.user.userData
    },
  },
})
</script>

<style lang="scss" scoped>
.profile {
  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: rem(60px 75px);
    margin-bottom: rem(120px);

    @include media-breakpoint-down(xl) {
      grid-template-columns: 1fr 1fr;
      gap: rem(36px);
    }

    @include media-breakpoint-down(lg) {
      grid-template-columns: 1fr;
    }
  }

  &__profile {
    &-verification {
      grid-column: 1 / span 2;

      @include media-breakpoint-down(lg) {
        grid-column: 1/1;
        grid-row-start: 2;
      }
    }
  }
}
</style>
