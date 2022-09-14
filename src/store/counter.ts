import { defineStore } from 'pinia'

interface userStore {
  count: number
  users: string[]
}

export const useCounterStore = defineStore('counter', {
  state: (): userStore => ({
    count: 0,
    users: [],
  }),
  actions: {
    createUser(user: string) {
      this.users.push(user)
    },
  },
})
