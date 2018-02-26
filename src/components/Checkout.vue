<template>
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-medium-size-25 md-small-size-25 md-xsmall-size-100">
      <div>
        <img :src="productData.images" :alt="productData.title" width="200"/>
      </div>
      <div>
        <span class="md-display-1">{{ productData.brand }}</span>
        <h3>{{ productData.title }}</h3>
        <span class="md-display-2"><i class="material-icons left">euro_symbol</i>{{ productData.price }}</span>
      </div>
    </div>
    <div class="md-medium-size-75 md-small-size-75 md-xsmall-size-100">
      <div class="box-form">
        <form>
          <md-field>
            <label class="label">Voornaam</label>
            <p class="control has-icon has-icon-right">
              <md-input name="customerFirstName" v-model="customerFirstName" v-validate.initial="'required|alpha_spaces'" :class="{'input': true, 'is-danger': errors.has('customerFirstName') }" type="text" placeholder="Voornaam"></md-input>
              <span v-show="errors.has('customerFirstName')">Het veld Voornaam klant is verplicht.</span>
            </p>
          </md-field>
          <md-field>
            <p :class="{ 'control': true }">
              <md-input name="customerEmail" v-model="customerEmail" v-validate.initial="'required|email'" :class="{'input': true, 'is-danger': errors.has('customerEmail') }" type="text" placeholder="Email"></md-input>
              <span v-show="errors.has('customerEmail')" class="help is-danger">Het veld E-mail moet een geldige e-mail zijn.</span>
            </p>
          </md-field>
          <md-button class="md-raised md-primary" :disabled="!customerEmail" @click="reset()" :to="{name: 'confirm', params: {product_id: product.id, product: product, customerFirstName: customerFirstName, customerEmail: customerEmail}}">
            <span class="glyphicon glyphicon-plus"></span>bevestigen
          </md-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/store'
import customerDataStore from '../store/store.customer-data'
import ProductsApi from '../services/products.service.api'

export default {
  name: 'checkout',
  props: ['product_id', 'product'],
  data () {
    return {
      productData: ProductsApi.getProductsWithId(this.product_id)
    }
  },
  methods: {
    reset () {
      this.customerFirstName = ''
      this.customerEmail = ''
    }
  },
  beforeMount () {
    this.reset()
  },
  computed: {
    customerFirstName: {
      get () {
        return store.state[customerDataStore.constants.NAME].customerFirstName
      },
      set (customerFirstName) {
        store.commit(customerDataStore.constants.UPDATE_CUSTOMER_FIRST_NAME, customerFirstName)
      }
    },
    customerEmail: {
      get () {
        return store.state[customerDataStore.constants.NAME].customerEmail
      },
      set (customerEmail) {
        store.commit(customerDataStore.constants.UPDATE_EMAIL, customerEmail)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-form {
  border: solid 1px #ccc;
  width: 400px;
  height: 340px;
  padding: 20px;
  margin: 30px 20px;
}
</style>
