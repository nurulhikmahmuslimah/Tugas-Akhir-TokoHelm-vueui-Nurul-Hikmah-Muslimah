<template>
  <div class="card text-center mt-4" v-for="f in databarang" :key="f.id">
  <div class="card-header">Detail teman</div>
  <div class="card-body">
    <h5 class="card-title">{{d.nama_barang}}</h5>
  <p class="card-text">
        {{d.jenis}}
        </p>
  <p class="card-text">
        {{ d.harga_jual }}
        </p>
  <p class="card-text">
        {{ d.harga_beli }}
        </p>
  <p class="card-text">
        {{ d.stok }}
        </p>
  <p class="card-text">
        {{ d.suppliers.name }}
        </p>
  </div>
  <div class="card-footer">
    <router-link
     class="btn btn-success" 
    :to="{name:'Editdatabarangs', params: { id: d.id} }"
          >EDIT</router-link
          >
        <button @click.prevent="databarangDelete(f.id)" class="btn btn-danger">
          DELETE
          </button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
      let databarang = ref([]);
    const router = useRouter();

    const route = useRoute();

    onMounted(()=>(
      axios.get(`http://127.0.0.1:8000/api/databarangs/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        databarang.value = response.data.data;
      })
      .catch(error => {
        console.log(error.response.data);
      })
    ));

    function databarangDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/databarangs/${id}`)
      .then(()=>{
          router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

   
    return {
      databarang,
      router,
      databarangDelete,
      route,
    };
  },
};
</script>

<style>

</style>
