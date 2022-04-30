<template>
  <div class="home">
    <table class="table" v-if="Object.keys(this.books_in_cart).length">
      <thead class="">
      <tr>
        <th></th>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Number</th>
        <th>operation</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in books_in_cart">
        <td class="column">
          <img :src="item.book.get_cover_art">
        </td>
        <td>{{ item.book.id }}</td>
        <td>{{ item.book.name }}</td>
        <td>{{ item.book.price }}</td>
        <td>
          <button @click="decrement(item)" v-bind:disabled="item.count <= 1" class="button is-small is-primary">-
          </button>
          {{ item.count }}
          <button @click="increment(item)" class="button is-primary is-small">+</button>
        </td>
        <td>
          <button @click="remove(item)" class="is-primary button is-small">delete all</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="columns is-centered">
      <h1 v-if="Object.keys(this.books_in_cart).length" class="subtitle">
        total {{ getTotal() }} $
        <button class="button is-primary is-small" @click="pay()"> Pay </button>
      </h1>
      <h1 v-else class="title">
        The cart is empty.
        <a @click = "buy()" > click here to buy.</a>
      </h1>
    </div>
  </div>

</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      books_in_cart: []
    }
  },
  mounted() {
    console.log("cart")
    this.books_in_cart = this.$store.state.books
    console.log(Object.keys(this.books_in_cart).length)
  },
  methods: {
    remove(item) {
      console.log("delete", item.book.id)
      delete this.books_in_cart[item.book.id]
      this.$store.state.books = this.books_in_cart
    },
    decrement(item) {
      if (this.books_in_cart[item.book.id].count > 1) {
        this.books_in_cart[item.book.id].count--
      } else {
        alert("cannot decrement, already the least")
      }
      this.$store.state.books = this.books_in_cart
    },
    increment(item) {
      this.books_in_cart[item.book.id].count++
      this.$store.state.books = this.books_in_cart
      console.log(this.books_in_cart)
    },
    getTotal() {
      let sum = 0
      for (let key in this.books_in_cart) {
        sum += this.books_in_cart[key].book.price * this.books_in_cart[key].count
      }
      console.log(sum)
      return sum.toFixed(2)
    },
    pay(){
      alert("Payed successfully!")
      this.books_in_cart = {}
    },
    buy(){
      this.$router.replace("/")
    }
  }
}
</script>

<style scoped>
/*table {*/
/*  border: 1px solid #e9e9e9;*/
/*  border-collapse: collapse;*/
/*  border-spacing: 0;*/
/*}*/

/*th, td {*/
/*  padding: 8px 16px;*/
/*  border: 1px solid #e9e9e9;*/
/*  text-align: center;*/
/*}*/

/*th {*/
/*  background-color: #f7f7f7;*/
/*  color: #5c6b77;*/
/*  font-weight: 600;*/
/*}*/
</style>