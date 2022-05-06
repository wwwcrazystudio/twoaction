<template>
  <div class="messenger-form">
    <div class="messenger-form__wrap">
      <FormFile class="messenger-form__file" />
      <div class="messenger-form__group">
        <FormInput class="messenger-form__input" label="Напишите сообщение.." />
        <button class="messenger-form__btn">
          <img src="~/assets/img/icons/planearrow.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.messenger-form {
  &__wrap {
    display: flex;
    align-items: center;
    padding: rem(32px 50px);

    @include media-breakpoint-down(md) {
      padding: rem(26px 16px);
    }
  }

  &__file {
    margin-right: rem(18px);

    @include media-breakpoint-down(md) {
      margin-right: rem(12px);
    }
  }

  &__group {
    position: relative;
    flex-grow: 1;
  }

  &__btn {
    width: 30px;
    height: 30px;
    background-color: $main;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
