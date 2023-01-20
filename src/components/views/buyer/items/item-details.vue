<template>

  <div style="width:100vw; height:100vh; overflow-y:scroll; float:left; user-select:none; ">
  <!--  <topBarWidget/>-->
    <searchBarWidget/>
    <div v-if="!contentIsLoaded" class="centered-position" style="width:100vw; height:80vh;  overflow-y:scroll; float:left; user-select:none; ">
      <div class="centered-position" style="width:1100px;  height:100%; background:rgba(6, 6, 6, 0.02); overflow:hidden; border-radius:20px; margin-top:2px; float:left; user-select:none; ">
        <div  style="width:25%; height:100%; margin-left:0%; float:left; ">
        </div>
        <div class="centered-position"  style="width:50%; height:100%; margin-left:0%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; ">
          <a-spin />
        </div>
        <div style="width:25%; height:100%; margin-left:0%; float:left; ">
        </div>
      </div>
    </div>

    <div  v-if="contentIsLoaded" style="width:100vw; height:auto; float:left; user-select:none; align-items:left; justify-content:center; display:flex;">
      <div class="centered-position" style="width:1100px;  min-height:700px; overflow-y:scroll; margin-top:2px; float:left; user-select:none; ">
        <div class="" style="width:32.4%; height:100%; margin-left:0%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; ">
          <div class="" style="width:100%; height:290px; margin-left:0%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; ">
            <a-carousel arrows dots-class="slick-dots slick-thumb">
              <template #customPaging="props">
                <div class="centered-position" style="width:60px; height:45px; margin-left:0px; float:left; ">
                  <a>
                    <img :src="getProductMedia(props.i)"  />
                  </a>
                </div>
              </template>
              <div  v-for="item in 4" :key="item" style="height:240px; width:100%; background:#ffffff; "  >
                 <img :src="getProductMedia(item - 1)" style="height:240px;" />
               </div>
            </a-carousel>

          </div>
        </div>
        <div class="" style="width:50%; height:100%; margin-left:0%; float:left; ">
          <div class="" style="width:98%; height:100%; margin-left:2%; float:left; ">
            <div id="" class="" align="left" style="width:90%; max-height:300px; position:relative; font-size:13px; margin-bottom:10px; margin-top:10px; font-family:Poppins-Bold; color:#000000; left:0px;">Apple IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone - White</div>
            <div id="" class="" align="left" style="width:90%; max-height:300px; position:relative; font-size:11px; font-family:Poppins-Regular; color:#404040; left:0px;">KEY FEATURES
            6.1-inch Super Retina XDR display
            Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
            Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
            12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
            A15 Bionic chip for lightning-fast performance
            Main Camare - (12MP + 12MP )
            Selfie Camera - 12MP
            4GB RAM + 128GB ROM</div>


          <div id="" class="" style="width:100%; height:auto; overflow-x:hidden; overflow-y:scroll;"> <div id="" class="" style="width:100%; height:280px;  ">
             <div id="preview-product-splide" class="splide splide--fade splide--ltr splide--draggable is-active" align="center" style="position: relative;  visibility: visible;">
             <div id="preview-product-splide-track" class="splide__track"> <div id="preview-product-splide-list" class="splide__list">

                <div id="" class="" style="width:100%; height:40px; margin-top:10px; background:#f1faee; line-height:40px; float:left;  ">
                 <div id="" class="" align="left" style="height:24px; width:140px; float:left; border-radius:10px; font-size:14px; position:relative; left:10px; margin-top:2px; color:#000000; line-height:40px; font-family:Poppins-Bold; font-size:18px; ">
                <span id="" class="" style="font-size:12px; font-family:Poppins-SemiBold; margin-right:2px;">$</span>200,000</div>
                </div>

                <div id="" class="" style="width:100%; height:80px; margin-top:10px; background:#fff1e6; line-height:40px; float:left;  ">
                 <div id="" class="" align="left" style="height:24px; width:100%; float:left; border-radius:10px; font-size:12px; position:relative; left:10px; margin-top:2px; color:#000000; line-height:40px; font-family:Poppins-Bold;  ">
                   <span id="" class="" style="font-size:12px; font-family:Poppins-SemiBold; margin-right:4px;">Delivery</span>Ikega Lagos</div>
                 <div id="" class="" align="left" style="height:24px; width:100%; float:left; border-radius:10px; font-size:14px; position:relative; left:10px; margin-top:2px; color:#000000; line-height:40px; font-family:Poppins-Bold;  ">
                   <span id="" class="" style="font-size:11px; font-family:Poppins-Medium; margin-right:2px;">Product will be delievered to Ikega Lagos by 27th of June</span>-</div>




                </div>





                <div id="" class="" style="width:100%; max-height:auto; margin-top:20px; float:left; "> </div>

                <div id="" class="" align="left" style="width:100%; height:auto; margin-top:20px; float:left;  ">
                  <div id="product-quantity-labell4rfyyzs31i4cqeclr2" class="" align="left" style="width:90%; max-height:300px; position:relative; font-size:13px; font-family:Poppins-Medium; color:#000000; left:10px;">Quantity</div></div>
                  <div id="product-preview-quantity-container0" class="product-preview-quantity-container"> <div id="" class="" style="width:150px; height:30px; float:left; box-shadow:0px 0px 0px 1px #f1f1f1; position:relative; padding-left:4px; margin-top:18px;  ">
                 <div id="decrease-button-holder-l4rfyyzs31i4cqeclr2" class="" style="width:20px; height:30px; float:left; margin-left:10px; position:relative; cursor:pointer; margin-right:0px; ">
                    <img src="http://127.0.0.1/shorpi/assets/icons/decrease-product-icon.png" id="" class="" style="width:16px; height:16px; float:left; top:7px;  position:relative; cursor:pointer; "></div>
                 <div id="" class="" style="width:84px; height:30px; float:left; position:relative; overflow:hidden; background:#f1f1f1; font-family:Poppins-SemiBold; line-height:30px; font-size:13px; text-align:center; border:none;   ">
                   <div id="" class="" style="width:24px; height:30px; float:left; position:relative; background:#f1f1f1; color:#707070; font-family:Poppins-SemiBold; line-height:30px; font-size:13px; text-align:center; border:none;   ">X</div>
                   <input type="number" placeholder="0" id="product-cart-item-quantityl4rfyyzs31i4cqeclr2" class="" style="width:50px; height:30px; float:right; position:relative; background:#ffffff; outline:none; font-family:Poppins-SemiBold; font-size:13px; text-align:left; padding-left:6px; border:none;   "></div>

                   <div id="increase-button-holder-l4rfyyzs31i4cqeclr2" class="" style="width:20px; height:30px; float:left; position:relative; cursor:pointer; margin-left:8px;">
                      <img src="http://127.0.0.1/shorpi/assets/icons/increase-product-icon.png" id="" class="" style="width:16px; height:16px; float:left; top:7px; position:relative; cursor:pointer;  ">
                    </div>
                    </div>
                  </div>
                      <div id="" class="" style="width:100%; height:54px; margin-top:20px; float:left;  "> <div id="" class="" style="width:360px; height:50px; float:left;  ">
                         <div id="" class="buy-now-button" style="width:100px; height:34px; position:relative; text-align:center;  top:10px; border-radius:20px;  font-family:Poppins-SemiBold; font-size:12px;  line-height:34px; cursor:pointer; color:#f1f1f1; margin-left:10px; float:left; background:#404040; ">Buy Now</div><div id="add-to-cart-button" class="add-to-cart-button" style="width:110px; height:34px; position:relative; text-align:center; margin-left:20px; top:10px; border-radius:20px;  font-family:Poppins-SemiBold; font-size:12px;  line-height:34px; cursor:pointer; color:#ffffff; right:10px;  float:left;  background:#000000;  ">Add to Cart</div>

                       </div></div>
                      <div id="" class="" style="width:100%; height:auto; margin-top:20px; float:left;  "> </div></div>

                    </div>
                  </div>
                </div>
              </div>




              <div id="" class="" align="left" style="width:100%; height:30px; margin-top:0px; float:left; ">
                <div id="" class="" align="left" style="width:96%; max-height:300px; position:relative; font-size:14px; font-family:Poppins-Bold; color:#000000; left:2%;">
                  {{productVariations[0].variationTitle}}
                </div>
              </div>
              <div id="" class="" style="width:100%; max-height:auto; margin-top:4px; float:left; padding-bottom:10px; color:#404040; ">
                  <div v-for="(productVariation,index) in productVariations[0].data" :key="index" id="variation-option-containerl4s54e38wbf9dy4z9yo01" class="" style="width:44.9%; height:70px; cursor:pointer; border-radius:2px; margin:6px; box-shadow:0px 0px 0px 1px #f1f1f1;    float:left; " align="left" data-variation_id="0" data-cartinfo__id="110" data-cartinfo__title="Silver Band" data-cartinfo__mediasource="/shorpi/assets_media/product_variation_images/pr_img1x61c19ec40e72233379637621Dec202121310:12:44242_flx.jpeg"
                    data-cartinfo__masterid="prvar_idx61c19ec40c9e017967720421Dec20211012449666mx_id">
                      <div id="" class="" style="width:30%; height:70px; float:left;  border-radius:6px; ">
                        <img :src="getProductPhoto( productVariation.image )" id="" class="" style="width:100%; height:70px; float:left; border-radius:6px; ">
                      </div>
                      <div id="" class="" style=" width:70%;  max-height:auto; float:left; ">
                        <div id="" class="" style="min-height:40px; max-height:80px; overflow:hidden; float:left; border-radius:10px;
                           color:#404040; font-family:Poppins-Regular; font-size:11px; margin-left:5px; margin-top:14px; ">
                          {{ productVariation.title }}
                        </div>
                      </div>
                   </div>
              </div>








          </div>
        </div>

        <div class="" style="width:17%; height:100%; margin-left:0%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; ">
          <div class="" style="width:90%; height:100%; margin-left:5%; float:left; ">

            <div id="" class="" align="left" style="width:90%; max-height:300px; position:relative; font-size:13px; margin-bottom:10px; margin-top:10px; font-family:Poppins-Bold; color:#000000; left:0px;">Similar Purchases</div>

            <div  @click="goProductDetail('')" id="product-preview-details-containerid10l4pyy3med2bsschrb7o" class="featured-products-style-" data-product_id="416" style="width:150px; height:240px; cursor:pointer; box-shadow:0px 0px 0px 1px #f1f1f1; background:#fafafa;  margin-top:10px; margin-left:0px;  margin-right:4px; float:left; ">
               <div id="product-avatar-container" class="" style=" width:100%; height:130px; overflow:hidden; float:left; ">
                  <img :src="getProductPhoto('http://127.0.0.1/shorpi/assets_media/product_variation_images/pr_img1x61c19ec40f2a938199387421Dec20213810:12:4462_flx.jpeg')" id="product-avatar" class="product-avatar-" style=" width:100%; max-height:150px; float:left; ">
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:100%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; float:left; margin-left:4px; border-radius:10px; font-size:14px; margin-top:4px; color:#404040; font-family:Poppins-Regular; font-size:11px; ">
                   Watch Series 4
                 </div>
                 <div id="product-price" class="" style="height:24px; width:90%; float:left; margin-left:4px; border-radius:10px;   margin-top:2px; color:#000000;  font-family:Poppins-SemiBold; font-size:16px; ">
                   <span id="product-price-sign" class="" style="font-size:11px; font-family:Poppins-Regular; margin-right:0.4px; ">$</span>
                   75,666<span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; font-family:Poppins-Regular;  position:relative; left:6px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; padding-right:6px; line-height:30px;  ">-5.8%</span>
                 </div>
               </div>
             </div>
             <div  @click="goProductDetail('')" id="product-preview-details-containerid10l4pyy3med2bsschrb7o" class="featured-products-style-" data-product_id="416" style="width:150px; height:240px; cursor:pointer; box-shadow:0px 0px 0px 1px #f1f1f1; background:#fafafa;  margin-top:10px; margin-left:0px;  margin-right:4px; float:left; ">
                <div id="product-avatar-container" class="" style=" width:100%; height:130px; overflow:hidden; float:left; ">
                   <img :src="getProductPhoto('http://127.0.0.1/shorpi/assets_media/product_variation_images/pr_img1x61c19ec40f2a938199387421Dec20213810:12:4462_flx.jpeg')" id="product-avatar" class="product-avatar-" style=" width:100%; max-height:150px; float:left; ">
                </div>
                <div id="product-details-container" class="product-details-container" align="left" style=" width:100%; height:100px; float:left; position:relative; overflow:hidden; ">
                  <div id="product-title" class="" style=" height:auto; width:90%; float:left; margin-left:4px; border-radius:10px; font-size:14px; margin-top:4px; color:#404040; font-family:Poppins-Regular; font-size:11px; ">
                    Watch Series 4
                  </div>
                  <div id="product-price" class="" style="height:24px; width:90%; float:left; margin-left:4px; border-radius:10px;   margin-top:2px; color:#000000;  font-family:Poppins-SemiBold; font-size:16px; ">
                    <span id="product-price-sign" class="" style="font-size:11px; font-family:Poppins-Regular; margin-right:0.4px; ">$</span>
                    75,666<span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; font-family:Poppins-Regular;  position:relative; left:6px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; padding-right:6px; line-height:30px;  ">-5.8%</span>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>



    </div>
    <div  v-if="contentIsLoaded" class="centered-position" style="width:100vw;  min-height:270px;  margin-top:2px; overflow:hidden; float:left; user-select:none; ">
      <productRecommendationsWidget />





    </div>
    <div  v-if="contentIsLoaded" class="centered-position" style="width:100vw;  min-height:70px;   margin-top:2px; float:left; user-select:none; ">

      <div @mouseleave="hoverCategoryView(0)"  style="width:1100px; height:600px; margin-bottom:100px;  box-shadow:0px 0px 0px 1px #f1f1f1;">

        <div style="width:20%; height:100%;  margin-top:0px; float:left; background:#fafafa; box-shadow:0px 0px 0px 1px #f1f1f1;  ">


        </div>
        <div style="width:80%; height:100%;  margin-top:0px; float:left; background:#fafafa; box-shadow:0px 0px 0px 1px #f1f1f1;  ">
          <div style="width:100%; height:40px;  margin-top:0px; float:left; background:#fafafa; border-bottom:2px solid #fff1e6; box-shadow:0px 0px 0px 1px #f1f1f1;  ">
            <div  style=" width:100%; height:40px; margin-top:0px; float:left; ">


                <div v-for="(menu,index) in productDetailsMenu" :key="index" :class="getMenuClass(index)" @click="switchProductMenu(index)" >{{menu.title}}</div>


            </div>
          </div>
          <div style="width:100%; height:90%;  margin-top:0px; float:left; background:#fafafa; box-shadow:0px 0px 0px 1px #f1f1f1;  ">



          </div>


        </div>

        <!--

        <div style="width:20%; height:50px;  margin-top:0px; float:left; background:#fafafa; box-shadow:0px 0px 0px 1px #f1f1f1;  ">


        </div>
        <div style="width:80%; height:50px;  margin-top:0px; float:left; background:#fafafa; box-shadow:0px 0px 0px 1px #f1f1f1;  ">
          <div class="centered-position" style=" width:100%; height:auto;  ">
              <router-link to="/" ><li class="category-menu-item" >Product Details</li></router-link>
              <router-link to="/" ><li class="category-menu-item" >Map</li></router-link>
              <router-link to="/" ><li class="category-menu-item" >Global Market</li></router-link>
          </div>

        </div>

-->






      </div>




    </div>





  </div>



</template>
<script>
import userSummaryWidget from '../../../../components/views/home/items/user-summary.vue';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import searchBarWidget from '../../../../components/views/home/items/search-bar.vue';
import topBarWidget from '../../../../components/views/home/items/top-bar.vue';
import productRecommendationsWidget from '../../../../components/views/buyer/items/product-recommendations.vue';


const baseUrl ='https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';

export default {
  setup() {
    const getImgUrl = (i ) => {
      return this.productSearchResults[i]
    };
    return {
      getImgUrl,
    };
  },
  name: "userProfileWidget",
  components:{
      userSummaryWidget, LeftCircleOutlined,
      RightCircleOutlined,searchBarWidget,topBarWidget,
      productRecommendationsWidget
  },
  //mixins: [web3Modal],
  props: {
    msg: String
  },
  created() {


  },
  mounted() {
    //this.listenAddProductEvent()
    let contentLoaded=()=>{
      this.contentIsLoaded=true

    }
    setTimeout(contentLoaded,800)


  },
  data(){
    return {
      contentIsLoaded:false,
      productDetailsMenu:[
        {
          canShow:false,
          title:"Product Details",
          containerId:"",
        },
        {
          canShow:false,
          title:"Reviews and Comments",
          containerId:"",
        },
        {
          canShow:false,
          title:"More from Store",
          containerId:"",
        }
      ],
      productVariations:[
        {
          "variationTitle":"Design",
          "data":[
            {
              "title":"apple watch",
              "id":"",
              "image":"http://127.0.0.1/shorpi/assets_media/product_variation_images/pr_img1x61c19ec40f2a938199387421Dec20213810:12:4462_flx.jpeg",
            },
            {
              "title":"apple watch series 4",
              "id":"",
              "image":"http://127.0.0.1/shorpi/assets_media/product_variation_images/pr_img1x61c19ec40e72233379637621Dec202121310:12:44242_flx.jpeg",
            },
            {
              "title":"apple watch series 6",
              "id":"",
              "image":"http://127.0.0.1/shorpi/assets_media/product_variation_images/pr_img1x61c19ec40ee6e78427156921Dec202111610:12:44199_flx.jpeg",
            }

          ]
        }

      ],


      productSearchResults:[
        'http://127.0.0.1/shorpi/assets/images/balenc-3.jpeg',
        'http://127.0.0.1/shorpi/assets/images/bag1.jpg',
        'http://127.0.0.1/shorpi/assets/images/men-shirt-1.jpg',
        'http://127.0.0.1/shorpi/assets/images/balenc-2.jpeg',
        'http://127.0.0.1/shorpi/assets/images/puma3.jpeg',
        'http://127.0.0.1/shorpi/assets/images/puma3.jpeg',
        'http://127.0.0.1/shorpi/assets/images/balenc-3.jpeg',
        'http://127.0.0.1/shorpi/assets/images/bag1.jpg',
        'http://127.0.0.1/shorpi/assets/images/men-shirt-1.jpg',
        'http://127.0.0.1/shorpi/assets/images/balenc-2.jpeg',
        'http://127.0.0.1/shorpi/assets/images/puma3.jpeg',
        'http://127.0.0.1/shorpi/assets/images/puma3.jpeg',
        'http://127.0.0.1/shorpi/assets/images/balenc-3.jpeg',
        'http://127.0.0.1/shorpi/assets/images/bag1.jpg',
        'http://127.0.0.1/shorpi/assets/images/men-shirt-1.jpg',
        'http://127.0.0.1/shorpi/assets/images/balenc-2.jpeg',
        'http://127.0.0.1/shorpi/assets/images/puma3.jpeg',
        'http://127.0.0.1/shorpi/assets/images/puma3.jpeg'






      ],
      mainBannerList:[
        'banner-1.png','banner-2.png','banner-3.png','banner-4.png','banner-5.png'
      ],


      hotDeals:[
        {image:'vert-banner-5.png',title:''},
        {image:'vert-banner-2.png',title:''},
        {image:'vert-banner-3.png',title:''},
          {image:'vert-banner-4.png',title:''},

      ],
      banners:[
          {image:'banner-1.png',title:''},
      ],
      subCategoryViewActive:false,
    }
  },  methods: {



    getProductMedia(i,number){
        return this.productSearchResults[i];
    },
      getTransitionName(){
        //this.$route

      },
      getProductPhoto(image){
        return image
      },
      switchProductMenu(index){


      },
      getMenuClass(index){

        return index==0?'product-detail-menu-active':'product-detail-menu'

      },

      keepSubCategoryViewVisible(){
        this.subCategoryViewActive=true
      },
      hoverCategoryView(action){
        action==1?  this.subCategoryViewActive=true:  this.subCategoryViewActive=false;

      },
      hoverProductCategory(action,category){
          //this.subCategoryViewActive = !this.subCategoryViewActive;
          this.activeProductCategory.title=category.title;
          this.activeProductCategory.subCategories=category.subCategories

      },
      hoverProductCategoryContainer(action){
        action==1?  this.subCategoryViewActive=true:  this.subCategoryViewActive=false;

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
        let arrPages=[]//getPageRoutes()
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




}

</script>

<style scoped>

/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}
.ant-carousel :deep(.slick-slide img) {
  display: block;
  margin: auto;
  max-width: 100%;
  background:#ffffff;

}
.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}
.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
  margin-top:4px  !important;


}
.ant-carousel :deep(.slick-thumb li img) {
  width: 60px;
  height: 45px;
  filter: grayscale(100%);
  transition-delay:200ms;
  transition-duration:200ms;
  opacity:0.4;


  display: block;
  margin-top:4px  !important;

}
.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
  opacity:1;

}
</style>
