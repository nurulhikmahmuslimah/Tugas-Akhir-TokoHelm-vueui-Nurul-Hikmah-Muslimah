<template>
<div class="row">
  <div 
  class="col-lg-4 mt-3"
   v-for="(databarang, index) in databarangs"
    :key="index"
    >
    <div class="card">
  <div class="card-header">{{databarang.nama_barang}}</div>
  <div class="card-body">
    <h5 class="card-title">{{databarang.jenis}}</h5>
    <p class="card-text">
        {{databarang.harga_jual}}
        </p>
        <p class="card-text">
        {{databarang.harga_beli}}
        </p>
        <p class="card-text">
        {{databarang.stok}}
        </p>
        <p class="card-text">
        {{ databarang.suppliers.name }}
        </p>
  </div>
  <div class="card-footer text-muted">  
      <router-link
       class="btn btn-primary"
        :to="{name:'Detaildatabarangs', params: {id:databarang.id}}"
          >DETAIL</router-link
          >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["databarangs"], 
};
</script>

<style>

</style>
