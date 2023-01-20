<template>
  <div style="width:100%; height:100vh; overflow-y:scroll; ">
   <TopBarWidget :message="userCookieData" />
    <div  align="center" style=" width:100%; height:100px;  margin-top:40px; user-select:none; text-align:center; color:#404040; font-size:20px; line-height:48px; background:none; float:left; font-family:Poppins-SemiBold; position:relative; ">  
                
              How it Works
    </div>
    <div align="center" class="home-banner-container" style=" width:100%; height:auto; background:#60606; float:left; line-height:20.4px; position:relative; " >
        
        
        <div align="center" class="home-mission-container" style=" width:100%; height:280px; background:rgba(251, 248, 204, 0.3); line-height:20.4px; position:relative; " >
            <div align="center" class="home-banner-" style=" width:900px; height:100%; background-position:38% 50%; background-size:670px 300px; background-repeat:no-repeat; border-radius:12px; position:relative; " >       
              <div  align="center" style=" width:60%; height:70%; font-weight:bold; margin-top:10%; user-select:none; text-align:left; color:#404040; font-size:30px; line-height:48px; background:none; float:left; font-family:Poppins-SemiBold; position:relative; ">  
                
               Start Listing and Selling your Music as Nfts
              </div>
              
          </div>
        </div>
        <div align="center" class="home-mission-container" style=" width:100%; height:280px;  line-height:20.4px; position:relative; " >
            <div align="center" class="home-banner-" style=" width:900px; height:100%; background-position:38% 50%; background-size:670px 300px; background-repeat:no-repeat; border-radius:12px; position:relative; " >       
              <div  align="center" style=" width:60%; height:70%; font-weight:bold; margin-top:10%; user-select:none; text-align:left; color:#404040; font-size:30px; line-height:48px; background:none; float:right; font-family:Poppins-SemiBold; position:relative; ">  
                
               Play Lovely songs and support Upcoming Artists as they grow
              </div>
              
          </div>
        </div>
           <div align="center" class="home-mission-container" style=" width:100%; height:280px; background:rgba(218, 218, 255, 0.4); line-height:20.4px; position:relative; " >
            <div align="center" class="home-banner-" style=" width:900px; height:100%; background-position:38% 50%; background-size:670px 300px; background-repeat:no-repeat; border-radius:12px; position:relative; " >       
              <div  align="center" style=" width:60%; height:70%; font-weight:bold; margin-top:10%; user-select:none; text-align:left; color:#404040; font-size:30px; line-height:48px; background:none; float:left; font-family:Poppins-SemiBold; position:relative; ">  
                
              Invest in Upcoming Artists and wait for them to Blow Up
              </div>
              
          </div>
        </div>

    </div>

  </div>
</template>
<script lang="jsx">
//import homeWidget from './/items/home.vue'
//import TopBarWidget from './/items/top-bar.vue'

//import TopBarLoggedInWidget from '../../../components/views/home/items/top-bar-logged-in.vue';


import TopBarWidget from '../../../components/views/home/items/top-bar.vue';
//import TopBarLoggedInWidget from '../../../components/views/home/items/top-bar-logged-in.vue';
import SearchWidget from '../../../components/views/home/items/search-widget.vue'
import CategoriesWidget from '../../../components/views/home/items/categories.vue'
import HomeBriefWidget from '../../../components/views/home/items/home-brief.vue'
import TopListWidget from '../../../components/views/home/items/top-list.vue'
import LatestListWidget from '../../../components/views/home/items/latest-list.vue'
import HomeBannerWidget from '../../../components/views/home/items/banner.vue'
import HomeFooterWidget from '../../../components/views/home/items/home-footer.vue';

export default {
  name: 'HomeView',
  data(){
    return{
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
    //this.activePage=this.showComponent()

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
  },
  created: function(){
        var currentUrl = window.location.pathname;
        console.log(currentUrl);
  },
  components:{
     TopBarWidget,
    SearchWidget,CategoriesWidget,
    //TopBarWidget,
    HomeBriefWidget,TopListWidget,HomeBannerWidget,  LatestListWidget,
    HomeFooterWidget,
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
