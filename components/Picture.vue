<template>
  <picture>
    <img :src="srcs[0]" :alt="alt" />
    <source
      v-for="src in srcs.slice(1)"
      :key="src"
      :srcset="src"
      :type="getMimeType(src)"
    />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    srcset: {
      type: Array,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  computed: {
    srcs(this: any) {
      const srcs = [...this.srcset]
      srcs.reverse()
      return srcs
    },
  },
  methods: {
    getMimeType(this: any, file: string): string {
      const type = this.$mimeType(file) as string
      return type
    },
  },
})
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
