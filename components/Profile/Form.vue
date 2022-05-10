<template>
  <div class="profile-form">
    <div v-if="heading" class="profile-form__heading">{{ heading }}</div>
    <div v-if="subheading" class="profile-form__subheading">
      {{ subheading }}
    </div>

    <div class="profile-form__controls">
      <ProfileFormControl
        v-for="(control, key) in inputs"
        :key="key"
        :control="control"
        class="profile-form__profile-control"
      />
    </div>

    <button v-if="btn" class="profile-form__btn">{{ btn }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    heading: {
      type: String,
      default: '',
    },
    subheading: {
      type: String,
      default: '',
    },
    inputs: {
      type: Array,
      required: true,
    },
    btn: {
      type: String,
      default: '',
    },
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

  &__subheading {
    font-size: rem(13px);
    margin-bottom: rem(24px);
    line-height: 154%;

    @include media-breakpoint-down(md) {
      margin-bottom: rem(12px);
      font-size: rem(12px);
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
