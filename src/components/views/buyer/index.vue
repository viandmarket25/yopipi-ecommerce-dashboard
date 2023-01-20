<template>
  <div id="buyer-container" style="width:100%; height:100vh; overflow-y:scroll; padding-bottom:200px;  ">
    <!--<TopBarWidget  msg=userCookieData />-->
    <!---
        <TopBarLoggedInWidget v-if="isLoggedIn" :message="userCookieData" />


    <HomeBannerWidget msg=""/>-->
    <searchBar msg=""/>
    <sponsoredPage msg=""/>


    <!--
    <CategoriesWidget msg=""/>
    -->
    <!--<SearchWidget msg=""/>
    <HomeBriefWidget msg=""/>-->
    <!---<LatestListWidget msg=""/>
    <TopListWidget msg=""/>
    -->


    <div style="width:100%; height:300px; float:left; ">
    </div>


    <HomeFooterWidget  msg=userCookieData />

  </div>
</template>
<script lang="jsx">
//import homeWidget from './/items/home.vue'
//import TopBarWidget from './/items/top-bar.vue'


import TopBarWidget from '../../../components/views/home/items/top-bar-buyer.vue';
//import TopBarLoggedInWidget from '../../../components/views/home/items/top-bar-logged-in.vue';
import SearchWidget from '../../../components/views/home/items/search-widget.vue'
import CategoriesWidget from '../../../components/views/home/items/categories.vue'
import HomeBriefWidget from '../../../components/views/home/items/home-brief.vue'
import TopListWidget from '../../../components/views/home/items/top-list.vue'
import LatestListWidget from '../../../components/views/home/items/latest-list.vue'
import HomeBannerWidget from '../../../components/views/home/items/banner.vue'
import HomeFooterWidget from '../../../components/views/home/items/home-footer.vue';
import sponsoredPage from '../../../components/views/buyer/items/sponsored-page.vue';
import searchBar from '../../../components/views/buyer/items/search-bar.vue';
import flashSaleWidget from '../../../components/views/home/items/flash-sales.vue';
import mapGluePage from '../../../components/views/buyer/items/map-glue.vue';



export default {
  name: 'HomeView',
  data(){
    return{
      //loadMetamask:loadMetamask,
      isLoggedIn: false,
      userCookieData:{},
      activePage:'',
      showComponentController: 'show me',
      paths:{
        //home:homeWidget,
        profile:"",
        details:"",
        loggedInTabList:{
          activity:{
            canShowPage:false,

          },
          account:{
             canShowPage:false,

          },
        }
      },
    }
  },
  props: {
    msg: String
  },
  mounted: function(){
    //console.log(loadMetamask)
     //loadMetamask.load();
    //this.activePage=this.showComponent()

  },

  created: function(){
        var currentUrl = window.location.pathname;
        console.log(currentUrl);
  },
  computed:function(){

    },
  methods: {
    changeRouter: function(){
      var currentUrl = window.location.pathname;
      return currentUrl=='/'?this.paths.homeWidget:this.paths.homeWidget;
    },
    showComponent: function(){
      var currentUrl = window.location.pathname;
      return currentUrl=='/home'?<homeWidget msg=""   />:'show me';
    },
    changeButtonHomeLoggedInNavStyle(targetButton,activePage){
      let previousButton=document.getElementById(this.selectedVerticalButton)
      this.selectedVerticalButton=targetButton
      targetButton=document.getElementById(targetButton)
      let key_=targetButton.getAttribute('data-key_')
      let prevKey_=previousButton.getAttribute('data-key_')
      console.log("key: ",key_,"prev key: ",prevKey_)
      console.log(this.profilePagesList)
      this.profilePagesList[key_].canShowPage=true
      this.profilePagesList[prevKey_].canShowPage=false
      //this.getDatasetFromElement(this.profilePagesList)
      previousButton.style.background="#fcfcfc"
      targetButton.style.background="#f1f1f1"
      previousButton.style.fontFamily="Poppins-Medium"
      targetButton.style.fontFamily="Poppins-SemiBold"
      this.activeProfilePage.innerHTML=activePage
      console.log(this.activeProfilePage)
      console.log(this.selectedVerticalButton)

  },
    getTransitionName(){
      //this.$route

    },
    goTourToday(){
      this.$router.push('/tour-today')
    },
    goModule(index,path){
      //this.transitionName = 'slither';
      console.log(path)
      this.$router.push(path)

    },
     splitPages(pageString){

          let arrPages=['/buy','']

          //getPageRoutes()

          for(let i=0; i<arrPages.length; i++){
              pageString= pageString.split(arrPages[i]).join("");
             // console.log("page:", pageString)


          }
          return pageString
      },
      getGridMenu(){

      },
    getResponsiveData() {
      // Size of browser viewport.
      this.responsiveData.browserHeight = window.innerHeight;
      this.responsiveData.browserWidth = window.innerWidth;
      // Size of HTML document (same as pageHeight/pageWidth in screenshot).
      //$(document).height();
      //$(document).width();
      this.responsiveData.screenHeight = window.screen.height;
      this.responsiveData.screenWidth = window.screen.width;
      console.log(this.responsiveData);
      //alert(this.responsiveData)
    },
    getTeamMember() {},
    getImageUrl(name) {
      let imgUrl;
      let page_ = window.location.href.split("home").join("");
      page_ =this.splitPages(page_);
      if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
        imgUrl = page_ + "./src/assets/images/" + name;
      } else {
        imgUrl = page_ + "dynamic-assets/images/" + name;
      }
      //console.log(imgUrl);
      return imgUrl;
    },
    getIconUrl(name) {
      let imgUrl;
      let page_ = window.location.href.split("home").join("");
      page_ = this.splitPages(page_);
      if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192") ) {
        imgUrl = page_ + "./src/assets/icons/" + name;
      } else {
        imgUrl = page_ + "dynamic-assets/icons/" + name;
      }
      //console.log(imgUrl);
      return imgUrl;
    },
    goUserHome() {
      this.$router.push("/user-home/");
      // this.$router.push('/home');
    },
    goHome() {
      this.$router.push("/home/");
    },
    goNotification(){
      this.$router.push("/notifications");


    },
    checkUserExists(type) {
      let result;
      if (type == "auto-login") {
        console.log("check user ");
        //window.localStorage.getItem("username") === null
        let userCookieData;
        let localStoreData;
        if (this.$cookies.isKey("siteAccessT")) {
          userCookieData = this.$cookies.get("siteAccessT");
          this.userCookieData = userCookieData;
          //$cookies.isKey(keyName)
          // localStorage.getItem("siteAccessT") !== null
          console.log(userCookieData);
          localStoreData = JSON.parse(
            window.localStorage.getItem("siteAccessT")
          );
          console.log(
            localStoreData,
            window.localStorage.getItem("siteAccessT")
          );
          console.log("true");
          result = 1;
          this.goUserHome();
        } else {
          result = 0;
          console.log("false");
        }
        console.log(
          "local storage:  ",
          window.localStorage.getItem("siteAccessT"),
          localStoreData,
          "user cookies: ",
          userCookieData
        );
      }
      return result;
    },
  },
  components:{
     TopBarWidget,
     sponsoredPage,searchBar,
     SearchWidget,CategoriesWidget,
     //TopBarWidget,
     HomeBriefWidget,TopListWidget,HomeBannerWidget,  LatestListWidget,
     HomeFooterWidget,
     flashSaleWidget,
     mapGluePage,
    //homeWidget,
    //TopBarWidget,
    //changeRouter()
  },
}
</script>

<style scoped>
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

router-link{
   text-decoration: none;
}

</style>
