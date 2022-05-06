<template>
  <div class="messenger">
    <div class="messenger__wrap">
      <ul class="messenger__history">
        <MessengerHistoryItem
          v-for="(item, key) in dialogue"
          :key="key"
          :item="item"
          class="messenger__history-item"
        />
      </ul>
      <MessengerForm class="messenger__messenger-form" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    dialogue: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.messenger {
  &__wrap {
    background: #ffffff;
    box-shadow: 0px 4px 50px rgba(117, 117, 117, 0.08),
      0px 10px 30px rgba(29, 29, 29, 0.04);
    border-radius: 20px;
  }

  &__history {
    @include unlist;

    padding: rem(42px 50px);

    @include media-breakpoint-down(md) {
      padding: rem(36px 20px);
    }
  }

  &__history-item {
    margin-bottom: rem(26px);
  }

  &__messenger-form {
    border-top: 1px solid rgba(186, 186, 186, 0.4);
  }
}
</style>
