<template>
<div id="wrapper">

  <nav class="navbar-is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"><strong>Books</strong></router-link>
      <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
      <div class="navbar-end">
        <router-link to="/science" class="navbar-item">Science</router-link>
        <router-link to="/history" class="navbar-item">History</router-link>

        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/log-in" class="button is-light">Log in</router-link>

            <router-link to="/cart" class="button is-success">
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Cart</span>
            </router-link>
          </div>
        </div>

      </div>
    </div>

  </nav>

  <section class="section">
    <router-view/>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    }
  }
}

</script>

<style lang="scss">
@import '../node_modules/bulma';
.footer{
  margin-top: 30px;
  padding-top: 100px;
}
.navbar-item > strong{
  font-size: 1.2rem;
  font-weight: 600;
}
.navbar-item{
  font-size: 1.2rem;
}
</style>
