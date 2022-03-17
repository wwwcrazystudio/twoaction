<template>
  <div class="advantages">
    <div class="advantages__wrap">
      <div class="container">
        <div class="advantages__primary">
          <div
            class="
              advantages__primary-advantage advantages__primary-advantage--about
            "
          >
            <div class="advantages__primary-advantage-title">
              TwoAction - платформа для рекламы
            </div>
            <div class="advantages__primary-advantage-description">
              Биржа с огромным количеством релевантных групп для размещения
              рекламы
            </div>
            <NuxtLink to="/" class="advantages__primary-advantage-link">
              Зарегистрироваться
              <img src="~/assets/img/icons/arrow.png" alt="" />
            </NuxtLink>
          </div>
          <div
            class="
              advantages__primary-advantage
              advantages__primary-advantage--monetize
            "
          >
            <div class="advantages__primary-advantage-title">
              Начните монетизировать аудиторию
            </div>
            <div class="advantages__primary-advantage-description">
              Удобная площадка с простой и доступной возможностью монетизировать
              свою аудиторию в Instagram или Telegram
            </div>
            <NuxtLink to="/" class="advantages__primary-advantage-link">
              Выбрать сообщество
              <img src="~/assets/img/icons/arrow.png" alt="" />
            </NuxtLink>
          </div>
        </div>
        <div class="advantages__secondary">
          <div class="advantages__advantage-item">
            <div class="advantages__advantage-item-icon">
              <img src="~/assets/img/icons/ui.svg" alt="" />
            </div>
            <div class="advantages__advantage-item-title">
              Удобный интерфейс
            </div>
            <div class="advantages__advantage-item-description">
              Мы спроектировали удобный и понятный интерфейс для комфортного
              взаимодействия с нашей платформой
            </div>
          </div>
          <div class="advantages__secondary-advantages">
            <div class="advantages__advantage-item">
              <div class="advantages__advantage-item-icon">
                <img src="~/assets/img/icons/stonks.svg" alt="" />
              </div>
              <div class="advantages__advantage-item-title">
                Релевантные группы
              </div>
              <div class="advantages__advantage-item-description">
                На бирже TwoAction было собрано огромное количество релевантных
                групп с большим охватом аудитории
              </div>
            </div>
          </div>
          <div class="advantages__secondary-advantages">
            <div class="advantages__advantage-item">
              <div class="advantages__advantage-item-icon">
                <img src="~/assets/img/icons/quality.svg" alt="" />
              </div>
              <div class="advantages__advantage-item-title">
                Качественный сервис
              </div>
              <div class="advantages__advantage-item-description">
                Платформа TwoAction с группами и каналами проверена временем, к
                нам с радостью возвращаются клиенты за добавкой
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.advantages {
  &__wrap {
    padding: rem(80px 0);
  }

  &__primary {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(62px);
    margin-bottom: rem(46px);

    @include media-breakpoint-down(xxl) {
      grid-template-columns: repeat(1, 1fr);
      gap: rem(32px);
    }
  }

  &__primary-advantage {
    padding: rem(42px 50px);
    border-radius: 20px;

    &--about {
      background-color: $main;
      background-image: url('~/assets/img/icons/superman.svg');
      background-position: 100% 0%;
      background-repeat: no-repeat;
      color: #fff;

      .advantages__primary-advantage-link img {
        filter: grayscale(100) brightness(100);
      }
    }

    &--monetize {
      background: rgba(0, 133, 229, 0.04);
      color: #464a4b;
      background-image: url('~/assets/img/icons/piggy.svg');
      background-position: 100% 100%;
      background-repeat: no-repeat;

      .advantages__primary-advantage {
        &-title {
          color: $main;
        }
        &-link {
          color: $main;
        }
      }
    }

    &-title {
      font-weight: 500;
      font-size: rem(22px);
      margin-bottom: rem(20px);
    }

    &-description {
      font-weight: 500;
      font-size: rem(13.5px);
      margin-bottom: rem(25px);
      max-width: 400px;
    }

    &-link {
      font-weight: 500;
      font-size: rem(14px);
      color: #fff;
      display: flex;
      align-items: center;
      text-decoration: none;

      img {
        margin-left: rem(8px);
      }
    }
  }

  &__secondary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(20px);

    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__advantage-item {
    text-align: center;

    &-icon {
      width: 130px;
      height: 130px;
      margin: auto;
      margin-bottom: rem(18px);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &-title {
      font-weight: 500;
      font-size: rem(20px);
      margin-bottom: rem(16px);
    }

    &-description {
      font-size: rem(13.5px);
      line-height: 180%;
      max-width: 300px;
      margin: auto;
    }
  }
}
</style>