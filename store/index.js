export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem)
  },
}

// // store/index.js
// export const state = () => ({
//   user: {},
// })

// export const mutations = {
//   setUser(state, user) {
//     state.user = user
//   },
// }

// export const actions = {
//   async fetchUser(context) {
//     const response = await axios.get('users/1')
//     context.commit('setUser', response.data)
//   },
// }
