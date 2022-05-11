<template>
  <div class="dashboard-events">
    <div class="dashboard-events__head">
      <div class="dashboard-events__heading">Календарь</div>

      <FormDate class="dashboard-events__datepicker" label="Выбрать дату" />
    </div>

    <div class="dashboard-events__wrap">
      <ul class="dashboard-events__list">
        <DashboardCalendarDayItem class="dashboard-events__day-item" />
        <DashboardCalendarDayItem class="dashboard-events__day-item" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-events {
  &__heading {
    font-size: rem(22px);
    font-weight: 500;

    @include media-breakpoint-down(md) {
      font-size: rem(17px);
    }
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(24px);
  }

  &__datepicker {
    margin-left: auto;
  }

  &__wrap {
    background: #ffffff;
    border: 1px solid rgba(186, 186, 186, 0.2);
    border-radius: 16px;
    padding: rem(30px 26px);

    @include media-breakpoint-down(md) {
      padding: rem(26px);
    }
  }

  &__list {
    @include unlist;
  }

  &__day-item {
    margin-bottom: rem(24px);
  }
}
</style>
