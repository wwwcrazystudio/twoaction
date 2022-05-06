<template>
  <div class="group-services">
    <h2 class="group-services__heading">Предоставляемые услуги</h2>

    <ul class="group-services__list">
      <GroupServicesItem class="group-services__service-item" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.group-services {
  &__heading {
    font-size: rem(18px);
    font-weight: 500;
    margin-bottom: rem(30px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
      font-size: rem(16px);
    }
  }

  &__list {
    @include unlist;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(30px);

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;
      gap: rem(20px);
    }
  }
}
</style>
