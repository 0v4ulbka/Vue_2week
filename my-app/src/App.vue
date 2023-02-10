<template>
  <nav>
    <router-link to="/"><b id="logo">Просто купить</b></router-link>
    <div id="buy">
      <router-link to="Cart">Корзина</router-link>
      <router-link to="Order">Заказы</router-link>
    </div>
    <div id="authorization">
      <router-link v-if="!this.$store.state.token" to="/signup">Зарегистрироваться</router-link>
      <router-link v-if="!this.$store.state.token" to="/login">Войти</router-link>
      <router-link v-if="this.$store.state.token" to="/logout" @click="logout">Выйти</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  computed:{
    },
  methods:{
    logout: function () {
      this.$store.dispatch('logout')
          .then(() => this.$router.push('/logout')
          )
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
  height: 70px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom: #2c3e50 solid 2px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

span{
  justify-content: right;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#logo{
  float: left;
  font-size: 24pt;
}
#authorization{
  width: 230px;
  display: flex;
  justify-content: space-around;
}
#authorization a{
  cursor: pointer;
}
#buy{
  width: 230px;
  display: flex;
  justify-content: space-around;
}
</style>
