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
        <div>
          <p><span class="md-display-1">Thank you</span></p>
          <p class="md-subheading">Dear <span class="md-title">{{customerFirstName}}</span>, for purchasing <br>
            <span class="md-body-2">{{ productData.title }}</span></p>
          <p class="md-subheading">You will have receiave one email in <span class="md-title">{{customerEmail}}</span> to confirm your order.</p>
          <p><img src="../assets/KPN_logo.png" alt="KPN" width="100"/></p>
          <md-button class="md-raised md-primary" :to="{path: '/'}">einde</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProductsApi from '../services/products.service.api'

export default {
  name: 'confirm',
  props: ['product_id', 'product', 'customerFirstName', 'customerEmail'],
  data () {
    return {
      second: false,
      productData: ProductsApi.getProductsWithId(this.product_id)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-form {
  border: solid 1px #ccc;
  width: 400px;
  height: 400px;
  padding: 20px;
  margin: 30px 20px;
}
</style>
