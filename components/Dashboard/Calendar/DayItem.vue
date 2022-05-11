<template>
  <li class="day-item">
    <div class="day-item__head">Сегодня <span>24.10.2021</span></div>

    <ul class="day-item__events">
      <DashboardCalendarEventItem class="day-item__event-item" />
      <DashboardCalendarEventItem class="day-item__event-item" />
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.day-item {
  &__head {
    font-size: rem(14px);
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-bottom: rem(24px);

    @include media-breakpoint-down(md) {
      font-size: rem(13px);
    }

    span {
      font-size: rem(13px);
      font-weight: 400;
      margin-left: rem(8px);
      color: $main;

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }
    }

    &::after {
      content: '';
      margin-left: rem(16px);
      height: 1px;
      flex: 1 1 75%;
      width: 75%;
      background-color: rgba(186, 186, 186, 0.2);
    }
  }

  &__events {
    @include unlist;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(16px);

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;
      gap: rem(12px);
    }
  }
}
</style>
