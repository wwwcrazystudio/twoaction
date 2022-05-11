<template>
  <div v-if="show" class="modal" @click="hide">
    <div class="modal__wrap" @click.stop>
      <div class="modal__heading">{{ heading }}</div>
      <button class="modal__close" @click="hide">
        <img src="~/assets/img/icons/close.png" alt="" />
      </button>
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    heading: {
      type: String,
      default: '',
    },
  },
  watch: {
    show(val) {
      if (val) document.documentElement.classList.add('locked')
      else document.documentElement.classList.remove('locked')
    },
  },
  methods: {
    hide() {
      this.$emit('hide')
    },
  },
})
</script>

<style lang="scss" scoped>
.modal {
  background: rgba(38, 38, 38, 0.44);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrap {
    position: relative;
    padding: rem(58px 68px);
    background-color: #fff;
    max-height: 90vh;
    width: 90%;
    max-width: 735px;
    box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
  }

  &__close {
    position: absolute;
    right: 30px;
    top: 40px;
  }

  &__heading {
    font-weight: 500;
    font-size: rem(28px);
    margin-bottom: rem(40px);
    text-align: center;
  }
}
</style>
