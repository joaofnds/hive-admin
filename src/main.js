import "@/firebase/main";
import "@/registerServiceWorker";
import "vuetify/dist/vuetify.min.css";

import Vue from "vue";
import Vuetify from "vuetify";
import ptBRLocale from "vee-validate/dist/locale/pt_BR";
import VeeValidate, { Validator } from "vee-validate";

import App from "@/App.vue";
import router from "@/router/router";
import store from "@/vuex/store";
import colors from "@/config/colors";

import { setOnAuthStateChangedListener } from "@/firebase/auth";

Vue.use(Vuetify, { theme: colors });

Validator.localize("pt_BR", ptBRLocale);

Vue.use(VeeValidate);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

setOnAuthStateChangedListener();
