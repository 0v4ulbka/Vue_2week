<template>
  <div id="login">
    <form @submit.prevent="login">
      <h2>Войти</h2>
      <div id="form">
        <label>
          <p>Почта</p>
          <input v-model="email" type="email" placeholder="example@mail.com">
        </label>
        <label>
          <p>Пароль</p>
          <input type="password" v-model="password">
        </label>
        <p><input id="button" type="submit" value="Войти"></p>
      </div>
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
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
#login{
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
}
#form{
  margin-top: 40px;
  width: 425px;
  display: flex;
  flex-direction: column;
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