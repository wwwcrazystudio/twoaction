<template>
  <div class="profile-verification">
    <div class="profile-verification__wrap">
      <div class="profile-verification__info">
        <div class="profile-verification__heading">Верификация аккаунта</div>
        <div class="profile-verification__description">
          Чтобы верифицировать аккаунт, через звонок будет передан код активации
        </div>
        <button
          class="profile-verification__btn"
          @click="checkCode = !checkCode"
        >
          Верифицировать аккаунт
        </button>
      </div>

      <div v-if="checkCode" class="profile-verification__form">
        <div class="profile-verification__form-label">
          Введите код подтверждения
        </div>
        <FormInput
          class="profile-verification__input"
          label="Код, полученный по звонку"
        />
        <button class="profile-verification__form-link">
          Запросить звонок с кодом через 59 сек.
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      checkCode: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.profile-verification {
  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(75px);

    @include media-breakpoint-down(lg) {
      grid-template-columns: 1fr;
      gap: rem(36px);
    }
  }

  &__info {
    padding: rem(0 45px);

    @include media-breakpoint-down(lg) {
      padding: 0;
    }
  }

  &__heading {
    font-weight: 500;
    font-size: rem(22px);
    margin-bottom: rem(22px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(14px);
      font-size: rem(17px);
    }
  }

  &__description {
    font-size: rem(13px);
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
      font-size: rem(12px);
    }
  }

  &__btn {
    @extend %btn-main;

    width: 100%;
  }

  &__input {
    margin-bottom: rem(16px);
  }

  &__form {
    &-label {
      font-weight: 500;
      font-size: rem(22px);
      margin-bottom: rem(22px);

      @include media-breakpoint-down(md) {
        margin-bottom: rem(14px);
        font-size: rem(17px);
      }
    }

    &-link {
      text-decoration: underline;
      font-size: rem(13.5px);
      color: $main;
      display: block;

      @include media-breakpoint-down(md) {
        font-size: rem(12px);
      }
    }
  }
}
</style>
