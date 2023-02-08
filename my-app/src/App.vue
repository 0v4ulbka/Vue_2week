<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> <br>
    <router-link v-if="!isLoggedIn" to="/signup">Зарегистрироваться</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Войти</router-link>
    <span v-if="isLoggedIn"> | <a @click="logout">Выйти</a> </span>
  </nav>
  <router-view/>
</template>

<script>
export default {
  computed:{
    isLoggedIn: function (){
      return this.$store.getters.isLoggedIn}
    },
  methods:{
    logout: function (){
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
