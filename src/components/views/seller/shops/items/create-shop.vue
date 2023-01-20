<template>
  <!--
  <a-button type="primary" @click="showDrawer">
    <template #icon><PlusOutlined /></template>
    Create  Shop
  </a-button>-->
  <a-drawer
    title="Create a new Shop"
    :width="720"
    :visible="topBarData.showCreateShop"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >

  <p>Some contents...</p>
     <p>Some contents...</p>
     <p>Some contents...</p>

  <div id="" class="" style="width:100%; height:54px; margin-top:20px; float:left;  ">
     <div id="" class="" style="width:360px; height:50px; float:left;  ">
       <div id="" class="buy-now-button" style="width:100px; height:34px; position:relative; text-align:center;  top:10px; border-radius:20px;  font-family:Poppins-SemiBold; font-size:12px;  line-height:34px; cursor:pointer; color:#f1f1f1; margin-left:10px; float:left; background:#404040; ">Buy Now</div>
       <div id="add-to-cart-button" class="add-to-cart-button" style="width:110px; height:34px; position:relative; text-align:center; margin-left:20px; top:10px; border-radius:20px;  font-family:Poppins-SemiBold; font-size:12px;  line-height:34px; cursor:pointer; color:#ffffff; right:10px;  float:left;  background:#000000;  ">Add to Cart</div>
     </div>
 </div>
  </a-drawer>
</template>
<script lang="ts">


export default {
  name: 'TopBarLoggedInWidget',
  props: {
    //message: Object,
    topBarData:Object
  },
  data (){
      return{
        createShopVisible:false,
        shopOptions:['X Fashions','Reflect Shop','Mr Nice Guy'],
            username:'',
            activeProfilePage:'',
            selectedVerticalButton:'no-link',
            selectedHorizontalButton:'',



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


    //SearchWidget,CategoriesWidget,TopBarWidget,HomeBriefWidget,TopListWidget,HomeBannerWidget,  LatestListWidget,
    //homeWidget,
    //TopBarWidget

  },
  methods:{
    showCreateShop(){
      this.createShopVisible=true
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
