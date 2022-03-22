<template>
  <div class="frontpage">
    <LandingHero class="frontpage__hero" />
    <LandingAdvantages class="frontpage__advantages" />
    <LandingServices class="frontpage__services" />
    <LandingBestGroups
      class="frontpage__best-groups frontpage__best-groups--tg"
      heading="Самые надежные каналы Telegram"
      :link-img="require('~/assets/img/icons/tgblue.png')"
      link-text="Все каналы"
      :items="tgGroups"
      color="main"
    />
    <LandingBestGroups
      class="frontpage__best-groups frontpage__best-groups--inst"
      heading="Самые надежные группы Instagram"
      :link-img="require('~/assets/img/icons/instablue.png')"
      link-text="Все группы"
      :items="tgGroups"
      color="accent"
    />
    <LandingTestimonials
      class="frontpage__testimonials"
      :items="testimonials"
    />
    <LandingPromotion class="frontpage__promotion" />
    <LandingClientPromotion class="frontpage__client-promotion" />
    <LandingBanners class="frontpage__banners" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing',
  data() {
    return {
      tgGroups: [
        {
          img: require('~/assets/img/placeholder/group1.png'),
          title: 'Crypto BIT',
          count: '1 268 846',
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          title: 'Marvel/DC',
          count: '1 268 846',
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          title: 'Новости | SIGEN.pro',
          count: '1 268 846',
        },
        {
          img: require('~/assets/img/placeholder/group4.png'),
          title: 'Media SIGEN.pro',
          count: '1 268 846',
        },
        {
          img: require('~/assets/img/placeholder/group5.png'),
          title: 'Business marketing',
          count: '1 268 846',
        },
        {
          img: require('~/assets/img/placeholder/group6.png'),
          title: 'DeCenter',
          count: '1 268 846',
        },
        {
          img: require('~/assets/img/placeholder/group7.png'),
          title: 'DOUBLE TOP',
          count: '1 268 846',
        },
        {
          img: require('~/assets/img/placeholder/group8.png'),
          title: 'TON Community RUS',
          count: '1 268 846',
        },
      ],
      testimonials: [
        {
          rating: '4.9',
          tag: 'Подписчики',
          img: require('~/assets/img/placeholder/testimonials1.png'),
          title: 'K/On/Off',
          content:
            'Очень качественно и быстро!) Результатом полностью довольны)',
          likes: '5k',
          messages: '150',
          date: '2 недели назад',
        },
        {
          rating: '4.8',
          tag: 'Активность',
          img: require('~/assets/img/placeholder/testimonials2.png'),
          title: 'Barton_Park',
          content:
            'Очень крутая подборка групп в обеих площадках! Обязательно воспользуюсь вашими услугами вновь.',
          likes: '5k',
          date: '2 недели назад',
        },
        {
          rating: '4.9',
          tag: 'Активность',
          img: require('~/assets/img/placeholder/testimonials3.png'),
          title: 'Physical Transformation',
          content:
            'Статистика групп невероятно совпадает! Не жалею затрат! Очень приятно)',
          messages: '150',
          date: '2 недели назад',
        },
        {
          rating: '4.9',
          tag: 'Площадка telegram',
          img: require('~/assets/img/placeholder/testimonials4.png'),
          title: 'Barton_Park',
          content:
            'Невероятный сервис, приятные клиенты и удобное взаимодействие. Рад сотрудничеству.',
          likes: '5k',
          messages: '150',
          date: '2 недели назад',
        },
        {
          rating: '4.9',
          tag: 'Подписчики',
          img: require('~/assets/img/placeholder/testimonials1.png'),
          title: 'K/On/Off',
          content:
            'Очень качественно и быстро!) Результатом полностью довольны)',
          likes: '5k',
          messages: '150',
          date: '2 недели назад',
        },
        {
          rating: '4.8',
          tag: 'Активность',
          img: require('~/assets/img/placeholder/testimonials2.png'),
          title: 'Barton_Park',
          content:
            'Очень крутая подборка групп в обеих площадках! Обязательно воспользуюсь вашими услугами вновь.',
          likes: '5k',
          date: '2 недели назад',
        },
        {
          rating: '4.9',
          tag: 'Активность',
          img: require('~/assets/img/placeholder/testimonials3.png'),
          title: 'Physical Transformation',
          content:
            'Статистика групп невероятно совпадает! Не жалею затрат! Очень приятно)',
          messages: '150',
          date: '2 недели назад',
        },
        {
          rating: '4.9',
          tag: 'Площадка telegram',
          img: require('~/assets/img/placeholder/testimonials4.png'),
          title: 'Barton_Park',
          content:
            'Невероятный сервис, приятные клиенты и удобное взаимодействие. Рад сотрудничеству.',
          likes: '5k',
          messages: '150',
          date: '2 недели назад',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.frontpage {
  &__hero {
    background: url("data:image/svg+xml,%3Csvg width='1415' height='633' viewBox='0 0 1415 633' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.00011 632C-4 436.5 279.5 565 325.5 368.5C371.5 172 763.932 366.748 845 278.5C980.5 131 1171.5 108.4 1260 73.0003C1330 45.0002 1288.5 -12.9707 1236 5.99985C1183.5 24.9704 1076 287.5 1195 381.5C1314 475.5 1416.5 428.5 1416.5 428.5' stroke='%23FFA000' stroke-width='3'/%3E%3C/svg%3E%0A"),
      rgba(255, 175, 40, 0.14);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    border-bottom-left-radius: 75px;
    border-bottom-right-radius: 75px;

    @media (max-width: 1500px) {
      background-position: 300px 100%;
    }
  }

  &__best-groups {
    &--inst {
      background-color: #fafafd;
    }
  }
}
</style>
