<template>
  <div>
    <form @submit.prevent="login">
      <h2>Войти</h2>
      <label>
        Почта <input v-model="email" type="email" placeholder="example@mail.com">
      </label>
      <label>
        Пароль <input type="password" v-model="password">
      </label>
      <br>
      <input type="submit" value="login">
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email: "",
      password: ""
    }
  },
  methods:{
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', {email, password})
          .then(() => this.router.push('/'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>