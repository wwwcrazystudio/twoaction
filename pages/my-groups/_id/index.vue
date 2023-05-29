<template>
  <div class="group-form">
    <div class="container">
      <div class="group-form__wrap">
        <h1 class="group-form__heading">Редактировать канал</h1>
        <GroupFormHead :data="groupData" class="group-form__group-info" />

        <div class="group-form__stats">
          <div class="group-form__stats-title">Статистика канала</div>
          <img :src="widgetURL" alt="" />
        </div>

        <form class="group-form__form">
          <!-- <div class="group-form__section">
              <div class="group-form__input-group">
                <FormTextarea
                  class="group-form__textarea"
                  label="Описание"
                  placeholder="Составьте краткое описание шаблона"
                  :max="150"
                  :value.sync="form.description"
                />
              </div>
              <div class="group-form__row">
                <div class="group-form__input-group">
                  <FormInput
                    class="group-form__input"
                    type="number"
                    label="Количество подписчиков"
                    :value.sync="form.subscribers"
                  />
                </div>
                <div class="group-form__input-group">
                  <FormInput
                    class="group-form__input"
                    type="number"
                    label="Средний охват публикации"
                    :value.sync="form.coverage"
                  />
                </div>
                <div class="group-form__input-group">
                  <FormInput
                    class="group-form__input"
                    type="number"
                    label="Среднее количество просмотров/сутки"
                    :value.sync="form.views"
                  />
                </div>
                <div class="group-form__input-group">
                  <FormInput
                    class="group-form__input"
                    type="number"
                    label="Частота публикаций/сутки"
                    :value.sync="form.posts"
                  />
                </div>
                <div class="group-form__input-group">
                  <div class="group-form__input-group-label">
                    Стоимость посетителя
                  </div>
                  <div class="group-form__input-group-row">
                    <FormInput
                      class="group-form__input"
                      type="number"
                      label="ER"
                      :value.sync="form.er"
                    />
                    <FormInput
                      class="group-form__input"
                      type="number"
                      label="CPV"
                      :value.sync="form.cpv"
                    />
                  </div>
                </div>
                <div class="group-form__input-group">
                  <div class="group-form__input-group-label">Пол</div>
                  <div class="group-form__input-group-row">
                    <FormInput
                      class="group-form__input"
                      type="text"
                      label="Мужской"
                      mask="percentage"
                      :value.sync="form.male"
                    />
                    <FormInput
                      class="group-form__input"
                      type="text"
                      label="Женский"
                      mask="percentage"
                      :value.sync="form.female"
                    />
                  </div>
                </div>
              </div>
            </div> -->

          <div class="group-form__section">
            <h2 class="group-form__subheading">Реклама в группе</h2>

            <!--             <div class="group-form__input-group">
                <FormMultiFile
                  label="Актуальная статистика сообщества"
                  :files.sync="form.stats"
                />
              </div> -->

            <div class="group-form__input-group">
              <div class="group-form__input-group-label">Прайс лист</div>

              <div class="group-form__services-list">
                <div class="group-form__service-item service-item">
                  <div class="service-item__wrap">
                    <div class="service-item__title">Рекламный пост</div>

                    <div class="service-item__description">
                      Размещение рекламного поста в Инстаграм с вашим креативом,
                      на 12 или 24 часа
                    </div>

                    <div class="service-item__input-group">
                      <div class="service-item__input-group-title">
                        Доступные форматы размещения
                      </div>
                      <div class="service-item__input-group-row">
                        <FormCheckboxBtn
                          v-for="item in pricing"
                          :key="item.label"
                          :label="item.label"
                          name="duration"
                          :value="item.label"
                          :checked.sync="item.active"
                        />
                      </div>
                    </div>

                    <div class="service-item__input-group">
                      <div class="service-item__input-group-row">
                        <div
                          v-show="item.active"
                          :key="item.label"
                          v-for="item in pricing"
                        >
                          <div class="service-item__input-group-title">
                            Цена за размещение на {{ item.label }}
                          </div>
                          <FormInput
                            :label="item.label"
                            type="text"
                            :value.sync="item.value"
                            :show-label="false"
                            mask="currency"
                            :max="100000"
                            :min="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="group-form__foot">
            <button
              class="group-form__btn"
              @click.prevent="submit"
              :class="success && 'success'"
              :disabled="loading"
            >
              Применить и сохранить
            </button>
            <button
              class="group-form__btn group-form__btn--light"
              @click.prevent="submit(true)"
              :class="success && 'success'"
              :disabled="loading"
            >
              Сохранить и перейти в Каталог
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $getApiData, route }) {
    const { params } = route
    const req = await $getApiData(`/channel/${params.id}`)

    const groupData = req[0]

    return {
      groupData,
      pricing: {
        p24: {
          label: '24 часа',
          value: parseInt(groupData.p24),
          active: Boolean(parseInt(groupData.p24)),
        },
        p48: {
          label: '48 часа',
          value: parseInt(groupData.p48),
          active: Boolean(parseInt(groupData.p48)),
        },
        p72: {
          label: '72 часа',
          value: parseInt(groupData.p72),
          active: Boolean(parseInt(groupData.p72)),
        },
      },
    }
  },
  data() {
    return {
      groupData: null,
      success: false,
      loading: false,
      form: {
        description: '',
        subscribers: '',
        coverage: '',
        views: '',
        posts: '',
        er: '',
        cpv: '',
        male: 0,
        female: 0,
        stats: {},
      },
    }
  },
  computed: {
    widgetURL() {
      const groupName = new URL(this.groupData.hash).pathname

      return `https://tgstat.ru/channel/${groupName}/stat-widget.png`
    },
  },
  methods: {
    async submit(redirect) {
      const token = this.$cookies.get('token')
      // eslint-disable-next-line camelcase
      const channel_id = this.groupData.channel_id

      this.loading = true

      const resp = await this.$postApiData('/channel/', {
        token,
        // eslint-disable-next-line camelcase
        channel_id,
        p24: this.pricing.p24.active ? this.pricing.p24.value : 0,
        p48: this.pricing.p48.active ? this.pricing.p48.value : 0,
        p72: this.pricing.p72.active ? this.pricing.p72.value : 0,
      })

      if (!resp.success) {
        alert('Произошла ошибка. Попробуйте еще раз')
        return
      }

      this.success = true
      this.loading = false

      setTimeout(() => {
        this.success = false
      }, 3000)

      if (redirect) {
        this.$router.push('/my-groups/')
      }
    },
  },
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

  &__stats {
    margin-bottom: rem(48px);
    position: relative;

    img {
      width: 100%;
    }

    &-title {
      position: absolute;
      left: 0;
      top: 0;
      background: #fff;
      width: 50%;
      height: 90px;
      padding: rem(20px);
      font-size: rem(20px);
      font-weight: 600;
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

    &:disabled {
      opacity: 0.6;
    }

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
