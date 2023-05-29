<template>
  <div class="group-page">
    <div class="container">
      <div class="group-page__wrap">
        <div class="group-page__content">
          <GroupInfo class="group-page__group-info" :group="groupData" />
          <GroupStats class="group-page__group-stats" :group="groupData" />
          <GroupSchedule class="group-page__group-schedule" :group="groupData" :time.sync="selectedTime"  />
          <GroupServices class="group-page__group-services" :group="groupData" :service.sync="selectedService" @order="handleOrder($event)" />
        </div>
        <aside class="group-page__sidebar">
          {{ selectedService }}
          {{ selectedTime }}{{ groupData }}
          <!-- <GroupReviews
            class="group-page__group-reviews"
            :reviews="groupData.reviews"
          /> -->
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { DateTime } from 'luxon'

export default Vue.extend({
  async asyncData({ $getApiData, route }) {
    const { params } = route

    const req = await $getApiData(`/channel/${params.id}`)

    console.log(req[0])

    return {
      groupData: req[0],
    }
  },
  data() {
    return {
      groupData: {},
      selectedService: {},
      selectedTime: '',
    }
  },
  methods: {
    async handleOrder() {
      const token = this.$cookies.get('token')
      const dateStart = this.selectedTime
      const dateEnd = DateTime.fromSQL(dateStart).plus({hours: this.selectedService.hours}).toSQL()
      
      const req = await this.$postApiData(`/order`, {
        token,
        channel_id: this.groupData.channel_id,
        date_start: dateStart,
        date_end: dateEnd,
      })

      console.log(req)

  
    }
  }
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
