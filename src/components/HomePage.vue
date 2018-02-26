<template>
  <div class="md-layout md-gutter md-alignment-center">
    <div v-for='product in products' :key="product.id"
    class="md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <div class="interCard">
      <p><img :src="product.images" :alt="product.title" width="200"/></p>
      <span class="md-display-1">{{ product.brand }}</span>
      <p>{{ product.title }}</p>
      <h4><span class="md-display-2"><i class="material-icons left">euro_symbol</i>{{ product.price }}</span>
      </h4>
      <md-button class="md-raised md-primary"
      :to="{name: 'product', params: {product_id: product.id, product: product}}">meer detail
    </md-button>
  </div>
</div>
</div>
</template>

<script>

import ProductsApi from '../services/products.service.api'

export default {
  name: 'HomePage',
  data () {
    return {
      products: ProductsApi.getProducts()
    }
  }
}
</script>

<style lang="scss" scoped>
.interCard {
  min-width: 250px;
  margin: 5px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}

.interCard p {
  text-align: center;
}

.md-layout-item {
  height: 40px;
  margin-top: 8px;
  margin-bottom: 8px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.md-layout-item:after {
  width: 100%;
  height: 100%;
  display: block;
  background: #ce93d8;
  content: " ";
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.card-box {
  border: solid 1px #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

p.detail {
  font-size: 15px;
}
</style>
