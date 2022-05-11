<template>
  <div class="order-page">
    <div class="container">
      <div class="order-page__head">
        <h1 class="order-page__heading">Рекламный пост</h1>
        <div class="order-page__id">
          Номер заказа: <var>4860 2268 0846 1479</var>
        </div>
      </div>
      <div class="order-page__info-wrap">
        <GroupInfo class="order-page__group-info" :group="group" />
        <OrderStatus
          class="order-page__order-status"
          :status="status"
          @surcharge="showSurchargeModal = true"
        />
      </div>

      <div class="order-page__content-wrap">
        <div class="order-page__content">
          <div class="order-page__subheading">О заказе</div>

          <div class="order-page__order-meta order-meta">
            <ul class="order-meta__list">
              <li class="order-meta__item">
                <div class="order-meta__item-title">Дата открытия заказа:</div>
                <div class="order-meta__item-value">10.10.2021</div>
              </li>
              <li class="order-meta__item">
                <div class="order-meta__item-title">Формат размещения:</div>
                <div class="order-meta__item-value">Пост на 12 часов</div>
              </li>
              <li class="order-meta__item">
                <div class="order-meta__item-title">Рекламный бюджет:</div>
                <div class="order-meta__item-value">2 850 ₽</div>
              </li>
            </ul>
          </div>

          <div class="order-page__order-description order-description">
            <div class="order-description__title">Сопроводительное письмо:</div>
            <div class="order-description__text">
              <p>
                Либо спокойная жизнь без разбазаривания ресурса и умение сказать
                «нет», либо, условно говоря, фоткаешься со всеми желающими на
                конференции, как обезьянка. И никто потом на тему твоего отказа
                не снимает 20 сториз. Денег может становиться больше, душевного
                спокойствия — меньше.
              </p>
              <p>
                Рост нужен не всем, он может твое качество жизни растаскивать в
                совершенно разные стороны. Либо спокойная жизнь без
                разбазаривания ресурса и умение сказать «нет», либо, условно
                говоря, фоткаешься со всеми желающими на конференции, как
                обезьянка.
              </p>
              <p>
                Рост нужен не всем, он может твое качество жизни растаскивать в
                совершенно разные стороны. Либо спокойная жизнь без
                разбазаривания ресурса и умение сказать «нет», либо, условно
                говоря, фоткаешься со всеми желающими на конференции, как
                обезьянка.
              </p>
            </div>
          </div>

          <Messenger class="order-page__messenger" :dialogue="dialogue" />
        </div>

        <aside class="order-page__sidebar">
          <OrderCreatives
            class="order-page__order-creatives"
            :creatives="creatives"
          />
        </aside>
      </div>
    </div>

    <Modal
      :show="showSurchargeModal"
      heading="Доплатить и принять"
      @hide="showSurchargeModal = false"
    >
      <div class="order-page__surcharge surcharge">
        <div class="surcharge__wrap">
          <div class="surcharge__description">
            Количество показов превысило среднее значение выбранное площадкой,
            для принятия заказа, доплатите разницу
          </div>
          <div class="surcharge__title">Сумма, необходмая к доплате:</div>
          <div class="surcharge__price">1 550 ₽</div>
          <button class="surcharge__btn">Оплатить дополнительные показы</button>
          <div class="surcharge__foot">
            Нажимая на кнопку «Сохранить изменения», я соглашаюсь с
            <NuxtLink to="/"> Условиями применения </NuxtLink>
            и <NuxtLink to="/"> Политикой по персональным данным </NuxtLink>
          </div>
        </div>
      </div>
    </Modal>

    <Modal
      :show="showReviewModal"
      heading="Доплатить и принять"
      @hide="showReviewModal = false"
    >
      <div class="order-page__surcharge surcharge">
        <div class="surcharge__wrap">
          <div class="surcharge__description">
            Количество показов превысило среднее значение выбранное площадкой,
            для принятия заказа, доплатите разницу
          </div>
          <div class="surcharge__title">Сумма, необходмая к доплате:</div>
          <div class="surcharge__price">1 550 ₽</div>
          <button class="surcharge__btn">Оплатить дополнительные показы</button>
          <div class="surcharge__foot">
            Нажимая на кнопку «Сохранить изменения», я соглашаюсь с
            <NuxtLink to="/"> Условиями применения </NuxtLink>
            и <NuxtLink to="/"> Политикой по персональным данным </NuxtLink>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      showSurchargeModal: false,
      showReviewModal: false,
      status: Math.floor(Math.random() * 5) + 1,
      group: {
        img: require('~/assets/img/placeholder/group1.png'),
        title: 'Business marketing',
        type: 'inst',
        cat: 'кино и игры',
        description:
          'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
        meta: {
          ERP: '26,32%',
          CPV: '3,22 ₽',
          clients: '100%',
        },
      },
      dialogue: [
        {
          date: '12.01.2022, 12:52',
          content:
            'Здравствуйте. Хотел бы заказать продвижение в вашей группе Инстаграм. Также наблюдал ваше сообщество в Телеграм, которое меня также заинтересовало.',
        },
        {
          img: require('~/assets/img/placeholder/group1.png'),
          author: 'Business marketing, Павел',
          date: '12.01.2022, 12:52',
          content: `Здравствуйте и благодарим вас за то, что немедленно обратились к нам! </br></br>

            Ваша заявка открыта и отправлена на рассмотрение. В течении следующего часа мы свяжемся с вами вновь!</br></br>

            С уважением, служба поддержки TwoAction`,
        },
        {
          date: '12.01.2022, 12:52',
          content:
            'Большое спасибо за обратную связь! </br>Очень жду разрешения моей проблемы. ',
        },
      ],
      creatives: [
        require('~/assets/img/placeholder/creative1.jpg'),
        require('~/assets/img/placeholder/creative2.jpg'),
        require('~/assets/img/placeholder/creative3.jpg'),
        require('~/assets/img/placeholder/creative4.jpg'),
        require('~/assets/img/placeholder/creative5.jpg'),
        require('~/assets/img/placeholder/creative1.jpg'),
        require('~/assets/img/placeholder/creative2.jpg'),
        require('~/assets/img/placeholder/creative3.jpg'),
        require('~/assets/img/placeholder/creative4.jpg'),
        require('~/assets/img/placeholder/creative5.jpg'),
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.order-page {
  &__head {
    display: flex;
    align-items: flex-end;
    margin-bottom: rem(28px);

    @include media-breakpoint-down(md) {
      display: block;
      margin-bottom: rem(22px);
    }
  }

  &__heading {
    margin-bottom: 0;
    line-height: 0.8;

    @include media-breakpoint-down(md) {
      line-height: 1;
      margin-bottom: rem(6px);
    }
  }

  &__content {
    @include media-breakpoint-down(lg) {
      margin-bottom: rem(38px);
    }
  }

  &__id {
    font-size: rem(13px);
    margin-left: rem(22px);

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      margin-left: 0;
    }

    var {
      color: $main;
      text-decoration: underline;
    }
  }

  &__info-wrap {
    background: #ffffff;
    box-shadow: 0px 6px 26px rgba(117, 117, 117, 0.1);
    border-radius: 22px;
    overflow: hidden;
    display: flex;
    align-items: stretch;
    margin-bottom: rem(56px);

    @include media-breakpoint-down(xl) {
      flex-direction: column;
    }

    @include media-breakpoint-down(md) {
      border-radius: 14px;
      margin-bottom: rem(38px);
    }
  }

  &__group-info {
    flex: 1 1 auto;

    &::v-deep {
      .group-info__wrap {
        box-shadow: none;
        border-radius: 0;
      }
    }
  }

  &__order-status {
    flex: 0 1 30%;
    max-width: 350px;

    @include media-breakpoint-down(xl) {
      max-width: 100%;
      flex: 1 1 100%;
    }
  }

  &__content-wrap {
    display: grid;
    grid-template-columns: auto 260px;
    gap: rem(90px);
    margin-bottom: rem(100px);

    @include media-breakpoint-down(lg) {
      display: block;
    }
  }

  &__subheading {
    font-size: rem(22px);
    font-weight: 500;
    margin-bottom: rem(26px);

    @include media-breakpoint-down(md) {
      font-size: rem(16px);
      margin-bottom: rem(20px);
    }
  }

  &__order-meta {
    margin-bottom: rem(28px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(38px);
    }
  }

  &__order-description {
    margin-bottom: rem(64px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(38px);
    }
  }
}

.order-meta {
  &__list {
    @include unlist;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &__item {
    padding: rem(20px 24px);
    border: 1px solid #0085e5;
    border-radius: 8px;
    margin-right: rem(24px);

    @include media-breakpoint-down(md) {
      width: 100%;
      padding: rem(15px 24px);
      margin-right: 0;
      margin-bottom: rem(12px);
    }

    &:last-of-type {
      margin-right: 0;
      margin-bottom: 0;
    }

    &-title {
      color: $main;
      font-size: rem(13px);
      margin-bottom: rem(2px);

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }
    }

    &-value {
      font-weight: 500;

      @include media-breakpoint-down(md) {
        font-size: rem(16px);
      }
    }
  }
}

.order-description {
  &__title {
    margin-bottom: rem(20px);
    font-size: rem(16px);
    font-weight: 500;
    color: $main;
  }

  &__text {
    font-size: rem(13.5px);
    line-height: 175%;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }
}

.surcharge {
  &__wrap {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }

  &__description {
    font-size: rem(13px);
    line-height: 155%;
    margin-bottom: rem(32px);
  }

  &__title {
    font-weight: 500;
    font-size: rem(15px);
    margin-bottom: rem(10px);
  }

  &__price {
    font-weight: 500;
    font-size: rem(24px);
    margin-bottom: rem(34px);
    color: $main;
  }

  &__btn {
    @extend %btn-main;

    margin-bottom: rem(26px);
    width: 100%;
  }

  &__foot {
    font-size: rem(13px);
    font-weight: 500;

    a {
      color: $main;
      text-decoration: none;
    }
  }
}
</style>
