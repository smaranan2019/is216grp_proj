import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "moment";
import { Autocomplete, Button, Field, Navbar } from "buefy";
import "buefy/dist/buefy.css";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.use(Autocomplete);
Vue.use(Button);
Vue.use(Field);
Vue.use(Navbar);

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  if (!value) return "";
  return moment(value.toString()).format("MM/DD/YYYY hh:mm");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
