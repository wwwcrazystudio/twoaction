<template>
  <div class="multifile">
    <div
      class="multifile__title"
      :class="!showLabel && 'multifile__title--hidden'"
    >
      {{ label }}
    </div>
    <div class="multifile__wrap">
      <input
        :id="id"
        type="file"
        multiple
        class="multifile__control"
        @change="handleFile"
      />
      <label
        :for="id"
        class="multifile__label"
        @dragover.prevent
        @dragenter.prevent
        @drop.prevent="handleDrop($event.dataTransfer.files)"
      >
        <svg
          width="24"
          height="31"
          viewBox="0 0 24 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.77605 0.0682617C1.94443 0.227109 1.01572 0.923672 0.612418 1.69113C0.197223 2.48121 0.224996 1.52813 0.224996 15C0.224996 25.6307 0.23607 27.2053 0.313297 27.533C0.591734 28.7141 1.64185 29.718 2.82679 29.936C3.31488 30.0258 20.6863 30.0258 21.1744 29.936C22.3593 29.718 23.4094 28.7141 23.6879 27.533C23.7647 27.2069 23.7763 25.8822 23.777 17.3305L23.7779 7.50275L20.3898 7.48676L17.0017 7.4707L16.7957 7.32949C16.6823 7.25186 16.5261 7.09559 16.4484 6.98227L16.3072 6.77625L16.2908 3.38813L16.2743 0L9.66966 0.0065625C5.81279 0.0103711 2.9448 0.0360352 2.77605 0.0682617ZM18.4459 2.98828V5.33203H20.804H23.1622L20.8189 2.98828C19.5302 1.69922 18.469 0.644531 18.4608 0.644531C18.4526 0.644531 18.4459 1.69922 18.4459 2.98828Z"
            fill="#0085E5"
          />
        </svg>

        <span class="multifile__label-text" v-html="desc"> </span>
      </label>

      <ul v-if="files.length" class="multifile__list">
        <li v-for="file in files" :key="file.name" class="multifile__item">
          <div class="multifile__item-title">{{ file.name }}</div>
          <div class="multifile__item-size">{{ getFileSize(file.size) }}</div>
          <button
            class="multifile__item-remove"
            @click.prevent="removeFile(file)"
          >
            <img src="~/assets/img/icons/trashcanwhite.png" alt="" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuid } from 'uuid'

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    files: {
      type: undefined,
      required: true,
    },
    desc: {
      type: String,
      default: `<u>Загрузите</u> ваши условия размещения, или перетащите и отпустите в
          эту форму для загрузки (.doc, .pdf до 10 мБ)`,
    },
  },
  data() {
    return {
      id: undefined,
    }
  },
  watch: {
    files() {
      console.log(this.files)
    },
  },
  mounted(this: any) {
    this.id = uuid() as string

    if (this.mask) {
      this.initMask()

      this.$nextTick(() => {
        this.masked.typedValue = this.value.toString() as string
      })
    }
  },
  methods: {
    handleFile(e: any) {
      const files: FileList = e.target.files
      console.log(e.target.files)
      this.$emit('update:files', files)
      this.$emit('change', files)
    },
    getFileSize(size: number) {
      if (size < 1000000) {
        return Math.floor(size / 1000) + 'KB'
      }

      return Math.floor(size / 1000000) + 'MB'
    },
    removeFile(file: File) {
      const files = this.files as FileList
      const transfer = new DataTransfer()

      for (let i = 0; i < files.length; i++) {
        const currentFile = files[i]
        if (currentFile.name !== file.name) transfer.items.add(currentFile)
      }

      this.$emit('update:files', transfer.files)
      this.$emit('change', transfer.files)
    },
    handleDrop(files: FileList) {
      const transfer = new DataTransfer()
      const currentFiles = this.files as FileList

      // iterate current files and add to dt
      for (let i = 0; i < currentFiles.length; i++) {
        transfer.items.add(currentFiles[i])
      }

      // iterate dropped files and add to dt
      for (let i = 0; i < files.length; i++) {
        transfer.items.add(files[i])
      }

      this.$emit('update:files', transfer.files)
      this.$emit('change', transfer.files)
    },
  },
})
</script>

<style lang="scss" scoped>
.multifile {
  &__title {
    font-weight: 500;
    font-size: rem(15px);
    margin-bottom: rem(20px);
    color: $dark;

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


    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }
  }

  &__wrap {
    background: rgba(0, 133, 229, 0.04);
    border-radius: 8px;
    padding: rem(10px);
  }

  &__control {
    position: absolute;
    z-index: -999;
    appearance: none;
    opacity: 0;
  }

  &__label {
    border: 1px dashed rgba(0, 133, 229, 0.6);
    border-radius: 6px;
    height: 155px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: rem(13px);
    color: rgba(72, 72, 72, 0.8);
    cursor: pointer;

    @include media-breakpoint-down(md) {
      font-size: rem(11px);
    }

    &-text {
      max-width: 420px;
      width: 80%;
    }

    svg {
      margin-bottom: rem(16px);
    }
  }

  &__list {
    @include unlist;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(12px);
    margin-top: rem(14px);

    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;
      gap: rem(8px);
    }
  }

  &__item {
    background: #0085e5;
    border-radius: 8px;
    padding: rem(10px 16px);
    padding-right: rem(10px);
    color: #fff;
    display: flex;
    align-items: center;
    font-size: rem(13.5px);

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
    }

    &-title {
      text-decoration: underline;
      margin-right: auto;
    }

    &-size {
      margin-right: rem(16px);
    }

    &-remove {
      display: flex;
    }
  }
}
</style>
