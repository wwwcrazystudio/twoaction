<template>
  <div class="attachment">
    <input
      :id="id"
      type="file"
      class="attachment__control"
      @change="handleChange"
    />
    <label :for="id" class="attachment__label">
      <span class="attachment__btn">
        <img src="~/assets/img/icons/clip.png" alt="" />
      </span>

      <span class="attachment__label-text">
        <template v-if="!file">
          <span>Прикрепить файл</span>

          Формат изображений jpg, jpeg, png, не более 1600х1024px
        </template>
        <span v-else>{{ file.name }}</span>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuid } from 'uuid'

export default Vue.extend({
  data() {
    return {
      file: undefined,
      id: undefined,
    }
  },
  mounted(this: any) {
    this.id = uuid() as string
  },
  methods: {
    handleChange(this: any, event: any) {
      this.file = event.target.files[0] as File
    },
  },
})
</script>

<style lang="scss" scoped>
.attachment {
  &__control {
    position: absolute;
    z-index: -999;
    appearance: none;
    opacity: 0;
  }

  &__label {
    display: flex;
    align-items: center;
    cursor: pointer;

    &-text {
      font-size: rem(13px);
      font-weight: 500;

      span {
        margin-bottom: rem(2px);
        font-size: rem(15px);
        display: block;
      }
    }
  }

  &__btn {
    margin-right: rem(18px);
    min-width: 40px;
    height: 40px;
    flex-basis: 40px;
    background-color: $main;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
