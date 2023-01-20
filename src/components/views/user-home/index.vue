<template>
  <div id="home-container" style="width:100%; height:auto; overfloy-y:auto; overflow-x:hidden;  ">
  <TopBarLoggedInWidget :message="userCookieData" />
    <!---<TopBarWidget msg=""/>
    <CategoriesWidget msg=""/>--->
    <!---
    <SearchWidget msg=""/>---->
   
    <LatestListWidget msg=""/>
    <HomeBriefWidget msg=""/>

    <TopListWidget msg=""/>
    <HomeFooterWidget msg=""/>
  </div>
</template>
<script lang="jsx">
window.process = {
    env: {
        NODE_ENV: 'development'
    }
}

//import homeWidget from './/items/home.vue'
//import TopBarWidget from './/items/top-bar.vue'

import TopBarLoggedInWidget from '../../../components/views/home/items/top-bar-logged-in.vue';

//import SearchWidget from '../../../components/views/user-home/items/search-widget.vue'
//import CategoriesWidget from '../../../components/views/user-home/items/categories.vue'
//import TopBarWidget from './/items/top-bar.vue'
import HomeBriefWidget from '../../../components/views/user-home/items/home-brief.vue'
import TopListWidget from '../../../components/views/user-home/items/top-list.vue'
import LatestListWidget from '../../../components/views/user-home/items/latest-list.vue'
import HomeFooterWidget from '../../../components/views/home/items/home-footer.vue';
//import HomeBannerWidget from '../home/items/banner.vue'
export default {
  name: 'userHomeView',
 
  data(){
    return{
       isLoggedIn: false,
      userCookieData:{},
      activePage:'',
      //_homeWidget:<homeWidget msg="" />,

      showComponentController: 'show me',
      paths:{
        //home:homeWidget,
        profile:"",
        details:"",

      },
    
    }
  },
  props: {
    msg: String
  },
  mounted: function(){
    //this.activePage=this.showComponent()
      this.checkUserExists('auto-login')
       this.showOverflow();

  },
  methods: {
     showOverflow(){
      let vueApp=document.getElementById("vue-app")
      vueApp.style.overflowY="scroll"
       let app=document.getElementById("app")
      app.style.overflowY="hidden"
       
    },
      changeRouter: function(){
        var currentUrl = window.location.pathname;
        return currentUrl=='/'?this.paths.homeWidget:this.paths.homeWidget;
      },
      showComponent: function(){
        //var currentUrl = window.location.pathname;
        //return currentUrl=='/home'?_homeWidget:'show';
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

  },
  created: function(){
        var currentUrl = window.location.pathname;

        console.log(currentUrl);

  },

  components:{
    //SearchWidget,CategoriesWidget,
    //TopBarWidget,
    HomeBriefWidget,TopListWidget,HomeFooterWidget,
    //HomeBannerWidget,
    LatestListWidget,TopBarLoggedInWidget
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
a {
  color: #42b983;
}
</style>
