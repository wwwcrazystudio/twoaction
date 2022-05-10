<template>
  <div class="profile-control">
    <div class="profile-control__label">{{ control.label }}</div>
    <div class="profile-control__wrap">
      <FormInput
        :type="control.type"
        :value="control.value"
        :label="control.label"
        :readonly="!edit"
      />

      <button class="profile-control__btn" @click="edit = !edit">
        <svg
          v-if="!edit"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.58234 0.0676874C9.29202 0.161648 9.217 0.218812 8.66828 0.764109L8.14093 1.28815L9.42404 2.5717L10.7072 3.85523L11.202 3.36316C11.7302 2.83797 11.8519 2.6831 11.9279 2.43919C12.0342 2.09796 12.0099 1.78378 11.8515 1.45312C11.7613 1.26483 11.7283 1.22616 11.2493 0.747656C10.709 0.20789 10.6165 0.140156 10.3078 0.0580078C10.1273 0.00996092 9.74493 0.0150469 9.58234 0.0676874ZM4.08128 5.34963L0.748278 8.68359L0.368215 10.207C0.0894962 11.3241 -0.00737095 11.7482 0.00493373 11.7969C0.026004 11.8803 0.113942 11.9699 0.19452 11.9901C0.259231 12.0063 3.18681 11.2964 3.30109 11.2367C3.33332 11.2199 4.84944 9.71568 6.67026 7.89403L9.98083 4.58191L8.69755 3.2988L7.41426 2.01567L4.08128 5.34963Z"
            fill="#0085E5"
          />
        </svg>

        <svg
          v-else
          width="12"
          height="12"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.05029 1.30467L3.71692 5.63792C3.58691 5.76793 3.41626 5.83336 3.24561 5.83336C3.07495 5.83336 2.9043 5.76793 2.77429 5.63792L0.607666 3.4713C0.346924 3.21068 0.346924 2.78929 0.607666 2.52867C0.868286 2.26793 1.28955 2.26793 1.55029 2.52867L3.24561 4.22398L7.10767 0.362045C7.36829 0.101303 7.78955 0.101303 8.05029 0.362045C8.31091 0.622665 8.31091 1.04393 8.05029 1.30467Z"
            fill="#0085E5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    control: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      edit: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.profile-control {
  &__label {
    font-size: rem(15px);
    font-weight: 500;
    margin-bottom: rem(20px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(12px);
      font-size: rem(13px);
    }
  }

  &__wrap {
    position: relative;
  }

  &__btn {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 133, 229, 0.08);
    border-radius: 8px;
  }
}
</style>
