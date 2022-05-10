<template>
  <div class="templates">
    <div class="templates__head">
      <TabsBtns
        class="templates__tabs-btns"
        :tabs="tabs"
        :active="activeTab"
        @click="activeTab = $event"
      />

      <FormSelect
        label="Тип шаблона"
        :options="[{ label: '1', val: '1' }]"
        class="templates__select"
      />

      <button class="templates__btn">Создать шаблон</button>
    </div>

    <ul class="templates__list">
      <TemplatesItem
        v-for="(template, key) in templates"
        :key="key"
        :item="template"
        class="templates__templates-item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          label: 'Все шаблоны (4)',
          val: 'all',
        },
        {
          label: 'Для инстаграм (2)',
          val: 'inst',
        },
        {
          label: 'Для телеграм (2)',
          val: 'telegram',
        },
      ],
      activeTab: {},
      templates: [
        {
          title: 'Рекламный шаблон №1 для Телеграма (3 пикч)',
          type: 'tg',
          description:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать.',
        },
        {
          title: 'Рекламный шаблон №2 для Инстаграмм постов (8 пикч)',
          type: 'inst',
          description:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать.',
        },
        {
          title: 'Рекламный шаблон №1 для Телеграма (3 пикч)',
          type: 'tg',
          description:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать.',
        },
        {
          title: 'Рекламный шаблон №2 для Инстаграмм постов (8 пикч)',
          type: 'inst',
          description:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать.',
        },
        {
          title: 'Рекламный шаблон №1 для Телеграма (3 пикч)',
          type: 'tg',
          description:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать.',
        },
        {
          title: 'Рекламный шаблон №2 для Инстаграмм постов (8 пикч)',
          type: 'inst',
          description:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать.',
        },
      ],
    }
  },
  created(this: any) {
    this.activeTab = this.tabs[0]
  },
})
</script>

<style lang="scss" scoped>
.templates {
  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(30px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
      overflow: auto;
      margin-right: -20px;
      padding-bottom: 8px;
    }
  }

  &__tabs-btns {
    margin-right: rem(12px);

    &::v-deep {
      .tabs-btns__list {
        padding-bottom: 0;
        margin: 0;
      }
    }
  }

  &__select {
    flex-grow: 1;
    max-width: 200px;
    margin-right: rem(12px);

    &::v-deep {
      .select__value,
      .select__control {
        padding: rem(12px 24px);
        border-color: $main;
        white-space: nowrap;

        @include media-breakpoint-down(md) {
          width: 200px;
        }
      }
    }
  }

  &__btn {
    @extend %btn-main;

    margin-left: auto;
    width: 100%;
    max-width: 200px;
    white-space: nowrap;

    @include media-breakpoint-down(md) {
      font-size: rem(12px);
      padding: rem(12px 20px);
    }
  }

  &__list {
    @include unlist;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: rem(24px 32px);

    @include media-breakpoint-down(xxl) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media-breakpoint-down(lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(1, 1fr);
      gap: rem(20px);
    }
  }
}
</style>
