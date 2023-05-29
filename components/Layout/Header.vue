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
        <template v-if="headerType === 'landing'">
          <FormSwitchbox
            class="header__switchbox"
            :label="['Рекламодателям', 'Владельцу канала']"
            :value.sync="type"
          />
        </template>

        <template v-if="headerType === 'platform'">
          <div v-show="showSearchBar" class="header__search-form search-form">
            <FormInput
              class="search-form__input"
              label="Поиск"
              type="search"
              :show-label="false"
            />
          </div>
          <button
            class="header__search-btn"
            @click="showSearchBar = !showSearchBar"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.3016 1.84613C4.29438 1.84613 1.84766 4.29285 1.84766 7.30008C1.84766 10.3075 4.29438 12.754 7.3016 12.754C10.309 12.754 12.7555 10.3075 12.7555 7.30008C12.7555 4.29285 10.309 1.84613 7.3016 1.84613ZM7.3016 11.7472C4.84951 11.7472 2.85454 9.75219 2.85454 7.3001C2.85454 4.84801 4.84951 2.85301 7.3016 2.85301C9.75369 2.85301 11.7487 4.84798 11.7487 7.30008C11.7487 9.75217 9.75369 11.7472 7.3016 11.7472Z"
                fill="#0085E5"
              />
              <path
                d="M14.0817 13.3713L11.1953 10.4849C10.9986 10.2882 10.6801 10.2882 10.4834 10.4849C10.2868 10.6814 10.2868 11.0003 10.4834 11.1968L13.3699 14.0832C13.4682 14.1815 13.5969 14.2307 13.7258 14.2307C13.8545 14.2307 13.9834 14.1815 14.0817 14.0832C14.2784 13.8867 14.2784 13.5678 14.0817 13.3713Z"
                fill="#0085E5"
              />
            </svg>
          </button>
        </template>

        <template v-if="!isUserLoggedIn">
          <NuxtLink to="/auth" class="header__auth">
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
          <NuxtLink v-show="!isMobile" to="/auth" class="header__btn">
            Приступить
          </NuxtLink>
        </template>

        <template v-else>
          <NuxtLink to="/favourites" class="header__link header__link--fav">
            <svg
              width="16"
              height="16"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.46443 0.567208C1.84196 0.645372 1.32122 0.901231 0.878995 1.34625C0.48335 1.74437 0.245048 2.16654 0.106572 2.71471C-0.133897 3.66658 0.0409466 4.60386 0.623154 5.48384C0.996475 6.04808 1.4779 6.56597 2.36337 7.35582C2.92663 7.85824 4.64332 9.32277 4.72666 9.37195C4.80517 9.41827 4.83435 9.42382 5.00009 9.42382C5.16574 9.42382 5.19508 9.41825 5.27353 9.37202C5.35711 9.32277 7.07767 7.85478 7.63682 7.35566C8.52473 6.5631 9.00422 6.04732 9.37703 5.48384C9.95924 4.60386 10.1341 3.66658 9.89362 2.71471C9.75514 2.16654 9.51684 1.74437 9.12119 1.34625C8.72694 0.949512 8.30486 0.720567 7.75152 0.603321C7.47516 0.544747 6.96324 0.53963 6.71988 0.592969C6.04549 0.740821 5.52697 1.07908 5.05381 1.67984L5.00009 1.74805L4.94638 1.67984C4.48146 1.08953 3.97082 0.751309 3.3204 0.602872C3.12626 0.558575 2.68103 0.54002 2.46443 0.567208Z"
                fill="#0085E5"
              />
            </svg>

            Избранное
          </NuxtLink>

          <NuxtLink to="/wallet" class="header__link header__link--wallet">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.89412 0.688624C1.35468 0.752405 0.799899 1.06234 0.469711 1.48437C0.172148 1.86472 0.0294916 2.24972 0.00655412 2.73437C-0.0102271 3.08862 0.0127104 3.15966 0.180117 3.2725L0.285867 3.34375H7.99537H15.7049L15.8106 3.2725C15.9776 3.15994 16.0008 3.08844 15.9852 2.73437C15.9498 1.93637 15.5067 1.25691 14.7923 0.904999C14.2767 0.651093 14.8982 0.673187 8.136 0.668187C4.81881 0.665718 2.00996 0.674905 1.89412 0.688624ZM0.229742 4.68597C0.195367 4.70025 0.132085 4.74975 0.0891167 4.79597L0.0109916 4.88006V7.21347V9.54687L0.0837417 9.78125C0.265054 10.3654 0.659305 10.8302 1.19849 11.0954C1.71381 11.349 1.1054 11.3281 7.99537 11.3281C14.8863 11.3281 14.2778 11.349 14.7923 11.095C15.3458 10.8218 15.732 10.3568 15.9224 9.73437C15.9758 9.55962 15.9798 9.38812 15.9798 7.21153V4.87622L15.8776 4.77403L15.7754 4.67187L8.03384 4.66594C3.77596 4.66269 0.264117 4.67169 0.229742 4.68597ZM4.31634 6.43266C4.47246 6.52972 4.57668 6.67134 4.62503 6.85212C4.70037 7.13378 4.5525 7.44466 4.27599 7.58594C4.14662 7.65203 4.10028 7.65625 3.50337 7.65625C2.81215 7.65625 2.71981 7.63875 2.54718 7.47491C2.20671 7.15175 2.29974 6.60487 2.72974 6.40184C2.84215 6.34878 2.92237 6.34365 3.52662 6.35109C4.16971 6.35903 4.20353 6.3625 4.31634 6.43266Z"
                fill="#0085E5"
              />
            </svg>

            0 ₽
          </NuxtLink>

          <div class="header__profile">
            <NuxtLink to="/account/profile" class="header__profile-img">
              <img v-if="userData.avatar" :src="userData.avatar"  alt="" />
            </NuxtLink>
          </div>
        </template>
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

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
    headerType: {
      type: String,
      default: 'landing',
    },
  },
  data() {
    return {
      showMenu: true,
      showSearchBar: true,
      type: 'Рекламодателям',
    }
  },
  computed: {
    isTablet() {
      return this.$isTablet()
    },
    isMobile() {
      return this.$isMobile()
    },
    isUserLoggedIn() {
      return this.$store.state.user.isLogged
    },
    userData() {
      return this.$store.state.user.userData
  },
  },
  watch: {
    showMenu(val) {
      if (val) document.documentElement.classList.add('locked')
      else document.documentElement.classList.remove('locked')
    },
    $route() {
      if (this.isTablet) {
        this.showMenu = false
        this.showSearchBar = false
      }
    },
  },
  created() {
    this.showMenu = !this.isTablet
    this.showSearchBar = !this.isTablet
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

  @include media-breakpoint-down(md) {
    position: fixed;
    background-color: #fff;
  }

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
    margin-right: auto;
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

  &__search-btn {
    margin-right: rem(12px);
    display: none;

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &__search-form {
    margin-right: auto;
    width: 50%;
    max-width: 230px;

    @include media-breakpoint-down(md) {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #fff;
      padding: rem(8px 16px);
      width: 100%;
      max-width: none;
      z-index: 200;
      border-bottom: 1px solid rgba(186, 186, 186, 0.2);
    }

    &::v-deep {
      .input__control {
        background-color: rgba(0, 133, 229, 0.04);
        border-radius: 14px;
      }
    }
  }

  &__link {
    color: $main;
    text-decoration: none;

    &--fav {
      font-size: rem(14px);
      margin-right: rem(50px);

      @include media-breakpoint-down(xl) {
        font-size: 0;
        margin-right: rem(14px);
      }
    }

    &--wallet {
      font-size: rem(15px);
      font-weight: 500;
      margin-right: rem(20px);

      @include media-breakpoint-down(xl) {
        font-size: 0;
        margin-right: rem(14px);
      }

      @include media-breakpoint-down(md) {
        display: none;
      }
    }

    svg {
      margin-right: rem(12px);
    }
  }

  &__profile {
    padding-left: rem(20px);
    border-left: 1px solid rgba(186, 186, 186, 0.2);

    @include media-breakpoint-down(md) {
      padding: 0;
      border: none;
    }

    &-img {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: $main;

      @include media-breakpoint-down(md) {
        width: 32px;
        height: 32px;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
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
