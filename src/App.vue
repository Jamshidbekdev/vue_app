<template>
<div id="wrapper">

  <!-- Sidebar - Brand -->
  <LeftMenu/>
  <!-- End of Sidebar -->

  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

          <!-- Topbar -->
          <Header/>
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <router-view></router-view>
          </div>
          <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer/>
      <!-- End of Footer -->

  </div>
  <!-- End of Content Wrapper -->

</div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import LeftMenu from '@/components/LeftMenu.vue'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    LeftMenu
  }
}
</script>

<style>
@import "./assets/css/sb-admin-2.min.css";
@import "./assets/vendor/fontawesome-free/css/all.min.css";
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
