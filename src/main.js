import { h, reactive, defineComponent, createApp } from "vue";
import App from "./App.vue";
import routes from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import VueCookies from "vue3-cookies";
import LoadScript from "vue-plugin-load-script";
import QrcodeVue from "qrcode";
import { Web3 } from "web3";
import { QRCodeVue3 } from "qrcode-vue3";
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueApexCharts from "vue3-apexcharts";
import "vue-3-simple-context-menu/dist/vue-simple-context-menu.css";
import VueSimpleContextMenu from "vue-3-simple-context-menu";
import EmojiPicker from '../src/assets/js/vue3-emoji-picker'
import '../src/assets/js/vue3-emoji-picker/dist/style.css'

import VueCarousel from '@chenfengyuan/vue-carousel';

import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

window.require = (name) => new URL(name,
    import.meta.url).href;
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: routes,
    created: function() {
        console.log("router params id:: ", this.$route.params.id);
        //this.$router.push({ name: 'userProfileWidget' });
    }
})
router.push(routes)
console.log("router:: ", router, "routes:: ", routes)
const app = createApp(App)


app.component(VueCarousel.name, VueCarousel);
app.component("vue-simple-context-menu", VueSimpleContextMenu);
app.use(VueApexCharts);
app.use(Antd);
app.use(EmojiPicker);
app.use(VueChartkick);
app.use(router);
app.use(VueCookies);
app.use(LoadScript);
app.use(QrcodeVue);
app.use(ViewUIPlus)
//app.use(React)
app.use(h)
app.use(reactive)
app.use(defineComponent)
app.use(Web3);
app.use(QRCodeVue3);
app.config.productionTip = false
app.mount('#app')
export default router;
/*
$cookies.remove(keyName [, path [, domain]])  // return this
Exist a cookie name
$cookies.isKey(keyName)  // return false or true
Get All cookie namejujh xv
$cookies.keys()
// 30 day after, expire
Vue.$cookies.config('30d')
// set secure, only https works
Vue.$cookies.config('7d','','',true)
// 2019-03-13 expire
this.$cookies.config(new Date(2019,03,13).toUTCString())
// 30 day after, expire, '' current path , browser default
this.$cookies.config(60 * 60 * 24 * 30,'');
//:::::::
window.localStorage.removeItem(‘testObject’)
*/
