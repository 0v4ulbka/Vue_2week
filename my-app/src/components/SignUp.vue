<template>
  <div id="signUp">
    <h2>Регистрация</h2>
    <form @submit.prevent="register" id="form">
      <label>
        <p>Имя пользователя</p>
        <input type="text" v-model="fio" placeholder="ФИО">
      </label>
      <label>
        <p>Адрес электронной почты</p>
        <input type="email" v-model="email" placeholder="example@mail.com">
      </label>
      <label>
        <p>Пароль</p>
        <input type="password" v-model="password">
      </label>
      <p>
        <input id="button" type="submit" value="Зарегистрироваться">
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
#signUp{
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
  flex-direction: column;
}
#form{
  margin-top: 20px;
  width: 425px;
  display: flex;
  flex-direction: column;
  align-self: center;
}

input{
  padding: 7px 12px;
  border-radius: 7px;
  border: #42b983 2px solid;
  margin-bottom: 15px;
  width: 250px
}

#button{
  background-color: unset;
  font-size: 15px;
  cursor: pointer;
  width: 200px;
}
#button:hover{
  transition: all 0.3s;
  border: #2c3e50 2px solid;
}

</style>