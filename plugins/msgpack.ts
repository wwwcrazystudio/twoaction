/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from '@nuxt/types'
import { unpack } from 'msgpackr'
import { stringify } from 'qs'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $getApiData(url: string): Promise<object>
    $postApiData(url: string, payload: object): Promise<object>
    $patchApiData(url: string, payload: object): Promise<object>
    $deleteApiData(url: string, payload: object): Promise<object>
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $getApiData(url: string): Promise<object>
    $postApiData(url: string, payload: object): Promise<object>
    $patchApiData(url: string, payload: object): Promise<object>
    $deleteApiData(url: string, payload: object): Promise<object>
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $getApiData(url: string): Promise<object>
    $postApiData(url: string, payload: object): Promise<object>
    $patchApiData(url: string, payload: object): Promise<object>
    $deleteApiData(url: string, payload: object): Promise<object>
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    $getApiData(url: string): Promise<object>
    $postApiData(url: string, payload: object): Promise<object>
    $patchApiData(url: string, payload: object): Promise<object>
    $deleteApiData(url: string, payload: object): Promise<object>
  }
}

const myPlugin: Plugin = ({ $axios }, inject) => {
  const options = {
    responseType: 'arraybuffer',
  } as object
  let responseData: ArrayBuffer

  inject('getApiData', async (url: string, payload: object) => {
    if (payload) {
      const data = stringify(payload)
      url = `${url}/?${data}`
    }

    responseData = await $axios.$get(url, options)

    return unpack(Buffer.from(responseData))
  })

  inject('postApiData', async (url: string, payload: object) => {
    responseData = await $axios.$post(url, stringify(payload), options)
    console.log(payload)

    return unpack(Buffer.from(responseData))
  })

  inject('patchApiData', async (url: string, payload: object) => {
    responseData = await $axios.$patch(url, stringify(payload), options)

    console.log(stringify(payload))

    return unpack(Buffer.from(responseData))
  })

  inject('deleteApiData', async (url: string, payload: object) => {
    responseData = await $axios.$delete(url, {
      ...options,
      data: stringify(payload),
    })

    return unpack(Buffer.from(responseData))
  })
}

export default myPlugin
