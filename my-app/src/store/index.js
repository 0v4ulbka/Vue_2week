import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    API: 'https://jurapro.bhuser.ru/api-shop/'
  },
  getters: {
    authStatus: state => state.status,
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post( this.state.API + 'login', user )
            .then( resp => {
              const token = resp.data.data.user_token
              const user = resp.data.data.user
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
      })
    },
    signup({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post(this.state.API + 'signup', user)
            .then(resp => {
              const token = resp.data.data.user_token
              const user = resp.data.data.user
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error', err)
              localStorage.removeItem('token')
              reject(err)
            })
      })
    },
      logout({commit}) {
          return new Promise((resolve, reject) => {
              commit('auth_success')
              axios.get(this.state.API + 'logout')
                  .then(resp => {
                      const token = resp.data.data.token
                      const user = resp.data.data.user
                      localStorage.removeItem('token')
                      axios.defaults.headers.common['Authorization'] = ''
                      commit('auth_success', token, user)
                      resolve(resp)
                  })
                  .catch(err => {
                      commit('auth_error', err)
                      localStorage.removeItem('token')
                      reject(err)
                  })
          })
      }

  },
  modules: {
  },
})
