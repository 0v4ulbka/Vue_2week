<template>
  <div>
    <p>{{ cardData.name }}</p>
    <p><b>Описание товара: </b>{{ cardData.description }}</p>
    <p><b>Цена</b> {{ cardData.price }} &#8381;
      <button v-if="this.$store.state.token"
      @click="AddToCart"
      >В корзину</button>
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  name: "Card",
  props: ['cardData'],
  methods: {
    AddToCart: function (){
      this.$store.dispatch('add_to_cart', this.cardData.id)
    }
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