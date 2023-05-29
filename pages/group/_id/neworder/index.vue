<template>
  <div class="new-order">
    <div class="container">
      <h1 class="new-order__heading">Заказ рекламы в ленте</h1>

      <div class="new-order__group-name">
        Рекламный пост в сообществе: <span>{{ groupData.title }}</span>
      </div>

      <div class="new-order__form">
        <div class="new-order__form-wrap">
          <!-- <button class="new-order__template-btn">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.29433 0.0636289C1.22805 0.0986016 1.13691 0.179648 1.0918 0.243715L1.00977 0.360172L1.00164 3.16739C0.996012 5.10945 1.00257 6.00584 1.02286 6.07592C1.06106 6.20766 1.16792 6.33265 1.29996 6.4C1.40327 6.45271 1.46663 6.45373 4.25848 6.44667L7.11144 6.43945L7.20761 6.37355C7.26049 6.33732 7.33342 6.2644 7.36965 6.21152L7.43555 6.11535L7.44277 3.26238C7.44974 0.497109 7.44834 0.406301 7.39757 0.307262C7.33142 0.178281 7.24387 0.0962773 7.11475 0.0423281C7.02558 0.00505859 6.67895 0 4.21415 0H1.41486L1.29433 0.0636289ZM8.87128 0.0435586C8.74687 0.0975078 8.65945 0.180824 8.59462 0.307262C8.54384 0.406301 8.54245 0.497109 8.54942 3.26238L8.55664 6.11535L8.62254 6.21152C8.65877 6.2644 8.7317 6.33732 8.78458 6.37355L8.88075 6.43945L11.7337 6.44667C14.5256 6.45373 14.5889 6.45271 14.6922 6.4C14.8243 6.33265 14.9311 6.20766 14.9693 6.07592C14.9896 6.00584 14.9962 5.10945 14.9905 3.16739L14.9824 0.360172L14.9004 0.243715C14.8553 0.179648 14.7641 0.0986016 14.6979 0.0636289L14.5773 0L11.7721 0.00106641C9.32828 0.00199609 8.95449 0.00746484 8.87128 0.0435586ZM1.31055 7.5921C1.18343 7.65945 1.10284 7.742 1.04777 7.86133C0.999758 7.9654 0.99727 8.10709 0.996695 10.776L0.996094 13.5812L1.05972 13.7018C1.0947 13.768 1.17574 13.8592 1.23981 13.9043L1.35627 13.9863L4.16348 13.9944C6.10555 14.0001 7.00193 13.9935 7.07201 13.9732C7.20375 13.935 7.32874 13.8282 7.39609 13.6961C7.44881 13.5928 7.44982 13.5295 7.44277 10.7376L7.43555 7.88465L7.36965 7.78848C7.33342 7.7356 7.26049 7.66268 7.20761 7.62645L7.11144 7.56055L4.25202 7.55459C1.68428 7.54925 1.38421 7.55308 1.31055 7.5921ZM8.85742 7.58516C8.7493 7.63282 8.62639 7.75789 8.58016 7.86729C8.54961 7.93956 8.54297 8.45873 8.54297 10.7737C8.54297 13.517 8.54439 13.5948 8.59645 13.6969C8.66347 13.8282 8.78865 13.9351 8.92018 13.9732C8.99026 13.9935 9.88664 14.0001 11.8287 13.9944L14.6359 13.9863L14.7524 13.9043C14.8164 13.8592 14.8975 13.768 14.9325 13.7018L14.9961 13.5812V10.7819C14.9961 8.31715 14.991 7.97051 14.9538 7.88134C14.8999 7.75242 14.8178 7.66467 14.6896 7.59891C14.5917 7.54873 14.4873 7.5469 11.7638 7.54794C9.48348 7.54882 8.92365 7.55598 8.85742 7.58516Z"
                                fill="#0085E5" />
                        </svg>
                        Выбрать шаблон заказа
                    </button> -->
          <div class="new-order__block">
            <div class="new-order__block-title">Дата публикации</div>
            <div class="new-order__row">
              <FormDate
                class="new-order__datepicker"
                label="Выберите дату"
                :value.sync="selectedDate"
              />
              <FormSelect
                class="new-order__select new-order__select--time"
                label="Выберите время"
                :value.sync="selectedTime"
                :options="times"
              />
              <div class="new-order__time-status" >
                <svg v-if="timeStatus"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_7201_404)">
                    <path
                      d="M8.99609 0C4.58472 0 0.996094 3.58862 0.996094 8C0.996094 12.4114 4.58472 16 8.99609 16C13.4075 16 16.9961 12.4114 16.9961 8C16.9961 3.58862 13.4075 0 8.99609 0Z"
                      fill="#0085E5"
                    />
                    <path
                      d="M13.0503 6.30469L8.71692 10.6379C8.58691 10.7679 8.41626 10.8334 8.24561 10.8334C8.07495 10.8334 7.9043 10.7679 7.77429 10.6379L5.60767 8.47131C5.34692 8.21069 5.34692 7.78931 5.60767 7.52869C5.86829 7.26794 6.28955 7.26794 6.55029 7.52869L8.24561 9.224L12.1077 5.36206C12.3683 5.10132 12.7896 5.10132 13.0503 5.36206C13.3109 5.62268 13.3109 6.04395 13.0503 6.30469Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7201_404">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.996094)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <template v-if="selectedDate && selectedTime">
                {{ timeStatus ? 'Время свободно' : 'Время занято' }}
                </template>
                <template v-else>
                  Выберите время
                </template>
              </div>
            </div>
          </div>
          <div class="new-order__block">
            <div class="new-order__block-title">Формат размещения</div>
            <div class="new-order__row">
              <FormRadioBtn
                v-for="service in services"
                :key="service.value"
                class="new-order__radio-btn"
                name="type"
                :value="service.value"
                :label="service.label"
                @change="selectedService = service"
              />
            </div>
          </div>
          <div class="new-order__block">
            <div class="new-order__block-title">Сопроводительное письмо</div>
            <div class="new-order__row">
              <FormTextarea
                class="new-order__textarea"
                label="Составьте краткое описание по рекламе"
                :show-label="false"
                :value.sync="message"
              />
            </div>
          </div>
          <div class="new-order__block">
            <div class="new-order__block-title">Медиа</div>
            <FormMultiFile
              label="Статистика"
              :show-label="false"
              :files.sync="files"
              desc="<u>Загрузите</u> ваши рекламные креативы,
                    или перетащите и отпустите в эту форму для загрузки
                    (.png, .jpeg, .jpg, .avi, .mp4 до 50 мБ)"
            />
          </div>
          <div class="new-order__block">
            <div class="new-order__block-title">Рекламный бюджет</div>
            <FormInput
              label="Рекламный бюджет"
              :show-label="false"
              :value.sync="budget"
            />
            <div class="new-order__block-notice">
              Вы можете предложить свою цену за размещение Вашей рекламы
            </div>
          </div>
          <div class="new-order__block">
            <div class="new-order__block-title">Исполнитель</div>
            <GroupFormHead :data="groupData" class="group-form__group-info" />
          </div>
        </div>
      </div>

      <div class="new-order__form-foot">
        <div class="new-order__totals">
          Итоговая стоимость:
          <span v-if="!selectedDate">Выберите дату</span>
          <span v-else-if="!selectedTime">Выберите время</span>
          <span v-else-if="!timeStatus">Выбранное время недоступно</span>
          <span v-else-if="!selectedService">Выберите формат размещения</span>
          <span v-else>{{ selectedService.value }} ₽</span>
        </div>

        <button
          class="new-order__form-btn new-order__form-btn--main"
          :disabled="disabled"
          @click.prevent="handleOrder"
        >
          Заказать рекламу
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
import Vue from 'vue'
import { DateTime } from 'luxon'

export default Vue.extend({
  async asyncData({ $getApiData, route }) {
    const { params } = route

    const req = await $getApiData(`/channel/${params.id}`)

    console.log(req[0])

    return {
      groupData: req[0],
    }
  },
  data() {
    return {
      files: [],
      groupData: {},
      selectedDate: undefined,
      selectedService: undefined,
      selectedTime: undefined,
      message: '',
      budget: '',
    }
  },
  computed: {
    services() {
      const options = []

      if (parseInt(this.groupData.p24)) {
        options.push({
          label: 'Пост на 24 часа',
          hours: 24,
          value: this.groupData.p24,
        })
      }

      if (parseInt(this.groupData.p48)) {
        options.push({
          label: 'Пост на 48 часов',
          hours: 48,
          value: this.groupData.p48,
        })
      }

      if (parseInt(this.groupData.p72)) {
        options.push({
          label: 'Пост на 72 часа',
          hours: 72,
          value: this.groupData.p72,
        })
      }

      return options
    },
    times() {
      const times = new Array(24).fill().map((_el, key) => {
        return {
          label: `${key}:00`,
          value: `${key}`,
        }
      })

      return times
    },
    preparedTime() {
      if (!this.selectedDate || !this.selectedTime) return

      const date = DateTime.fromJSDate(this.selectedDate)
        .set({ hour: this.selectedTime.value })
      return date
    },
    timeStatus() {
        if (!this.selectedDate || !this.selectedTime) return

       const date = DateTime.fromJSDate(this.selectedDate).toSQLDate()
      const hour = this.selectedTime?.value
      const scheduleDay =  this.groupData.schedule.find(el => el.date === date)
      const scheduleHour = Object.entries(scheduleDay?.hours).find(([hourTime]) => hourTime === hour.toString().padStart(2, '0')) 

      if (!scheduleHour) return

      return scheduleHour[1] === 'open'
    },
    disabled() {
        if (!this.selectedDate || !this.selectedTime || !this.selectedService || !this.timeStatus) return true

        return false
    },
  },
  methods: {
    async handleOrder() {
      console.log("async handleOrder")
      const token = this.$cookies.get('token')
      const dateStart = this.preparedTime.toSQL()
      const dateEnd = this.preparedTime.plus({hours: this.selectedService.hours}).toSQL()

      const resp = await this.$postMultipartApiData(`/order`, {
        token,
        description: this.message,
        budget: parseInt(this.budget),
        channel_id: this.groupData.channel_id,
        date_start: dateStart,
        date_end: dateEnd,
        files: [...this.files]
      })

      console.log(resp)
     
     if (resp.success) {
      this.$router.push(`/order/${resp.success}`)
     }
    }
  },
})
</script>
  
<style lang="scss" scoped>
.new-order {
  &__heading {
    font-size: rem(36px);
    font-weight: 700;
    margin-bottom: rem(20px);
    text-align: center;
  }

  &__group-name {
    font-size: rem(13px);
    color: $main;
    border: 1px solid $main;
    padding: rem(8px 22px);
    width: fit-content;
    margin: auto;
    margin-bottom: rem(40px);
    border-radius: rem(20px);

    span {
      font-weight: 500;
    }
  }

  &__form {
    &-wrap {
      background: #ffffff;
      box-shadow: 0px 4px 50px rgba(117, 117, 117, 0.08),
        0px 10px 30px rgba(29, 29, 29, 0.04);
      border-radius: rem(20px);
      padding: rem(50px 128px);
      max-width: rem(880px);
      margin: auto;
      display: grid;
      gap: rem(32px);
    }

    &-foot {
      margin-top: rem(42px);
          margin-bottom: rem(80px);
    }
  }

  &__block-title {
    font-size: rem(15px);
    font-weight: 500;
    margin-bottom: rem(20px);
  }

  &__block-notice {
    color: rgba(72, 72, 72, 0.6);
    font-size: rem(13px);
    margin-top: rem(10px);
  }

  &__row {
    display: flex;
    align-items: center;
    gap: rem(12px);
  }

  &__radio-btn {
    flex: 1 1 33%;
    width: 30%;
  }

  &__textarea {
    width: 100%;
  }

  &__select--time {
    width: 100%;
    max-width: rem(210px);

    &::v-deep {
      .select__value,
      select__control {
        background-image: url("data:image/svg+xml,%0A%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath fill='%230085e6' d='M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z'/%3E%3C/svg%3E");
        background-size: rem(18px);
        padding: rem(9px 16px);
        padding-right: rem(24px);
        font-weight: 400;
      }
    }
  }

  &__totals {
    margin-bottom: rem(32px);
    font-weight: 500;
    font-size: rem(15px);
    text-align: center;

    span {
        color: $main;
        font-size: rem(24px);
        margin-top: rem(10px);
        display: block;
    }
  }

  &__form-btn {

    &:disabled {
        filter: grayscale(100);
        opacity: 0.8;
        cursor: not-allowed
    }

    &--main {
        @extend %btn-main;

        width: 100%;
        margin: auto;
        max-width: 360px;
        display: flex;
    }
  }
}
</style>
  