<script>



</script>

<template>
<!-- Content Column -->
<div class="container-fluid">

    <!-- Project Card Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">  
            <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
            <router-link to="/products/create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Create Product</router-link>
            <router-link to="/products/update" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Update Product</router-link>
            <!-- <router-link :to="{name:'product.create'}">Create Product</router-link> -->
            <!-- <router-link :to="{name:'product.update'}">Update Product</router-link> -->
        </div>
        <div class="card-body">
            <!-- <router-view></router-view> -->
        </div>
    </div>
</div>
</template>
