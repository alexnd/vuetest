import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actionsFactory from './actions'

Vue.use(Vuex)

export default (config, API) => class StoreFactory {
  constructor () {
    console.log('*[init store]', config)
    const actions = actionsFactory(config, API)
    const store = new Vuex.Store({
      state: {
        users: [],
        usersLoadStatus: 0,
        usersPagination: {},
        user: {}
      },
      getters,
      mutations,
      actions
    })
    StoreFactory.store = store
    return store
  }
}
