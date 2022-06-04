interface Credentials {
  email?: string
  tel?: string
  password?: string
}

export default (
  { app, store, $cookies }: { app: any; store: any; $cookies: any },
  inject: any
) => {
  inject('userAuth', {
    async login(credentialsData: Credentials) {
      return await app.$postApiData('auth/authorization', credentialsData)
    },

    async signUp(credentialsData: Credentials) {
      return await app.$postApiData('auth/register', credentialsData)
    },

    async logout(token: string) {
      store.commit('user/setUserData', {})
      store.commit('user/setIsLogged', false)
      $cookies.remove('token')
      return await app.$deleteApiData('/auth', { token })
    },

    async recover(credentialsData: Credentials) {
      return await app.$postApiData('/auth/recover', credentialsData)
    },

    async updateUserToken(token: string) {
      console.log(token)
      // return user id by token
      return await app.$patchApiData('/auth/token', { token })
    },
  })
}
