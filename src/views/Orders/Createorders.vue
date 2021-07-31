<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit order</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">ID</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="order.id"
          />
          <div class="alert alert-ganger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Tanggal</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="order.tanggal"
          />
          <div class="alert alert-ganger" v-if="validation.tanggal">
            {{ validation.tanggal[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">User</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="order.user"
          />
          <div class="alert alert-ganger" v-if="validation.user">
            {{ validation.user[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nama Barang</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="order.nama_barang"
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
            v-model="order.jenis"
          />
          <div class="alert alert-ganger" v-if="validation.jenis">
            {{ validation.jenis[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Total</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="order.total"
          />
          <div class="alert alert-ganger" v-if="validation.total">
            {{ validation.total[0] }}
          </div>
        </div>
    
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
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
    const order = reactive({
      order: "",
        alamat: "",
        no_tlp: ""
      
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let nama = order.nama;
      let alamat = order.alamat;
      let no_tlp = order.no_tlp;
      
      axios
        .post('http://127.0.0.1:8000/api/orders', {
          nama: nama,
          alamat: alamat,
          no_tlp: no_tlp

        })
        .then(() => {
          router.push({
            name: "Orders",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      order,
      validation,
      router,
      store,
    };
  },
};
</script>

