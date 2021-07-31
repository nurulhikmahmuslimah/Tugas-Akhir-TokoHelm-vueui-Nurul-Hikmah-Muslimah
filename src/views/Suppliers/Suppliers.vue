<template>
  <div class="suppliers">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createsuppliers">Add supplier</router-link>
    <table class="table">
  <thead>
    <tr>
       <th scope="col">ID</th>
      <th scope="col">Nama</th>
      <th scope="col">Alamat</th>
      <th scope="col">No Tlp</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in suppliers" :key="index">
      <td>{{ supplier.nama}}</td>
      <td>{{ supplier.alamat }}</td>
      <td>{{ supplier.no_tlp }}</td>
       
      <td>
        <router-link class="btn btn-success" :to="{name:'Editsuppliers', params:
        {id:supplier.id}}"
          >Edit</router-link>
        <button @click.prevent="supplierDelete(supplier.id)" class="btn 
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
  name: "Suppliers",
  components: {
    Slider
  },
  setup(){
    let suppliers = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/suppliers')
      .then(response => {
        suppliers.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function supplierDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/suppliers/${id}`)
      .then(()=>{
        let z = this.suppliers.map(suppliers => suppliers.id).indexOf(id);
        this.suppliers.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      suppliers,
      supplierDelete
    }
  }
};
</script>

