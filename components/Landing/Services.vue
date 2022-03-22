<template>
  <section class="services">
    <div class="services__wrap">
      <div class="container">
        <h2 class="services__heading">Наши услуги</h2>

        <ul class="services__list">
          <li class="services__service-item service-item">
            <div class="service-item__wrap">
              <div class="service-item__head">
                <div class="service-item__icon">
                  <img src="~/assets/img/icons/increasing.png" alt="" />
                </div>
                <div class="service-item__count">
                  Всего
                  <span class="service-item__accent">268 846</span> заказов
                </div>
              </div>
              <h3 class="service-item__title">Накрутка подписчиков</h3>
              <div class="service-item__description">
                Огромный прирост подписанной аудитории в вашей группе Telegram
                или аккаунте Instagram
              </div>
              <ul class="service-item__pricing">
                <li class="service-item__pricing-item">
                  <img src="~/assets/img/icons/userblue.png" alt="" />
                  <span class="service-item__accent">1 000</span>
                  подписчиков ~
                  <span class="service-item__accent">150 ₽</span>
                </li>
              </ul>
              <NuxtLink to="/" class="service-item__btn">
                Оформить заказ
              </NuxtLink>
            </div>
          </li>

          <li class="services__service-item service-item">
            <div class="service-item__wrap">
              <div class="service-item__head">
                <div class="service-item__icon">
                  <img src="~/assets/img/icons/diagram.png" alt="" />
                </div>
                <div class="service-item__count">
                  Всего
                  <span class="service-item__accent">268 846</span> заказов
                </div>
              </div>
              <h3 class="service-item__title">Активность в пабликах</h3>
              <div class="service-item__description">
                Поспособствуем приросту лайков и комментариев в вашей группе
                Telegram или аккаунте Instagram
              </div>
              <ul class="service-item__pricing">
                <li class="service-item__pricing-item">
                  <img src="~/assets/img/icons/heartaccent.png" alt="" />
                  <span class="service-item__accent">5 000</span>
                  лайков ~
                  <span class="service-item__accent">400 ₽</span>
                </li>
                <li class="service-item__pricing-item">
                  <img src="~/assets/img/icons/messageaccent.png" alt="" />
                  <span class="service-item__accent">50</span>
                  комментариев ~
                  <span class="service-item__accent">350 ₽</span>
                </li>
              </ul>
              <NuxtLink to="/" class="service-item__btn">
                Оформить заказ
              </NuxtLink>
            </div>
          </li>

          <li class="services__service-item service-item">
            <div class="service-item__wrap">
              <div class="service-item__head">
                <div class="service-item__icon">
                  <img src="~/assets/img/icons/check.png" alt="" />
                </div>
                <div class="service-item__count">
                  Всего
                  <span class="service-item__accent">268 846</span> заказов
                </div>
              </div>
              <h3 class="service-item__title">За целевым действием</h3>
              <div class="service-item__description">
                Прирост охвата заинтересованной аудитории определенной записи в
                вашей группе Telegram или аккаунте Instagram
              </div>
              <ul class="service-item__pricing">
                <li class="service-item__pricing-item">
                  <img src="~/assets/img/icons/heartblue.png" alt="" />
                  <span class="service-item__accent">100</span>
                  лидов ~
                  <span class="service-item__accent">550 ₽</span>
                </li>
              </ul>
              <NuxtLink to="/" class="service-item__btn">
                Оформить заказ
              </NuxtLink>
            </div>
          </li>

          <li class="services__service-item service-item">
            <div class="service-item__wrap">
              <div class="service-item__head">
                <div class="service-item__icon">
                  <img src="~/assets/img/icons/card.png" alt="" />
                </div>
                <div class="service-item__count">
                  Всего
                  <span class="service-item__accent">268 846</span> заказов
                </div>
              </div>
              <h3 class="service-item__title">
                Возможность монетизировать свою аудиторию в Instagram и Telegram
              </h3>
              <div class="service-item__description">
                Доход от группы зависит от количества подписчиков, количества
                просмотров и активности аудитории
              </div>
              <NuxtLink to="/" class="service-item__btn">
                Оформить заказ
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  &__wrap {
    background: #fafafd;
    padding: rem(80px 0);
  }

  &__heading {
    margin-bottom: rem(36px);
  }

  &__list {
    @include unlist;

    display: grid;
    align-items: stretch;
    grid-template-columns: repeat(4, 1fr);
    gap: rem(32px);

    @include media-breakpoint-down(xl) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-breakpoint-down(sm) {
      grid-template-columns: repeat(1, 1fr);
      gap: rem(22px);
    }
  }

  &__service-item {
    &:nth-of-type(odd) {
      --item-color: #{$main};
    }
    &:nth-of-type(even) {
      --item-color: #{$accent};
    }
  }
}

.service-item {
  &__wrap {
    background: #ffffff;
    padding: rem(30px);
    border-radius: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: 350ms;
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(24px);
  }

  &__icon {
    width: 40px;
    height: 40px;
    border: 1px solid var(--item-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    transition: 350ms;
  }

  &__count {
    border: 1px solid rgba(203, 203, 203, 0.2);
    border-radius: 20px;
    font-size: rem(13px);
    padding: rem(8px 18px);
    margin-left: auto;
  }

  &__accent {
    color: var(--item-color);
  }

  &__title {
    margin-bottom: rem(12px);
  }

  &__description {
    font-size: rem(13px);
    line-height: 170%;
    margin-bottom: rem(30px);
  }

  &__pricing {
    @include unlist;

    margin-bottom: rem(24px);
  }

  &__pricing-item {
    font-size: rem(14px);
    font-weight: 500;
    margin-bottom: rem(5px);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__btn {
    @extend %btn;

    margin-top: auto;
    color: var(--item-color);
    position: relative;
    overflow: hidden;
    transition: 350ms;
    z-index: 10;

    &::before {
      content: '';
      position: absolute;
      background-color: var(--item-color);
      opacity: 0.1;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      transition: 350ms;
      z-index: -1;
    }
  }

  &:hover {
    .service-item {
      &__wrap {
        box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
          0px 10px 30px rgba(29, 29, 29, 0.04);
        transition: 350ms;
      }

      &__icon {
        background-color: var(--item-color);
        transition: 350ms;

        img {
          filter: grayscale(100) brightness(100);
        }
      }

      &__btn {
        color: #fff;
        transition: 350ms;
        &::before {
          opacity: 1;
          transition: 350ms;
        }
      }
    }
  }
}
</style>
