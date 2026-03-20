<template>
  <section v-if="productData" class="detail-layout">
    <img :src="productData.images" :alt="productData.title" class="detail-image" />

    <div class="detail-panel">
      <p class="brand">Pedido confirmado</p>
      <h1 class="page-title">Obrigado, {{ greetingName }}.</h1>
      <p>
        Seu pedido de <strong>{{ productData.title }}</strong> foi registrado.
      </p>
      <p>
        Você receberá um e-mail de confirmação em <strong>{{ greetingEmail }}</strong>.
      </p>

      <div class="actions">
        <RouterLink class="btn" to="/" @click="store.resetCustomerData()">Finalizar</RouterLink>
      </div>
    </div>
  </section>

  <p v-else>Produto não encontrado.</p>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ProductsApi from '@/services/products.service.api'
import { useCheckoutStore } from '@/stores/checkout'

const props = defineProps({
  product_id: {
    type: String,
    required: true
  }
})

const store = useCheckoutStore()
const productData = computed(() => ProductsApi.getProductById(props.product_id))

const greetingName = computed(() => store.customerFirstName || 'cliente')
const greetingEmail = computed(() => store.customerEmail || 'seu e-mail')
</script>
