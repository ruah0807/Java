// eslint-disable-next-line
/* eslint-disable */
import { createStore } from 'vuex'

import persistedstate from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      user:{} //메모리저장공간 할당
    }
  },
  mutations: {
    user(state, data) {
      state.user = data
    }
  },
  plugins: [
    persistedstate({
      path: ['user']
    })
  ]
})

export default store;
