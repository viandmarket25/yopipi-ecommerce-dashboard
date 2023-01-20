<template>
  <div class="dashboard-background">

    <div style="width:100%; height:auto; overflow-y:hidden; margin-left:0%;  ">
    


      <div class="dashboard-content-block" >


        <div class="dashboard-content-block-inner" >

          <TopBarLoggedInWidget  :topBarData="topBarData" />


          <div align="left" style="height:87vh; overflow-y:scroll; ">



            <div v-if="contentIsLoaded"  align="left" style="height:20px; width:100%; float:left; display:flex; ">
            </div>
           





            <div v-if="!contentIsLoaded" class="centered-position" style="width:100%; height:78vh; margin-top:10px; overflow-y:scroll; float:left; user-select:none; ">
              <div class="centered-position" style="width:1100px;  height:100%; background:rgba(6, 6, 6, 0.02); overflow:hidden; border-radius:10px; margin-top:2px; float:left; user-select:none; ">
                <div  style="width:25%; height:100%; margin-left:0%; float:left; ">
                </div>
                <div class="centered-position"  style="width:50%; height:100%; margin-left:0%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; ">
                  <a-spin />
                </div>
                <div style="width:25%; height:100%; margin-left:0%; float:left; ">
                </div>
              </div>
            </div>
            <div class="centered-position" align="left" style="height:10px; width:100%; float:left; margin-bottom:10px; justify-content: space-around; ">

            </div>

            <div v-if="contentIsLoaded" id="product-list-top" class="product-list-top centered-position" style="height:40px; width:100%;">
                <div id="create-product-button" class="create-product-button" style="width:100%; height:34px;  overflow:hidden; background:#ffffff; box-shadow:0px 0px 10px 1px #f1f1f1;  padding-right:3px; color:#ffffff; float:right; position:relative;  ">
                    <div style=" float:left;  margin-left:20px; border-radius:6px; ">
                        <div id="create-product-label" class="create-product-label" style="width:26px; height:34px;  left:4px; font-family: Poppins-SemiBold; position:relative; float:left; line-height:34px; color:#ffffff; font-size:11px;">
                            <img src="@/assets/icons/search-normal.png" style="height:20px; width:20px; top:8px; left:3px; position:relative; float:left;">
                        </div>
                        <div id="create-product-button" class="create-product-button" style="width:182px; height:34px;   left:0px; position:relative;  float:left; ">
                            <input type="text" placeholder="Search Product" style="height:34px; width:180px;  border:none; outline:none; left:2px; font-family: Poppins-Medium; color:#000000; font-size:12px; padding-left:4px; position:relative; float:left;">
                        </div>
                    </div>
                    <div class="" style="width:120px; height:34px;  float:left; box-shadow:0px 0px 0px 1px #f1f1f1; ">
                        <input type="text" value="" placeholder="Sort by" list="product-list-sort-list" style="width:100px; height:34px; border:none; outline:none; color:#000000; font-size:12px;  padding-left:10px; ">
                        <datalist id="product-list-sort-list" style="font-size:12px; ">
                            <option value="Low to High">
                            </option><option value="High to Low">
                            </option><option value="Date">
                            </option><option value="Category">
                        </option></datalist>
                    </div>
                    <div class="" style="width:120px; height:34px;  float:left; box-shadow:0px 0px 0px 1px #f1f1f1; ">
                        <input type="text" value="" placeholder="Price Range" list="price_range_data_source" style="width:100px; height:34px; border:none; outline:none; color:#000000; font-size:12px;  padding-left:10px; ">
                        <datalist id="price_range_data_source" style="font-size:12px; ">
                            <option value="1-100">
                            </option><option value="100-1000">
                            </option><option value="1000-10000">
                            </option><option value="10000-100000">
                            </option><option value="100000-10000000">
                        </option></datalist>
                    </div>
                    <div class="" style="width:140px; height:34px;  float:left; box-shadow:0px 0px 0px 1px #f1f1f1; ">
                        <input type="text" value="" placeholder="Select Category" list="category_data_source" style="width:130px; height:34px; border:none; outline:none; color:#000000; font-size:12px;  padding-left:10px; ">
                            <datalist id="category_data_source">
                                <option value="Fashion">
                                </option><option value="Books">
                                </option><option value="Phones">
                                </option><option value="Laptops">
                                </option><option value="Shoes">
                                </option><option value="Toys">
                                </option><option value="Kids">
                                </option><option value="Babies">
                                </option><option value="Beauty Care">
                                </option><option value="Office">
                                </option><option value="Equipments">
                                </option><option value="Gaming">
                                </option><option value="Electronics">
                                </option><option value="Home Decorations">
                                </option><option value="Outdoor">
                                </option><option value="Sports">
                                </option><option value="Pets">
                            </option></datalist>
                    </div>
                </div>
            </div>

            <div v-if="contentIsLoaded" style="width:100%;  height:auto; height:40px; float:left; user-select:none; margin-top:20px; margin-bottom:20px; ">
              <div  @click="" id="product-preview-details-containerid10l4pyy3med2bsschrb7o" class="featured-products-style-" data-product_id="416" style="width:100%; height:40px; cursor:pointer; background:#fafafa; margin-bottom:20px; margin-left:0px;  margin-right:4px; float:left; ">
                <div class="centered-position" id="product-avatar-container" style=" width:60px; height:40px; overflow:hidden; float:left; ">
                    <a-checkbox v-model:checked="checked" @click="checkAllItems()" ></a-checkbox>
                </div>
               <div id="product-avatar-container" class="" style=" width:100px; height:100px; overflow:hidden; float:left; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left;  border-radius:10px; font-size:12px; margin-top:10px; color:#404040; font-family:Poppins-Bold;  ">
                  SELECT
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:32%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left;  border-radius:10px; font-size:12px; margin-top:10px; color:#404040; font-family:Poppins-Bold;  ">
                   PRODUCT INFORMATION
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:10%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:12px; margin-top:10px; color:#404040; font-family:Poppins-Bold;  ">
                   PRICE
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:10%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:12px; margin-top:10px; color:#404040; font-family:Poppins-Bold; ">
                   STOCK
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:10%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:12px; margin-top:10px; color:#404040; font-family:Poppins-Bold;  ">
                   STATUS
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:14%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:12px; margin-top:10px; color:#404040; font-family:Poppins-Bold;  ">
                   BRAND
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:8%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:12px; margin-top:10px; color:#404040; font-family:Poppins-Bold; ">
                   ACTIONS
                 </div>
               </div>
              </div>

            </div>

            <div v-if="contentIsLoaded" style="width:100%; height:90vh; float:left; position:relative;  margin-top:0px;    ">


                <div v-for="(product,index) in productList" :key="index"  @click="" :id="index" class="product-item-style" data-product_id="416" style="width:99%; height:70px; cursor:pointer;  margin-left:0.5%;  border-radius:4px; margin-bottom:6px;  float:left; ">
                  <div id="product-details-container" class="product-details-container" align="left" style=" width:100%; height:70px; float:left; position:relative; overflow:hidden; ">
                    <div class="centered-position" id="product-avatar-container" style=" width:60px; height:70px; overflow:hidden; float:left; ">
                        <a-checkbox v-model:checked="productList[index].isChecked" @click="checkItem(index)" ></a-checkbox>
                    </div>
                   <div id="product-avatar-container" class="centered-position" style=" width:100px; height:70px; overflow:hidden; float:left; ">
                      <img :src="getProductPhoto(product.avatar)" id="product-avatar" class="product-avatar-" style=" width:50px; height:50px;  border-radius:8px;  float:left; ">
                   </div>
                   <div id="product-details-container" class="product-details-container centered-position" align="left" style=" width:16%; height:70px; float:left; position:relative; overflow:hidden; ">
                     <div id="product-title" class="" style=" height:auto; width:90%; margin-left:0px;  float:left;  border-radius:10px; text-align:left;  font-size:12px;  color:#404040; font-family:Poppins-Bold;  ">
                       {{product.title}}
                     </div>
                   </div>
                   <div id="product-details-container" class="product-details-container centered-position" align="left" style=" width:16%; height:70px; float:left; position:relative; overflow:hidden; ">
                     <div id="product-title" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; text-align:left; font-size:12px;  color:#9b5de5; font-family:Poppins-SemiBold; ">
                        {{product.category}}
                     </div>
                   </div>
                   <div id="product-details-container" class="product-details-container centered-position" align="left" style=" width:10%; height:70px; float:left; position:relative; overflow:hidden; ">
                     <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; text-align:left; font-size:14px; color:#404040; font-family:Poppins-Bold; font-size:11px; ">
                       ${{product.price}}
                     </div>
                   </div>
                   <div id="product-details-container" class="product-details-container centered-position" align="left" style=" width:10%; height:70px; float:left; position:relative; overflow:hidden; ">
                     <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; text-align:left; font-size:14px;  color:#404040; font-family:Poppins-Bold; font-size:11px; ">
                       {{product.stockLeft}}
                     </div>
                   </div>
                   <div id="product-details-container" class="product-details-container centered-position" align="left" style=" width:10%; height:70px; float:left; position:relative; overflow:hidden; ">
                     <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; text-align:left; font-size:14px; color:#404040; font-family:Poppins-Bold; font-size:11px; ">
                       <span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:rgb(0,245,212,0.2); font-family:Poppins-Medium;  position:relative; left:6px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; padding-right:6px; line-height:30px;  ">Active</span>

                     </div>
                   </div>
                   <div id="product-details-container" class="product-details-container centered-position" align="left" style=" width:14%; height:70px; float:left; position:relative; overflow:hidden; ">
                     <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; text-align:left; font-size:14px; color:#404040; font-family:Poppins-Bold; font-size:11px; ">
                        {{product.brand}}
                     </div>
                   </div>
                   <div id="product-details-container" class="centered-position"  align="left" style=" width:8%; height:70px; float:left; position:relative; overflow:hidden; ">
                     <!-- This is a basic use case where you have an array of items that you want
                     to allow to be clicked. In this case, `items` is an array of objects.
                     Each item has a click event that ties to a function. See the demo for a full example (with multiple menus as well). -->
                     <div id="product-details-container" class="centered-position"  align="left" style=" width:40px; height:70px; float:left; position:relative; overflow:hidden; ">

                       <!-- Table

                       <p class="context-menu" data-container-id="context-menu-items" data-row-id="1"></p>
                        @click="getElementPosition(index)"
                        -->
                        <div  @click="getElementPosition('option'+index,index)" :id="'option'+index" class="centered-position" style="width:24px; height:24px;">
                           <img src="@/assets/icons/option-vert.png" id="product-delete-button-icon10" class="" style="width:20px; height:20px;">
                        </div>


                        <!--
                       <div class="item-wrapper" >

                         <div  @click.prevent.stop="handleClick($event,   productModifyOptions[0])"
                           class="item-wrapper__item" >
                           <div id="product-delete-button-container10" class="centered-position" style="width:24px; height:24px;">
                              <img src="@/assets/icons/option-vert.png" id="product-delete-button-icon10" class="" style="width:20px; height:20px;">
                           </div>
                         </div>

                       </div>
                     -->

                       <!-- Make sure you add the `ref` attribute, as that is what gives you the ability
                       to open the menu. -->

                     </div>



                    <!--
                      <div id="product-modify-button-container20" class="" style="width:24px; height:24px; margin-right:20px;">
                        <img src="http://127.0.0.1/shorpi/assets/icons/modify-product-icon.png" id="product-modify-button-icon20" class="" style="width:20px; height:20px;">
                      </div>
                      <div id="product-delete-button-container10" class="" style="width:24px; height:24px;">
                         <img src="http://127.0.0.1/shorpi/assets/icons/delete-icon-button.png" id="product-delete-button-icon10" class="" style="width:20px; height:20px;">
                      </div>
                    -->
                   </div>
                  </div>
                </div>

            </div>

          </div>


        </div>


      </div>

    </div>

  </div>



  <div id="context-popup-modal" style=" display:none; justify-content:center; z-index:222222222; position:fixed; background:#000000; ">
      <!--<div id="contents-target" class="contents-target"  @click="closeContextOptionMenu()" style="width:100vw; height:100vh; z-index:222222222; cursor:pointer; left:0px; position:fixed;  top:0px; overflow:hidden; opacity:1; ">
      </div>-->
      <div id="context-menu-contents-target" class="contents-target" style="width:220px; min-height:400px; max-height:600px; background:#ffffff;  z-index:222222222; box-shadow:0px -0.4px 30px 4.0px #f0f0f0; border:1px solid #f1f1f1; position:fixed; right:5%; top:48px; border-radius:12px; overflow:hidden;  ">
          <div style="height:30px; width:100%; "></div>
          <div v-for="(option,index) in productModifyOptions" :key="index"  @click="callPopupMethod(index)"  :class="getpopupContextMenuClass(option.name,index)">{{option.name}}</div>
      </div>
  </div>

  <div id="messages-popup-modal" style=" display:none; justify-content:center; z-index:222222222; position:fixed; ">
      <div id="messages-contents-target" class="contents-target" style="width:auto; height:93vh;  z-index:222222222;  position:fixed; right:2%; top:48px; border-radius:12px; overflow:hidden;  ">
        <interactiveMessageWidget  />
      </div>
  </div>


  <editProductWidget v-on:updateEditProduct="updateEditProduct" v-if="editProductData.visible" :editProductData="editProductData"/>
  <editProductBasicDetailsWidget v-on:updateEditProductBasicDetails="updateEditProductBasicDetails" v-if="editProductBasicDetailsData.visible" :editProductBasicDetailsData="editProductBasicDetailsData"/>
  <editProductVariationsWidget v-on:updateEditProductVariations="updateEditProductVariations" v-if="editProductVariationsData.visible" :editProductVariationsData="editProductVariationsData"/>
  <editProductPhotosAndMoreWidget v-on:updateEditProductPhotosAndMore="updateEditProductPhotosAndMore" v-if="editProductPhotosAndMore.visible" :editProductPhotosAndMore="editProductPhotosAndMore"/>
  <addDiscountWidget v-on:updateAddDiscount="updateAddDiscount" v-if="addDiscountData.visible" :addDiscountData="addDiscountData"/>




</template>
<script lang="jsx">


import editProductWidget from './items/edit-product.vue';
import editProductBasicDetailsWidget from './items/edit-details.vue';
import editProductVariationsWidget from './items/edit-variations.vue';
import editProductPhotosAndMoreWidget from './items/edit-photos-and-more.vue';
import addDiscountWidget from './items/add-discount.vue';


import interactiveMessageWidget from '../../../../components/views/modal/messages-modal.vue';
import TopBarLoggedInWidget from './items/top-bar-products.vue';
import HomeFooterWidget from '../../../../components/views/home/items/home-footer.vue';
//import addProductWidget from './items/add-product.vue';
import axios from "axios";

export default {
  name: "userProfileWidget",
  components:{
    TopBarLoggedInWidget ,HomeFooterWidget,
    interactiveMessageWidget,
    editProductWidget,
    editProductBasicDetailsWidget,
    editProductVariationsWidget,
    editProductPhotosAndMoreWidget,
    addDiscountWidget,

  },
  //mixins: [web3Modal],
  props: {
    msg: String
  },
  async created() {


    let appClickListener=document.querySelector('body')


    let updatePopupState=()=>{
      if(  this.productOptionPopup.active===true && this.productOptionPopup.index!==null ){

        //alert(this.productOptionPopupActive)

        this.closeContextOptionMenu()

      }

    }
      appClickListener.addEventListener("click",()=>{
        updatePopupState()

        //setTimeout(function(){ },100)




      },false);

  },
  async mounted() {



  //  appClickListener.addEventListener('click',function(){updatePopupState()})
/*
    document.body.addEventListener('click', () => {
            console.log('mouse click');
            updatePopupState()
    });
*/


    this.checkUserExists('auto-login')
    this.activeProfilePage=document.getElementById('active-profile-page')
    this.showOverflow();

    //let p=await productsRequest.getAllProducts({},{})

    this.productList=await this.getAllProducts({},{})
    this.contentLoaded();
    // console.log("web3 modal: ",window.web3)
     //this.connect()
    //this.readyContextMenu()

  },
  data(){
    return {

      editProductData:{
        visible:false,
      },
      editProductBasicDetailsData:{
        visible:false,
      },
      editProductVariationsData:{
        visible:false,
      },
      editProductPhotosAndMore:{
        visible:false,
      },
      addDiscountData:{
        visible:false,
      },
      viewProduct:{
        visible:false,

      },

      productOptionPopup:{
        active:false,
        index:null,
      },



      productOptionTexts:[
      'a','d','fg'

      ],
      productModifyOptions:[
        {
          name:'Edit Product',
        },
        {
          name:'Edit Basic Details',
        },
        {
          name:'Edit Variations',
        },
        {
          name:'Edit Photos and More',
        },
        {
          name:'Hide Product',
        },
        {
          name:'Add a Discount',
        },
        {

          name:'View'
        },
        {
          name:'Delete',
        },


      ],

            productsDataMap:{
              totalOrdersToday:'1,000',
              totalVisitorsToday:'600',
              unreadMessages:'233',
              pendingOrders:'22',
              totalProducts:'12,200',
              totalShops:'3',
              runningLow:'2',
              productsInRoute:'10',

            },
      contentIsLoaded:false,
      productList:[],
      topBarData:{
        totalProducts:0,
        userCookieData:{},
      },
      isLoggedIn: false,
      userCookieData:{},
      activePage:'products',

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

            cartItems:[
              {
                isChecked:false,
                title:'iphone 11',
                price:'400',
                id:'',
                unitPrice:500,
                quantity:1,
                amount:500,

              },
              {
                isChecked:false,
                title:'apple watch',
                price:'700',
                id:'',
                unitPrice:200,
                quantity:1,
                amount:200,

              },{
                isChecked:false,
                title:'iphone 13',
                price:'500',
                id:'',
                unitPrice:700,
                quantity:1,
                amount:700,

              },{
                isChecked:false,
                title:'ipod 4',
                price:'400',
                id:'',
                unitPrice:400.03,
                quantity:1,
                amount:400.03,

              },

            ],


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
    callPopupMethod(index){
      if(index==0){
        this.showEditProductData()
      }else if(index==1){
        this.showEditProductBasicDetailsData()
      }else if(index==2){
        this.showEditProductVariationsData()
      }else if(index==3){
        this.showEditProductPhotosAndMoreData()

      }if(index==4){
        //this.showEditProductPhotosAndMoreData()

      }if(index==5){
        this.showAddDiscountData()

      }



    },
    updateEditProduct(editProductData){
      this.editProductData=editProductData
      //console.log(this.editProductData,editProductData)
    },
    updateEditProductBasicDetails(editProductData){
      this.editProductBasicDetailsData=editProductData
      //console.log(this.editProductData,editProductData)
    },
    updateEditProductVariations(editProductData){
      this.editProductVariationsData=editProductData
      //console.log(this.editProductData,editProductData)
    },
    updateEditProductPhotosAndMore(editProductData){
      this.editProductPhotosAndMore=editProductData
      //console.log(this.editProductData,editProductData)
    },
    updateAddDiscount(editProductData){
      this.addDiscountData=editProductData
      //console.log(this.editProductData,editProductData)
    },

    //:::::::::::::::
    showEditProductData(){
      this.editProductData.visible=true
    },
    showEditProductBasicDetailsData(){
      this.editProductBasicDetailsData.visible=true
    },
    showEditProductVariationsData(){
      this.editProductVariationsData.visible=true
    },
    showEditProductPhotosAndMoreData(){
      this.editProductPhotosAndMore.visible=true
    },
    showAddDiscountData(){
      this.addDiscountData.visible=true
    },



    closeContextOptionMenu(){
      //alert()
        let targetElement=document.getElementById('context-popup-modal')
        targetElement.style.display="none"
        this.productOptionPopup.active=false
        this.productOptionPopup.index=null


    },

    showContextOptionMenu(index){
      //alert()

      let show_=()=>{
        let targetElement=document.getElementById('context-popup-modal')
        //  targetElement.style.display="none"
        targetElement.style.display="block"
        this.productOptionPopup.active=true
        this.productOptionPopup.index=index



      }

      setTimeout(function(){show_()},200)


    },

    getElementPosition(clickedEl,index){
      let contextMenu_=window.jQuery("#context-menu-contents-target")
      let el=window.jQuery("#"+clickedEl)
      let elementPosition=  elementPositions_(el)
      console.log(elementPosition)

      let left_=Number(elementPosition.left-226)
      let top_=Number(elementPosition.top+10)

      if(top_>200 && top_< 300){
        top_=top_-40
      }else if(top_>300  && top_< 400){
        top_=top_-140

      }else if(top_>400  && top_< 500){
        top_=top_-200

      }else if(top_>500  && top_< 600){
        top_=top_-260

      }else if(top_>600){
        top_=top_-320

      }

      contextMenu_.css("left", left_.toString() +"px")
      contextMenu_.css("top", top_.toString() +"px")

      this.showContextOptionMenu(index);


    },
    contentLoaded(){
      this.contentIsLoaded=true

    },
    goModule(index,path){
      this.$router.push(path);
    },
    async getAllProducts(payload, files) {
      console.log(payload)
      let tempPayload = payload
      payload = JSON.stringify(payload)
      let requestResult
      let __ip;
      let targetUrl = requestEndpoints.productEndpoint;
      let formData = new FormData()
      formData.append('action', 'gll_product')
      formData.append('auth_crd', JSON.parse(getCookie("siteAccessT")).token)
      formData.append('payload', payload)
      formData.append('requestType', 'requestType')
      console.log(formData)
      try{
        const response = await axios({
            method: "post",
            url: targetUrl,
            //params: {t:new Date().getTime() },
            data: formData,
            headers: {
            'Content-Type': 'multipart/form-data'
          },
           baseURL: 'http://192.168.1.5:3000',
        });
        let result =JSON.parse(response.data)
          console.log(result)
        if (result.resultCode == 1) {
          // :::::::::::: request successfule with result
          // :::::: show success
          let productList=[]
          for (let i = 0; i < result.resultContent.length; i++) {
              productListParameters.total = i
              let newProduct = {
                  avatar: result.resultContent[i].MEDIA_SOURCE,
                  title: result.resultContent[i].TITLE,
                  description: result.resultContent[i].DESCRIPTION.substring(0, 45),
                  category: result.resultContent[i].PRODUCT_CATEGORY,
                  price: result.resultContent[i].PRICE,
                  stockLeft: result.resultContent[i].STOCK_CAPACITY,
                  originalStock: result.resultContent[i].STOCK_CAPACITY,
                  brand: result.resultContent[i].BRAND,
                  isChecked:false,
              }
              console.log(newProduct)
              productList.push(newProduct)
          }
          requestResult=productList
          this.productList=productList
          this.topBarData.totalProducts=  this.productList.length
          return new Promise((resolve) => {
              //setTimeout(() => {
                  console.log("product list here!")

                  resolve(productList)
            //  }, 1100)
          })
        }
      } catch(error) {
        console.log(error)
      }


    },
    getDashboardIcons(name){
      let imgUrl;
      let page_ = window.location.href.split("products").join("");
      //page_=window.location.href.split("/")[0]

      if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
        imgUrl = page_ + "./src/assets/icons/dashboard-icons/" + name;
      } else {
        imgUrl = page_ + "dynamic-assets/icons/dashboard-icons/" + name;
      }
      //console.log(imgUrl);
      return imgUrl;

      //return "@/assets/icons/dashboard-icons/"+path;
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
    getProductPhoto(image){
      return image
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
    checkItem(index){
      this.cartItems[index].isChecked=!  this.cartItems[index].isChecked
      console.log("ischecked:  ",this.cartItems[index].isChecked)

      //let total=0
      this.total=0
      for(let i=0; i<this.cartItems.length; i++){
        if( this.cartItems[i].isChecked==true){
          this.total=Number(this.total+ this.cartItems[i].amount)
        }
      }
      //this.total=total=

    },
    getDatasetFromElement(element){
      //element.preventDefault();
      var whichFilterItem = element. currentTarget.dataset.key_;
      alert(whichFilterItem);
      return whichFilterItem
    },
    getMenuClass(item,index){
      //console.log(item.title,index)
      return item.title.toLowerCase()==this.activePage?'top-menu-item-active':'top-menu-item';

    },
    getpopupContextMenuClass(item,index){
      //console.log(item.title,index)

      if( index==0){
        return 'menu-item-popup-focus';

      }else if(index==7){
        return 'menu-item-popup-alert';

      }else{
        return 'menu-item-popup';


      }

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
    color:#000000;
    width: 160px;
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
    color:#000000;
    width: 160px;
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

.menu-list-container-popup {
    height: 60px;
    width: 100%;
    list-style-type: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;

}

.menu-item-popup-modern {
    cursor: pointer;
    margin-left:6%;
    font-size: 12px;
    float: left;
    height:40px;
    width: 90%;
    padding-left:12px;
    padding-right:12px;
    line-height:40px;
    cursor:pointer;
    color:#000000;
    text-align: left;
    letter-spacing: 0.02712em;
    position: relative;
    font-family: Poppins-Bold;

}

.menu-item-popup-alert {
    cursor: pointer;
    margin-left:6%;
    font-size: 12px;
    float: left;
    height:40px;
    width: 90%;
    padding-left:12px;
    padding-right:12px;
    line-height:40px;
    cursor:pointer;
    color:#e5383b;
    text-align: left;
    letter-spacing: 0.02712em;
    position: relative;
    font-family: Poppins-Bold;

}

.menu-item-popup-focus{
    cursor: pointer;
    margin-left:6%;
    font-size: 12px;
    float: left;
    height:40px;
    width: 90%;
    padding-left:12px;
    padding-right:12px;
    line-height:40px;
    cursor:pointer;
    color:#9b5de5;
    text-align: left;
    letter-spacing: 0.02712em;
    position: relative;
    font-family: Poppins-Bold;

}

.menu-item-popup-focus:hover {
    position: relative;
    font-family: Poppins-Bold;
    border-radius:10px;
    opacity:0.9;
    transition-delay:133ms;
    transition-duration: 133ms;
    background:#f1f1f1;
    transition-delay:122ms;
}

.menu-item-popup-alert:hover {
    position: relative;
    font-family: Poppins-Bold;
    border-radius:10px;
    opacity:0.9;
    transition-delay:133ms;
    transition-duration: 133ms;
    background:#f1f1f1;
    transition-delay:122ms;
}

.menu-item-popup {
    cursor: pointer;
    margin-left:6%;
    font-size: 12px;
    float: left;
    height:40px;
    width: 90%;
    padding-left:12px;
    padding-right:12px;
    line-height:40px;
    cursor:pointer;
    color:#000000;
    text-align: left;
    letter-spacing: 0.02712em;
    position: relative;
    font-family: Poppins-Bold;

}

.menu-item-popup:hover {
    position: relative;
    font-family: Poppins-Bold;
    border-radius:10px;
    opacity:0.9;
    transition-delay:133ms;
    transition-duration: 133ms;
    background:#f1f1f1;
    color:#000000;
    transition-delay:122ms;
}


.product-item-style{
  background:rgb(255,153,200,0.04);
}
.product-item-style:hover{
background:rgb(255,153,200,0.1);

}

</style>
