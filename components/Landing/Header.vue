<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <NuxtLink to="/" class="header__logo">
          <img src="~/assets/img/logo.png" alt="" />
        </NuxtLink>
        <HeaderMenu class="header__header-menu" :links="routes" />
        <FormSwitchbox
          class="header__switchbox"
          :label="['Рекламодателям', 'Владельцу канала']"
          :value.sync="type"
        />
        <NuxtLink to="/" class="header__auth">
          <img src="~/assets/img/icons/user.png" alt="" />
          Войти
        </NuxtLink>
        <NuxtLink to="/" class="header__btn">Приступить</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      type: 'Рекламодателям',
      routes: [
        {
          label: 'Услуги',
          route: '/',
        },
        {
          label: 'Рекламодателю',
          route: '/',
        },
        {
          label: 'Площадке',
          route: '/',
        },
        {
          label: 'Отзывы',
          route: '/',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: rem(35px);
  left: 0;
  right: 0;

  &__wrap {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__logo {
    margin-right: auto;
  }

  &__header-menu {
    margin: auto;
  }

  &__auth {
    margin-left: rem(54px);
    color: #484848;
    text-decoration: none;
    display: flex;
    align-items: center;

    img {
      margin-right: rem(10px);
    }
  }

  &__btn {
    @extend %btn-main;
    margin-left: rem(42px);
  }
}
</style>
