<template>
  <div style="width:100vw; height:100vh; overflow-y:scroll; float:left; user-select:none; ">
    <topBarWidget/>
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
      <div  style="width:1100px;  min-height:700px;  margin-top:2px; background:#ffffff; float:left; user-select:none; ">
        <div  style="width:100%;  height:90%; overflow-y:scroll;   background:#ffffff; float:left; user-select:none; ">
          <div class="centered-position" style="width:100%;  height:60px;  box-shadow:0px 0px 3px 1px #f1f1f1; background:#ffffff; float:left; user-select:none; ">
            <div class="" style="width:96%; height:100%; margin-left:10px; float:left; ">
              <div id="" class="" align="left" style="width:100%; max-height:300px; position:relative; font-size:16px; margin-bottom:10px; margin-top:10px; font-family:Montserrat-Bold; color:#000000; left:0px;">
                Checkout
              </div>
            </div>
          </div>
          <div class="centered-position" style="width:100%;  height:auto;  box-shadow:0px 0px 3px 1px #f1f1f1; border-bottom:1px solid #f1f1f1; margin-bottom:20px; background:#ffffff; float:left; user-select:none; ">
            <div class="" style="width:96%; height:100%; margin-left:10px; float:left; ">
              <div id="" class="" align="left" style="width:100%; height:30px; position:relative; font-size:13px; margin-bottom:10px; margin-top:10px; font-family:Montserrat-SemiBold; color:#888888; left:0px;">
                Shipping Addresses
              </div>
              <div id="" class="" align="left" style="width:100%; min-height:40px; position:relative; font-size:13px; margin-bottom:10px; margin-top:10px; font-family:Montserrat-SemiBold; color:#000000; left:0px;">
                No 12 Malibu point carlifornia, Usa
                <span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; font-family:Montserrat-Regular;  position:relative; left:6px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; cursor:pointer; padding-right:6px; line-height:30px;  "> Default</span>
              </div>
              <div id="" class="" align="left" style="width:100%; min-height:40px; position:relative; font-size:13px; margin-bottom:10px; margin-top:10px; font-family:Montserrat-SemiBold; color:#000000; left:0px;">
                No 122 Malibu point carlifornia, Usa
              </div>


            </div>
          </div>

          <div style="width:100%;  height:auto;   background:#ffffff; float:left; user-select:none; ">




            <div v-for="(cartItem,index) in cartItems" :key="index"  @click="" id="product-preview-details-containerid10l4pyy3med2bsschrb7o" class="featured-products-style-" data-product_id="416" style="width:98%; height:140px; cursor:pointer;  background:#fafafa;  margin-bottom:10px; margin-left:1%;  margin-right:4px; float:left; ">

              <div id="product-details-container" class="product-details-container" align="left" style=" width:100%; height:40px; float:left;  position:relative; overflow:hidden; ">
                <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:14px; margin-top:10px; color:#404040; font-family:Montserrat-Bold; font-size:11px; ">
                  Apple Store>
                </div>
              </div>
              <div id="product-details-container" class="product-details-container" align="left" style=" width:100%; height:100px; float:left; position:relative; overflow:hidden; ">
                <div class="centered-position" id="product-avatar-container" style=" width:20px; height:100px; overflow:hidden; float:left; ">
                </div>
               <div id="product-avatar-container" class="" style=" width:100px; height:100px; overflow:hidden; float:left; ">
                  <img :src="getProductPhoto('http://127.0.0.1/shorpi/assets_media/product_variation_images/pr_img1x61c19ec40f2a938199387421Dec20213810:12:4462_flx.jpeg')" id="product-avatar" class="product-avatar-" style=" width:80px; max-height:80px; margin-top:10px; float:left; ">
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:16%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left;  border-radius:10px; font-size:14px; margin-top:10px; color:#404040; font-family:Montserrat-SemiBold; font-size:11px; ">
                   {{cartItem.title}}
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:16%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:14px; margin-top:10px; color:#404040; font-family:Montserrat-Medium; font-size:11px; ">
                   iphone 13; black;
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:10%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:14px; margin-top:10px; color:#404040; font-family:Montserrat-Bold; font-size:11px; ">
                   ${{cartItem.unitPrice}}
                 </div>
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:16%; height:100px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left; border-radius:10px; font-size:14px; margin-top:0px; color:#404040; font-family:Montserrat-Bold; font-size:11px; ">


                 </div>
               </div>

               <div id="product-details-container" class="centered-position"  align="left" style=" width:16%; height:100px; float:left; position:relative; overflow:hidden; ">

               </div>

              </div>





            </div>
          </div>
        </div>


        <div class="centered-position" style="width:1100px;  height:10%; position:fixed; bottom:0vh;  box-shadow:0px 0px 3px 1px #f1f1f1; background:#ffffff; float:left; user-select:none; ">
          <div  style="width:86%;  height:100%;  box-shadow:0px 0px 3px 1px #f1f1f1; background:#ffffff; float:left; user-select:none; ">
            <div class="centered-position" style="width:30%;  height:100%; vertical-align:middle;  background:#ffffff; float:left; user-select:none; ">

            </div>
            <div class="centered-position" style="width:20%;  height:100%; vertical-align:middle;  background:#ffffff; float:left; user-select:none; ">

            </div>
            <div class="centered-position" style="width:20%;  height:100%; vertical-align:middle;  background:#ffffff; float:left; user-select:none; ">

            </div>
            <div class="centered-position" style="width:30%;  height:100%; vertical-align:middle; box-shadow:0px 0px 3px 1px #f1f1f1; background:#ffffff; float:left; user-select:none; ">
              <div id="product-title" class="" style=" height:auto; width:90%; margin-left:10px;  float:left;  border-radius:10px; font-size:12px;  color:#404040; font-family:Montserrat-Bold;  ">
                Price: <span style="color:#888888; font-size:16px;">${{ getDecimalValue(total)}}</span>
              </div>
            </div>




          </div>
          <div  style="width:14%;  height:100%; vertical-align:middle; box-shadow:0px 0px 3px 1px #f1f1f1; background:#ffffff; float:left; user-select:none; ">

              <div id="" class="buy-now-button" style="width:120px; height:34px; position:relative; text-align:center;  top:20px; border-radius:20px;  font-family:Montserrat-Bold; font-size:12px;  line-height:34px; cursor:pointer; color:#f1f1f1; margin-left:10px; float:left; background:#000000; ">
                Pay Now
              </div>
          </div>

        </div>


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
      shipping:0,
      discounts:0,
      total:1000,

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
      checked:false,
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
      checkAllItems(){
        this.checked=!this.checked
        if(this.checked==true){
          this.total=0
          for(let i=0; i<this.cartItems.length; i++){
              this.cartItems[i].isChecked=true
              this.total=Number(this.total+ this.cartItems[i].amount)
          }
        }else{
          for(let i=0; i<this.cartItems.length; i++){
              this.cartItems[i].isChecked=false
              this.total=0
          }
        }



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
      calculateAmount(index){

      },
      increaseQuantity(index){
          this.cartItems[index].quantity>0?this.cartItems[index].quantity+=1:this.cartItems[index].quantity=this.cartItems[index].quantity
          this.cartItems[index].amount=Number(this.cartItems[index].quantity*this.cartItems[index].unitPrice)
          this.cartItems[index].amount=Math.round(this.cartItems[index].amount * 100) / 100;
          this.total=0
          for(let i=0; i<this.cartItems.length; i++){
            if( this.cartItems[i].isChecked==true){
              this.total=Number(this.total+ this.cartItems[i].amount)
            }
          }


      },
      decreaseQuantity(index){
          this.cartItems[index].quantity>1?this.cartItems[index].quantity-=1:this.cartItems[index].quantity=this.cartItems[index].quantity
          this.cartItems[index].amount=Number(this.cartItems[index].quantity*this.cartItems[index].unitPrice)
          this.cartItems[index].amount=Math.round(this.cartItems[index].amount * 100) / 100;
          this.total=0
          for(let i=0; i<this.cartItems.length; i++){
            if( this.cartItems[i].isChecked==true){
              this.total=Number(this.total+ this.cartItems[i].amount)
            }
          }
      },
      hoverProductCategory(action,category){
          //this.subCategoryViewActive = !this.subCategoryViewActive;
          this.activeProductCategory.title=category.title;
          this.activeProductCategory.subCategories=category.subCategories

      },
      hoverProductCategoryContainer(action){
        action==1?  this.subCategoryViewActive=true:  this.subCategoryViewActive=false;

      },
      addCommaToNumber(number) {
        return Number(number).toLocaleString();
      },
      getQuantity(value){
        return value
      },
      getDecimalValue(value){
        let amount
        amount= Number(Math.round(value * 100) / 100);
        // Number(1).toFixed(2)

        return Number(amount).toFixed(2)
          //return this.addCommaToNumber(Number(amount).toFixed(2))

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

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance:textfield;
}
</style>
