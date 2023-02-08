<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <label>
        <p>Имя пользователя</p>
        <input type="text" v-model="user_name">
      </label>
      <label>
        <p>Адрес электронной почты</p>
        <input type="email" v-model="email">
      </label>
      <label>
        <p>Пароль</p>
        <input type="password" v-model="password">
      </label>
      <input type="submit" value="Зарегистрироваться">
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      name: "",
      email: "",
      password: "",
    }
  },
  methods:{
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('register', data)
          .then(() => this.router.push('/'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>