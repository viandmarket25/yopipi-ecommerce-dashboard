<template>
    <div id="top-bar-container" class="top-bar-container modern-shadow" style="width:100%;  height:60px; user-select:none; padding-top:0px;  background:#fafafa; " align="center">

      <div class="" align="left" style="height:60px; width:40%; float:left;  justify-content: space-around; ">
        <div class="centered-position" style="width:120px; height:60px;  float:left;  ">
            <div style="width:90%; font-family:Poppins-SemiBold; height:60px; font-size:16px; line-height:60px; text-align:left; margin-left:10px; " >Shops (12{{topBarData.totalProducts}})</div>
        </div>
        <div class="centered-position" style="width:40px; height:60px;  float:left;  ">
          <div id="top-list-container" class="top-list-container centered-position" style="width:30px;  height:30px; text-align:left; position:relative; background:#f1f1f1; border-radius:100px; font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
            <img @click="showCreateShop()" src="@/assets/icons/dashboard-icons/add-circle.png" style="width:20px; height:20px; float:left; cursor:pointer;   opacity:0.8;" />
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

        </div>



      </div>
           <accountPopupWidget v-if="popups.accountPopup.canShowPopup" />
           <itemOptionsPopupWidget v-if="popups.itemOptionsPopup.canShowPopup" />

           <a-drawer
              :closable="false"
             :width="800"
             :visible="createShopVisible"
             :body-style="{ paddingBottom: '80px' }"


           >

             <div id=""  style="width:800px; height:40px;  float:left;  ">
               <div id=""  style="width:50%; height:100%;  float:left;  ">
                 <div class="centered-position" align="left" style="height:40px; width:140px; float:left;  justify-content: space-around; ">
                   <div class="centered-position" style="width:40px; height:60px;  float:left;  ">
                     <div id="top-list-container" class="top-list-container centered-position" style="width:30px;  height:30px; text-align:left; position:relative; border-radius:100px; font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
                       <img @click="closeCreateShop()"  src="@/assets/icons/social/close-square.png" style="width:20px; height:20px; float:left; cursor:pointer;   opacity:0.8;" />
                     </div>
                   </div>
                   <div class="centered-position" style="width:120px; height:60px;  float:left;  ">
                       <div style="width:90%; font-family:Poppins-SemiBold; height:60px; font-size:16px; line-height:60px; text-align:left; margin-left:10px; " >New Shop</div>
                   </div>
                 </div>

               </div>
               <div id=""  style="width:50%; height:100%;  float:left;  ">
                 <div id="" class="centered-position" style="width:100%; height:100%; float:left;  ">
                   <div  @click="closeCreateShop()" id="" class="buy-now-button" style="width:100px; height:34px; position:relative; text-align:center;   border-radius:20px;  font-family:Poppins-SemiBold; font-size:12px;  line-height:34px; cursor:pointer; color:#404040; margin-left:10px; float:left; background:#f1f1f1; ">Cancel</div>
                   <div id="add-to-cart-button" class="add-to-cart-button" style="width:110px; height:34px; position:relative; text-align:center; margin-left:20px; border-radius:20px;  font-family:Poppins-Bold; font-size:12px;  line-height:34px; cursor:pointer; color:#ffffff; right:10px;  float:left;  background:#000000;  ">Create</div>
                 </div>
               </div>

            </div>


            <div id=""  style="width:800px; height:auto;  float:left;  ">

              <div style="width:96%; height:auto; background:#ffffff;  overflow-y:hidden; margin-left:10px;  ">
                <div style="width:84%; height:auto; padding-bottom:200px; overflow-y:hidden; margin-left:2%;  ">

                  <div style="width:100%; height:40px; float:left; border-top:1px solid #f1f1f1; margin-top:10px; "></div>




                  <div class="" style="width:100%; height:120px; float:left; clear:left; ">
                    <!--
                      <div class="" style="width:100%; height:70px; float:left;  ">
                          <div style="font-family:bahnschrift; height:40px; font-size:18px; float:left; position:relative; margin-bottom:4px; color:#000000;  font-family:Poppins-Bold; ">Add Product</div>
                      </div>
                    -->
                      <div class="" style="width:100%; height:40px; float:left; ">
                          <div style="font-family:bahnschrift; height:30px; font-size:16px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Basic Shop Information</div>
                      </div>
                      <div class="" style="width:100%; height:50px; float:left; ">
                          <div style="height:30px; width:500px; font-family:Poppins-Medium; font-size:12px;  position:relative; padding:5px;">
                            <b>Tip:</b> Nice keywords increase the chance of finding your Products
                          </div>
                      </div>
                  </div>
                  <div class="" style="width:100%; height:30px; float:left; ">
                      <div style="font-family:bahnschrift; height:30px; font-size:14px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Shop Name</div>
                  </div>
                  <div class="" style="width:100%; height:80px; float:left; ">
                      <div style="width:100%; height:50px; margin-bottom:10px; float:left;  " >
                          <input type="text" class="each_product_list_data input-shadow" id="product_name_data_value"  placeholder="Magic Stores" />
                      </div>
                  </div>

                  <div class="" style="width:100%; height:30px; float:left; ">
                      <div style="font-family:bahnschrift; height:30px; font-size:14px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Shop Description</div>
                  </div>
                  <div class="" style="width:100%; height:240px; float:left; ">
                      <div align="left" class="" style="width:100%; height:30px;   ">
                          <div style="font-family:Poppins-Medium; height:30px; width:500px; color:#606060; font-size:12px; position:relative;  ">
                              <b>Tip:</b> Accurate and Honest Description reduces product returns
                          </div>
                      </div>
                      <div align="left" style="width:100%; height:200px; position:relative;  margin-bottom:2px;" >
                          <textarea type="text" placeholder="Apple iphone 13, released 2022 " style="height:200px; width:500px; padding-top:10px; margin-left:1px; background:#fcfcfc;  font-size:13px; float:left; " id="product_des_data_value" class="product_des_data input-shadow" autofocus ></textarea>
                      </div>
                  </div>
                  <div style="width:100%; height:40px; float:left; border-top:1px solid #f1f1f1; margin-top:10px; "></div>
                  <div class="" style="width:100%; height:80px; margin-bottom:50px;  float:left; ">
                      <div class="" style="width:100%; height:80px; float:left; ">
                          <div style="font-family:bahnschrift; height:30px; font-size:15px; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Shop Banner</div>
                          <div style="height:30px; width:500px; font-family:Poppins-Medium; font-size:12px;  position:relative; padding:5px;">
                              <b>Tip:</b> Provide very clear photos or video of this product , make sure you make your customers excited
                          </div>
                      </div>
                  </div>

                  <!---product image part-->
                  <div class="" style="width:100%; height:60px; margin-bottom:40px; float:left; ">
                       <div class="centered-position" align="center" style="height:50px; width:300px; border-radius:8px; padding:10px; border:3px dotted #f1f1f1; ">
                           <div class="centered-position" align="center" id="" style="width:45px; height:45px;  position:relative; top:0px; background-size:100%; border-radius:200px; " >
                                   <input type="file" @change="galleryPhotoAdd()" id="gallery-photo-add" style="width:100%; height:100%;  cursor:pointer;opacity:0; left:0px; position:absolute; z-index:100; " multiple=3 />
                                   <img src="@/assets/icons/add-media-icon-button.png" style="cursor:pointer; height:30px; width:30px; " class="temp_image" />
                               </div>
                           </div>
                       </div>









                </div>
              </div>

            </div>




 <!--
             <template #extra>


               <a-space>
                 <div id=""  style="width:200px; height:100%;  float:right;  ">
                    <div id="" class="centered-position" style="width:100%; height:100%; float:left;  ">
                      <div  @click="closeCreateShop()" id="" class="buy-now-button" style="width:100px; height:34px; position:relative; text-align:center;   border-radius:20px;  font-family:Poppins-SemiBold; font-size:12px;  line-height:34px; cursor:pointer; color:#404040; margin-left:10px; float:left; background:#f1f1f1; ">Cancel</div>
                      <div id="add-to-cart-button" class="add-to-cart-button" style="width:110px; height:34px; position:relative; text-align:center; margin-left:20px; border-radius:20px;  font-family:Poppins-SemiBold; font-size:12px;  line-height:34px; cursor:pointer; color:#ffffff; right:10px;  float:left;  background:#000000;  ">Create</div>
                    </div>
                </div>
               </a-space>



             </template>
                -->
           </a-drawer>

    </div>
</template>
<script lang="jsx">
//import homeWidget from './home.vue'

import accountPopupWidget from  '../../../modal/accountPopup.vue';
import itemOptionsPopupWidget from '../../../modal/itemOptions.vue';
import createShopWidget from './create-shop.vue';

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
       createShopWidget,
    //SearchWidget,CategoriesWidget,TopBarWidget,HomeBriefWidget,TopListWidget,HomeBannerWidget,  LatestListWidget,
    //homeWidget,
    //TopBarWidget

  },
  methods:{
    showCreateShop(){
      this.createShopVisible=true
      this.topBarData.createShopVisible=true

    },
    closeCreateShop(){
      this.createShopVisible=false
      this.topBarData.createShopVisible=false

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
