import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        isLogin: false,
        userInfo: {}
    },
    actions: {},
    mutations: {
        set_token(state, token) {
            state.token = token
        },
        del_token(state) {
            state.token = ''
        },
        
        CHANGE_LOGIN(state, isLogin) {
            state.isLogin = isLogin
            sessionStorage.isLogin = isLogin
        },
        ADD_USERINFO(state, userInfo) {
            state.userInfo = userInfo
            sessionStorage.userInfo = userInfo
        }
    },
    plugins: [
        createPersistedState({
        storage: {
          getItem: key => sessionStorage.getItem (key),
          setItem: (key, value) =>
          sessionStorage.setItem(key, value,),
          removeItem: key => sessionStorage.removeItem(key),
        },
      })
    ],
})

export default store