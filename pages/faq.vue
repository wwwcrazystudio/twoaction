<template>
  <main class="faq">
    <div class="faq__wrap">
      <div class="faq__hero">
        <div class="container">
          <h1 class="faq__heading">Часто задаваемые вопросы</h1>
          <div class="faq__subheading">
            Вы можете найти ответы на наиболее частые и интересующие клиентов
            вопросы
          </div>
          <div class="faq__search-form search-form">
            <FormInput
              class="search-form__input"
              :show-label="false"
              label="Найдите интересующий вас вопрос.."
            />
          </div>
          <div class="faq__suggestion">
            Возвожно, <span>вы могли искать</span> следующую информацию
          </div>
          <div class="faq__common-questions common-questions">
            <ul class="common-questions__list">
              <li class="common-questions__item">
                <div class="common-questions__item-icon">
                  <img src="~/assets/img/icons/faq1.png" alt="" />
                </div>
                <div class="common-questions__item-title">Проект TwoAction</div>
                <div class="common-questions__item-description">
                  Огромный прирост подписанной аудитории в вашей группе Telegram
                </div>
                <NuxtLink to="/" class="common-questions__item-link">
                  Читать о проекте
                </NuxtLink>
              </li>
              <li class="common-questions__item">
                <div class="common-questions__item-icon">
                  <img src="~/assets/img/icons/faq2.png" alt="" />
                </div>
                <div class="common-questions__item-title">Отзывы клиентов</div>
                <div class="common-questions__item-description">
                  Огромный прирост подписанной аудитории в вашей группе Telegram
                </div>
                <NuxtLink to="/" class="common-questions__item-link">
                  Читать отзывы
                </NuxtLink>
              </li>
              <li class="common-questions__item">
                <div class="common-questions__item-icon">
                  <img src="~/assets/img/icons/faq3.png" alt="" />
                </div>
                <div class="common-questions__item-title">
                  Партнерская программа
                </div>
                <div class="common-questions__item-description">
                  Огромный прирост подписанной аудитории в вашей группе Telegram
                </div>
                <NuxtLink to="/" class="common-questions__item-link">
                  Читать о программе
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="faq__questions">
        <div class="container">
          <QuestionGroup
            class="faq__question-group"
            heading="Общие вопросы"
            :questions="common"
          />
          <QuestionGroup
            class="faq__question-group"
            heading="Рекламодателю"
            :questions="advertiser"
          />
          <QuestionGroup
            class="faq__question-group"
            heading="Вебмастеру"
            :questions="webmaster"
          />
        </div>
      </div>

      <div class="faq__question-form">
        <div class="container">
          <h2 class="faq__question-form-heading">
            Не нашли что искали? Задайте вопрос!
          </h2>
          <form class="faq__form form">
            <div class="form__heading">
              Отправьте <span>свой вопрос</span> или опишите возникшую проблему
            </div>
            <div class="form__inputs">
              <div class="form__row">
                <FormInput
                  class="form__input"
                  label="Тема сообщения"
                  :show-label="false"
                />
                <FormInput
                  class="form__input"
                  type="email"
                  label="Введите ваш E-mail"
                  :show-label="false"
                />
              </div>
              <FormTextarea
                class="form__textarea"
                label="Опишите свой вопрос или проблему.."
                :show-label="false"
              />
              <FormAttachment class="form__attachment" />
            </div>
            <button class="form__btn">Отправить вопрос</button>
            <div class="form__notice">
              Нажимая на “Отправить вопрос” я соглашаюсь на обработку
              <NuxtLink to="/" class="form__link">персональных данных</NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing',
  data() {
    return {
      common: [
        {
          title: 'Что представляет из себя рекалма на платформе TwoAction?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Какие гарантии размещения?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'А если мне не понравился результат рекалмы?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Какие преимуества размещения рекламы на TwoAction?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Почему цены на размещения такие дешевые?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Почему цены на размещения такие дорогие?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
      ],
      advertiser: [
        {
          title: 'Как мне разместить рекламу?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Вы можете мне помочь подобрать каналы?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Как пополнить баланс? Какие сервисы вы принимаете?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title:
            'Что обозначают форматы размещения 1/24, 2/48, 3/72 и навсегда?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Мой бизнес региональный. Что делать?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Деньги списались с баланса а поста нет, что делать?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Когда моя реклама появится на канале?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Как долго мой пост будет находиться в ленте?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Что будет если канал откажет в размещении моей рекламы?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Как отследить результат от рекламы?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
      ],
      webmaster: [
        {
          title: 'Как добавить мой канал или чат (группу) в каталог?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Как быстро мой канал или чат (группа) появится на сайте?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Почему мой канал или чат (группа) не добавлен в список?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title:
            'Как настроить форматы размещения 1/24, 2/48, 3/72, навсегда и репост для своего канала?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Сколько у меня времени на ответ по рекламному проекту?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Как долго рекламный пост должен находиться в ленте?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Что такое реферальная программа?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Как сделать вывод средств?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Я оформил заявку на вывод, где деньги?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
        {
          title: 'Почему мои каналы или чаты (группы) пропали из каталога?',
          content:
            'Мы гарантируем, что ваша реклама будет размещена в выбранных каналах или чатах (группах) именно на тех условиях, которые были указаны в вашей заявке. Мы пока что не можем гарантировать лиды, но мы обязуемся сделать все возможное для максимального внимания вашей целевой аудитории при размещении рекламы.',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.faq {
  &__wrap {
    background-color: rgba(255, 175, 40, 0.14);
  }

  &__heading {
    text-align: center;
    font-size: rem(48px);
    margin-bottom: rem(16px);

    @include media-breakpoint-down(md) {
      font-size: rem(26px);
    }
  }

  &__subheading {
    font-size: rem(13.5px);
    margin-bottom: rem(32px);
    text-align: center;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(22px);
    }
  }

  &__search-form {
    width: 100%;
    max-width: 966px;
    margin: auto;
    margin-bottom: rem(46px);
    &::v-deep {
      .input__control {
        padding: rem(26px 40px);
        background-color: #fff;
      }
    }

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
    }
  }

  &__suggestion {
    font-weight: 500;
    margin-bottom: rem(30px);
    text-align: center;
    span {
      color: $main;
    }
  }

  &__common-questions {
    z-index: 10;
    position: relative;
  }

  &__questions {
    background-color: $main;
    padding-top: rem(50px);
    padding-bottom: rem(100px);
    position: relative;
    z-index: 1;

    @include media-breakpoint-down(md) {
      margin-top: rem(100px);
    }

    &::before,
    &::after {
      content: '';
      background-color: $main;
      position: absolute;
      left: -10%;
      right: 0;
      width: 115%;
      height: 170px;

      clip-path: ellipse(50% 50% at 50% 50%);
      z-index: -1;
    }

    &::before {
      top: -90px;

      @include media-breakpoint-down(md) {
        top: -60px;
      }
    }

    &::after {
      bottom: -90px;
    }
  }

  &__question-form {
    padding-top: rem(64px);
    padding-bottom: rem(110px);
    margin-top: rem(-110px);
    position: relative;
    z-index: 10;

    &-heading {
      font-size: rem(36px);
      margin-bottom: rem(46px);
      color: #fff;
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: rem(18px);
        margin-bottom: rem(28px);
      }
    }
  }

  &__form {
    background-color: #fff;
    max-width: 866px;
    margin: auto;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    padding: rem(32px 64px);

    @include media-breakpoint-down(md) {
      padding: rem(26px);
    }
  }
}

.form {
  &__heading {
    font-weight: 500;
    text-align: center;
    margin-bottom: rem(30px);

    @include media-breakpoint-down(md) {
      font-size: rem(14px);
      margin-bottom: rem(22px);
    }

    span {
      color: $main;
    }
  }

  &__inputs {
    margin-bottom: rem(28px);
    border-bottom: 1px solid rgba(186, 186, 186, 0.2);
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(34px);

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &__input {
    margin-bottom: rem(18px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(12px);
    }
  }

  &__textarea {
    height: 170px;
    margin-bottom: rem(24px);
  }

  &__attachment {
    margin-bottom: rem(24px);
  }

  &__btn {
    @extend %btn-main;

    display: flex;
    width: 100%;
    max-width: 400px;
    margin: auto;
    margin-bottom: rem(22px);
  }

  &__notice {
    font-weight: 500;
    font-size: rem(13px);
    max-width: 380px;
    margin: auto;
    color: rgba(72, 72, 72, 0.8);
    text-align: center;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }
  }

  &__link {
    color: $main;
    text-decoration: none;
  }
}

.common-questions {
  &__list {
    @include unlist;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(54px);

    @include media-breakpoint-down(lg) {
      gap: rem(18px);
    }

    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(1, 1fr);
      gap: rem(22px);
    }
  }

  &__item {
    padding: rem(40px 24px);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    text-align: center;

    @include media-breakpoint-down(md) {
      padding: rem(26px 36px);
    }

    &-icon {
      width: 52px;
      height: 52px;
      background-color: $main;
      margin: auto;
      margin-bottom: rem(22px);
      box-shadow: 0px 9px 20px rgba(0, 98, 169, 0.2);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-title {
      font-weight: 500;
      font-size: rem(18px);
      margin-bottom: rem(23px);

      @include media-breakpoint-down(md) {
        font-size: rem(16px);
        margin-bottom: rem(14px);
      }
    }

    &-description {
      font-size: rem(13px);
      line-height: 170%;
      max-width: 240px;
      margin: auto;
      margin-bottom: rem(20px);

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
        margin-bottom: rem(18px);
      }
    }

    &-link {
      font-weight: 500;
      font-size: rem(14px);
      color: $main;
      text-decoration: none;

      @include media-breakpoint-down(md) {
        font-size: rem(13px);
      }
    }
  }
}
</style>
