<template>
  <h2>Cart</h2>
  <div>
    <card v-for="card in cartArr" v-bind:key="card.id" :card-data="card"></card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from 'axios'

export default {
  name: "Cart",
  components: {Card},
  data(){
    return{
      cartArr: [],
    }
  },
  mounted() {
    axios.get(this.$store.state.API + `cart`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + this.$store.state.token
      }
    }).then((response) => {
      this.cartArr = response.data.data
    })
  }
}
</script>

<style scoped>

</style>