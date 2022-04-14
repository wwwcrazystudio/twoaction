<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <NuxtLink to="/" class="header__logo">
          <img src="~/assets/img/logo.png" alt="" />
        </NuxtLink>
        <transition name="fade">
          <HeaderMenu
            v-show="showMenu"
            class="header__header-menu"
            :links="routes"
          />
        </transition>
        <FormSwitchbox
          class="header__switchbox"
          :label="['Рекламодателям', 'Владельцу канала']"
          :value.sync="type"
        />
        <NuxtLink to="/" class="header__auth">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.49608 0.688063C6.44148 0.796156 5.48733 1.24222 4.71529 1.98809C3.40948 3.24969 2.9547 5.10109 3.52842 6.81978C3.67245 7.25125 3.96617 7.80834 4.21895 8.1295C4.26823 8.19212 4.30857 8.25731 4.30857 8.27437C4.30857 8.29144 4.2132 8.36203 4.09664 8.43128C3.79923 8.60797 3.39151 8.91328 3.03382 9.22712C1.57807 10.5045 0.649539 12.5136 0.63932 14.4081C0.636727 14.8872 0.637945 14.8963 0.721946 15.0236C1.00488 15.4525 1.64067 15.4174 1.8752 14.9601C1.92195 14.8689 1.94238 14.7336 1.96482 14.3663C2.02029 13.4592 2.20938 12.7297 2.58188 11.9859C3.13314 10.8852 4.11273 9.90009 5.20354 9.34944L5.39342 9.25359L5.8432 9.48028C7.31651 10.2229 8.91924 10.1682 10.356 9.32616L10.4913 9.24687L10.7359 9.37019C11.7842 9.89869 12.6951 10.8055 13.2593 11.8826C13.6766 12.679 13.8737 13.4056 13.9332 14.3663C13.9559 14.733 13.9765 14.869 14.0232 14.9601C14.2556 15.4132 14.8728 15.4545 15.1666 15.0365C15.2542 14.9117 15.2626 14.877 15.2723 14.5954C15.2935 13.9862 15.1405 13.057 14.899 12.3281C14.7523 11.8855 14.3571 11.0683 14.0979 10.6719C13.8189 10.2452 13.4502 9.80453 13.039 9.40625C12.6327 9.01287 12.3471 8.78772 11.8739 8.48766L11.564 8.29115L11.7521 8.02841C12.1292 7.50156 12.426 6.78806 12.5501 6.10937C12.6208 5.72303 12.6191 4.92784 12.5467 4.53125C12.4785 4.15709 12.2886 3.58316 12.1263 3.26044C11.6679 2.34866 10.8368 1.53575 9.93127 1.1135C9.18102 0.763656 8.28523 0.607156 7.49608 0.688063ZM8.48417 2.04769C9.1937 2.16962 9.79445 2.47881 10.2969 2.98072C10.7262 3.4095 11.015 3.91947 11.192 4.56153C11.246 4.757 11.257 4.88694 11.2571 5.32812C11.2572 5.80147 11.2484 5.89212 11.1764 6.15997C11.0157 6.75731 10.7076 7.284 10.2724 7.70556C9.6122 8.34491 8.85142 8.65625 7.9492 8.65625C7.02414 8.65625 6.21479 8.31344 5.56926 7.64822C5.14476 7.21072 4.88042 6.74719 4.72214 6.16269C4.64836 5.89019 4.64011 5.80537 4.64079 5.32812C4.64148 4.85612 4.65064 4.76312 4.72273 4.49428C5.16867 2.83194 6.81526 1.76091 8.48417 2.04769Z"
              fill="#484848"
            />
          </svg>

          Войти
        </NuxtLink>
        <NuxtLink v-show="!isMobile" to="/" class="header__btn">
          Приступить
        </NuxtLink>
        <button
          type="button"
          class="header__toggler"
          :class="showMenu && 'header__toggler--active'"
          @click="showMenu = !showMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showMenu: true,
      type: 'Рекламодателям',
    }
  },
  computed: {
    isTablet(this: any): boolean {
      return this.$isTablet()
    },
    isMobile(this: any): boolean {
      return this.$isMobile()
    },
  },
  watch: {
    showMenu(val) {
      if (val) document.documentElement.classList.add('locked')
      else document.documentElement.classList.remove('locked')
    },
  },
  created() {
    this.showMenu = !this.isTablet
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 120;
  border-bottom: 1px solid rgba(186, 186, 186, 0.2);

  &__wrap {
    display: flex;
    align-items: center;
    width: 100%;
    padding: rem(35px 0);

    @include media-breakpoint-down(md) {
      padding: rem(20px 0);
    }
  }

  &__logo {
    margin-right: auto;

    img {
      width: 100%;
    }

    @include media-breakpoint-down(xxl) {
      max-width: 145px;
    }

    @include media-breakpoint-down(md) {
      max-width: 122px;
    }
  }

  &__header-menu {
    margin: auto;

    @include media-breakpoint-down(xl) {
      margin: 0;
    }
  }

  &__switchbox {
    @include media-breakpoint-down(md) {
      display: none;
    }
  }

  &__auth {
    margin-left: rem(54px);
    color: #484848;
    text-decoration: none;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(xxl) {
      margin-left: auto;
    }

    @include media-breakpoint-down(md) {
      font-size: 0;
    }

    svg {
      margin-right: rem(10px);
    }
  }

  &__btn {
    @extend %btn-main;
    margin-left: rem(42px);
  }

  &__toggler {
    margin-left: rem(14px);
    position: relative;
    z-index: 110;
    display: none;

    @include media-breakpoint-down(xl) {
      display: block;
    }

    span {
      width: 18px;
      height: 2px;
      background-color: $dark;
      display: block;
      margin-bottom: 4px;
      border-radius: 18px;
      transition: 350ms;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &--active {
      span {
        &:last-of-type {
          background-color: $main;
          width: 9px;
          transition: 350ms;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
