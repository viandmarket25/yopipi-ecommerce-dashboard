<template>
    <div id="top-bar-container" class="top-bar-container" style="width:100%;  height:50px; user-select:none; padding-top:0px; margin-bottom:40px; background:#fafafa; " align="center">
            <div align="left" style="width:400px; height:50px; font-size:30px; font-weight:bold; user-select:none; margin-left:50px; float:left; color:#ff7900; font-family:Poppins-Bold; text-decoration:none;  ">
                <router-link to="/app" >
                <div align="left" id="my-home-link" class="app-name" @click="changeButtonHomeLoggedInNavStyle('my-home-link','My Home')" data-key_="home" style="width:400px; position:relative; left:0px; color:#404040; margin-right:20px; top:0px; text-decoration:none; " >
                    <img src='@/assets/favicon_io/android-chrome-512x512.png' class="nft-option-select" style="height:30px; width:30px; position:relative; float:left; left:10px;  top:12px; " />
                    <span style=" font-family:Poppins-Bold; font-size:24px; position:relative; top:0px; margin-left:20px; "> Yopipi</span>  <span style=" font-family:Montserrat-Medium; font-size:18px; position:relative; color:#888888; top:0px; margin-left:0px; ">- Merchant Platform</span>
                </div>
                </router-link>
            </div>

            <div style=" width:600px; height:50px; float:right; user-select:none; position:relative; right:50px;  " align="right">
                <ul id="top-menu-list-container" class="top-menu-list-container" align="right">

                    <!--
                    <router-link to="/mint" ><li id="my-mint-link" @click="changeButtonHomeLoggedInNavStyle('my-mint-link','Mint')" data-key_="mint" style=" font-family:Poppins-Bold; border-radius:12px; box-shadow:0px 1px 3px 1px #ffc6ff; background: linear-gradient(to right, #fafafa  40%, #ffc6ff 100%); color:#404040; " class="top-menu-item" >Upload Track</li></router-link>
                    <router-link to="/activity" ><li id="my-activity-link" class="top-menu-item" @click="changeButtonHomeLoggedInNavStyle('my-activity-link','My Activity')" data-key_="activity" style="margin-left:20px; ">Activity</li></router-link>
                    <router-link to="/messages/" ><li id="my-messages-link" class="top-menu-item" @click="changeButtonHomeLoggedInNavStyle('my-messages-link','My Messages')" data-key_="messages" style="min-width:20px; max-width:200px;  " >Messages
                    </li></router-link>
                    -->
                    <router-link to="/profile" ><li id="my-account-link" class="top-menu-item" @click="changeButtonHomeLoggedInNavStyle('my-account-link','My Account')" data-key_="account" style="min-width:20px; max-width:200px;  " >Account:
                        <span style="color:#8338ec; font-family:Poppins-Bold;  ">{{message.username}}</span>
                    </li></router-link>
                    <li id="my-account-photo-link" class="top-menu-item" @click="showAccountPopup()" data-key_="account" style="min-width:20px; max-width:30px; margin:0px; " >
                        <img src='@/assets/icons/user-profile.png' style="height:22px; width:22px; position:relative;  box-shadow:0px 0px 0px 2px #f1f1f1; border-radius:100px; left:-4px; top:6px; " />
                    </li>



                </ul>
            </div>
           <accountPopupWidget v-if="popups.accountPopup.canShowPopup" />
           <itemOptionsPopupWidget v-if="popups.itemOptionsPopup.canShowPopup" />

    </div>
</template>
<script lang="jsx">
//import homeWidget from './home.vue'

import accountPopupWidget from  '../../modal/accountPopup.vue';
import itemOptionsPopupWidget from '../../modal/itemOptions.vue';

export default {
  name: 'TopBarLoggedInWidget',
  props: {
    message: Object
  },
  data (){
      return{
            username:'',
            activeProfilePage:'',
            selectedVerticalButton:'no-link',
            selectedHorizontalButton:'',
            popups:{
                accountPopup:{
                    canShowPopup:false,
                },
                itemOptionsPopup:{
                    canShowPopup:true,
                }
            },
            loggedInTabList:{
                home:{
                    canShowPage:false,
                },
                mint:{
                    canShowPage:false,
                },
                activity:{
                    canShowPage:false,
                },
                account:{
                    canShowPage:false,
                },
                messages:{
                    canShowPage:false,
                },
            }

      }
  },
  mounted () {
        this.activeProfilePage=document.getElementById('active-profile-page')


  },
  /*
  watch: {
    '$route'(to, from) {
        const id = to.params.id
        this.AJAXRequest(id)
    }
    },
    */
   components:{
       accountPopupWidget,
       itemOptionsPopupWidget,
    //SearchWidget,CategoriesWidget,TopBarWidget,HomeBriefWidget,TopListWidget,HomeBannerWidget,  LatestListWidget,
    //homeWidget,
    //TopBarWidget

  },
  methods:{
      showAccountPopup(){
          this.popups.accountPopup.canShowPopup=true
          setTimeout(function(){
            let accountPopupWidget=document.getElementById("account-popup-modal")
          console.log(accountPopupWidget)
          accountPopupWidget.style.display="block"
           let vueApp=document.getElementById("vue-app")
           vueApp.style.overflowY="hidden"
            let app=document.getElementById("app")
            app.style.overflowY="hidden"
          },200)



      },
        showItemOptions(){
        //this.popups.itemOptionsPopup.canShowPopup=true;


          setTimeout(function(){
            let itemOptionsWidget=document.getElementById("item-options-popup-modal")
          console.log(itemOptionsWidget)
         itemOptionsWidget.style.display="block"

           let vueApp=document.getElementById("vue-app")
           vueApp.style.overflowY="hidden"
            let app=document.getElementById("app")
            app.style.overflowY="hidden"
          },200)


      },
     changeButtonHomeLoggedInNavStyle(targetButton,activePage){
        let previousButton=document.getElementById(this.selectedVerticalButton)
        this.selectedVerticalButton=targetButton
        targetButton=document.getElementById(targetButton)
        let key_=targetButton.getAttribute('data-key_')
        let prevKey_=previousButton.getAttribute('data-key_')
        console.log("key: ",key_,"prev key: ",prevKey_)
        console.log(this.loggedInTabList)

        if(key_=="mint" || key_=="home" ){
            /*****
             *
             *
             * ***/
            this.loggedInTabList[key_].canShowPage=true
            this.loggedInTabList[prevKey_].canShowPage=false
            //this.getDatasetFromElement(this.profilePagesList)
            previousButton.style.background="none"
            //targetButton.style.background="#f1f1f1"

            if(prevKey_!="home"){
                previousButton.style.fontFamily="Poppins-Medium"


            }
            //targetButton.style.fontFamily="Poppins-SemiBold"
            //this.activeProfilePage.innerHTML=activePage
            console.log(this.activeProfilePage)
            console.log(this.selectedVerticalButton)

        }else{
            /*****
             *
             *
             * ***/
            this.loggedInTabList[key_].canShowPage=true
            this.loggedInTabList[prevKey_].canShowPage=false
            //this.getDatasetFromElement(this.profilePagesList)
            previousButton.style.background="none"
            targetButton.style.background="#f1f1f1"
            previousButton.style.fontFamily="Poppins-Medium"
            targetButton.style.fontFamily="Poppins-SemiBold"
            //this.activeProfilePage.innerHTML=activePage
            console.log(this.activeProfilePage)
            console.log(this.selectedVerticalButton)

        }




    },

  },
}
</script>

<style scoped>
.app-name, a , a:link, a:visited{
    text-decoration: none;
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
.app-top {
    height: 100px;
    width: inherit;

    user-select: none;
}

.app-menu {
    height: 80px;
    padding-top: 20px;
    width: inherit;
    text-align: center;
    background-color: #fcfcfc;
}

.app-bottom {
    height: 60px;
    width: inherit;
    margin-top: 40px;
    background-color: #f5f5f5;
}

.app-center {
    height: auto;
    width: 100vw;

    display: flex;
    position: relative;
    float: left;
    justify-content: center;
}

.menu-list-container {
    height: 60px;
    width: auto;
    list-style-type: none;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
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
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;
    min-width: 16px;
    color:#000000;
    max-width: 130px;
    min-height:20px;
    margin: 6px;
    border-radius: 10px;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    top:0px;
    font-family: Poppins-Medium;
    transition: 113ms all;
    transition-delay: 113ms;
}

.menu-item {
    cursor: pointer;
    font-size: 14px;
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;
    min-width: 16px;
    max-width: 130px;
    margin: 6px;
    border-radius: 6px;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    font-family: Poppins-Regular;
    transition: 0.1s all;
    transition-delay: 0.1s;
}

.menu-item:hover {
    position: relative;
    font-family: Poppins-SemiBold;
    border-radius: 6px;
    background-color: #f1f1f1;

    transition-delay: 0.3s;
}
</style>
