<template>
  <section>
    <h1 class="page-title">Produtos</h1>
    <div class="grid">
      <article v-for="product in products" :key="product.id" class="card">
        <img :src="product.images" :alt="product.title" class="card-image" />
        <p class="brand">{{ product.brand }}</p>
        <h2 class="card-title">{{ product.title }}</h2>
        <p class="price">€ {{ product.price }}</p>
        <RouterLink class="btn" :to="{ name: 'product', params: { product_id: product.id } }">
          Ver detalhes
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import ProductsApi from '@/services/products.service.api'

const products = ProductsApi.getProducts()
</script>
