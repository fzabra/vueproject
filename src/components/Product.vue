<template>
  <div class="row">
    <div>
      <img :src="productData.images" :alt="productData.title" width="350"/>
    </div>
    <div class="product-detail">
      <span class="md-display-1">{{ productData.brand }}</span>
      <h3>{{ productData.title }}</h3>
      <span class="md-display-2"><i class="material-icons left">euro_symbol</i>{{ productData.price }}</span>
      <p class="detail">{{ productData.description }}</p>
      <md-button class="md-raised md-primary"
      :to="{name: 'checkout', params: {product_id: productData.id, product: product}}">
      <span class="glyphicon glyphicon-plus"></span>kopen
    </md-button>
    <md-button class="md-raised md-primary" :to="{path: '/'}">
      <span class="glyphicon glyphicon-plus"></span>terug
    </md-button>
  </div>
</div>
</template>

<script>
import ProductsApi from '../services/products.service.api'

export default {
  name: 'product',
  data () {
    return {
      productData: ProductsApi.getProductsWithId(this.product_id)
    }
  },
  props: ['product_id', 'product']
}
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.detail {
  max-width: 700px;
}

.product-detail {
  text-align: -webkit-center;
  padding: 10px;
  background-color: #ccc
}
</style>
