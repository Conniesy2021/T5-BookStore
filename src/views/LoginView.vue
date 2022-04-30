<template>
    <div class="login-container">
      <div class="login">
        <h3>Log in</h3>
        <label for="user-email" >Email: </label>
        <input
            type="email"
            id='user-email'
            name="email"
            v-model="user.email"
        >
        <label for="user-password">Password: </label>
        <input
            type="password"
            id='user-password'
            name="password"
            v-model="user.password"
        >
        <button
            v-on:click='()=>loginUser()'
            class="login-btn"
        >
          Login
        </button>
        <p class="register-btn-container">
          Don't have an account?
          <button
              v-on:click='()=>registerUser()'
              class="register-btn"
          >
            Register
          </button>
        </p>
      </div>
    </div>
</template>


<script>
import db from '../firebase/firebase-connection'
import {
  getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'

const auth = getAuth()

export default {
  name: "LoginView",
  data: () => {
    return{
      user: {}
    }
  },

  components: {},

  mount(){

  },

  methods:{
      async registerUser() {
        try {
          const {email, password} = this.user
          const credential = await createUserWithEmailAndPassword(auth, email, password)
          alert('user created!')
        }catch (err){
          alert(err.message)
        }
      },

      async loginUser(){
        try {
          const {email, password} = this.user
          const loggedUser = await signInWithEmailAndPassword(auth, email, password)
          alert(`Welcome back! ${loggedUser.user}`)
          this.$router.push('/') 
        }catch (err){
          alert(err.message)
        }
      },
  }
}

</script>


<style scoped>
    @import './assets/styles/LoginView.css';
</style>
