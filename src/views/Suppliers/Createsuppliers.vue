<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add supplier</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="supplier.nama"
          />
          <div class="alert alert-ganger" v-if="validation.nama">
            {{ validation.nama[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Alamat</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="supplier.alamat"
          />
          <div class="alert alert-ganger" v-if="validation.alamat">
            {{ validation.alamat[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">No Tlp</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="supplier.no_tlp"
          />
          <div class="alert alert-ganger" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const supplier = reactive({
      nama: "",
       alamat: "",
      no_tlp: ""
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let nama = supplier.nama;
      let alamat = supplier.alamat;
      let no_tlp = supplier.no_tlp;

      axios
        .post('http://127.0.0.1:8000/api/suppliers', {
          nama: nama,
          alamat: alamat,
          no_tlp: no_tlp,
         
        })
        .then(() => {
          router.push({
            name: "Suppliers",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      supplier,
      validation,
      router,
      store,
    };
  },
};
</script>

