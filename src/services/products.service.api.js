import data from './products.data'

const ProductsApi = {
  getProducts () {
    return data
  },

  getProductsWithId (id) {
    return data.filter(item => item.id === id)[0]
  },

  sendOffer (offerData) {
    /* eslint-disable no-// */
    // TODO
  }
}

export default ProductsApi
