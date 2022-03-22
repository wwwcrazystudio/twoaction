<template>
  <div class="advantages">
    <div class="advantages__wrap">
      <div class="container">
        <div class="advantages__primary">
          <AdvantageBanner
            class="advantages__advantage-banner"
            color="main"
            title="TwoAction - платформа для рекламы"
            description="Биржа с огромным количеством релевантных групп для размещения
              рекламы"
            type="link"
            url="/"
            link-text="Зарегистрироваться"
            :img="require('~/assets/img/icons/superman.svg')"
          />
          <AdvantageBanner
            class="advantages__advantage-banner"
            color="main-light"
            title="Начните монетизировать аудиторию"
            description="Удобная площадка с простой и доступной возможностью монетизировать свою аудиторию в Instagram или Telegram"
            type="link"
            url="/"
            link-text="Выбрать сообщество"
            :img="require('~/assets/img/icons/piggy.svg')"
          />
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
      gap: rem(24px);
    }

    @include media-breakpoint-down(xl) {
      grid-template-columns: repeat(1, 1fr);
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
