<template>
  <div class="datepicker">
    <label
      :for="id"
      class="datepicker__label"
      :class="!showLabel && 'datepicker__label--hidden'"
    >
      {{ label }}
    </label>
    <DatePicker
      :value="value"
      :placeholder="label"
      :input-attr="{ id: id, class: 'datepicker__control' }"
      @input="handleInput"
    >
      <template #icon-calendar>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1953 1.09375H10.9375V0.4375C10.9375 0.195891 10.7416 0 10.5 0C10.2584 0 10.0625 0.195891 10.0625 0.4375V1.09375H3.9375V0.4375C3.9375 0.195891 3.74164 0 3.5 0C3.25836 0 3.0625 0.195891 3.0625 0.4375V1.09375H1.80469C0.809566 1.09375 0 1.90332 0 2.89844V12.1953C0 13.1904 0.809566 14 1.80469 14H12.1953C13.1904 14 14 13.1904 14 12.1953V2.89844C14 1.90332 13.1904 1.09375 12.1953 1.09375ZM1.80469 1.96875H3.0625V2.40625C3.0625 2.64786 3.25836 2.84375 3.5 2.84375C3.74164 2.84375 3.9375 2.64786 3.9375 2.40625V1.96875H10.0625V2.40625C10.0625 2.64786 10.2584 2.84375 10.5 2.84375C10.7416 2.84375 10.9375 2.64786 10.9375 2.40625V1.96875H12.1953C12.708 1.96875 13.125 2.3858 13.125 2.89844V3.9375H0.875V2.89844C0.875 2.3858 1.29205 1.96875 1.80469 1.96875ZM12.1953 13.125H1.80469C1.29205 13.125 0.875 12.708 0.875 12.1953V4.8125H13.125V12.1953C13.125 12.708 12.708 13.125 12.1953 13.125Z"
            fill="#0085E5"
          />
        </svg>
      </template>
    </DatePicker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DatePicker from 'vue2-datepicker'
import { v4 as uuid } from 'uuid'

import 'vue2-datepicker/locale/ru'

export default Vue.extend({
  components: { DatePicker },
  props: {
    showLabel: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [Date, String],
      default: '',
    },
  },
  data() {
    return {
      id: '',
    }
  },
  mounted(this: any) {
    this.id = uuid() as string
  },
  methods: {
    handleInput(val: any) {
      this.$emit('update:value', val)
      this.$emit('change', val)
    },
  },
})
</script>

<style lang="scss">
$namespace: 'mx';
$default-color: $dark;
$primary-color: $main;

@import '~vue2-datepicker/scss/index.scss';

.mx-datepicker-main {
  font: rem(15px) 'Cera Pro';
  font-weight: 500;

  @include media-breakpoint-down(md) {
    font-size: rem(12px);
  }
}

.mx-btn {
  color: $main;
}

.mx-calendar {
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(54, 58, 61, 0.14);
  border-radius: 8px;
  padding: rem(16px 20px);
  width: 265px;

  @include media-breakpoint-down(md) {
    padding: rem(8px 12px);
  }
}

.mx-table-date td,
.mx-table-date th {
  font-size: rem(14px);
  border-radius: 50%;

  @include media-breakpoint-down(md) {
    font-size: rem(12px);
  }
}

.mx-table-date td {
  font-weight: 400;
}

.mx-table-date .today {
  color: #fff;
  background: $main;
}

.datepicker {
  &__label {
    font-size: rem(14px);
    position: absolute;
    color: $main;
    left: rem(24px);
    top: 12px;
    margin: auto;
    pointer-events: none;
    transition: 350ms;
    display: flex;
    align-items: center;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      top: 14px;
      left: rem(22px);
    }

    &--hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  }

  &__control {
    padding: rem(9px 16px);
    padding-right: rem(24px);
    color: $main;
    font-size: rem(13px);
    border: 1px solid rgba(186, 186, 186, 0.2);
    border-radius: 8px;
    width: 100%;

    &::placeholder {
      color: $main;
    }

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      padding: rem(8px 16px);
      padding-right: rem(24px);
    }
  }
}
</style>
