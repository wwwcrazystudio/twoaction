<template>
  <div class="ticket-page">
    <div class="container">
      <div class="ticket-page__wrap">
        <NuxtLink to="/" class="ticket-page__link">
          <svg
            transform="rotate(180)"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0163219 9.44979C0.0639392 9.65186 0.217143 9.83516 0.415034 9.92682C0.514565 9.97291 0.557222 9.98102 0.698238 9.98061C1.01056 9.97971 0.799625 10.1672 3.3191 7.65129C4.83862 6.13391 5.57468 5.38573 5.60753 5.32514C5.68423 5.18367 5.71118 5.0166 5.68101 4.86963C5.66722 4.80248 5.63415 4.70737 5.60753 4.65826C5.57468 4.59768 4.83862 3.84949 3.3191 2.33211C0.79941 -0.184004 1.01043 0.00353527 0.698238 0.00296879C0.556851 0.00271511 0.514155 0.0109186 0.410464 0.058301C0.0517128 0.222246 -0.100046 0.659161 0.0774353 1.01709C0.10265 1.06797 0.794918 1.77473 2.06225 3.04346L4.00834 4.9917L2.06225 6.93994C0.789957 8.21364 0.102807 8.91524 0.0775721 8.96631C0.00413438 9.11498 -0.019186 9.29914 0.0163219 9.44979Z"
              fill="#0085E5"
            />
          </svg>
          Перейти ко всем тикетам
        </NuxtLink>
        <div class="ticket-page-content">
          <div class="ticket-page__head">
            <h1 class="ticket-page__heading">
              Не удается отправить жалобу на исполнителя
            </h1>
            <div v-if="!isMobile" class="ticket-page__date">
              Тикет открыт:
              <div class="ticket-page__date-time">06.01.2022, 18:14</div>
            </div>
          </div>
          <div class="ticket-page__ticket-info">
            <div class="ticket-page__status">Открытая заявка</div>
            <div class="ticket-page__id">
              Номер заказа: <var>4860 2268 0846 1479</var>
            </div>
            <button class="ticket-page__btn" @click="showFiles = !showFiles">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1364 0.484559C9.27201 0.622496 8.50876 0.940621 7.82394 1.4484C7.66335 1.56746 6.36913 2.83625 4.20457 4.99656C1.20088 7.9944 0.81294 8.39259 0.630158 8.66537C0.065564 9.50796 -0.130967 10.5328 0.086564 11.5C0.388439 12.8421 1.40156 13.8881 2.74163 14.241C3.14678 14.3477 3.84304 14.3741 4.27438 14.2993C4.82641 14.2035 5.38713 13.9607 5.83691 13.6227C5.97576 13.5184 7.33691 12.178 9.12338 10.3864C12.4785 7.02153 12.2917 7.22984 12.4686 6.65624C12.5619 6.35374 12.5697 5.80846 12.485 5.504C12.2679 4.72321 11.669 4.1354 10.8893 3.93768C10.3879 3.81056 9.86551 3.87068 9.37082 4.1125L9.07395 4.25759L7.0496 6.27724C5.64304 7.68053 5.00566 8.33724 4.9611 8.42921C4.7301 8.90577 5.09704 9.47009 5.63644 9.46787C5.91394 9.46674 5.93807 9.44553 7.99582 7.39053C9.3516 6.03659 9.98448 5.42531 10.0651 5.3919C10.2228 5.32656 10.5127 5.33146 10.6677 5.40206C10.9227 5.51818 11.0894 5.78568 11.0891 6.07812C11.0888 6.37071 11.1267 6.3294 7.94441 9.50134C4.73335 12.702 4.8016 12.6398 4.33957 12.7836C3.72782 12.9741 3.15138 12.9201 2.58097 12.6188C2.33963 12.4914 1.88716 12.0506 1.75328 11.8125C1.58269 11.5091 1.48994 11.1777 1.47335 10.8125C1.454 10.3869 1.5126 10.1063 1.70182 9.71874L1.84672 9.42187L5.14785 6.11521C6.96344 4.29656 8.55116 2.73115 8.67607 2.6365C9.53501 1.98568 10.6434 1.74875 11.7069 1.98859C12.8708 2.25109 13.8398 3.09446 14.2872 4.23437C14.4393 4.62206 14.4962 4.91265 14.5167 5.40625C14.5497 6.20203 14.3586 6.88521 13.9092 7.57812C13.8015 7.74415 12.9745 8.59131 10.477 11.0937C7.92741 13.6484 7.17238 14.4223 7.12319 14.5312C6.84504 15.1473 7.47188 15.7745 8.08957 15.4982C8.19945 15.4491 8.9416 14.7231 11.4831 12.1786C13.4893 10.1702 14.8083 8.82581 14.9244 8.67121C15.9012 7.37118 16.2216 5.79703 15.8243 4.24943C15.363 2.45271 13.9312 1.04031 12.1052 0.580809C11.5485 0.440715 10.6779 0.398153 10.1364 0.484559Z"
                  fill="#0085E6"
                />
              </svg>
              Файлы
            </button>
          </div>
          <div v-if="isMobile" class="ticket-page__date">
            Тикет открыт:
            <div class="ticket-page__date-time">06.01.2022, 18:14</div>
          </div>
          <Messenger class="ticket-page__messenger" :dialogue="dialogue" />
        </div>
      </div>
    </div>

    <div
      v-show="showFiles"
      class="ticket-page__files"
      @click="showFiles = false"
    >
      <div class="ticket-page__files-list" @click.stop>
        <img
          v-for="(file, key) in files"
          :key="key"
          :src="file"
          class="ticket-page__files-item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      showFiles: false,
      dialogue: [
        {
          date: '12.01.2022, 12:52',
          content:
            'Я бы с радостью хотел обойтись, но так как исполнитель мало того, что запорол сделку, так еще и вел себя нагло. Я бы хотел настоять на его перманентной локировке, но вот проблема, отправить жалобу не могу',
        },
        {
          img: require('~/assets/img/placeholder/twoaction.jpg'),
          author: 'Служба поддержки, Кирилл',
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
      files: [
        require('~/assets/img/placeholder/stat1.jpg'),
        require('~/assets/img/placeholder/stat2.jpg'),
        require('~/assets/img/placeholder/stat3.jpg'),
        require('~/assets/img/placeholder/stat4.jpg'),
        require('~/assets/img/placeholder/stat5.jpg'),
      ],
    }
  },
  computed: {
    isMobile(this: any) {
      return this.$isMobile()
    },
  },
  watch: {
    showFiles(val) {
      const HTMLElement = document.documentElement
      if (val) {
        HTMLElement.classList.add('locked')
      } else {
        HTMLElement.classList.remove('locked')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.ticket-page {
  &__wrap {
    display: grid;
    grid-template-columns: 190px auto;
    gap: rem(70px);
    margin-bottom: rem(90px);

    @include media-breakpoint-down(xxl) {
      display: block;
    }
  }

  &__link {
    font-size: rem(14px);
    text-decoration: none;
    transform: translateY(20px);
    display: block;

    @include media-breakpoint-down(xxl) {
      margin-bottom: rem(18px);
      transform: none;
    }

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }

    svg {
      margin-right: rem(8px);
    }
  }

  &__content {
    max-width: 955px;
  }

  &__head {
    display: flex;
    align-items: flex-end;
    margin-bottom: rem(28px);

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &__heading {
    font-weight: 700;
    font-size: rem(36px);
    max-width: 45%;
    margin-bottom: 0;

    @include media-breakpoint-down(md) {
      font-size: rem(26px);
      max-width: 100%;
    }
  }

  &__date {
    font-weight: 500;
    font-size: rem(18px);
    margin-left: auto;
    text-align: right;

    @include media-breakpoint-down(md) {
      font-size: rem(14px);
      margin-left: 0;
      text-align: left;
      margin-bottom: rem(24px);
    }

    &-time {
      margin-top: rem(5px);
      display: block;
      font-size: rem(13px);
      color: $main;

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
        margin-top: 0;
        display: inline;
      }
    }
  }

  &__ticket-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(12px);
    }
  }

  &__status {
    padding: rem(6px 36px);
    border: 1px solid $main;
    color: $main;
    font-weight: 500;
    font-size: rem(13px);
    border-radius: 20px;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      order: 1;
    }
  }

  &__id {
    margin-left: rem(20px);
    font-size: rem(13px);

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      order: 3;
      margin-top: rem(20px);
      margin-left: 0;
      flex-basis: 100%;
      width: 100%;
    }

    var {
      color: $main;
      text-decoration: underline;
    }
  }

  &__btn {
    @extend %btn-light;

    text-decoration: underline;
    padding: rem(8px 28px);
    font-size: rem(13.5px);
    border-radius: 11px;
    margin-left: auto;

    svg {
      margin-right: rem(8px);
    }

    @include media-breakpoint-down(md) {
      order: 2;
      padding: rem(6px 22px);
      margin-left: rem(10px);
    }
  }

  &__files {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(38, 38, 38, 0.44);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1100;

    &-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: rem(40px);
      max-width: 980px;
      width: 60vw;
      max-height: 95vh;
      overflow: auto;

      @include media-breakpoint-down(lg) {
        grid-template-columns: 1fr 1fr;
      }

      @include media-breakpoint-down(md) {
        grid-template-columns: 1fr;
        width: 90vw;
        gap: rem(22px);
      }
    }

    &-item {
      border-radius: 8px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>
