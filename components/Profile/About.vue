<template>
  <div class="profile-about">
    <div class="profile-about__wrap">
      <div class="profile-about__icon">
        <img src="~/assets/img/icons/userwhite.png" alt="" />
      </div>

      <div class="profile-about__heading">О себе</div>

      <div class="profile-about__description" v-if="userData.about" v-html="userData.about">
      </div>

      <ul class="profile-about__meta">
        <li class="profile-about__meta-item">
          <div class="profile-about__meta-item-icon">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.996094 0.290846C0.842719 0.339189 0.581125 0.610064 0.534094 0.769252C0.504719 0.868658 0.496094 2.56832 0.496094 8.24722V15.5966L0.572813 15.6733C0.648875 15.7494 0.654344 15.75 1.24609 15.75C1.83784 15.75 1.84331 15.7494 1.91937 15.6733L1.99609 15.5966V8.24722C1.99609 2.65991 1.98719 0.868158 1.95894 0.773877C1.9045 0.592158 1.68256 0.359939 1.50578 0.299689C1.34062 0.243408 1.15672 0.240221 0.996094 0.290846ZM8.71484 0.922346C8.21103 0.979189 7.92591 1.02644 6.63672 1.26672C6.05234 1.37563 5.36328 1.49531 5.10547 1.53272C4.32487 1.64594 3.018 1.65044 2.56641 1.54144L2.49609 1.52447V5.77447V10.0245L2.56641 10.0417C2.80844 10.1011 3.38497 10.1314 3.94922 10.1144C4.8765 10.0866 5.58425 9.99663 6.81162 9.7506C8.33587 9.44504 9.04553 9.36213 9.94922 9.384C10.5828 9.39935 11.0324 9.45735 11.5156 9.5861C11.7733 9.65482 11.8497 9.64647 11.933 9.54057C11.9956 9.461 11.9961 9.42638 11.9961 5.39063C11.9961 0.681065 12.0412 1.20891 11.6294 1.098C11.0635 0.945565 10.6738 0.899127 9.87109 0.888471C9.3535 0.881564 8.97891 0.892564 8.71484 0.922346Z"
                fill="#0085E5"
              />
            </svg>
          </div>
          <var>0</var> созданных заказов
        </li>
        <li class="profile-about__meta-item">
          <div class="profile-about__meta-item-icon">
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
                d="M8.16069 0.0466265C8.01976 0.148439 7.99682 0.246158 7.99682 0.744815C7.99682 1.28163 8.01857 1.24878 7.66247 1.24957C7.55594 1.24982 7.30282 1.27172 7.09997 1.29828C4.26038 1.67003 1.88376 3.62235 0.995944 6.31251C0.817507 6.8532 0.730726 7.24048 0.668195 7.77498C0.33957 10.5844 1.68226 13.3704 4.09057 14.876C5.82841 15.9624 8.00929 16.2805 9.96776 15.7333C10.4409 15.6011 10.7828 15.4697 11.2624 15.2357C13.2246 14.2785 14.6644 12.4898 15.1861 10.3612C15.2998 9.89707 15.3821 9.31757 15.3646 9.10345C15.3473 8.89117 15.2318 8.71604 15.0515 8.62879C14.9235 8.56685 14.8651 8.56251 14.1578 8.56251C13.3492 8.56251 13.2579 8.57673 13.0958 8.72807C12.9784 8.83767 12.9402 8.93935 12.8864 9.28501C12.7619 10.0855 12.5221 10.7099 12.0935 11.3504C10.8121 13.265 8.37538 14.0249 6.20529 13.1867C4.88532 12.6768 3.80941 11.5537 3.34707 10.2031C3.18132 9.71889 3.11804 9.35085 3.09988 8.76564C3.08223 8.19529 3.12235 7.82035 3.25144 7.34973C3.79507 5.36829 5.52557 3.91897 7.58751 3.71832C7.75247 3.70226 7.9111 3.68876 7.94004 3.68832C7.98682 3.6876 7.99369 3.74444 8.00254 4.20576L8.01244 4.72404L8.11847 4.81869C8.30951 4.98922 8.2886 4.99769 10.5906 3.81854C11.7335 3.23307 12.7214 2.71016 12.7859 2.6565C12.9322 2.53472 12.9419 2.41825 12.8171 2.28257C12.6952 2.14997 8.53176 0.0271265 8.35807 0.00897022C8.27291 9.52072e-05 8.20801 0.0124702 8.16069 0.0466265Z"
                fill="#0085E5"
              />
            </svg>
          </div>
          <var>0</var> повторных заказа
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.user.userData
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-about {
  &__wrap {
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    padding: rem(28px 34px);

    @include media-breakpoint-down(md) {
      padding: rem(26px);
    }
  }

  &__icon {
    width: 40px;
    height: 40px;
    background-color: $main;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: rem(18px);
    box-shadow: 0px 9px 20px rgba(0, 98, 169, 0.2);
    border-radius: 14px;

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
    }
  }

  &__heading {
    font-weight: 500;
    margin-bottom: rem(12px);
  }

  &__description {
    color: rgba(72, 72, 72, 0.8);
    font-size: rem(13.5px);
    line-height: 180%;

    padding-bottom: rem(26px);
    margin-bottom: rem(30px);
    border-bottom: 1px solid rgba(186, 186, 186, 0.2);

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(22px);
      padding-bottom: rem(22px);
    }
  }

  &__meta {
    @include unlist;

    &-item {
      display: flex;
      align-items: center;
      margin-bottom: rem(18px);
      font-size: rem(13px);

      @include media-breakpoint-down(md) {
        margin-bottom: rem(14px);
        font-size: rem(12px);
      }

      var {
        color: $main;
        font-weight: 500;
        margin-right: rem(4px);
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      &-icon {
        border: 1px solid $main;
        border-radius: 14px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: rem(14px);
      }
    }
  }
}
</style>
