<template>
  <div class="catalogue">
    <div class="container">
      <div class="catalogue__wrap">
        <div class="catalogue__head">
          <h1 class="catalogue__heading">Каталог сообществ</h1>
          <div class="catalogue__count">Всего: <var>186</var> каналов</div>
        </div>
        <div class="catalogue__groups-list groups-list">
          <div class="groups-list__wrap">
            <div class="groups-list__col">
              <div class="groups-list__head">
                <Tabs
                  class="groups-list__tabs"
                  :tabs="tabs"
                  :active="activeTab"
                  @click="activeTab = $event"
                />
                <div class="groups-list__num-to-show num-to-show">
                  <div class="num-to-show__wrap">
                    <div class="num-to-show__title">Показывать по:</div>
                    <FormSelect
                      class="num-to-show__select"
                      label="Показывать по:"
                      :value.sync="numToShow"
                      :options="numToShowOptions"
                    />
                  </div>
                </div>
                <Pagination
                  :count="8"
                  :active="page"
                  class="groups-list__pagination"
                  @change="page = $event"
                />
                <div class="groups-list__view">
                  <button
                    class="groups-list__view-btn"
                    :class="view === 'grid' && 'groups-list__view-btn--active'"
                    @click="view = 'grid'"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.29433 0.0636289C1.22805 0.0986016 1.13691 0.179648 1.0918 0.243715L1.00977 0.360172L1.00164 3.16739C0.996012 5.10945 1.00257 6.00584 1.02286 6.07592C1.06106 6.20766 1.16792 6.33265 1.29996 6.4C1.40327 6.45271 1.46663 6.45373 4.25848 6.44667L7.11144 6.43945L7.20761 6.37355C7.26049 6.33732 7.33342 6.2644 7.36965 6.21152L7.43555 6.11535L7.44277 3.26238C7.44974 0.497109 7.44834 0.406301 7.39757 0.307262C7.33142 0.178281 7.24387 0.0962773 7.11475 0.0423281C7.02558 0.00505859 6.67895 0 4.21415 0H1.41486L1.29433 0.0636289ZM8.87128 0.0435586C8.74687 0.0975078 8.65945 0.180824 8.59462 0.307262C8.54384 0.406301 8.54245 0.497109 8.54942 3.26238L8.55664 6.11535L8.62254 6.21152C8.65877 6.2644 8.7317 6.33732 8.78458 6.37355L8.88075 6.43945L11.7337 6.44667C14.5256 6.45373 14.5889 6.45271 14.6922 6.4C14.8243 6.33265 14.9311 6.20766 14.9693 6.07592C14.9896 6.00584 14.9962 5.10945 14.9905 3.16739L14.9824 0.360172L14.9004 0.243715C14.8553 0.179648 14.7641 0.0986016 14.6979 0.0636289L14.5773 0L11.7721 0.00106641C9.32828 0.00199609 8.95449 0.00746484 8.87128 0.0435586ZM1.31055 7.5921C1.18343 7.65945 1.10284 7.742 1.04777 7.86133C0.999758 7.9654 0.99727 8.10709 0.996695 10.776L0.996094 13.5812L1.05972 13.7018C1.0947 13.768 1.17574 13.8592 1.23981 13.9043L1.35627 13.9863L4.16348 13.9944C6.10555 14.0001 7.00193 13.9935 7.07201 13.9732C7.20375 13.935 7.32874 13.8282 7.39609 13.6961C7.44881 13.5928 7.44982 13.5295 7.44277 10.7376L7.43555 7.88465L7.36965 7.78848C7.33342 7.7356 7.26049 7.66268 7.20761 7.62645L7.11144 7.56055L4.25202 7.55459C1.68428 7.54925 1.38421 7.55308 1.31055 7.5921ZM8.85742 7.58516C8.7493 7.63282 8.62639 7.75789 8.58016 7.86729C8.54961 7.93956 8.54297 8.45873 8.54297 10.7737C8.54297 13.517 8.54439 13.5948 8.59645 13.6969C8.66347 13.8282 8.78865 13.9351 8.92018 13.9732C8.99026 13.9935 9.88664 14.0001 11.8287 13.9944L14.6359 13.9863L14.7524 13.9043C14.8164 13.8592 14.8975 13.768 14.9325 13.7018L14.9961 13.5812V10.7819C14.9961 8.31715 14.991 7.97051 14.9538 7.88134C14.8999 7.75242 14.8178 7.66467 14.6896 7.59891C14.5917 7.54873 14.4873 7.5469 11.7638 7.54794C9.48348 7.54882 8.92365 7.55598 8.85742 7.58516Z"
                        fill="#0085E5"
                      />
                    </svg>
                  </button>
                  <button
                    class="groups-list__view-btn"
                    :class="view === 'list' && 'groups-list__view-btn--active'"
                    @click="view = 'list'"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.38314 0.0311181C1.25856 0.0670204 1.06111 0.270704 1.02507 0.400559C0.981431 0.557704 0.98504 2.95274 1.02915 3.10034C1.07254 3.24562 1.24989 3.42297 1.39517 3.46637C1.55507 3.51416 3.93595 3.51416 4.09585 3.46637C4.24113 3.42297 4.41848 3.24562 4.46188 3.10034C4.50967 2.94044 4.50967 0.559563 4.46188 0.399657C4.41848 0.25438 4.24113 0.0770283 4.09585 0.0336337C3.95755 -0.00768264 1.52568 -0.00995216 1.38314 0.0311181ZM6.02676 0.0435869C5.90317 0.0971259 5.78909 0.206309 5.72346 0.333868C5.67424 0.429571 5.67129 0.510016 5.67129 1.75C5.67129 2.98998 5.67424 3.07043 5.72346 3.16613C5.79059 3.29664 5.90453 3.40399 6.03272 3.45753C6.12312 3.4953 6.59671 3.5 10.3088 3.5C13.5327 3.5 14.5089 3.49234 14.5958 3.46637C14.7411 3.42297 14.9185 3.24562 14.9619 3.10034C15.0097 2.94044 15.0097 0.559563 14.9619 0.399657C14.9185 0.25438 14.7411 0.0770283 14.5958 0.0336337C14.5089 0.00762986 13.534 0.000247048 10.3029 0.00106736C6.62922 0.00202439 6.11087 0.00716501 6.02676 0.0435869ZM1.38314 5.28112C1.25856 5.31702 1.06111 5.5207 1.02507 5.65056C0.981431 5.8077 0.98504 8.20274 1.02915 8.35034C1.07254 8.49562 1.24989 8.67297 1.39517 8.71636C1.55507 8.76416 3.93595 8.76416 4.09585 8.71636C4.24113 8.67297 4.41848 8.49562 4.46188 8.35034C4.50967 8.19043 4.50967 5.80956 4.46188 5.64965C4.41848 5.50438 4.24113 5.32702 4.09585 5.28363C3.95755 5.24231 1.52568 5.24004 1.38314 5.28112ZM6.02676 5.29358C5.90317 5.34712 5.78909 5.45631 5.72346 5.58387C5.67424 5.67957 5.67129 5.76001 5.67129 7C5.67129 8.23998 5.67424 8.32043 5.72346 8.41613C5.79059 8.54664 5.90453 8.65399 6.03272 8.70753C6.12312 8.74529 6.59671 8.75 10.3088 8.75C13.5327 8.75 14.5089 8.74234 14.5958 8.71636C14.7411 8.67297 14.9185 8.49562 14.9619 8.35034C15.0097 8.19043 15.0097 5.80956 14.9619 5.64965C14.9185 5.50438 14.7411 5.32702 14.5958 5.28363C14.5089 5.25763 13.534 5.25024 10.3029 5.25106C6.62922 5.25202 6.11087 5.25716 6.02676 5.29358ZM1.38314 10.5311C1.25856 10.567 1.06111 10.7707 1.02507 10.9006C0.981431 11.0577 0.98504 13.4527 1.02915 13.6003C1.07254 13.7456 1.24989 13.923 1.39517 13.9664C1.55507 14.0142 3.93595 14.0142 4.09585 13.9664C4.24113 13.923 4.41848 13.7456 4.46188 13.6003C4.50967 13.4404 4.50967 11.0596 4.46188 10.8997C4.41848 10.7544 4.24113 10.577 4.09585 10.5336C3.95755 10.4923 1.52568 10.49 1.38314 10.5311ZM6.02676 10.5436C5.90317 10.5971 5.78909 10.7063 5.72346 10.8339C5.67424 10.9296 5.67129 11.01 5.67129 12.25C5.67129 13.49 5.67424 13.5704 5.72346 13.6661C5.79059 13.7966 5.90453 13.904 6.03272 13.9575C6.12312 13.9953 6.59671 14 10.3088 14C13.5327 14 14.5089 13.9923 14.5958 13.9664C14.7411 13.923 14.9185 13.7456 14.9619 13.6003C15.0097 13.4404 15.0097 11.0596 14.9619 10.8997C14.9185 10.7544 14.7411 10.577 14.5958 10.5336C14.5089 10.5076 13.534 10.5002 10.3029 10.5011C6.62922 10.502 6.11087 10.5072 6.02676 10.5436Z"
                        fill="#0085E5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <ul
                class="groups-list__list"
                :class="[
                  view === 'list' && 'groups-list__list--view--list',
                  view === 'grid' && 'groups-list__list--view--grid',
                ]"
              >
                <CatalogueGroupItem
                  v-for="(item, key) in items"
                  :key="key"
                  :view="view"
                  :item="item"
                  class="groups-list__group-item"
                />
              </ul>
            </div>
            <div class="groups-list__col">
              <aside class="groups-list__sidebar">
                <CatalogueFilters class="groups-list__filters" />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $getApiData }) {
    const items = await $getApiData('/channel')

    return {
      items,
    }
  },
  data() {
    return {
      tabs: [
        {
          label: 'Мои группы',
          val: 'groups',
        },
        {
          label: 'Сетка групп',
          val: 'grid',
        },
      ],
      activeTab: {},
      numToShow: {},
      numToShowOptions: [
        {
          label: 20,
          value: 20,
        },
        {
          label: 50,
          value: 50,
        },
        {
          label: 100,
          value: 100,
        },
      ],
      page: 1,
      view: 'grid',
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
    }
  },
  created(this: any) {
    this.activeTab = this.tabs[0]
    this.numToShow = this.numToShowOptions[0]
  },
})
</script>

<style lang="scss" scoped>
.catalogue {
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
  &__wrap {
    display: grid;
    grid-template-columns: auto 325px;
    gap: rem(46px);

    @include media-breakpoint-down(xl) {
      gap: 0;
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(28px);

    @include media-breakpoint-down(md) {
      margin-bottom: rem(16px);
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

  &__pagination {
    margin-left: rem(28px);

    @include media-breakpoint-down(md) {
      display: none;
    }
  }

  &__col {
    @include media-breakpoint-down(xl) {
      margin-bottom: rem(22px);
    }
  }

  &__view {
    margin-left: rem(12px);
    display: flex;
    align-items: center;

    @include media-breakpoint-down(lg) {
      display: none;
    }

    &-btn {
      opacity: 0.4;
      transition: 350ms;
      margin-left: rem(16px);
      width: 14px;
      height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;

      &--active {
        opacity: 1;
        transition: 350ms;
      }
    }
  }

  &__num-to-show {
    @include media-breakpoint-down(md) {
      display: none;
    }
  }

  &__list {
    @include unlist;

    display: grid;

    &--view {
      &--list {
        grid-template-columns: repeat(1, 1fr);
        gap: rem(18px);
      }

      &--grid {
        grid-template-columns: repeat(3, 1fr);
        gap: rem(24px 20px);

        @include media-breakpoint-down(xxl) {
          grid-template-columns: repeat(2, 1fr);
        }

        @include media-breakpoint-down(md) {
          grid-template-columns: repeat(1, 1fr);
          gap: rem(20px);
        }
      }
    }
  }
}

.num-to-show {
  &__wrap {
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: rem(13.5px);
    margin-right: rem(10px);
  }

  &__select {
    &::v-deep {
      .select__value,
      .select__control {
        font-size: rem(13px);
        font-weight: 500;
        background-color: $main;
        background-position: calc(100% - 8px);
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.75 5.5L0 0.5H7.5L3.75 5.5Z' fill='%23fff'/%3E%3C/svg%3E%0A");

        color: #fff;
        padding: rem(4px 14px);
        padding-right: rem(26px);
        border-radius: 20px;
      }
    }
  }
}
</style>
