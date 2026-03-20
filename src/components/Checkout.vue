<template>
  <section v-if="productData" class="detail-layout">
    <img :src="productData.images" :alt="productData.title" class="detail-image" />

    <div class="detail-panel">
      <p class="brand">Checkout</p>
      <h1 class="page-title">{{ productData.title }}</h1>
      <p class="price">€ {{ productData.price }}</p>

      <form class="form" @submit.prevent="goToConfirmation">
        <label class="label" for="firstName">Nome</label>
        <input id="firstName" v-model.trim="store.customerFirstName" type="text" class="input" required />

        <label class="label" for="email">E-mail</label>
        <input id="email" v-model.trim="store.customerEmail" type="email" class="input" required />

        <p v-if="!store.isValid" class="error">Preencha um nome e e-mail válidos para continuar.</p>

        <div class="actions">
          <button class="btn" type="submit" :disabled="!store.isValid">Confirmar</button>
          <RouterLink class="btn btn-secondary" :to="{ name: 'product', params: { product_id } }">Voltar</RouterLink>
        </div>
      </form>
    </div>
  </section>

  <p v-else>Produto não encontrado.</p>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import ProductsApi from '@/services/products.service.api'
import { useCheckoutStore } from '@/stores/checkout'

const props = defineProps({
  product_id: {
    type: String,
    required: true
  }
})

const router = useRouter()
const store = useCheckoutStore()
const productData = computed(() => ProductsApi.getProductById(props.product_id))
const product_id = computed(() => props.product_id)

function goToConfirmation() {
  if (!store.isValid) {
    return
  }

  router.push({
    name: 'confirm',
    params: { product_id: props.product_id }
  })
}
</script>
