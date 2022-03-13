import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductByKeyWord(keyWord) {
  return instance.get(`/products`, {
    params: {
      name_like: keyWord,
    },
  })
}
export { fetchProductById, fetchProductByKeyWord }
