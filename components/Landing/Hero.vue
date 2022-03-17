<template>
  <div class="hero">
    <div class="container">
      <div class="hero__wrap">
        <h1 class="hero__heading">
          Биржа <span>сообществ</span> Инстаграм и Телеграм
        </h1>
        <div class="hero__subheading">
          Продвиньте группу и повысьте активность или предоставьте площадку для
          рекламы и найдите своего рекламодателя
        </div>
        <ul class="hero__advantages">
          <li class="hero__advantage-item">
            <div
              class="hero__advantage-item-icon hero__advantage-item-icon--tg"
            >
              <img src="~/assets/img/icons/telegram.png" alt="" />
            </div>
            <div class="hero__advantage-item-count">5 324</div>
            <div
              class="
                hero__advantage-item-title hero__advantage-item-title--main
              "
            >
              <span>телеграм</span>
              каналов
            </div>
          </li>
          <li class="hero__advantage-item">
            <div
              class="hero__advantage-item-icon hero__advantage-item-icon--inst"
            >
              <img src="~/assets/img/icons/inst.svg" alt="" />
            </div>
            <div class="hero__advantage-item-count">7 182</div>
            <div
              class="
                hero__advantage-item-title hero__advantage-item-title--accent
              "
            >
              <span>инстаграм</span>
              каналов
            </div>
          </li>
          <li class="hero__advantage-item">
            <div
              class="hero__advantage-item-icon hero__advantage-item-icon--graph"
            >
              <img src="~/assets/img/icons/graph.png" alt="" />
            </div>
            <div class="hero__advantage-item-count">12 843 573</div>
            <div
              class="
                hero__advantage-item-title hero__advantage-item-title--main
              "
            >
              суммарный
              <span>охват</span>
            </div>
          </li>
        </ul>

        <ul class="hero__checklist">
          <li class="hero__checklist-item">
            Найдем целевую аудиторию и запустим <span>рекламные компании</span>
          </li>
          <li class="hero__checklist-item">
            <span>Только проверенные</span> каналы и группы
          </li>
        </ul>

        <NuxtLink to="/" class="hero__btn">Выбрать сообщество</NuxtLink>
      </div>
    </div>
    <div class="hero__img">
      <img src="~/assets/img/laptop.png" alt="" />

      <div class="hero__img-deco hero__img-deco--1">+ 128 %</div>

      <div class="hero__img-deco hero__img-deco--2">
        <img src="~/assets/img/icons/heart.png" alt="" />
        + 1 846
      </div>

      <div class="hero__img-deco hero__img-deco--main hero__img-deco--3">
        <img src="~/assets/img/icons/avatar.png" alt="" />
        + 864
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;

  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  &__heading {
    max-width: 550px;
    margin-bottom: rem(25px);

    span {
      color: $main;
    }
  }

  &__subheading {
    margin-bottom: rem(36px);
    max-width: 490px;
  }

  &__advantages {
    @include unlist;

    display: grid;
    gap: rem(25px);
    grid-template-columns: repeat(3, 1fr);
    max-width: 450px;
    margin-bottom: rem(36px);
  }

  &__advantage-item {
    background: #ffffff;
    box-shadow: 0px 14px 75px rgba(221, 121, 0, 0.23),
      0px 1.75302px 9.39116px rgba(221, 121, 0, 0.115);
    padding: rem(16px 22px);
    border-radius: 20px;
    text-align: center;

    &-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 14px;
      margin: auto;
      margin-bottom: rem(12px);

      &--tg {
        background-color: $main;
      }

      &--inst {
        background: rgba($accent, 0.06);
      }

      &--graph {
        background: rgba($main, 0.04);
      }
    }

    &-count {
      font-size: rem(17px);
      font-weight: 500;
      margin-bottom: rem(8px);
    }

    &-title {
      font-weight: 500;
      font-size: rem(13px);

      span {
        display: block;
      }

      &--main {
        span {
          color: $main;
        }
      }

      &--accent {
        span {
          color: $accent;
        }
      }
    }
  }

  &__checklist {
    @include unlist;

    margin-bottom: rem(30px);

    &-item {
      display: flex;
      align-items: center;
      margin-bottom: rem(12px);

      &::before {
        content: '';
        background-color: $main;
        background-image: url("data:image/svg+xml,%3Csvg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.0542 1.30469L3.72083 5.63794C3.59082 5.76794 3.42017 5.83337 3.24951 5.83337C3.07886 5.83337 2.9082 5.76794 2.7782 5.63794L0.611572 3.47131C0.35083 3.21069 0.35083 2.78931 0.611572 2.52869C0.872192 2.26794 1.29346 2.26794 1.5542 2.52869L3.24951 4.224L7.11157 0.362061C7.37219 0.101318 7.79346 0.101318 8.0542 0.362061C8.31482 0.622681 8.31482 1.04395 8.0542 1.30469Z' fill='white'/%3E%3C/svg%3E%0A");
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin-right: rem(12px);
      }
    }
  }

  &__btn {
    @extend %btn-main;

    max-width: 220px;
  }

  &__img {
    position: absolute;
    top: 95px;
    right: 100px;

    @media (max-width: 1800px) {
        right: 0;
    }

    @media (max-width: 1500px) {
        left: 500px;
        right: unset;
    }

    &-deco {
      padding: rem(5px 10px);
      background-color: $accent;
      border-radius: 10px;
      font-weight: 500;
      font-size: rem(14px);
      color: #fff;
      position: absolute;
      text-align: center;

      img {
        display: block;
        margin: auto;
        margin-bottom: rem(4px);
      }

      &--1 {
        left: 0;
        top: 110px;
      }

      &--2 {
        bottom: 180px;
        left: 55px;
      }

      &--3 {
        right: 34px;
        top: 330px;
      }

      &--main {
        background-color: $main;
      }
    }
  }
}
</style>