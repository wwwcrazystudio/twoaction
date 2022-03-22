<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__row">
          <div class="footer__col">
            <NuxtLink to="/" class="footer__logo">
              <img src="~/assets/img/icons/logo-white.png" alt="" />
            </NuxtLink>
            <div class="footer__payment-systems">
              <img src="~/assets/img/icons/payment-systems.svg" alt="" />
              Платежные системы
            </div>
          </div>
          <div class="footer__col">
            <div class="footer__menus">
              <FooterMenu
                class="footer__footer-menu"
                title="О проекте"
                :links="menu1"
              />
              <FooterMenu
                class="footer__footer-menu"
                title="Пользователю"
                :links="menu2"
              />
              <FooterMenu
                class="footer__footer-menu"
                title="Информация"
                :links="menu3"
              />
            </div>
          </div>
          <div class="footer__col">
            <div class="footer__contacts contacts">
              <div class="contacts__wrap">
                <div class="contacts__item">
                  <div class="contacts__item-title">Напишите нам:</div>
                  <a
                    href="mailto:twoaction_help@yandex.com"
                    class="contacts__item-link"
                  >
                    twoaction_help@yandex.com
                  </a>
                </div>
                <div class="contacts__item">
                  <div class="contacts__item-title">Позвоните нам:</div>
                  <a href="tel:89185304800" class="contacts__item-link">
                    8918-530-48-00
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__foot">
          <div class="footer__copyright">
            @ TwoAction - Биржа сообществ Инстаграм и Телеграм. 2021
            <span>Все права защищены</span>
          </div>

          <div class="footer__links">
            <ul class="footer__links-list">
              <li class="footer__link-item">
                <NuxtLink to="/" class="footer__link">
                  Пользовательское соглашение сервиса
                </NuxtLink>
              </li>
              <li class="footer__link-item">
                <NuxtLink to="/" class="footer__link">
                  Правила пользования
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      menu1: [
        {
          label: 'Услуги',
          route: '/',
        },
        {
          label: 'Отзывы',
          route: '/',
        },
      ],
      menu2: [
        {
          label: 'Рекламодателю',
          route: '/',
        },
        {
          label: 'Площадке',
          route: '/',
        },
      ],
      menu3: [
        {
          label: 'Частые вопросы',
          route: '/',
        },
        {
          label: 'Партнерская программа',
          route: '/',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.footer {
  background-color: $main;
  position: relative;
  z-index: 20;

  &__wrap {
    padding: rem(64px 0);
  }

  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: rem(54px);
  }

  &__menus {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: rem(32px);

    @include media-breakpoint-down(xxl) {
      gap: rem(16px);
    }
  }

  &__logo {
    margin-bottom: rem(36px);
    display: block;
  }

  &__payment-systems {
    font-size: rem(13px);
    color: rgba(255, 255, 255, 0.8);

    img {
      display: block;
      margin-bottom: rem(8px);
    }
  }

  &__foot {
    display: flex;
    align-items: center;
  }

  &__copyright {
    font-weight: 500;
    font-size: rem(14px);
    display: flex;
    align-items: center;
    color: #fff;

    span {
      font-weight: 400;
      margin-left: rem(10px);
      opacity: 0.6;
    }
  }

  &__links {
    margin-left: auto;

    &-list {
      @include unlist;
      display: flex;
    }

    &-item {
      margin: rem(0 30px);
    }

    &-link {
      font-weight: 500;
      font-size: rem(14px);
      text-decoration: none;
      color: #fff;
    }
  }
}

.contacts {
  &__wrap {
    background: #0290f5;
    box-shadow: 0px 14px 75px rgba(86, 86, 86, 0.23),
      0px 1.75302px 9.39116px rgba(221, 121, 0, 0.115);
    padding: rem(16px 40px);
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    border-radius: 15px;

    @include media-breakpoint-down(xxl) {
      padding: rem(16px);
      max-width: fit-content;
    }
  }

  &__item {
    &:first-of-type {
      padding-right: rem(36px);
      border-right: 1px solid rgba(255, 255, 255, 0.2);

      @include media-breakpoint-down(xxl) {
        flex: 0 0 100%;
        padding: 0;
        padding-bottom: rem(12px);
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
    }

    &:last-of-type {
      padding-left: rem(36px);

      @include media-breakpoint-down(xxl) {
        flex: 0 0 100%;
        padding: 0;
        padding-top: rem(12px);
      }
    }

    &-title {
      font-size: rem(13px);
      margin-bottom: rem(4px);
      color: rgba(255, 255, 255, 0.8);
    }

    &-link {
      font-weight: 500;
      font-size: rem(15px);
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
    }
  }
}
</style>
