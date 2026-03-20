import products from './products.data'

const ProductsApi = {
  getProducts() {
    return products
  },

  getProductById(id) {
    return products.find((item) => item.id === id) || null
  }
}

export default ProductsApi
