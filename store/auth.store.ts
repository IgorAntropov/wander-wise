interface IAuthStore {
  email: string
  name: string
  online: boolean
}

const defaultValue: { user: IAuthStore } = {
  user: {
    email: '',
    name: '',
    online: false,
  },
}

export const useAuthStore = defineStore('auth', {
  state: () => defaultValue,
  getters: {
    isAuth: state => state.user.online,
  },
  actions: {
    clear() {
      this.$patch(defaultValue)
    },
    set(data: IAuthStore) {
      this.$patch({user: data})
    },
  },
})