import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const baseUrl = `http://localhost:3000`

export const useIndexStore = defineStore('index', {
  state: () => {
    news: []
    isLogin: false
  },
  actions: {
    async fetchNews() {
      try {
        const data = await axios.get(`${baseUrl}/news/indo`)
        this.news = data.data
      } catch (error) {
        console.log(error)
      }
    },
    async register(user) {
      try {
        const res = await axios.post(`${baseUrl}/register`, {
          username: user.username,
          email: user.email,
          password: user.password
        })
      } catch (error) {
        console.log(error)
      }
    },
    async login(user) {
      try {
        const res = await axios.post(`${baseUrl}/login`, {
          email: user.email,
          password: user.password
        })
        localStorage.setItem("access_token", res.data.access_token)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
