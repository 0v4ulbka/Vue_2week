import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    API: 'https://jurapro.bhuser.ru/api-shop/'
  },
  getters: {
    authStatus: state => state.status,
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token){
      state.status = 'success'
      state.token = token
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state, token){
      state.status = 'logout'
      state.token = token
    }
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post( this.state.API + 'login')
            .then( resp => {
              const token = resp.data.data.user_token
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token)
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
        axios.post(this.state.API + 'signup')
            .then(resp => {
              const token = resp.data.data.user_token
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error', err)
              localStorage.removeItem('token')
              reject(err)
            })
      })
    },
      logout({commit}){
        return new Promise((resolve) => {
        commit('logout')
          axios.get(this.state.API + 'logout')
              .then(resp => {
                  const token = ''
                  localStorage.removeItem('token')
                  axios.defaults.headers.common['Authorization'] = ''
                  commit('logout', token)
                  resolve(resp)
              })
          // localStorage.removeItem('token')
        })
      },
  },
  modules: {
  },
})
