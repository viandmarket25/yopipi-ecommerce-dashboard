<template>
    <div id="top-bar-container" class="top-bar-container modern-shadow" style="width:100%;  height:60px; user-select:none; padding-top:0px;  background:#fafafa; " align="center">

      <div class="" align="left" style="height:60px; width:40%; float:left;  justify-content: space-around; ">
        <div class="centered-position" style="width:160px; height:60px;  float:left;  ">
            <div style="width:90%; font-family:Poppins-SemiBold; height:60px; font-size:16px; line-height:60px; text-align:left; margin-left:10px; " >Products ({{topBarData.totalProducts}})</div>
        </div>
        <div class="centered-position" style="width:40px; height:60px;  float:left;  ">
          <div id="top-list-container" class="top-list-container centered-position" style="width:30px;  height:30px; text-align:left; position:relative; background:#f1f1f1; border-radius:100px; font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
            <img src="@/assets/icons/dashboard-icons/add-circle.png" style="width:20px; height:20px; float:left; cursor:pointer;   opacity:0.8;" />
          </div>
        </div>
        <!--
          <div class="centered-position" style="width:20%; height:60px;  float:left;  ">
              <div style="width:90%; font-family:Poppins-SemiBold; height:60px; font-size:16px; color:#888888; line-height:60px; text-align:left; margin-left:10px; " >Shop</div>
          </div>
          <div class="centered-position" style="width:30%; height:60px;  float:left;  ">
            <div class="centered-position" style="width:100%; height:60px; float:left; ">
             <select>
              <option v-for="(shop,index) in shopOptions"  :key="index"  style="box-shadow:0px 0px 0px 1px #f1f1f1;" class="each_product_list_data" value="books">{{shop}}</option>
            </select>
            </div>
          </div>
        -->

      </div>


      <div style=" width:60%; height:60px; float:right; user-select:none; position:relative; right:0px;  " align="right">
        <div class="centered-position-" style="width:20%; height:60px;  float:left;  ">

        </div>
        <div class="centered-position-" style="width:80%; height:60px;  float:right; align-items:right; justify-content:right; vertical-align:middle; text-align:right;  ">
          <div class="centered-position" style="width:200px; height:60px; float:right;  ">
            <router-link to="/profile" >
              <li id="my-account-link" class="top-menu-item" @click="changeButtonHomeLoggedInNavStyle('my-account-link','My Account')" data-key_="account" style="min-width:20px; max-width:200px;  " >Account:
                  <span style="color:#8338ec; font-family:Poppins-Bold;  ">{{topBarData.userCookieData.username}}</span>
              </li>
            </router-link>
              <li id="my-account-photo-link" class="top-menu-item" @click="showAccountPopup()" data-key_="account" style="min-width:20px; max-width:30px; margin:0px; " >
                  <img src='@/assets/icons/user-profile.png' style="height:22px; width:22px; position:relative;  box-shadow:0px 0px 0px 2px #f1f1f1; border-radius:100px; left:-4px; " />
              </li>
          </div>
          <div class="centered-position" style="width:40px; height:60px; float:right;  ">
              <li id="my-account-photo-link" class="top-menu-item" data-key_="account" style="min-width:20px; max-width:30px; margin:0px; " >
                  <img @click="showMessagesModal()" src='@/assets/icons/dashboard-icons/message-text.png' style="height:22px; width:22px; position:relative; border-radius:100px; left:-4px; " />
              </li>
          </div>
          <div class="centered-position" style="width:240px; height:60px;  float:right; display:flex;  ">
            <div class="centered-position" style="width:60px; height:60px;  float:left;  ">
                <div style="width:90%; font-family:Poppins-SemiBold; height:60px; font-size:14px; color:#888888; line-height:60px; text-align:left; margin-left:10px; " >Shop</div>
            </div>
            <div class="centered-position" style="width:130px; height:60px;  float:left;  ">
              <div class="centered-position" style="width:100%; height:60px; float:left; ">
               <select>
                <option v-for="(shop,index) in shopOptions"  :key="index"  style="box-shadow:0px 0px 0px 1px #f1f1f1; font-family:Poppins-SemiBold;" class="each_product_list_data" value="books">{{shop}}</option>
              </select>
              </div>
            </div>
          </div>
        </div>



      </div>
           <accountPopupWidget v-if="popups.accountPopup.canShowPopup" />
           <itemOptionsPopupWidget v-if="popups.itemOptionsPopup.canShowPopup" />

    </div>
</template>
<script lang="jsx">
//import homeWidget from './home.vue'

import accountPopupWidget from  '../../../modal/accountPopup.vue';
import itemOptionsPopupWidget from '../../../modal/itemOptions.vue';

export default {
  name: 'TopBarLoggedInWidget',
  props: {
    //message: Object,
    topBarData:Object
  },
  data (){
      return{
        shopOptions:['X Fashions','Reflect Shop','Mr Nice Guy'],
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
    showMessagesModal(){

      let modalMessages=document.getElementById("modal-messages")
      let messagesPopupWidget=document.getElementById("messages-popup-modal")
      messagesPopupWidget.style.display="block"

      modalMessages.style.width="340px"
      modalMessages.style.height="0px"
      window.jQuery("#messages-content-target").css("margin-top","100vh")


      window.jQuery("#vertical-messages-contents").css("height","0px")

      let animateH=()=>{
        window.jQuery("#vertical-messages-items").animate({
          "height":"100%"
        },400)
        window.jQuery("#messages-content-target").animate({
          "margin-top":"48px"
        },400)
        window.jQuery("#modal-messages").animate({
          "height":"93vh"
        },400)

        //modalMessages.style.height="93vh"



      }
      setTimeout(animateH,300)



      let verticalMessages=document.getElementById("vertical-messages-contents")
      verticalMessages.style.display="none"





    },
    openMessageItemContent(){

      let modalMessages=document.getElementById("modal-messages")
      let messagesPopupWidget=document.getElementById("messages-popup-modal")
      messagesPopupWidget.style.display="block"

      modalMessages.style.width="940px"
      modalMessages.style.height="0px"


      let verticalMessages=document.getElementById("vertical-messages-contents")
      verticalMessages.style.display="block"




    },
    hideMessagesModal(){

      let messagesPopupWidget=document.getElementById("messages-popup-modal")
      messagesPopupWidget.style.display="none"


    },
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
      handleShopChange(){

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
-webkit-appearance: none;

input {

      outline: none;
        border:none;
        background-image:none;
        background-color:transparent;

}
select{
  outline: none;
    border:none;
    background-image:none;
    background-color:#fcfcfc;
    box-shadow:0px 0px 0px 1px #f1f1f1;
    padding:3px;
    border-radius:4px;
    font-family:Poppins-SemiBold;
    font-size:12px;
    padding-left:10px;
    padding-right:16px;



}
</style>
