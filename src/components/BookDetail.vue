<template>

  <div class="book-details">
    <img :src='img' class="book-img" alt={{name}} />
    <div>Name: <span class="book-name">{{ name }}</span></div>
    <div>Price: <span class="book-price">$<strong>{{ price }}</strong></span></div>
    <div>Genre: <span class="book-price">{{ genre }}</span></div>
    <div>Summary: <span class="book-name">{{description}}</span> </div>

  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'BookDetail',
  data() {
    return {}
  },
  created() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.price = this.$route.params.price;
    this.description = this.$route.params.description;
    this.img = this.$route.params.img;
    this.genre=this.$route.params.genre;
  },

  getBook() {

  },
  methods: {
    navigate() {
      router.go(-1);
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
