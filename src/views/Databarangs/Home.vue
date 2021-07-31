<template>
  <div class="home">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createdatabarangs">Add Data Barang</router-link>
    <table class="table">
  <thead>
    <tr>
       <th scope="col">ID</th>
      <th scope="col">Nama Barang</th>
      <th scope="col">Jenis</th>
      <th scope="col">Harga Jual</th>
       <th scope="col">Harga Beli</th>
      <th scope="col">Stok</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(databarang, index) in databarangs" :key="index">
      <td>{{ databarang.nama_barang}}</td>
      <td>{{ databarang.jenis}}</td>
      <td>{{ databarang.harga_jual }}</td>
        <td>{{ databarang.harga_beli }}</td>
        <td>{{ databarang.stok }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editdatabarangs', params:
        {id:databarang.id}}"
          >Edit</router-link>
        <button @click.prevent="databarangDelete(databarang.id)" class="btn 
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
  name: "Home",
  components: {
    Slider
  },
  setup(){
    let databarangs = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/databarangs')
      .then(response => {
        databarangs.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function databarangDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/databarangs/${id}`)
      .then(()=>{
        let z = this.databarangs.map(databarangs => databarangs.id).indexOf(id);
        this.databarangs.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      databarangs,
      databarangDelete
    }
  }
};
</script>

