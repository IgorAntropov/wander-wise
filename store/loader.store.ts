export const useLoadingStore = defineStore('isLoading', {
  state: () => ({
    isLoading: true,
  }),
  actions: {
    set(state: boolean) {
      this.$patch({isLoading: state})
    },
  },
})