<template>
  <div class="group-info">
    <div class="group-info__wrap">
      <div class="group-info__col">
        <div class="group-info__icon">
          <Picture v-if="group.logo" :srcset="group.logo" :alt="group.title" />
        </div>
      </div>

      <div class="group-info__col">
        <h1 class="group-info__title">{{ group.title }}</h1>

        <div class="group-info__count">
          <var>{{ group.subscibers }}</var> подписчика
        </div>

        <client-only v-if="!isTablet">
          <div
            v-if="group.type === 'I'"
            class="group-info__type group-info__type--inst"
          >
            <div class="group-info__type-icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM10.2422 0H1.75781C0.7875 0 0 0.7875 0 1.75781V10.2422C0 11.2125 0.7875 12 1.75781 12H10.2422C11.2125 12 12 11.2125 12 10.2422V1.75781C12 0.7875 11.2125 0 10.2422 0ZM6 9.1875C4.25627 9.1875 2.83594 7.76716 2.83594 6.02344C2.83594 4.27966 4.25627 2.85938 6 2.85938C7.74373 2.85938 9.16406 4.27966 9.16406 6.02344C9.16406 7.76716 7.74373 9.1875 6 9.1875ZM9.86719 2.85938C9.48047 2.85938 9.16406 2.54297 9.16406 2.15625C9.16406 1.76953 9.48047 1.45312 9.86719 1.45312C10.2539 1.45312 10.5703 1.76953 10.5703 2.15625C10.5703 2.54297 10.2539 2.85938 9.86719 2.85938ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625Z"
                  fill="white"
                />
              </svg>
            </div>

            Instagram страница
          </div>

          <div
            v-if="group.type === 'T'"
            class="group-info__type group-info__type--tg"
          >
            <div class="group-info__type-icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9018 0.41763C13.8382 0.80888 0.730424 5.84456 0.537362 5.9361C-0.10417 6.24016 -0.17917 6.64178 0.354893 6.91344C0.406455 6.93966 1.29367 7.22338 2.32649 7.54394L4.20436 8.12675L8.46842 5.45935C10.8136 3.99225 12.7797 2.77544 12.8374 2.75535C12.9822 2.70485 13.1069 2.70957 13.165 2.76775C13.2058 2.80847 13.2075 2.82891 13.1751 2.88875C13.1537 2.92835 11.5963 4.34266 9.71427 6.03166C7.83224 7.72066 6.28733 9.11578 6.28111 9.13197C6.27492 9.14812 6.21127 9.99137 6.13964 11.0058L6.00946 12.8503L6.15092 12.8312C6.22874 12.8207 6.35196 12.7806 6.42474 12.742C6.49755 12.7034 6.98752 12.2596 7.51361 11.7557C8.03967 11.2518 8.48833 10.8326 8.51061 10.824C8.53286 10.8155 9.37064 11.4089 10.3723 12.1427C11.374 12.8766 12.272 13.5133 12.368 13.5576C12.6196 13.6739 12.903 13.6854 13.0871 13.5869C13.2516 13.4989 13.4123 13.2804 13.4799 13.0528C13.506 12.9647 14.0787 10.3187 14.7525 7.17288C15.8743 1.93519 15.9775 1.4281 15.9779 1.15625C15.9783 0.899411 15.9676 0.838317 15.8988 0.70313C15.8503 0.607817 15.7675 0.510505 15.6866 0.45363C15.5017 0.323568 15.1956 0.309536 14.9018 0.41763Z"
                  fill="#fff"
                />
              </svg>
            </div>

            Telegram страница
          </div>
        </client-only>
      </div>

      <div class="group-info__col">
        <div class="group-info__row">
          <div v-if="group.tags && group.tags.length" class="group-info__cat">
            {{ group.tags[0].tag }}
          </div>

          <div class="group-info__favourite">
            <svg
              width="10"
              height="10"
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

            В избранное
          </div>
        </div>

        <div v-if="group.description.length" class="group-info__description">
          {{ group.description }}
        </div>
      </div>

      <div class="group-info__col">
        <div class="group-info__group-meta group-meta">
          <ul class="group-meta__list">
            <li class="group-meta__item">
              <var>{{ group.err }}%</var>
              ERR
            </li>
            <li class="group-meta__item">
              <var>{{ erp }}%</var>
              ER%
            </li>
            <li class="group-meta__item">
              <var>0</var>
              довольных клиентов
            </li>
          </ul>
        </div>

        <!--  <NuxtLink to="/" class="group-info__link">
          Посмотреть все группы владельца
        </NuxtLink> -->

        <client-only v-if="isTablet">
          <div
            v-if="group.type === 'I'"
            class="group-info__type group-info__type--inst"
          >
            <div class="group-info__type-icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM10.2422 0H1.75781C0.7875 0 0 0.7875 0 1.75781V10.2422C0 11.2125 0.7875 12 1.75781 12H10.2422C11.2125 12 12 11.2125 12 10.2422V1.75781C12 0.7875 11.2125 0 10.2422 0ZM6 9.1875C4.25627 9.1875 2.83594 7.76716 2.83594 6.02344C2.83594 4.27966 4.25627 2.85938 6 2.85938C7.74373 2.85938 9.16406 4.27966 9.16406 6.02344C9.16406 7.76716 7.74373 9.1875 6 9.1875ZM9.86719 2.85938C9.48047 2.85938 9.16406 2.54297 9.16406 2.15625C9.16406 1.76953 9.48047 1.45312 9.86719 1.45312C10.2539 1.45312 10.5703 1.76953 10.5703 2.15625C10.5703 2.54297 10.2539 2.85938 9.86719 2.85938ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625ZM6 3.5625C4.64297 3.5625 3.53906 4.66641 3.53906 6.02344C3.53906 7.38047 4.64297 8.48438 6 8.48438C7.35703 8.48438 8.46094 7.38047 8.46094 6.02344C8.46094 4.66641 7.35703 3.5625 6 3.5625Z"
                  fill="white"
                />
              </svg>
            </div>

            Instagram страница
          </div>

          <div
            v-if="group.type === 'T'"
            class="group-info__type group-info__type--tg"
          >
            <div class="group-info__type-icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9018 0.41763C13.8382 0.80888 0.730424 5.84456 0.537362 5.9361C-0.10417 6.24016 -0.17917 6.64178 0.354893 6.91344C0.406455 6.93966 1.29367 7.22338 2.32649 7.54394L4.20436 8.12675L8.46842 5.45935C10.8136 3.99225 12.7797 2.77544 12.8374 2.75535C12.9822 2.70485 13.1069 2.70957 13.165 2.76775C13.2058 2.80847 13.2075 2.82891 13.1751 2.88875C13.1537 2.92835 11.5963 4.34266 9.71427 6.03166C7.83224 7.72066 6.28733 9.11578 6.28111 9.13197C6.27492 9.14812 6.21127 9.99137 6.13964 11.0058L6.00946 12.8503L6.15092 12.8312C6.22874 12.8207 6.35196 12.7806 6.42474 12.742C6.49755 12.7034 6.98752 12.2596 7.51361 11.7557C8.03967 11.2518 8.48833 10.8326 8.51061 10.824C8.53286 10.8155 9.37064 11.4089 10.3723 12.1427C11.374 12.8766 12.272 13.5133 12.368 13.5576C12.6196 13.6739 12.903 13.6854 13.0871 13.5869C13.2516 13.4989 13.4123 13.2804 13.4799 13.0528C13.506 12.9647 14.0787 10.3187 14.7525 7.17288C15.8743 1.93519 15.9775 1.4281 15.9779 1.15625C15.9783 0.899411 15.9676 0.838317 15.8988 0.70313C15.8503 0.607817 15.7675 0.510505 15.6866 0.45363C15.5017 0.323568 15.1956 0.309536 14.9018 0.41763Z"
                  fill="#fff"
                />
              </svg>
            </div>

            Telegram страница
          </div>

        </client-only>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isTablet(this: any) {
      return this.$isTablet()
    },
    erp(this: any) {
      return (this.group.coverage / this.group.subscibers) * 100 / 10000 || 0
    }
  },
})
</script>

<style lang="scss" scoped>
.group-info {
  &__wrap {
    padding: rem(34px 14px);
    background: #ffffff;
    box-shadow: 0px 6px 26px rgba(117, 117, 117, 0.1);
    border-radius: 22px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    @include media-breakpoint-down(md) {
      padding: rem(26px 16px);
      align-items: center;
    }
  }

  &__col {
    margin: rem(0 12px);

    &:not(:first-of-type) {
      flex-grow: 1;
    }

    @include media-breakpoint-down(md) {
      margin: 0;

      &:nth-of-type(1) {
        flex: 0 0 60px;
      }

      &:nth-of-type(2) {
        flex: 1 0 50%;
      }
    }
  }

  &__icon {
    width: 74px;
    height: 74px;
    border: 1px solid #ecf7ff;
    border-radius: 50%;
    margin-bottom: rem(18px);
    background-color: $main;

    @include media-breakpoint-down(md) {
      width: 60px;
      height: 60px;
      margin-right: rem(12px);
      margin-bottom: rem(14px);
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__title {
    font-size: rem(22px);
    font-weight: 500;
    margin-bottom: rem(8px);

    @include media-breakpoint-down(md) {
      font-size: rem(17px);
      margin-bottom: 0;
    }
  }

  &__count {
    font-weight: 400;
    font-size: rem(13px);
    margin-bottom: rem(22px);

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
      margin-bottom: rem(14px);
    }

    var {
      color: $main;
      font-style: normal;
      font-weight: 500;
    }
  }

  &__type {
    padding: rem(7px 14px);
    padding-left: rem(46px);
    position: relative;
    font-size: rem(13.5px);
    border-radius: 12px;
    width: max-content;
    height: 32px;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(xxl) {
      margin-bottom: rem(20px);
    }

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: 0;
      padding: rem(8px 14px);
      padding-left: rem(32px);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    &-icon {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
    }

    &--inst {
      color: $accent;
      background: rgba(255, 160, 0, 0.06);

      .group-info__type-icon {
        background: $accent;
      }
    }

    &--tg {
      color: $main;
      background: rgba(0, 133, 229, 0.06);

      .group-info__type-icon {
        background: $main;
      }
    }
  }

  &__row {
    display: flex;
  }

  &__cat {
    font-weight: 500;
    font-size: rem(13px);
    padding: rem(4px 24px);
    background-color: $main;
    color: #fff;
    border-radius: 20px;
    width: max-content;
    margin-bottom: rem(34px);
    white-space: nowrap;

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
      margin-bottom: rem(20px);
    }
  }

  &__favourite {
    opacity: 0.8;
    color: $main;
    font-size: rem(14px);
    margin-left: auto;
    white-space: nowrap;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(20px);
    }

    svg {
      opacity: 0.4;
    }
  }

  &__description {
    max-width: 325px;
    font-size: rem(12px);
    color: rgba(72, 72, 72, 0.8);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(26px);
    }
  }

  &__group-meta {
    margin-bottom: rem(20px);
  }

  &__link {
    font-size: rem(13.5px);
    color: $main;
    display: block;

    @include media-breakpoint-down(xl) {
      font-size: rem(12px);
      margin-bottom: rem(20px);
    }
  }
}

.group-meta {
  &__list {
    @include unlist;

    display: grid;
    grid-template-columns: repeat(3, minmax(max-content, 100%));
    gap: rem(8px);
  }

  &__item {
    background: rgba(0, 133, 229, 0.04);
    border-radius: 10px;
    color: $main;
    font-size: rem(11px);
    padding: rem(18px 12px);
    text-align: center;
    white-space: nowrap;

    @include media-breakpoint-down(md) {
      padding: rem(18px 8px);
      white-space: normal;
    }

    var {
      font-size: rem(14.5px);
      display: block;
      font-weight: 500;
      font-style: normal;
    }
  }
}
</style>
