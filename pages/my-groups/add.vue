<template>
    <div class="group-form">
      <div class="container">
        <form class="group-form__wrap" @submit.prevent="submit()">
          <h1 class="group-form__heading">Добавить группу</h1>
          <div class="group-form__input-group">
            <div class="group-form__row">
              <FormRadioBtn
                class="group-form__radio-btn"
                label="Telegram"
                name="type"
                value="T"
                :model.sync="type"
              >
                <template #icon>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9018 0.41763C13.8382 0.80888 0.730424 5.84456 0.537362 5.9361C-0.10417 6.24016 -0.17917 6.64178 0.354893 6.91344C0.406455 6.93966 1.29367 7.22338 2.32649 7.54394L4.20436 8.12675L8.46842 5.45935C10.8136 3.99225 12.7797 2.77544 12.8374 2.75535C12.9822 2.70485 13.1069 2.70957 13.165 2.76775C13.2058 2.80847 13.2075 2.82891 13.1751 2.88875C13.1537 2.92835 11.5963 4.34266 9.71427 6.03166C7.83224 7.72066 6.28733 9.11578 6.28111 9.13197C6.27492 9.14812 6.21127 9.99137 6.13964 11.0058L6.00946 12.8503L6.15092 12.8312C6.22874 12.8207 6.35196 12.7806 6.42474 12.742C6.49755 12.7034 6.98752 12.2596 7.51361 11.7557C8.03967 11.2518 8.48833 10.8326 8.51061 10.824C8.53286 10.8155 9.37064 11.4089 10.3723 12.1427C11.374 12.8766 12.272 13.5133 12.368 13.5576C12.6196 13.6739 12.903 13.6854 13.0871 13.5869C13.2516 13.4989 13.4123 13.2804 13.4799 13.0528C13.506 12.9647 14.0787 10.3187 14.7525 7.17288C15.8743 1.93519 15.9775 1.4281 15.9779 1.15625C15.9783 0.899411 15.9676 0.838317 15.8988 0.70313C15.8503 0.607817 15.7675 0.510505 15.6866 0.45363C15.5017 0.323568 15.1956 0.309536 14.9018 0.41763Z"
                      fill="#0085E5"
                    />
                  </svg>
                </template>
              </FormRadioBtn>
  
              <FormRadioBtn
                class="group-form__radio-btn"
                label="Instagram"
                name="type"
                value="I"
                :model.sync="type"
              >
                <template #icon>
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3.7627C4.64297 3.7627 3.53906 4.8666 3.53906 6.22363C3.53906 7.58066 4.64297 8.68457 6 8.68457C7.35703 8.68457 8.46094 7.58066 8.46094 6.22363C8.46094 4.8666 7.35703 3.7627 6 3.7627ZM6 3.7627C4.64297 3.7627 3.53906 4.8666 3.53906 6.22363C3.53906 7.58066 4.64297 8.68457 6 8.68457C7.35703 8.68457 8.46094 7.58066 8.46094 6.22363C8.46094 4.8666 7.35703 3.7627 6 3.7627ZM10.2422 0.200195H1.75781C0.7875 0.200195 0 0.987695 0 1.95801V10.4424C0 11.4127 0.7875 12.2002 1.75781 12.2002H10.2422C11.2125 12.2002 12 11.4127 12 10.4424V1.95801C12 0.987695 11.2125 0.200195 10.2422 0.200195ZM6 9.3877C4.25627 9.3877 2.83594 7.96736 2.83594 6.22363C2.83594 4.47986 4.25627 3.05957 6 3.05957C7.74373 3.05957 9.16406 4.47986 9.16406 6.22363C9.16406 7.96736 7.74373 9.3877 6 9.3877ZM9.86719 3.05957C9.48047 3.05957 9.16406 2.74316 9.16406 2.35645C9.16406 1.96973 9.48047 1.65332 9.86719 1.65332C10.2539 1.65332 10.5703 1.96973 10.5703 2.35645C10.5703 2.74316 10.2539 3.05957 9.86719 3.05957ZM6 3.7627C4.64297 3.7627 3.53906 4.8666 3.53906 6.22363C3.53906 7.58066 4.64297 8.68457 6 8.68457C7.35703 8.68457 8.46094 7.58066 8.46094 6.22363C8.46094 4.8666 7.35703 3.7627 6 3.7627ZM6 3.7627C4.64297 3.7627 3.53906 4.8666 3.53906 6.22363C3.53906 7.58066 4.64297 8.68457 6 8.68457C7.35703 8.68457 8.46094 7.58066 8.46094 6.22363C8.46094 4.8666 7.35703 3.7627 6 3.7627ZM6 3.7627C4.64297 3.7627 3.53906 4.8666 3.53906 6.22363C3.53906 7.58066 4.64297 8.68457 6 8.68457C7.35703 8.68457 8.46094 7.58066 8.46094 6.22363C8.46094 4.8666 7.35703 3.7627 6 3.7627Z"
                      fill="#0085E5"
                    />
                  </svg>
                </template>
              </FormRadioBtn>
            </div>
          </div>
          <div class="group-form__input-group">
            <FormInput
              class="group-form__textarea"
              label="Ссылка на группу"
              :value.sync="channel"
            />
          </div>
          <button class="group-form__btn">Подтверждение прав на группу</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data() {
      return {
        channel: '',
        type: 'T',
      }
    },
    methods: {
      async submit(this: any) {
        const token = this.$cookies.get('token')
        const { channel, type } = this

        if (type === 'T') {
            const resp = await this.$getApiData(`/telegram/${token}`, { channel })

            if (resp.error) {
                alert(resp.error)
                return
            } 

            window.open(resp, '_blank')?.focus();
        }
      }
    }
  })
  </script>
  
  
<style lang="scss">
.group-form {
  &__heading {
    font-size: rem(36px);
    margin-bottom: rem(32px);
    text-align: center;

    @include media-breakpoint-down(md) {
      font-size: rem(26px);
      margin-bottom: rem(14px);
    }
  }

  &__wrap {
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    padding: rem(50px 128px);
    padding-bottom: rem(70px);
    background: #ffffff;
    box-shadow: 0px 4px 50px rgba(117, 117, 117, 0.08),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    margin-bottom: rem(120px);
    margin-top: rem(50px);

    @include media-breakpoint-down(lg) {
      padding: rem(42px 64px);
    }

    @include media-breakpoint-down(md) {
      padding: rem(24px);
      margin: 24px auto;
    }
  }

  &__group-info {
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }
  }

  &__subheading {
    font-size: rem(22px);
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }
  }

  &__input {
    &--country {
      &::v-deep {
        .input__wrap {
          background: $main;
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: rem(8px 24px);
          padding-right: rem(18px);
        }

        .input__label {
          color: #fff;
          margin: 0;
          margin-right: auto;
        }

        .input__control {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          max-width: 140px;
          color: #fff;

          @include media-breakpoint-down(sm) {
            max-width: 70px;
          }

          &::placeholder {
            color: #fff;
          }
        }
      }
    }
  }

  &__input-group {
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }

    &-inner-row {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &::v-deep {
        .group-form__input-group-label {
          margin-bottom: 0;
          font-size: rem(13px);
        }
      }
    }

    &-label {
      font-weight: 500;
      font-size: rem(15px);
      margin-bottom: rem(16px);

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
        margin-bottom: rem(12px);
      }
    }

    &-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: rem(14px);

      @include media-breakpoint-down(md) {
        grid-template-columns: 1fr 1fr;
      }

      &--six {
        grid-template-columns: repeat(6, 1fr);

        @include media-breakpoint-down(md) {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      &--list {
        grid-template-columns: 1fr 1fr;
        margin-top: rem(20px);

        @include media-breakpoint-down(md) {
          grid-template-columns: 1fr;
        }
      }

      &::v-deep {
        label {
          font-size: rem(13px) !important;
        }
      }
    }
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(12px);

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  &__foot {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(12px);

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;
    }
  }

  &__btn {
    @extend %btn-main;
    width: 100%;

    &--light {
      @extend %btn-light;
    }
  }

  &__services-list {
    &--two {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: rem(12px);
      align-items: stretch;

      @include media-breakpoint-down(md) {
        grid-template-columns: 1fr;
      }

      .service-item__input-group-row {
        grid-template-columns: 1fr;
      }
    }
  }
}

.service-item {
  &__wrap {
    background: #ffffff;
    border: 1px solid rgba(186, 186, 186, 0.2);
    border-radius: 16px;
    padding: rem(24px);
    padding-top: rem(30px);
    height: 100%;

    @include media-breakpoint-down(md) {
      padding: rem(16px);
    }
  }

  &__title {
    font-weight: 500;
    font-size: rem(14px);
    line-height: 140%;
    margin-bottom: rem(16px);
    color: $dark;
  }

  &__description {
    font-size: rem(12px);
    line-height: 140%;
    color: rgba(72, 72, 72, 0.8);
    margin-bottom: rem(20px);
  }

  &__input-group {
    margin-bottom: rem(20px);

    &:last-of-type {
      margin-bottom: 0;
    }

    &-title {
      margin-bottom: rem(12px);
      font-size: rem(13px);
      color: rgba(72, 72, 72, 0.8);
    }

    &-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: rem(12px);

      @include media-breakpoint-down(md) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>