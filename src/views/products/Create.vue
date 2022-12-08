<script setup>
    import {ref,router} from 'vue';

    const name = ref("");    
    const price = ref("");
    const category = ref(0);
    
    const func = function (){
        router.push('/products');
    }
</script>
<template>
<!-- Project Card Example -->
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Project Create</h6>
    </div>
    <div class="card-body">
        <form @submit.prevent="func">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input required v-model = "name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Price</label>
                <input required v-model = "price" type="number" class="form-control" id="exampleInputEmail1" placeholder="Price">
            </div>
            <div>
                <label for="">Select Category</label>
                <select required v-model = "category" name="category" id="category">
                    <option value="1">Category - 1</option>
                    <option value="2">Category - 2</option>
                    <option value="3">Category - 3</option>
                    <option value="4">Category - 4</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
</template>
