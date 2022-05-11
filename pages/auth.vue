<template>
  <div class="auth">
    <div class="auth__wrap">
      <div class="container">
        <div class="auth__content">
          <h1 class="auth__heading">{{ heading }}</h1>

          <div v-if="subheading" class="auth__subheading">{{ subheading }}</div>

          <template v-if="type === 'login'">
            <FormInput
              class="auth__input"
              type="email"
              :value.sync="form.email"
              label="Ваш E-mail"
            />

            <FormInput
              class="auth__input"
              type="password"
              :value.sync="form.pw"
              label="Ваш пароль"
            />

            <button
              class="auth__btn"
              @click.prevent="$router.push('/account/orders')"
            >
              Войти
            </button>

            <div class="auth__foot">
              <button class="auth__link" @click="type = 'reg'">
                Регистрация
              </button>
              <button class="auth__link" @click="type = 'forgot'">
                Забыли пароль?
              </button>
            </div>
          </template>

          <template v-if="type === 'reg'">
            <div class="auth__type">
              <FormRadioBtn
                class="auth__radio-btn"
                label="Рекламодатель"
                name="type"
              />
              <FormRadioBtn
                class="auth__radio-btn"
                label="Площадка"
                name="type"
              />
            </div>

            <FormInput
              class="auth__input"
              type="email"
              :value.sync="form.email"
              label="Ваш E-mail"
            />

            <button class="auth__btn">Зарегистрироваться</button>

            <div class="auth__foot">
              <div class="auth__notice">
                Нажимая на кнопку “Зарегистрироваться” я соглашаюсь с
                <NuxtLink to="/">правилами использования сервиса</NuxtLink>
              </div>
            </div>
          </template>

          <template v-if="type === 'forgot'">
            <FormInput
              class="auth__input"
              type="email"
              :value.sync="form.email"
              label="Ваш E-mail"
            />

            <button class="auth__btn">Отправить код</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'landing',
  data() {
    return {
      type: 'login',
      form: {
        pw: '',
        email: '',
      },
    }
  },
  computed: {
    heading(this: any) {
      const type = this.type as string

      switch (type) {
        case 'login':
          return 'Вход в систему'
        case 'reg':
          return 'Регистрация'
        case 'forgot':
          return 'Сброс пароля'
        default:
          return ''
      }
    },
    subheading(this: any) {
      const type = this.type as string

      switch (type) {
        case 'reg':
          return 'Укажите вашу электронную почту, на этот адрес будет выслан ваш пароль'
        case 'forgot':
          return 'Введите ваш e-mail или логин. На вашу почту придет код, для сброса пароля.'
        default:
          return ''
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.auth {
  &__wrap {
    background-color: rgba(255, 175, 40, 0.14);
    position: relative;
    padding-bottom: rem(50px);
    z-index: 10;
    padding-top: rem(250px);

    @include media-breakpoint-down(md) {
      padding-top: rem(135px);
    }

    &::after {
      content: '';
      background-color: $main;
      position: absolute;
      left: -20%;
      right: 0;
      width: 135%;
      height: 370px;
      bottom: -110px;
      clip-path: ellipse(50% 50% at 50% 50%);
      z-index: -1;
    }
  }

  &__content {
    padding: rem(40px 80px);
    background: #ffffff;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
    max-width: 620px;
    margin: auto;

    @include media-breakpoint-down(md) {
      padding: rem(26px);
    }
  }

  &__heading {
    font-size: rem(36px);
    margin-bottom: rem(26px);
    text-align: center;

    @include media-breakpoint-down(md) {
      font-size: rem(20px);
      margin-bottom: rem(20px);
    }
  }

  &__subheading {
    max-width: 324px;
    margin: auto;
    margin-bottom: rem(36px);
    text-align: center;
    font-size: rem(13px);
    line-height: 155%;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-bottom: rem(18px);
    }
  }

  &__input {
    margin-bottom: rem(18px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(12px);
    }
  }

  &__btn {
    @extend %btn-main;

    margin-top: rem(22px);
    margin-bottom: rem(30px);
    width: 100%;

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
    }
  }

  &__foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(24px);
    }
  }

  &__radio-btn {
    width: 47.5%;
  }

  &__link {
    font-size: rem(13.5px);
    color: $main;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }
  }

  &__notice {
    max-width: 364px;
    margin: auto;
    text-align: center;
    font-size: rem(13px);
    line-height: 155%;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }
  }
}
</style>