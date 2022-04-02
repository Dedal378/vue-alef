import { defineStore } from 'pinia'

export const useStore = defineStore('usersData', {
  state: () => {
    return {
      usersData: {},
    }
  },
  getters: {
    getUserName() {
      return this.usersData.userName
    },
    getUserAge() {
      return this.usersData.userAge
    },
    getChildren() {
      return this.usersData.children
    }
  }
})

