<template>
  <div class="frontpage">
    <LandingHero class="frontpage__hero" />
    <LandingAdvantages class="frontpage__advantages" />
    <LandingServices class="frontpage__services" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing',
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

}
</style>