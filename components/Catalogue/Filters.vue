<template>
  <div class="filters">
    <div class="filters__controls">
      <button class="filters__toggle-btn" @click="showFilters = !showFilters">
        Фильтр
      </button>
      <button class="filters__reset">Сбросить фильтр</button>
      <FormRadioBtn
        class="filters__radio-btn"
        label="Telegram"
        name="type"
        :value.sync="type"
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
        class="filters__radio-btn"
        label="Instagram"
        name="type"
        :value.sync="type"
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
    <div v-show="isTablet ? showFilters : true" class="filters__wrap">
      <div class="filters__head">
        <div class="filters__heading">Фильтр</div>
        <button class="filters__reset">Сбросить фильтр</button>
      </div>

      <div class="filters__type">
        <FormRadioBtn
          class="filters__radio-btn"
          label="Telegram"
          name="type"
          :value.sync="type"
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
          class="filters__radio-btn"
          label="Instagram"
          name="type"
          :value.sync="type"
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

      <FormInput
        class="filters__input"
        label="Средний охват публикаций"
        type="num"
        :value.sync="coverage"
      />
      <FormInput
        class="filters__input"
        label="Среднее количество просмотров/сутки"
        type="num"
        :value.sync="views"
      />
      <FormInput
        class="filters__input"
        label="Частота публикаций"
        type="num"
        :value.sync="frequency"
      />
      <FormSelect
        class="filters__select"
        label="Целевая аудитория"
        :options="targetAudience.options"
        :value.sync="targetAudience.value"
      />
      <FormSelect
        class="filters__select"
        label="Возраст (больший % охвата)"
        :options="age.options"
        :value.sync="age.value"
      />
      <FormSelect
        class="filters__select"
        label="Количество подписчиков"
        :options="subscribers.options"
        :value.sync="subscribers.value"
      />

      <FormSliderGroup
        class="filters__slider-group"
        label="Диапазон ERP, %"
        :min="1"
        :max="100"
        :value.sync="erp"
      />

      <FormSliderGroup
        class="filters__slider-group"
        label="Цена за пост"
        :min="1"
        :max="10000"
        mask="currency"
        :value.sync="price"
      />

      <FormSelect
        class="filters__select"
        label="Тип продвижения"
        :options="optimisation.options"
        :value.sync="optimisation.value"
      />

      <button class="filters__btn">Применить</button>
      <button
        v-show="isTablet"
        class="filters__btn filters__btn--light"
        @click="showFilters = false"
      >
        Закрыть фильтр
      </button>
      <button v-show="isTablet" class="filters__reset">Сбросить фильтр</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      type: 'Telegram',
      coverage: '' as String,
      views: '' as String,
      frequency: '' as String,
      targetAudience: {
        value: {} as Object,
        options: [
          {
            label: 'Молодые парни (18-27 лет)',
            value: 'M18-27',
          },
          {
            label: 'Мужчины (28-45 лет)',
            value: 'M28-45',
          },
          {
            label: 'Молодые девушки (18-27 лет)',
            value: 'F18-27',
          },
          {
            label: 'Женщины (28-45 лет)',
            value: 'F28-45',
          },
        ],
      } as Object,
      age: {
        value: {} as Object,
        options: [
          {
            label: 'Молодые парни (18-27 лет)',
            value: 'M18-27',
          },
          {
            label: 'Мужчины (28-45 лет)',
            value: 'M28-45',
          },
          {
            label: 'Молодые девушки (18-27 лет)',
            value: 'F18-27',
          },
          {
            label: 'Женщины (28-45 лет)',
            value: 'F28-45',
          },
        ],
      } as Object,
      subscribers: {
        value: {} as Object,
        options: [
          {
            label: 'Молодые парни (18-27 лет)',
            value: 'M18-27',
          },
          {
            label: 'Мужчины (28-45 лет)',
            value: 'M28-45',
          },
          {
            label: 'Молодые девушки (18-27 лет)',
            value: 'F18-27',
          },
          {
            label: 'Женщины (28-45 лет)',
            value: 'F28-45',
          },
        ],
      } as Object,
      erp: [1, 100] as Array<number>,
      price: [1, 5000] as Array<number>,
      optimisation: {
        value: {} as Object,
        options: [
          {
            label: 'Молодые парни (18-27 лет)',
            value: 'M18-27',
          },
          {
            label: 'Мужчины (28-45 лет)',
            value: 'M28-45',
          },
          {
            label: 'Молодые девушки (18-27 лет)',
            value: 'F18-27',
          },
          {
            label: 'Женщины (28-45 лет)',
            value: 'F28-45',
          },
        ],
      } as Object,
      showFilters: false as boolean,
    }
  },
  computed: {
    isMobile(this: any): boolean {
      return this.$isMobile()
    },
    isTablet(this: any): boolean {
      return this.$isTablet()
    },
  },
  watch: {
    showFilters(val: boolean) {
      if (val) {
        document.documentElement.classList.add('locked')
      } else {
        document.documentElement.classList.remove('locked')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.filters {
  &__head {
    display: flex;
    padding-bottom: rem(18px);
    margin-bottom: rem(18px);
    border-bottom: 1px solid rgba(186, 186, 186, 0.2);

    @include media-breakpoint-down(xl) {
      display: none;
    }
  }

  &__toggle-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f8fd;
    border-radius: 10px;
    padding: rem(10px 24px);
    color: $main;

    &::before {
      content: '';
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.76471 8.49748C7.76471 8.77502 7.53972 9 7.26219 9H0.5C0.223858 9 1.40319e-06 8.77614 9.0395e-07 8.5C4.04712e-07 8.22386 0.223858 8 0.5 8L7.26722 8C7.54198 8 7.76471 8.22273 7.76471 8.49748Z' fill='%230085E6'/%3E%3Cpath d='M9.88235 4.49748C9.88235 4.77502 9.65737 5 9.37984 5H0.5C0.223859 5 1.78587e-06 4.77614 1.15048e-06 4.5C5.15089e-07 4.22386 0.223858 4 0.5 4L9.38487 4C9.65962 4 9.88235 4.22273 9.88235 4.49748Z' fill='%230085E6'/%3E%3Cpath d='M12 0.497483C12 0.775016 11.775 1 11.4975 1H0.500001C0.223859 1 2.16856e-06 0.776143 1.39701e-06 0.500002C6.25466e-07 0.22386 0.223858 1.29584e-06 0.500001 1.26545e-06L11.5025 5.47427e-08C11.7773 2.45091e-08 12 0.222731 12 0.497483Z' fill='%230085E6'/%3E%3C/svg%3E%0A");
      width: 12px;
      height: 12px;
      margin-right: rem(8px);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &__controls {
    display: none;

    @include media-breakpoint-down(xl) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: rem(12px);
    }

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__heading {
    font-weight: 500;
    font-size: rem(24px);
  }

  &__wrap {
    @include media-breakpoint-down(xl) {
      position: fixed;
      z-index: 10;
      background: #fff;
      top: 70px;
      left: 0;
      right: 0;
      padding: rem(28px 20px);
      overflow: auto;
      height: calc(100vh - 80px);
    }
  }

  &__reset {
    font-size: rem(13.5px);
    margin-left: auto;
    color: $main;
    display: flex;
    align-items: center;
    text-decoration: underline;

    @include media-breakpoint-down(xl) {
      font-size: rem(11px);
      margin: auto;
    }

    &::before {
      content: '';
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_4328_8551)'%3E%3Cpath d='M6.37921 3.62303C6.24986 3.62303 6.14502 3.72787 6.14502 3.85722V8.28345C6.14502 8.41272 6.24986 8.51765 6.37921 8.51765C6.50857 8.51765 6.6134 8.41272 6.6134 8.28345V3.85722C6.6134 3.72787 6.50857 3.62303 6.37921 3.62303Z' fill='%230085E5'/%3E%3Cpath d='M3.61603 3.62303C3.48667 3.62303 3.38184 3.72787 3.38184 3.85722V8.28345C3.38184 8.41272 3.48667 8.51765 3.61603 8.51765C3.74538 8.51765 3.85022 8.41272 3.85022 8.28345V3.85722C3.85022 3.72787 3.74538 3.62303 3.61603 3.62303Z' fill='%230085E5'/%3E%3Cpath d='M1.60166 2.97699V8.74697C1.60166 9.08801 1.72672 9.40829 1.94518 9.63809C2.16263 9.86853 2.46525 9.99934 2.78195 9.99989H7.21292C7.52972 9.99934 7.83234 9.86853 8.0497 9.63809C8.26816 9.40829 8.39321 9.08801 8.39321 8.74697V2.97699C8.82747 2.86172 9.10887 2.44219 9.05078 1.99659C8.9926 1.55108 8.61304 1.21781 8.16369 1.21772H6.96465V0.92498C6.96602 0.678804 6.86868 0.442417 6.69441 0.268512C6.52014 0.0946983 6.28339 -0.00208862 6.03721 -7.60407e-05H3.95767C3.71149 -0.00208862 3.47474 0.0946983 3.30047 0.268512C3.1262 0.442417 3.02886 0.678804 3.03023 0.92498V1.21772H1.83119C1.38184 1.21781 1.00228 1.55108 0.9441 1.99659C0.886009 2.44219 1.1674 2.86172 1.60166 2.97699ZM7.21292 9.53151H2.78195C2.38154 9.53151 2.07005 9.18754 2.07005 8.74697V2.99757H7.92483V8.74697C7.92483 9.18754 7.61334 9.53151 7.21292 9.53151ZM3.49861 0.92498C3.49706 0.803035 3.545 0.685665 3.63154 0.599582C3.71799 0.513498 3.83563 0.466203 3.95767 0.468307H6.03721C6.15925 0.466203 6.27689 0.513498 6.36334 0.599582C6.44988 0.685574 6.49782 0.803035 6.49626 0.92498V1.21772H3.49861V0.92498ZM1.83119 1.6861H8.16369C8.39651 1.6861 8.58523 1.87483 8.58523 2.10765C8.58523 2.34047 8.39651 2.52919 8.16369 2.52919H1.83119C1.59837 2.52919 1.40965 2.34047 1.40965 2.10765C1.40965 1.87483 1.59837 1.6861 1.83119 1.6861Z' fill='%230085E5'/%3E%3Cpath d='M4.99786 3.62303C4.86851 3.62303 4.76367 3.72787 4.76367 3.85722V8.28345C4.76367 8.41272 4.86851 8.51765 4.99786 8.51765C5.12722 8.51765 5.23206 8.41272 5.23206 8.28345V3.85722C5.23206 3.72787 5.12722 3.62303 4.99786 3.62303Z' fill='%230085E5'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_4328_8551'%3E%3Crect width='10' height='10' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-position: center;
      background-color: rgba(0, 133, 229, 0.06);
      margin-right: rem(12px);
    }
  }

  &__type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(12px);
    margin-bottom: rem(22px);
  }

  &__input,
  &__select {
    margin-bottom: rem(14px);

    &:last-of-type {
      margin-bottom: rem(24px);
    }
  }

  &__slider-group {
    margin-bottom: rem(24px);
  }

  &__btn {
    @extend %btn-main;

    width: 100%;
    box-shadow: 0px 9px 20px rgba(0, 98, 169, 0.2);
    margin-bottom: rem(20px);

    &--light {
      background-color: rgba($main, 0.08);
      color: $main;
    }

    @include media-breakpoint-down(xl) {
      box-shadow: none;
    }
  }
}
</style>
