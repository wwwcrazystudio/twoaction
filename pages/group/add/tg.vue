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
              />
            </div>
            <div class="group-form__row">
              <div class="group-form__input-group">
                <FormInput
                  class="group-form__input"
                  type="number"
                  label="Количество подписчиков"
                />
              </div>
              <div class="group-form__input-group">
                <FormInput
                  class="group-form__input"
                  type="number"
                  label="Средний охват публикации"
                />
              </div>
              <div class="group-form__input-group">
                <FormInput
                  class="group-form__input"
                  type="number"
                  label="Среднее количество просмотров/сутки"
                />
              </div>
              <div class="group-form__input-group">
                <FormInput
                  class="group-form__input"
                  type="number"
                  label="Частота публикаций/сутки"
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
                  />
                  <FormInput
                    class="group-form__input"
                    type="number"
                    label="CPV"
                  />
                </div>
              </div>
              <div class="group-form__input-group">
                <div class="group-form__input-group-label">Пол</div>
                <div class="group-form__input-group-row">
                  <FormInput
                    class="group-form__input"
                    type="number"
                    label="Мужской"
                  />
                  <FormInput
                    class="group-form__input"
                    type="number"
                    label="Женский"
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
                :files.sync="stats"
              />
            </div>

            <div class="group-form__input-group">
              <div class="group-form__input-group-title">Прайс лист</div>

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
                      <div class="services-item__input-group-row">
                        {{ duration }}
                        <FormCheckboxBtn
                          label="Пост на 24 часа"
                          name="duration"
                          value="24"
                          :list.sync="duration"
                        />
                        <FormCheckboxBtn
                          label="Пост на 48 часа"
                          name="duration"
                          value="48"
                          :list.sync="duration"
                        />
                        <FormCheckboxBtn
                          label="Пост на 72 часа"
                          name="duration"
                          value="72"
                          :list.sync="duration"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      countries: [
        {
          name: 'Россия',
          percent: '28 %',
        },
        {
          name: 'Азербайджан',
          percent: '9 %',
        },
        {
          name: 'Армения',
          percent: '26 %',
        },
        {
          name: 'Грузия',
          percent: '7 %',
        },
        {
          name: 'Казахстан',
          percent: '12 %',
        },
        {
          name: 'Киргизия',
          percent: '5 %',
        },
        {
          name: 'Молдавия',
          percent: '10 %',
        },
        {
          name: 'Таджикистан',
          percent: '3 %',
        },
      ],
      citys: [
        {
          name: 'Москва',
          percent: '76 %',
        },
        {
          name: 'Ереван',
          percent: '24 %',
        },
      ],
      stats: {} as FileList,
      duration: [] as Array<string>,
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
  }

  &__group-info {
    margin-bottom: rem(32px);
  }

  &__input-group {
    margin-bottom: rem(32px);

    &-label {
      font-weight: 500;
      font-size: rem(15px);
      margin-bottom: rem(16px);

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }
    }

    &-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: rem(14px);

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
  }

  &__input-info {
    margin-bottom: rem(20px);
    font-size: rem(15px);
    font-weight: 500;
  }

  &__info {
    margin-bottom: rem(18px);
  }

  &__age-categories {
    margin-bottom: rem(20px);
  }

  &__sex {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 14px;
  }

  &__sex-item {
    display: block;
    margin-bottom: rem(32px);
    span {
      display: block;
      font-size: rem(13px);
      margin-bottom: rem(13px);
    }
  }

  &__sex-wrap {
    display: flex;
    justify-content: center;
    border: 1px solid $main;
    width: 100%;
    color: $main;
    margin: 0;
    padding: rem(14px 0);
    border-radius: 8px;
    svg {
      width: 18px;
      height: 18px;
      display: block;
      margin-right: rem(8px);
    }
  }

  &__group-geography {
    margin-bottom: rem(32px);
  }

  .group-coverage {
    &__row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: rem(40px);
    }

    &__item {
      width: 100%;
      display: flex;
      align-items: center;
      span {
        font-size: rem(13px);
        display: block;
        margin-right: rem(14px);
        font-weight: 500;
      }
      var {
        display: flex;
        justify-content: center;
        border: 1px solid $main;
        width: 100%;
        max-width: 92px;
        padding: rem(14px 0);
        border-radius: 8px;
      }
    }
  }

  .age-categories {
    &__list {
      @include unlist;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: 14px;
    }

    &__item {
      display: block;
    }

    &__age {
      display: block;
      margin-bottom: rem(12px);
      font-size: rem(13px);
    }
    &__percent {
      display: flex;
      justify-content: center;
      border: 1px solid $main;
      width: 100%;
      color: $main;
      padding: rem(14px 0);
      border-radius: 8px;
    }
  }

  .group-geography {
    &__list {
      @include unlist;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    &__item {
      border-radius: 8px;
      background: $main;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $white;
      width: 100%;
      padding: rem(8px 24px);
      padding-right: rem(18px);
      font-size: rem(13px);
      line-height: 20px;
      span {
        display: block;
      }

      var {
        background: rgba(255, 255, 255, 0.1);
        width: 100%;
        max-width: 160px;
        display: flex;
        justify-content: center;
        padding: rem(8px 0);
        border-radius: 8px;
      }
    }
  }
}
</style>
