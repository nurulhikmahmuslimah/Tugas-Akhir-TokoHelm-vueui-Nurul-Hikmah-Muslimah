<template>
  <div class="orders">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createorders">Add order</router-link>
    <table class="table">
  <thead>
    <tr>
       <th scope="col">ID</th>
      <th scope="col">tanggal</th>
      <th scope="col">User</th>
      <th scope="col">Nama Barang</th>
      <th scope="col">Jenis</th>
      <th scope="col">Total</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in orders" :key="index">
      <td>{{ order.tanggal}}</td>
      <td>{{ order.user }}</td>
      <td>{{ order.nama_barang }}</td>
      <td>{{ order.jenis }}</td>
      <td>{{ order.total }}</td>
       
      <td>
        <router-link class="btn btn-success" :to="{name:'Editorders', params:
        {id:order.id}}"
          >Edit</router-link>
        <button @click.prevent="orderDelete(order.id)" class="btn 
        btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import { ref, onMounted } from 'vue';
export default {
  name: "Orders",
  components: {
    Slider
  },
  setup(){
    let orders = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/orders')
      .then(response => {
        orders.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function orderDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/orders/${id}`)
      .then(()=>{
        let z = this.orders.map(orders => orders.id).indexOf(id);
        this.orders.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      orders,
      orderDelete
    }
  }
};
</script>

