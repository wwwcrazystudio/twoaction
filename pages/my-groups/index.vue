<template>
  <div class="my-groups">
    <div class="container">
      <div class="my-groups__wrap">
        <div class="my-groups__head">
          <h1 class="my-groups__heading">Сетка групп</h1>
          <div class="my-groups__count">Всего: <var>6</var> групп</div>
        </div>
        <div class="my-groups__groups-list groups-list">
          <div class="groups-list__head">
            <Tabs
              class="groups-list__tabs"
              :tabs="tabs"
              :active="activeTab"
              @click="activeTab = $event"
            />

            <div class="groups-list__actions">
              <button class="groups-list__action">Добавить группу</button>
              <button
                class="groups-list__action groups-list__action--secondary"
              >
                Создать сетку групп
              </button>
            </div>
          </div>
          <div class="groups-list__wrap">
            <ul class="groups-list__list">
              <CatalogueGroupItem
                v-for="(item, key) in items"
                :key="key"
                :item="item"
                class="groups-list__group-item"
                :class="
                  selected.includes(key) && 'groups-list__group-item--selected'
                "
                @click.native="select(key)"
              />
            </ul>

            <div class="groups-list__notice">
              Выберите не менее 2 групп для создания сетки
            </div>

            <button class="groups-list__btn">Создать сетку</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          label: 'Мои группы',
          val: 'groups',
        },
        {
          label: 'Моя сетка групп',
          val: 'grid',
        },
      ],
      activeTab: {},
      items: [
        {
          img: require('~/assets/img/placeholder/group1.png'),
          title: 'Business marketing',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          title: 'Фармер',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          title: 'UFC',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group4.png'),
          title: 'ForkLog',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group1.png'),
          title: 'Business marketing',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          title: 'Фармер',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          title: 'UFC',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group4.png'),
          title: 'ForkLog',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group1.png'),
          title: 'Business marketing',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group2.png'),
          title: 'Фармер',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group3.png'),
          title: 'UFC',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
        {
          img: require('~/assets/img/placeholder/group4.png'),
          title: 'ForkLog',
          excerpt:
            'Группа посвященная творению компаний Marvel и DC. Также любим обозревать другие киношедевры.',
          subscribers: '1 268 846',
          meta: {
            ERP: '26,32%',
            CPV: '3,22 ₽',
            clients: '100%',
          },
        },
      ],
      selected: [] as Array<number>,
    }
  },
  created(this: any) {
    this.activeTab = this.tabs[0]
  },
  methods: {
    select(key: number) {
      if (this.selected.includes(key)) {
        this.selected = this.selected.filter((el) => el !== key)
      } else {
        this.selected.push(key)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.my-groups {
  &__head {
    display: flex;
    align-items: flex-end;
    margin-bottom: rem(20px);
  }

  &__heading {
    line-height: 1;
    margin-bottom: 0;
  }

  &__count {
    margin-left: rem(8px);
    font-size: rem(13.5px);
    color: rgba(72, 72, 72, 0.6);

    @include media-breakpoint-down(md) {
      display: none;
    }

    var {
      font-style: normal;
      color: $main;
    }
  }
}

.groups-list {
  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(28px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(16px);
      flex-direction: column;
    }
  }

  &__tabs {
    margin-right: auto;

    @include media-breakpoint-down(md) {
      width: 100%;

      &::v-deep {
        .tabs__list {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .tabs__link {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }

  &__wrap {
    margin-bottom: rem(140px);
  }

  &__actions {
    margin-left: auto;

    @include media-breakpoint-down(md) {
      margin: auto;
      margin-top: 16px;
      display: grid;
      grid-template-columns: 1fr;
      gap: rem(16px);
    }
  }

  &__action {
    @extend %btn-main;

    margin-left: rem(12px);

    @include media-breakpoint-down(md) {
      margin-left: 0;
    }

    &--secondary {
      background: rgba(0, 133, 229, 0.08);
      color: $main;
    }
  }

  &__col {
    @include media-breakpoint-down(xl) {
      margin-bottom: rem(22px);
    }
  }

  &__notice {
    text-align: center;
    font-size: rem(13px);
    margin-bottom: rem(16px);
    color: $main;
  }

  &__btn {
    @extend %btn-main;

    margin: auto;
    display: flex;
    width: fit-content;
  }

  &__list {
    @include unlist;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: rem(24px 20px);
    margin-bottom: rem(32px);

    @include media-breakpoint-down(xxl) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(1, 1fr);
      gap: rem(20px);
    }
  }

  &__group-item--selected {
    &::v-deep {
      .group-item__wrap {
        transition: 350ms;
        border: 1px solid #0085e5;
        box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
          0px 10px 30px rgba(29, 29, 29, 0.04);
      }
    }
  }
}
</style>
