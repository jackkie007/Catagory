<template>
  <div class="container">
    <div class="row pb-5">
      <div class="col text-center">
        <router-link to='order'><button class="btn btn-success " >หน้าสินค้า</button></router-link>

      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h1 class="he">เพิ่มสินค้าด้านล่างเลยครับ</h1>
      </div>
    </div>
    <form class="">
      <div class="row pb-4">
        <div class="col-12 text-left">
          <p >ชื่อสินค้า<b-form-input input type="text"  value="" v-model="product.name"></b-form-input></p>
          <p>ราคาสินค้า<b-form-input input type="number"  value="" v-model="product.price"></b-form-input></p>
          <p>จำนวนสินค้า<b-form-input input type="number" value="" v-model="product.count"></b-form-input></p>
          <p>ลิ้งรูปสินค้า<b-form-input input type="text"  value="" v-model="product.img"></b-form-input></p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-primary" @click="addProduct()" >ยืนยัน</button>
          <button type="reset" class="btn btn-danger">ยกเลิก</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Input',
  data () {
    return {
      product: {
        name: '',
        price: '',
        count: '',
        img: ''
      }
    }
  },
  computed: {

  },
  methods: {
    ...mapActions([
      'inputProduct'
    ]),
    addProduct () {
      this.inputProduct(this.product)
      this.product.name = ''
      this.product.price = ''
      this.product.count = ''
      this.product.img = ''
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    color: blue;
    font-family: cursive;
  }
  .head{
    width: 100;
  }
  .he{
    color: blue;
  }
</style>
