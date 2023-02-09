<template>
  <div>
    <p>{{ cardData.name }}</p>
    <p><b>Описание товара: </b>{{ cardData.description }}</p>
    <p>Цена {{ cardData.price }} &#8381;
      <button v-if="this.$store.state.token">В корзину</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  date(){
    return{

    }
  },
  name: "Card",
  props: ['cardData'],
  methods: {

  }
}
</script>

<style scoped>
  div{

    width: 300px;
    height: 250px;
    vertical-align: middle;
    margin: 20px 30px;
    padding: 35px;
    background-color: rgba(127, 255, 212, 0.38);
  }
  button{
    margin-left: 15px;
    border: #2c3e50 2px solid;
    border-radius: 7px;
    padding: 7px 12px;
    background-color: rgba(66, 185, 131, 0);
    font-size: 15px;
    color: #2c3e50;
    cursor: pointer;
  }
  button:hover{
    background-color: rgba(66, 185, 131, 0.73);
    transition: all .3s linear;
  }
</style>