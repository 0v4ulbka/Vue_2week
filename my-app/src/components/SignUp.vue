<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <label>
        <p>Имя пользователя</p>
        <input type="text" v-model="fio" placeholder="ФИО">
      </label>
      <label>
        <p>Адрес электронной почты</p>
        <input type="email" v-model="email">
      </label>
      <label>
        <p>Пароль</p>
        <input type="password" v-model="password">
      </label>
      <p>
        <input type="submit" value="Зарегистрироваться">
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data(){
    return{
      fio: "",
      email: "",
      password: "",
    }
  },
  methods:{
    register: function () {
      let data = {
        fio: this.fio,
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('signup', data)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>