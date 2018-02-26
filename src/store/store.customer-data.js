const constants = {
  NAME: 'customerData',
  CUSTOMER_FIRST_NAME: 'customerFirstName',
  CUSTOMER_EMAIL: 'customerEmail',
  UPDATE_CUSTOMER_FIRST_NAME: 'updateCustomerFirstName',
  UPDATE_EMAIL: 'updateEmail'
}

/**
*
* @type {Object}
*/
const state = {
  customerFirstName: '',
  customerEmail: ''
}

const getters = {
  getCustomerData: state => {
    return state.customerFirstName
  }
}

const actions = {}

const mutations = {
  [constants.UPDATE_EMAIL] (state, param) {
    state[constants.CUSTOMER_EMAIL] = param
  },
  [constants.UPDATE_CUSTOMER_FIRST_NAME] (state, param) {
    state[constants.CUSTOMER_FIRST_NAME] = param
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  constants
}
