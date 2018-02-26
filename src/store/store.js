import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import VeeValidate from 'vee-validate'
import customerData from './store.customer-data'

Vue.use(Vuex)
Vue.use(VeeValidate)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    customerData
  },
  strict: debug,
  plugins: [createPersistedState()]
})
