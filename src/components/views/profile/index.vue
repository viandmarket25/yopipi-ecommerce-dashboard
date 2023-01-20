<template>
  <div style="width:100%; height:auto; overflow-y:hidden;  background:#ffffff;  padding-bottom:200px;  ">
   <TopBarLoggedInWidget :message="userCookieData" />
    <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; float:left; font-size:24px; color:#000000; font-family:Poppins-Medium; " align="center">
      <div id="top-list-container" class="top-list-container" style="width:100%; height:40px; user-select:none; text-align:center; cursor:pointer; position:relative; left:0px; float:left; font-size:16px; color:#404040; font-family:Poppins-SemiBold; " align="center">
         Account > <span id="active-profile-page" style=" font-family:Poppins-Medium; color:#888888; ">My Wallet </span>
      </div>
    </div>

    <!---
    <input type="button" value="btn-connect" id="btn-connect" style="height:30px; width:100px;"/>
    <input type="button" value="btn-disconnect" id="btn-disconnect" style="height:30px; width:100px; margin-left:20px; "/>
    <vue-metamask userMessage="msg" @onComplete="onComplete" >
    </vue-metamask>
    -->
    <!---
    <div class="item-wrapper">
      <div style="cursor:pointer; " v-for="item in items" :key="item" @click.prevent.stop="handleClick($event, item)"
        class="item-wrapper__item" >
        {{item.name}}
      </div>
    </div>
    --->
    <!-- Make sure you add the `ref` attribute, as that is what gives you the ability
    to open the menu. -->


    <div style="width:94%; height:auto; background:#ffffff; overflow-y:hidden; margin-left:3%;  ">
      <div style="width:24%; height:100vh; border-radius:10px; float:left; position:relative; left:1%; margin-top:10px;    ">
         <div style="width:60%; height:100vh; border-radius:10px; float:left; position:relative; left:30px; margin-top:10px;    ">
            <ul id="top-menu-list-container" class="top-menu-list-container" align="center">
                <li id="my-wallet-link" class="top-menu-item" @click="changeButtonProfileNavStyle('my-wallet-link','My Wallet')" data-key_="wallet" style="background:#f1f1f1; font-family:Poppins-Bold; border-radius:12px;" >My Wallet</li>
                <li id="my-store-link" class="top-menu-item" @click="changeButtonProfileNavStyle('my-store-link','My Store')" data-key_="store" >My Store</li>
                <li id="my-earnings-link" class="top-menu-item" @click="changeButtonProfileNavStyle('my-earnings-link','My Earnings')" data-key_="earnings" >My Earnings</li>
                <li id="my-purchases-link" class="top-menu-item" @click="changeButtonProfileNavStyle('my-purchases-link','My Purchases')" data-key_="purchases" >My Purchases</li>
                <li id="history-link" class="top-menu-item" @click="changeButtonProfileNavStyle('history-link','History')" data-key_="history"  >History</li>
                <li id="my-profile-link" class="top-menu-item"  @click="changeButtonProfileNavStyle('my-profile-link','My Profile')" data-key_="profile" >My Profile</li>
                <li id="settings-link" class="top-menu-item" @click="changeButtonProfileNavStyle('settings-link','Settings')" data-key_="settings" >Settings</li>        
            </ul>
          </div>
      </div>
      <div style="width:74%; height:auto;  position:relative; border-radius:10px; right:2%; margin-top:10px; float:right;   ">

      <AccountWalletWidget v-if="profilePagesList.wallet.canShowPage" />
  
      <AccountStoreWidget v-if="profilePagesList.store.canShowPage" />
  

      </div>
    </div>
  
  </div>
</template>
<script lang="jsx">

import AccountWalletWidget from './items/wallet.vue';
import AccountStoreWidget from './items/store.vue';
import TopBarLoggedInWidget from '../../../components/views/home/items/top-bar-logged-in.vue';
import HomeFooterWidget from '../../../components/views/home/items/home-footer.vue';



export default {
  name: "userProfileWidget",
  components:{
    AccountWalletWidget,
    AccountStoreWidget,
     TopBarLoggedInWidget ,HomeFooterWidget 

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
          isLoggedIn: false,
      userCookieData:{},
      activePage:'',

      // Web3modal instance
      web3Modal: 0,
      // Chosen wallet provider given by the dialog window
      provider: 0,
      // Address of the selected account
      selectedAccount: 0,
      activeProfilePage:'',
      number: 0,
      balance: 0,
      selectedVerticalButton:'my-wallet-link',
      selectedHorizontalButton:'',
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
        this.$router.push('/home/')
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
        console.log(this.profilePagesList)
        this.profilePagesList[key_].canShowPage=true
        this.profilePagesList[prevKey_].canShowPage=false
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
    padding: 12px;
    padding-left: 22px;
    padding-right: 16px;

    min-width: 90%;
    color:#000000;
    max-width: 130px;
    margin: 6px;
    border-radius: 6px;
    text-align: left;
    letter-spacing: 0.01712em;
    display: inline-block;
    position: relative;
    top:24px;
    font-family: Poppins-Medium;
    transition: 0.1s all;
    transition-delay: 0.1s;
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
    font-size: 14px;
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
