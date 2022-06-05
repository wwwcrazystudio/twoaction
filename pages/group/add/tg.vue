<template>
  <div class="group-form">
    <div class="container">
      <div class="group-form__wrap">
        <h1 class="group-form__heading">Редактировать группу</h1>
        <GroupFormHead :logos="logos" class="group-form__group-info" />

        <form class="group-form__form">
          <div class="group-form__section">
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
          </div>

          <div class="group-form__section">
            <h2 class="group-form__subheading">Реклама в группе</h2>

            <div class="group-form__input-group">
              <FormMultiFile
                label="Актуальная статистика сообщества"
                :files.sync="form.stats"
              />
            </div>

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
                          label="Пост на 24 часа"
                          name="duration"
                          value="24"
                          :list.sync="form.duration"
                        />
                        <FormCheckboxBtn
                          label="Пост на 48 часа"
                          name="duration"
                          value="48"
                          :list.sync="form.duration"
                        />
                        <FormCheckboxBtn
                          label="Пост на 72 часа"
                          name="duration"
                          value="72"
                          :list.sync="form.duration"
                        />
                      </div>
                    </div>

                    <div class="service-item__input-group">
                      <div class="service-item__input-group-title">
                        Фиксированная цена
                      </div>
                      <div class="service-item__input-group-row">
                        <FormInput
                          label="Фиксированная цена"
                          name="duration"
                          type="text"
                          :value.sync="form.price"
                          :show-label="false"
                          mask="currency"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="group-form__foot">
            <button class="group-form__btn">Применить и сохранить</button>
            <button class="group-form__btn group-form__btn--light">
              Сохранить и перейти в Каталог
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      logos: [
        {
          src: require('~/assets/img/placeholder/group1.png'),
          title: 'logoOne',
        },
      ],
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
        stats: {} as FileList,
        duration: [] as Array<string>,
        price: 100,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
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

  &__input-group {
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
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

    &--light {
      @extend %btn-light;
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
