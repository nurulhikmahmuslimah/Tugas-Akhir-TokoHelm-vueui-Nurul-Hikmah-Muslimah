<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">ADD databarang</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama Barang</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="databarang.nama_barang"
          />
          <div class="alert alert-ganger" v-if="validation.nama_barang">
            {{ validation.nama_barang[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Jenis</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="databarang.jenis"
          />
          <div class="alert alert-ganger" v-if="validation.jenis">
            {{ validation.jenis[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Harga Jual</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            v-model="databarang.harga_jual"
          />
          <div class="alert alert-danger" v-if="validation.harga_jual">
            {{ validation.harga_jual[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Harga beli</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            v-model="databarang.harga_beli"
          />
          <div class="alert alert-danger" v-if="validation.harga_beli">
            {{ validation.harga_beli[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Stok</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            v-model="databarang.stok"
          />
          <div class="alert alert-danger" v-if="validation.stok">
            {{ validation.stok[0] }}
          </div>
        </div>
         <div class="col-6">
           <label for="inputAddress" class="form-label">Supplier</label>
        <select class="form-select" aria-label="Default select example"
         v-model="databarang.suppliers_id"
         >
  <option v-for="supplier in suppliers" :key="supplier.id" :value="supplier.id">
    {{ supplier.name }}
    </option>
</select>
</div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">ADD</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const databarang = reactive({
      nama_barang: "",
      jenis: "",
      harga_jual: "",
      harga_beli: "",
      stok: "",
      suppliers_id: ""
    });

    let suppliers = ref([]);
    const validation = ref([]);

    const router = useRouter();

onMounted(() =>{
axios
        .get('http://127.0.0.1:8000/api/suppliers')
        .then((response) => {
          suppliers.value = response.data.data;
          console.log(suppliers.value);
        })
        .catch((error) => {
        console.log(error);
        });
  
});

    function store() {
      let nama_barang = databarang.nama_barang;
      let jenis = databarang.jenis;
      let harga_jual = databarang.harga_jual;
      let harga_beli = databarang.harga_beli;
      let stok = databarang.stok;
      let suppliers_id = databarang.suppliers_id;
      axios
        .post('http://127.0.0.1:8000/api/databarangs', {
          nama_barang: nama_barang,
          jenis: jenis,
          harga_jual: harga_jual,
          harga_beli: harga_beli,
          stok: stok,
          suppliers_id: suppliers_id
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
         validation.value = error.response.data;
        });
    }
    return {
      databarang,
      validation,
      router,
      store,
      suppliers,
    };
  },
};
</script>

