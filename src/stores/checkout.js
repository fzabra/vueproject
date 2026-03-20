import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'checkout-customer-data'

function readPersistedData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { customerFirstName: '', customerEmail: '' }
  } catch {
    return { customerFirstName: '', customerEmail: '' }
  }
}

export const useCheckoutStore = defineStore('checkout', () => {
  const initial = readPersistedData()
  const customerFirstName = ref(initial.customerFirstName || '')
  const customerEmail = ref(initial.customerEmail || '')

  const isValid = computed(() => {
    return customerFirstName.value.trim().length > 1 && /.+@.+\..+/.test(customerEmail.value)
  })

  function resetCustomerData() {
    customerFirstName.value = ''
    customerEmail.value = ''
  }

  watch([customerFirstName, customerEmail], () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      customerFirstName: customerFirstName.value,
      customerEmail: customerEmail.value
    }))
  }, { immediate: true })

  return {
    customerFirstName,
    customerEmail,
    isValid,
    resetCustomerData
  }
})
