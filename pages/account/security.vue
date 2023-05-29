<template>
  <div class="security">
    <div class="security__wrap">
      <div class="security__security-form security-form">
        <div class="security-form__group">
          <div class="security-form__group-label">Ваш старый пароль</div>
          <FormInput
            class="security-form__input"
            type="password"
            label="Старый пароль"
            :value.sync="password"
          />
        </div>

        <div class="security-form__group">
          <div class="security-form__group-label">Новый пароль</div>
          <FormInput
            class="security-form__input"
            type="password"
            label="Придумайте новый пароль"
            :value.sync="newpassword"
          />
          <FormInput
            class="security-form__input"
            type="password"
            label="Повторите новый пароль"
            :value.sync="repeatpassword"
          />
        </div>

        <div class="security-form__notice" v-if="notice.length">
          {{ notice  }}
        </div>

        <button class="security-form__btn" @click="handlePasswordChange">Сменить пароль</button>
      </div>

      <ProfileForm
        class="security__profile-form"
        heading="Двухфакторная аутентификация"
        subheading="Подключите двухфакторную аутентификацию по номеру телефона для обеспечения большей безопасности вашему аккаунта"
        :inputs="twoFAInputs"
        btn="Подключить 2FA"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      password: '',
      newpassword: '',
      repeatpassword: '',
      notice: '',
      twoFAInputs: [
        {
          label: 'Номер телефона',
          type: 'tel',
          value: '+7 (940) 730 - 04 - 20',
        },
      ],
    }
  },
  methods: {
    async handlePasswordChange() {
      this.notice = ''

      const token = this.$cookies.get('token')
      const { password, newpassword, repeatpassword } = this

      if (!password) {
        this.notice = 'Необходимо указать старый пароль'
        return
      }

      if (!newpassword) {
        this.notice = 'Необходимо указать новый пароль'
        return
      }

      if (newpassword !== repeatpassword) {
        this.notice = 'Новый и повторенный пароли не совпадают'
        return
      }

      const req = await this.$patchApiData('/profile', {
        token, password, newpassword
      })

      console.log(req)

      if (req.error) {
        this.notice = req.error
      }

    }
  }
})
</script>

<style lang="scss" scoped>
.security {
  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: rem(170px);

    @include media-breakpoint-down(xl) {
      grid-template-columns: 1fr 1fr;
      gap: rem(36px);
    }

    @include media-breakpoint-down(lg) {
      grid-template-columns: 1fr;
    }
  }

  &__profile-form {
    &::v-deep {
      .profile-control__label {
        display: none;
      }
    }
  }
}

.security-form {
  &__group {
    margin-bottom: rem(32px);

    &:last-of-type {
      margin-bottom: rem(32px);
    }
  }

  &__group-label {
    margin-bottom: rem(20px);
    font-size: rem(15px);
    font-weight: 500;
  }

  &__input {
    margin-bottom: rem(18px);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__notice {
    font-size: rem(12px);
    text-align: center;
    margin-bottom: rem(16px);
  }

  &__btn {
    @extend %btn-main;
    width: 100%;
  }
}
</style>
