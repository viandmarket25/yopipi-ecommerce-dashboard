<template>
  <div class="dashboard-background">
    <div style="width:100%; height:auto; overflow-y:hidden; margin-left:0%;  ">
      <div class="dashboard-menu-block">
         <div style="width:60%; height:100vh; float:left; position:relative; left:30px; margin-top:30px;    ">
            <ul id="top-menu-list-container" class="top-menu-list-container" align="center">
                <li  v-for="(item,index) in sellerPagesList"  :key="item.title" :class="getMenuClass(item,index)" @click="goModule(index,item.path)" :data-key_="item.title" style="" >
                  <img :src="getDashboardIcons(item.iconPath)" style="width:20px; height:20px; margin-right:6px;  opacity:0.8;" />
                  {{item.title}}
                </li>

            </ul>
          </div>
      </div>
      <div class="dashboard-content-block">
        <div class="dashboard-content-block-inner">
          <TopBarLoggedInWidget  :topBarData="topBarData" />

          <div align="left" style="height:100vh;  overflow-y:scroll; ">
              <addProductWidget></addProductWidget>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script lang="jsx">


import TopBarLoggedInWidget from './items/top-bar-orders.vue';
import HomeFooterWidget from '../../../../components/views/home/items/home-footer.vue';

import dashboardWidget from '../../../../components/views/seller/dashboard/index.vue';
import shopsWidget from '../../../../components/views/seller/shops/index.vue';
import productsWidget from '../../../../components/views/seller/products/index.vue';
import ordersWidget from '../../../../components/views/seller/orders/index.vue';
import transactionsWidget from '../../../../components/views/seller/transactions/index.vue';
import customersWidget from '../../../../components/views/seller/customers/index.vue';
import couponsWidget from '../../../../components/views/seller/coupons/index.vue';
import settingsWidget from '../../../../components/views/seller/settings/index.vue';
import analyticsWidget from '../../../../components/views/seller/analytics/index.vue';
import reportsWidget from '../../../../components/views/seller/reports/index.vue';


export default {
  name: "userProfileWidget",
  components:{

    TopBarLoggedInWidget ,HomeFooterWidget,
    /*
    dashboardWidget,
    shopsWidget ,
    productsWidget,
     ordersWidget,
     transactionsWidget,
     customersWidget,
     couponsWidget ,
     settingsWidget ,
     analyticsWidget,
     reportsWidget ,
     */

  },
  //mixins: [web3Modal],
  props: {
    msg: String
  },
  created() {


  },
  mounted() {

    this.checkUserExists('auto-login')
    this.activeProfilePage=document.getElementById('active-profile-page')
    this.showOverflow();
    // console.log("web3 modal: ",window.web3)
     //this.connect()

  },
  data(){
    return {
      topBarData:{
        totalProducts:0,
        userCookieData:{},
      },
      isLoggedIn: false,
      userCookieData:{},
      activePage:'orders',

      // Web3modal instance
      web3Modal: 0,
      // Chosen wallet provider given by the dialog window
      provider: 0,
      // Address of the selected account
      selectedAccount: 0,
      activeProfilePage:'',
      number: 0,
      balance: 0,
      selectedVerticalButton:'my-dashboard-link',
      selectedHorizontalButton:'',

      sellerPagesList:[
        {
          title:'Dashboard',
          path:'/dashboard',
            iconPath:'grid-3.png',
          canShowPage:true,
        },
        {
          title:'Products',
          path:'/products',
          iconPath:'box.png',

          canShowPage:false,
        },
        {
          title:'Add Product',
          path:'/add-product',
          iconPath:'add-circle.png',

          canShowPage:false,
        },
        {
          title:'Messages',
          path:'/messages/s/',
          iconPath:'message-text.png',

          canShowPage:false,
        },
         {
           title:'Shops',
           path:'/shops',
           iconPath:'shop.png',

          canShowPage:false,
        },

        {
          title:'Orders',
          path:'/orders',
          iconPath:'wallet-money.png',

          canShowPage:false,
        },
        {
           title:'Transactions',
           path:'/transactions',
           iconPath:'arrange-square.png',

          canShowPage:false,
        },
         {
           title:'Customers',
           path:'/customers',
           iconPath:'people.png',

          canShowPage:false,
        },

      {
           title:'Coupons',
           path:'/coupons',
           iconPath:'dollar-square.png',

          canShowPage:false,
        },
      {
           title:'Settings',
           path:'/settings',
           iconPath:'setting-2.png',

          canShowPage:false,
        },
      {
          title:'Analytics',
          path:'/analytics',
          iconPath:'activity.png',

          canShowPage:false,
        },
        {
          title:'Reports',
          path:'/reports',
          iconPath:'receipt-text.png',

          canShowPage:false,
        },



      ],



      profilePagesList:{
        earnings:{
          canShowPage:false,
        },
        history:{
          canShowPage:false,
        },
        profile:{
          canShowPage:false,
        },
        purchases:{
          canShowPage:false,
        },
        settings:{
          canShowPage:false,
        },
        store:{
          canShowPage:false,
        },
        wallet:{
          canShowPage:true,
        },
      },
    /***
     *
     * {"item":{"name":"Leslie","job":"Deputy Director"},
     * "option":{"name":"Add Star","slug":"add-star","class":"my-custom-class"}}
    ***/
    items: {
      item:{"name":"Leslie","job":"Deputy Director"},
      option:{"name":"Add Star","slug":"add-star","class":"my-custom-class"}
    },
      // Unpkg imports
    nftArtList:{
      artUrl:['nft1.png','nft4.png','nft3.png','nft2.png','nft5.png','nft6.png','nft7.png','nft8.png','nft9.png'],
      brief:['Pokens Face','June Baby girl','Nanjing Panda','Cute Poppies','Ferrow Wellows','Hot Bummies','Angel Wings','Dancing Mouse','Sindi Samdra'],
      description:[],
      price:['0.012','0.1','0.01','0.33','2.0','0.12','1.03','0.06','0.17'],
      bids:['122','0','10','24','2','14','102','6','17'],
    },
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      1200: {
        itemsToShow: 4,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    }
  },
  methods:{

    getDashboardIcons(name){
      let imgUrl;
      let page_ = window.location.href.split("orders").join("");
      //page_=window.location.href.split("/")[0]

      if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
        imgUrl = page_ + "./src/assets/icons/dashboard-icons/" + name;
      } else {
        imgUrl = page_ + "dynamic-assets/icons/dashboard-icons/" + name;
      }
      console.log(imgUrl);
      return imgUrl;

      //return "@/assets/icons/dashboard-icons/"+path;
    },
    goModule(index,path){
      this.$router.push(path);

    },
    showOverflow(){
      let vueApp=document.getElementById("vue-app")
      vueApp.style.overflowY="scroll"
       let app=document.getElementById("app")
      app.style.overflowY="hidden"

    },
        checkUserExists(type){
    let result
    if(type=='auto-login'){
      console.log('check user ')
      //window.localStorage.getItem("username") === null
      let userCookieData
      let localStoreData
      if(this.$cookies.isKey('siteAccessT') ){
        userCookieData=this.$cookies.get("siteAccessT")
        this.topBarData.userCookieData=userCookieData

        this.userCookieData=userCookieData
        //$cookies.isKey(keyName)
        // localStorage.getItem("siteAccessT") !== null
        console.log(userCookieData)
        localStoreData = JSON.parse( window.localStorage.getItem("siteAccessT"))
        console.log( localStoreData ,window.localStorage.getItem("siteAccessT"))
        console.log("true")
        result=1;
       // this.goUserHome();

      }else{
        this.$router.push('/yop')
        result=0
        console.log("false")
      }
      console.log("local storage:  ",window.localStorage.getItem("siteAccessT"),localStoreData,"user cookies: ",userCookieData )



    }
    return result
  },
    onComplete(data){
      console.log('data:', data);
    },
    connect() {
      //this.$store.dispatch('connect')
    },
    goDetail(param){
      console.log(param)
      this.$router.push(param)
    },
    handleClick (event, item) {
      this.$refs.vueSimpleContextMenu.showMenu(event, item)
    },
    optionClicked (event) {
      window.alert(JSON.stringify(event))
    },
    // ::::::::::::::
    changeButtonProfileNavStyle(targetButton,activePage){
      let previousButton=document.getElementById(this.selectedVerticalButton)
      this.selectedVerticalButton=targetButton
      targetButton=document.getElementById(targetButton)
      let key_=targetButton.getAttribute('data-key_')
      let prevKey_=previousButton.getAttribute('data-key_')

      if(key_!=prevKey_){
        console.log("key: ",key_,"prev key: ",prevKey_)
        console.log(this.sellerPagesList)
        this.sellerPagesList[key_].canShowPage=true
        this.sellerPagesList[prevKey_].canShowPage=false
        //this.getDatasetFromElement(this.profilePagesList)
        previousButton.style.background="#ffffff"
        targetButton.style.background="#f1f1f1"
        previousButton.style.fontFamily="Poppins-Medium"
        targetButton.style.fontFamily="Poppins-SemiBold"
        this.activeProfilePage.innerHTML=activePage
        console.log(this.activeProfilePage)
        console.log(this.selectedVerticalButton)

      }

    },
    changeHorizontalNavStyle(targetButton,activePage){
      let previousButton=document.getElementById(previousButton)
      targetButton=document.getElementById(targetButton)
      previousButton.style.background="#fcfcfc"
      targetButton.style.background="#f1f1f1"
      previousButton.style.boxShadow="0px 0px 0px 2px #f1f1f1"
      targetButton.style.boxShadow="0px 0px 0px 2px #ffffff"
      this.activeProfilePage.innerHTML=activePage

    },
    getDatasetFromElement(element){
      //element.preventDefault();
      var whichFilterItem = element. currentTarget.dataset.key_;
      alert(whichFilterItem);
      return whichFilterItem
    },
    getMenuClass(item,index){
      console.log(item.title,index)
      return item.title.toLowerCase()==this.activePage?'top-menu-item-active':'top-menu-item';

    }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-banner{
  background:url('/Applications/XAMPP/xamppfiles/htdocs/ethereum/eth-frontend/src/assets/images/nft-backg.png')
}
.top-menu-list-container {
    height: 60px;
    width: auto;
    list-style-type: none;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
}
.top-menu-item {
    cursor: pointer;
    font-size: 12px;
    padding-left: 15px;
    padding-right: 16px;
    height:30px;
    line-height:30px;
    width: 160px;
    color:#000000;
    margin-top: 12px;
    text-align: left;
    letter-spacing: 0.01712em;
    display: inline-block;
    position: relative;
    font-family: Poppins-Medium;
    transition: 0.1s all;
    transition-delay: 0.1s;
}
.top-menu-item-active {
    cursor: pointer;
    font-size: 12px;

    padding-left: 12px;
    padding-right: 16px;
    height:30px;
    line-height:30px;

    width: 160px;
    color:#000000;
    border-radius: 4px;
    margin-top: 12px;

    text-align: left;
    letter-spacing: 0.01712em;
    display: inline-block;
    position: relative;
    transition: 0.1s all;
    transition-delay: 0.1s;
    font-family:Poppins-Bold;
    background: #fafafa;


    border-left:3px solid #000000;



}




.menu-list-container {
    height: 60px;
    width: auto;
    list-style-type: none;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
}

.menu-item {
    cursor: pointer;
    font-size: 12px;
    padding: 8px;
    padding-left: 16px;
    padding-right: 16px;
    min-width: 16px;
    max-width: 230px;
    margin: 6px;
    border-radius: 16px;
    color:#404040;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    box-shadow:0px 0px 0px 2px #f1f1f1;
    font-family: Poppins-SemiBold;

}

.menu-item:hover {
    position: relative;
    font-family: Poppins-SemiBold;
    background-color: #f1f1f1;
    transition-delay:.2s;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
