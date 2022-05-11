<template>
  <div class="grid-info">
    <div class="grid-info__content">
      <div class="grid-info__logos">
        <div v-for="logo in logos" :key="logo.title" class="grid-info__logo">
          <img :src="logo.src" />
        </div>
      </div>

      <h2 class="grid-info__subscribers">
        Число подписчиков <var>1 268 846</var>
      </h2>

      <div class="grid-info__meta-wrap">
        <div class="grid-info__meta">
          <var>26,32%</var>
          ERP
        </div>
        <div class="grid-info__meta">
          <var>3,22 ₽</var>
          CPV
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    logos: {
      type: Array,
      required: true,
    },
    /* info: {
      type: Object,
      required: true,
    }, */
  },
})
</script>

<style lang="scss" scoped>
.grid-info {
  &__content {
    padding: rem(20px 24px);
    display: flex;
    align-items: center;
    background: $lightblue;
    border-radius: 8px;
    flex: 1;
  }

  &__subscribers {
    var {
      display: block;
    }
  }

  &__col {
    display: flex;
  }

  &__logos {
    margin-right: rem(18px);
    display: flex;
  }

  &__logo {
    display: flex;
    margin-left: rem(-15px);
    img {
      width: 74px;
      height: 74px;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid #cbdef0;
    }

    &:first-of-type {
      margin-left: 0;
    }
  }

  &__subscribers {
    font-size: rem(15px);
    margin-bottom: rem(6px);
    var {
      color: $main;
      font-size: rem(13px);
    }
  }

  &__meta-wrap {
    margin-left: auto;
    display: grid;
    grid-template-columns: 114px 114px;
    grid-column-gap: 8px;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: $main;
    color: #fff;
    width: 100%;
    max-width: 114px;
    font-size: 11px;
    text-transform: uppercase;
    padding: rem(17px);
    line-height: 18px;
    var {
      font-size: rem(14.5px);
      display: block;
    }
  }
}
</style>
