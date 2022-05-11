<template>
  <div class="dashboard">
    <div class="container">
      <div class="dashboard__group-heading">Список самых активных групп</div>

      <div class="dashboard__wrap">
        <div class="dashboard__group">
          <DashboardActiveGroups
            class="dashboards__active-groups"
            :groups="groups.slice(0, 3)"
            type="Instagram"
          />
        </div>

        <div class="dashboard__group">
          <DashboardActiveGroups
            class="dashboards__active-groups"
            :groups="groups.slice(3, 6)"
            type="Telegram"
          />
        </div>

        <div class="dashboard__group">
          <DashboardOrders class="dashboards__orders" :orders="orders" />
        </div>

        <div class="dashboard__group">
          <DashboardCalendar class="dashboards__dashboard-events" />
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
      groups: [
        {
          img: require('~/assets/img/placeholder/group1.png'),
          title: 'Business marketing',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          title: 'Фармер',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          title: 'UFC',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group4.png'),
          title: 'ForkLog',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group1.png'),
          title: 'Business marketing',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          title: 'Фармер',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          title: 'UFC',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group4.png'),
          title: 'ForkLog',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group1.png'),
          title: 'Business marketing',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          title: 'Фармер',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          title: 'UFC',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group4.png'),
          title: 'ForkLog',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
      ],
      orders: [
        {
          date: '24.10.2021 14:33',
          new: true,
          group: 'Фармер',
          type: 'Instagram',
          title: 'Рекламный пост в ленте',
        },
        {
          date: '24.10.2021 14:33',
          group: 'Business marketing',
          type: 'Instagram',
          title: 'Рекламный пост в сторис',
        },
        {
          date: '24.10.2021 14:33',
          group: 'Marvel/DC',
          type: 'Telegram',
          title: 'Рекламный пост ',
        },
        {
          date: '24.10.2021 14:33',
          group: 'Фармер',
          type: 'Instagram',
          title: 'Рекламный пост в ленте',
        },
        {
          date: '24.10.2021 14:33',
          new: true,
          group: 'Фармер',
          type: 'Instagram',
          title: 'Рекламный пост в ленте',
        },
        {
          date: '24.10.2021 14:33',
          group: 'Business marketing',
          type: 'Instagram',
          title: 'Рекламный пост в сторис',
        },
        {
          date: '24.10.2021 14:33',
          group: 'Marvel/DC',
          type: 'Telegram',
          title: 'Рекламный пост ',
        },
        {
          date: '24.10.2021 14:33',
          group: 'Фармер',
          type: 'Instagram',
          title: 'Рекламный пост в ленте',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.dashboard {
  &__group-heading {
    font-size: rem(22px);
    font-weight: 500;
    margin-bottom: rem(30px);

    @include media-breakpoint-down(md) {
      font-size: rem(17px);
      margin-bottom: rem(22px);
    }
  }

  &__group {
    min-width: 1px;

    &:nth-of-type(1),
    &:nth-of-type(2) {
      @include media-breakpoint-down(xxl) {
        grid-column: 1 / span 2;
      }
    }
  }

  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(65px 28px);
    margin-bottom: rem(130px);

    @include media-breakpoint-down(lg) {
      grid-template-columns: 1fr;
      gap: rem(24px);
    }
  }
}
</style>
