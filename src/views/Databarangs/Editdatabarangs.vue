<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">EDIT Data Barang</h5>
      <form class="row g-3" @submit.prevent="update">
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
          <div class="alert alert-ganger" v-if="validation.harga_jual">
            {{ validation.harga_jual[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Harga Beli</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            v-model="databarang.harga_beli"
          />
          <div class="alert alert-ganger" v-if="validation.harga_beli">
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
          <div class="alert alert-ganger" v-if="validation.stok">
            {{ validation.stok[0] }}
          </div>
        </div>
 <div class="col-6">
           <label for="inputAddress" class="form-label">Supplier</label>
        <select 
        class="form-select" 
        aria-label="Default select example"
         v-model="databarang.supplier_id"
         >
  <option v-for="supplier in suppliers" :key="supplier.id" :value="supplier.id">
    {{ supplier.name }}
    </option>
</select>
</div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">EDIT</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const databarang = reactive({
      nama_barang: "",
      jenis: "",
      harga_jual: "",
      harga_beli: "",
      stok: "",
      supplier_id: "",
    });

    let suppliers = ref([]);
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(() => {
      axios
      .get(`http://127.0.0.1:8000/api/databarangs/${route.params.id}/edit`)
      .then((response) => {
        console.log(response.data.data.nama);

        databarang.nama_barang = response.data.data.nama_barang;
        databarang.jenis = response.data.data.jenis;
        databarang.harga_jual = response.data.data.harga_jual;
        databarang.harga_beli = response.data.data.harga_beli;
        databarang.stok = response.data.data.stok;
        databarang.supplier_id = response.data.data.supplier_id;
      })
      .catch((error) => {
        console.log(error.response.data);
      });

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

    function update() {
      let nama = databarang.nama;
      let no_tlp = databarang.no_tlp;
      let alamat = databarang.alamat;
      let supplier_id = databarang.supplier_id;

      axios
      .put(`http://127.0.0.1:8000/api/databarangs/${route.params.id}`, {
          nama: nama,
          no_tlp: no_tlp,
          alamat: alamat,
          supplier_id: supplier_id,
        })
        .then(() => {
          router.push({
            name: 'Home',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      databarang,
      validation,
      router,
      update,
      route,
      suppliers,
    };
  },
};
</script>
