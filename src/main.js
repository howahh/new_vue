// VueJS
import Vue from 'vue'

// Ant Design Vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import VueDarkMode from "@growthbunker/vuedarkmode"

Vue.use(VueDarkMode, {
  // Specify the theme to use: dark or light (dark by default).
  theme: "dark",

  // Specify the components to declare globally in your project
  // When undefined, null or given an empty array, all components will be imported
  components: [
    // Base components
    "alert", "avatar", "badge", "button", "divider", "heading", "icon",  "progress-bar",  "spinner", "div",

    // Field components
    "checkbox", "file", "image-uploader", "input", "input-numeric", "label", "message", "radios", "select", "tabs", "textarea", "toggle"
  ]
});

Vue.use(dataV)
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.use(VueAxios,axios);
Vue.use(Antd);

// Photoswipe Gallery
import Photoswipe from 'vue-pswipe'
Vue.use(Photoswipe)

// Template Layouts
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);

// Main application view
import App from './App.vue'

// Vue Router
import router from './router'

// App Styling
import './scss/app.scss';

Vue.config.productionTip = false

// Initialize Vue
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')