<template>
  <section v-if="productData" class="detail-layout">
    <img :src="productData.images" :alt="productData.title" class="detail-image" />

    <div class="detail-panel">
      <p class="brand">{{ productData.brand }}</p>
      <h1 class="page-title">{{ productData.title }}</h1>
      <p class="price">€ {{ productData.price }}</p>
      <p class="description">{{ productData.description }}</p>

      <div class="actions">
        <RouterLink class="btn" :to="{ name: 'checkout', params: { product_id: productData.id } }">
          Comprar
        </RouterLink>
        <RouterLink class="btn btn-secondary" to="/">Voltar</RouterLink>
      </div>
    </div>
  </section>

  <p v-else>Produto não encontrado.</p>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ProductsApi from '@/services/products.service.api'

const props = defineProps({
  product_id: {
    type: String,
    required: true
  }
})

const productData = computed(() => ProductsApi.getProductById(props.product_id))
</script>
