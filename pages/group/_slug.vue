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
          <GroupReviews class="group-page__group-reviews" />
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
}
</style>
