<template>
  <div class="profile-form">
    <div class="profile-form__heading">Личная информация</div>

    <div class="profile-form__controls">
      <ProfileFormControl
        label="Ваш E-mail"
        type="email"
        name="email"
        :value.sync="email"
        class="profile-form__profile-control"
        @submit="updateUserData"
      />

      <ProfileFormControl
        label="Ваш номер телефона"
        type="tel"
        name="tel"
        :value.sync="phone"
        class="profile-form__profile-control"
        @submit="updateUserData"
      />

      <ProfileFormControl
        label="Ваш логин"
        type="text"
        name="handle"
        :value.sync="login"
        class="profile-form__profile-control"
        @submit="updateUserData"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      email: '',
      phone: '',
      login: '',
      about: ''
    }
  },
  created() {
    const { email, login, phone, about } = this.$store.state.user.userData
    this.email = email
    this.phone = phone
    this.login = login
    this.about = about
  },
  methods: {
    async updateUserData() {
      const token = this.$cookies.get('token')
      const { email, phone, login, about } = this
      const req = await this.$postApiData('/profile', {
        email, phone, login, token, about
      })

      console.log(req)
    }
  },
})
</script>

<style lang="scss" scoped>
.profile-form {
  &__heading {
    margin-bottom: rem(22px);
    font-size: rem(22px);
    font-weight: 500;

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
      font-size: rem(17px);
    }
  }

  &__profile-control {
    margin-bottom: rem(32px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(20px);
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__btn {
    @extend %btn-main;

    margin-top: rem(32px);

    @include media-breakpoint-down(md) {
      margin-top: rem(20px);
    }
  }
}
</style>
