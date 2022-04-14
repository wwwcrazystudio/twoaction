export const state = () => ({
  logged: false,
})

export const mutations = {
  setLogged(state: { logged: boolean }, status: boolean) {
    state.logged = status
  },
}
