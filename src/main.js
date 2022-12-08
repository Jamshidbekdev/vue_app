import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
// import jQuery from 'jquery';
// require('./assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
// require('./assets/vendor/jquery-easing/jquery.easing.min.js')
// require('./assets/vendor/jquery/jquery.min.js')
// require('./assets/js/sb-admin-2.min.js')
// require('./assets/vendor/chart.js/Chart.min.js')
// require('@/assets/js/demo/chart-area-demo.js')
// require('@/assets/js/demo/chart-pie-demo.js')


// config.productionTip = false
var app = createApp(App)
app.use(router).mount('#app')



