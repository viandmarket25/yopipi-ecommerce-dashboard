<template>

  <div style="width:100vw; height:100vh; overflow-y:scroll; float:left; user-select:none; ">
    <topBarWidget/>
    <searchBarWidget/>

    <div style="width:100vw; height:1040px; overflow-y:scroll; float:left; user-select:none; align-items:left; justify-content:center; display:flex;">
      <div  style="min-width:1100px;  max-width:1400px;  height:1000; overflow-y:scroll; box-shadow:0px 0px 0px 1px #f1f1f1; margin-top:2px; float:left; user-select:none; ">



        <div style="min-height:134px; max-height:auto; width:1100px; position:relative; float:left; box-shadow:0px 0px 0px 1px #f1f1f1; background:#fafafa; ">
            <div id="search-result-header-container" align="center" style=" height:50px; float:left; width:1100px;     ">
                <div id="search-result-header-container" style=" height:20px; line-height:20px; position:relative; left:10px; top:10px; font-size:12px; font-family:Montserrat-Medium; text-align:left; float:left; width:620px;     ">
                    Filter Products
                </div>
            </div>
            <div id="search-result-filter-container" align="center" style=" height:40px; float:left;  width:1100px;  margin-top:0px;  ">
                <div id="create-product-button" class="create-product-button" style="width:1100px; height:34px;  overflow:hidden; background:#ffffff; box-shadow:0px 0px 0px 1px #fafafa;  padding-right:0px; color:#ffffff; float:right; position:relative;  ">
                    <div class="" style="width:120px; height:34px;  float:left; box-shadow:0px 0px 0px 1px #f1f1f1; ">
                        <input type="text" value="" placeholder="Sort by" list="product-list-sort-list" style="width:100px; height:34px; border:none; outline:none; font-size:12px;  padding-left:10px; ">
                        <datalist id="product-list-sort-list" style="font-size:12px; ">
                            <option value="Low to High">
                            </option><option value="High to Low">
                        </option></datalist>
                    </div>
                    <div class="" style="width:120px; height:34px;  float:left; box-shadow:0px 0px 0px 1px #f1f1f1; ">
                        <input type="text" value="" placeholder="Price Range" list="price_range_data_source" style="width:100px; height:34px; border:none; outline:none; font-size:12px;  padding-left:10px; ">
                        <datalist id="price_range_data_source" style="font-size:12px; ">
                            <option value="1-100">
                            </option><option value="100-1000">
                            </option><option value="1000-10000">
                            </option><option value="10000-100000">
                            </option><option value="100000-10000000">
                        </option></datalist>
                    </div>
                    <div class="" style="width:140px; height:34px;  float:left; box-shadow:0px 0px 0px 1px #f1f1f1; ">
                        <input type="text" value="" placeholder="Select Category" list="category_data_source" style="width:130px; height:34px; border:none; outline:none; font-size:12px;  padding-left:10px; ">
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

                    <div class="" style="width:140px; height:34px;  float:right; box-shadow:0px 0px 0px 1px #f1f1f1; ">
                        <div id="product-list-type-container" style="width:40px; height:34px; margin-top:0px; cursor:pointer; float:right; ">
                            <img src="http://127.0.0.1/shorpi/assets/icons/list-view-products-search-results.png" style="width:20px; height:20px; top:7px; position: relative; ">
                        </div>
                        <div id="product-grid-type-container" style="width:40px; height:34px; margin-top:0px; cursor:pointer; float:right; ">
                            <img src="http://127.0.0.1/shorpi/assets/icons/grid-view-products-search-results.png" style="width:20px; height:20px; top:7px; position: relative; ">
                        </div>
                    </div>

                </div>
            </div>
            <div id="search-result-single-filter-list-container" align="center" style=" height:40px; float:left; width:1100px;     ">
                <div id="search-result-header-container" style=" min-width:80px; max-width:auto; height:20px; margin-left:6px; line-height:20px; text-align:left; border-radius:6px; position:relative;  padding:4px; color:#ffb4a2; cursor:pointer; user-select:none;  top:2px; box-shadow:0px 0px 0px 1px #fafafa; font-size:11px; font-family:Montserrat-Medium; float:left;      ">
                    iphone 13
                </div>
                <div id="search-result-header-container" style=" min-width:80px; max-width:auto; height:20px; margin-left:6px; line-height:20px; text-align:left; border-radius:6px; position:relative;  padding:4px; color:#ffafcc; cursor:pointer; user-select:none;  top:2px; box-shadow:0px 0px 0px 1px #fafafa; font-size:11px; font-family:Montserrat-Medium; float:left;      ">
                    iphone 11
                </div>
                <div id="search-result-header-container" style=" min-width:80px; max-width:auto; height:20px; margin-left:6px; line-height:20px; text-align:left; border-radius:6px; position:relative;  padding:4px; color:#8187dc; cursor:pointer; user-select:none;  top:2px; box-shadow:0px 0px 0px 1px #fafafa; font-size:11px; font-family:Montserrat-Medium; float:left;      ">
                    iphone 8
                </div>
            </div>

            <div id="search-result-label-container" align="center" style=" height:40px;  float:left; width:1100px; margin-top:10px; user-select: none;  ">
                <div id="search-result-label-data" style=" height:20px;  width:auto; line-height:20px; float:left; position:relative; left:10px; top:10px; font-size:12px; font-family:Montserrat-Medium; text-align:left; float:left;     ">
                    Results for "<span id="search-query-value" style="color:#707070; font-family:Montserrat-Regular;  ">iphon</span>"
                </div>
                <div id="search-result-label-data" style=" height:20px; width:2px; line-height:20px; float:left; position:relative; margin-left:10px; margin-right:10px; left:10px; top:10px; background:#ddd; float:left;     ">
                </div>
                <div id="search-result-label-data" style=" height:20px; width:auto; line-height:20px; float:left; position:relative; left:10px; top:10px; font-size:12px; font-family:Montserrat-Medium; text-align:left; float:left;     ">
                    Products found <span id="total-found-products-value" style="color:#707070; padding-left:6px; font-family:Montserrat-Regular;  ">12</span>
                </div>
                <div id="product-search-result-navigator" style=" max-width:400px; min-width:auto; height:40px; user-select:none; float:right; ">
                    <div id="product-navigate-left" style="width:40px; height:40px; margin-top:10px; cursor:pointer; float:left; ">
                        <img src="http://127.0.0.1/shorpi/assets/icons/navigate-left-product-search-result.png" style="width:20px; height:20px; position: relative; ">
                    </div>
                    <div id="product-navigation-positions-container" style=" max-width:400px; min-width:auto;  height:40px; color:#404040; float:left; "><div id="product-navigate-position1" class="" style=" width:auto; height:30px; margin-top:5px; cursor:pointer; font-family:Montserrat-SemiBold; box-shadow:0px 0px 0px 1px #06d6a0; margin-left:4px; font-size:13px; padding-left:10px; padding-right:10px; line-height:30px;  border-radius:2px; float:left; ">1</div></div>
                    <div id="product-navigate-right" style="width:40px; height:40px; margin-top:10px; cursor:pointer;   float:right; ">
                        <img src="http://127.0.0.1/shorpi/assets/icons/navigate-right-product-search-result.png" style="width:20px; height:20px; position: relative; ">
                    </div>
                </div>
            </div>




            <div style="width:100%; height:auto;  margin-top:0px; float:left;  ">

              <div v-for="(product,index) in productSearchResults"  :key="index" id="product-preview-details-containerid10l4pyy3med2bsschrb7o" class="featured-products-style-" data-product_id="416" style="width:152.6px; height:250px; cursor:pointer; background:#fafafa;  margin-top:16px; margin-left:3px;  margin-right:1px; float:left; ">
                 <div id="product-avatar-container" class="" style=" width:100%; height:130px; overflow:hidden; float:left; ">
                    <img :src="getProductPhoto(product)" id="product-avatar" class="product-avatar-" style=" width:100%; height:150px; float:left; ">
                 </div>
                 <div id="product-details-container" class="product-details-container" align="left" style=" width:100%; height:130px; float:left; position:relative; overflow:hidden; ">
                   <div id="product-title" class="" style=" height:auto; width:90%; float:left; margin-left:4px; border-radius:10px; font-size:14px; margin-top:4px; color:#404040; font-family:Montserrat-Regular; font-size:11px; ">
                     Iphone 12
                   </div>
                   <div id="product-price" class="" style="height:24px; width:90%; float:left; margin-left:4px; border-radius:10px;   margin-top:2px; color:#000000;  font-family:Montserrat-SemiBold; font-size:16px; ">
                     <span id="product-price-sign" class="" style="font-size:11px; font-family:Montserrat-Regular; margin-right:0.4px; ">$</span>
                     75,666<span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; font-family:Montserrat-Regular;  position:relative; left:8px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; padding-right:6px; line-height:30px;  ">-5.8%</span>
                   </div>
                   <div id="product-price" class="" style="height:20px; width:90%; float:left; margin-left:4px; border-radius:10px; font-size:11px; text-decoration: line-through; padding:3px; margin-top:0px; color:#404040; font-family:Montserrat-SemiBold;  ">
                     <span id="product-price-sign" class="" style="font-size:11px; font-family:Montserrat-Regular; text-decoration:none; margin-right:0.4px; ">$</span>75,666</div>
                   <div id="product-price" class="" style="height:20px; width:100%; float:left; border-radius:10px; font-size:11px; padding:3px; margin-top:0px; color:#000000; opacity:0.8; font-family:Montserrat-SemiBold;  "><span id="product-price-sign" class="" style="font-size:10px; font-family:Montserrat-Medium; margin-right:0.4px; border-radius:4px; background:#d8f3dc; padding-top:2px; padding-bottom:2px; top:-2px; padding-left:6px; padding-right:6px; ">124 sold</span>
                   </div>

                 </div>
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

export default {
  name: "userProfileWidget",
  components:{
      userSummaryWidget, LeftCircleOutlined,
      RightCircleOutlined,searchBarWidget,topBarWidget,
  },
  //mixins: [web3Modal],
  props: {
    msg: String
  },
  created() {


  },
  mounted() {
    //this.listenAddProductEvent()

  },
  data(){
    return {
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
      getTransitionName(){
        //this.$route

      },
      getProductPhoto(image){
        return image
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
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  justify-items:center;
  height: 190px;
  line-height: 190px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #f1f1f1;
  border-radius:100px;
  background-color:#000000;
  opacity: 0.4;

}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #000000;
}

</style>
