<template>
<div class="container">
  <div class="row pb-5">
    <div class="col">
      <h1>ร้านขนมปัง</h1>
    </div>
  </div>
  <div class="row" >
    <div class="col-3" v-for="(product, index) in productall" :key="index">
      <div class="card px-1">
        <img class="card-img-top" :src="product.img" height="250px">
        <div class="card-body">
          <h5 class="card-title">ชื่อสินค้า : {{product.name}}</h5>
          <p class="card-text">จำนวนคงเหลือ : {{product.count}} ชิ้น</p>
          <h6 class="card-text">ราคา : {{product.price}} บาท</h6>
          <button v-if="product.count > 0" class="btn btn-primary"  @click="updateStock(index)">สั่งซื้อ</button>
          <button v-else class="btn btn-danger" disabled>สินค้าหมด</button>
        </div>
      </div>
    </div>
  </div>
  <br><br><br>
  <div class="row">
    <div class="col text-center">
      <router-link to='/'><button class="btn btn-secondary " >กลับไปเพิ่มสินค้า</button></router-link>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      product: [],
      chooseItems: [],
      countItems: []
    }
  },
  created () {
    this.showProduct()
    this.showCarts()
  },
  computed: {
    ...mapGetters([
      'productall',
      'carts'
    ])
  },
  methods: {
    ...mapActions([
      'showProduct',
      'updateStock',
      'showCarts'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
