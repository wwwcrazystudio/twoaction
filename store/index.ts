export const state = () => ({
  groups: [],
})

export const mutations = {
  updateFeed(state: { groups: Array<any> }, val: any) {
    state.groups = val
  },
}

export const actions = {
  async nuxtServerInit(this: any, { dispatch }: { dispatch: Function }) {
    const token = this.$cookies.get('token')

    if (token) await dispatch('user/getUser', token)
  },
}
