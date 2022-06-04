export const state = () => ({
  userData: {},
  isLogged: false,
})

export const mutations = {
  setUserData(state: { userData: object }, val: object) {
    state.userData = val
  },
  setIsLogged(state: { isLogged: boolean }, val: boolean) {
    state.isLogged = val
  },
}

export const actions = {
  async getUser(this: any, { commit }: { commit: Function }, token: string) {
    const tokenResponse = await this.$userAuth.updateUserToken(token)
    console.log(tokenResponse)

    if (!tokenResponse.error) {
      const userData = await this.$getApiData(`/profile/${token}`)
      console.log(userData)

      commit('setUserData', userData[0])
      commit('setIsLogged', true)
      return true
    } else {
      return false
    }
  },
}
