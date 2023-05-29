<template>
  <div class="group-services">
    <h2 class="group-services__heading">Предоставляемые услуги</h2>

    <ul class="group-services__list">
      <GroupServicesItem class="group-services__service-item" :group="group" :service="service" @change="$emit('update:service', $event)" @order="$emit('order')" />
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    service: {
      type: Object,
      
    },
    group: {
      type: Object,
      required: true
    }
  }
}
</script>

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
