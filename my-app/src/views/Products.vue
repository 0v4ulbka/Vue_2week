<template>
  <div>
    <h2>Каталог</h2>
    <card v-for="card in data_products.data" v-bind:key="card.id" :card-data="card"></card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import axios from "axios";

export default {
  name: "Products",
  components: {Card},
  data(){
    return{
      data_products: [],
    }
  },
  mounted() {
    axios.get(this.$store.state.API + 'products')
        .then(response => {this.data_products = response.data})
  }
}
</script>

<style scoped>
  div{
    margin-top: 20px;
    display: inline-block;
  }
</style>