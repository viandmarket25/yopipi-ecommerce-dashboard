<template>
  <div  class="centered-position" style="width:100vw; height:252px; display:flex; overflow:hidden; margin-top:20px; justify-items:center; float:left; user-select:none; ">
    <div @mouseleave="hoverCategoryView(0)"  style="min-width:1100px;  max-width:1100px;  height:250px;  box-shadow:0px 0px 0px 1px #f1f1f1; ">
      <div style="width:100%; height:280px;  margin-top:0px; float:left;  ">
        <div style="width:14%; height:280px; margin-right:0.4%; margin-left:0.4%; float:left;  ">
          <img src="@/assets/images/vert-banner-3.png" style="width:100%; height:100%; background-size:100% 100%; " />
        </div>
        <div style="width:84%; height:250px; margin-left:0.4%; float:left;  ">


            <div v-for="(flashDeal,index) in flashDealList"  :key="index" @click="goProductDetail('')" id="product-preview-details-containerid10l4pyy3med2bsschrb7o" class="featured-products-style-" data-product_id="416" style="width:150px; height:250px; cursor:pointer;   margin-top:0px; margin-left:0px;  margin-right:4px; float:left; ">
               <div id="product-avatar-container" class="" style=" width:100%; height:130px; overflow:hidden; float:left; ">
                  <img :src="getFlashDeal(flashDeal)" id="product-avatar" class="product-avatar-" style=" width:100%; height:150px; float:left; ">
               </div>
               <div id="product-details-container" class="product-details-container" align="left" style=" width:100%; height:130px; float:left; position:relative; overflow:hidden; ">
                 <div id="product-title" class="" style=" height:auto; width:90%; float:left; margin-left:4px; border-radius:10px; font-size:14px; margin-top:4px; color:#404040; font-family:Montserrat-Regular; font-size:11px; ">
                   Iphone 12
                 </div>
                 <div id="product-price" class="" style="height:24px; width:90%; float:left; margin-left:4px; border-radius:10px;   margin-top:2px; color:#000000;  font-family:Montserrat-SemiBold; font-size:16px; ">
                   <span id="product-price-sign" class="" style="font-size:11px; font-family:Montserrat-Regular; margin-right:0.4px; ">$</span>
                   75,666<span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; font-family:Montserrat-Regular;  position:relative; left:6px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; padding-right:6px; line-height:30px;  ">-5.8%</span>
                 </div>
                 <div id="product-price" class="" style="height:20px; width:90%; float:left; margin-left:4px; border-radius:10px; font-size:11px; text-decoration: line-through; padding:3px; margin-top:0px; color:#404040; font-family:Montserrat-SemiBold;  ">
                   <span id="product-price-sign" class="" style="font-size:11px; font-family:Montserrat-Regular; text-decoration:none; margin-right:0.4px; ">$</span> 75,666</div>
                 <div id="product-price" class="" style="height:20px; width:100%; float:left; border-radius:10px; font-size:11px; padding:3px; margin-top:0px; color:#000000; opacity:0.8; font-family:Montserrat-SemiBold;  "><span id="product-price-sign" class="" style="font-size:10px; font-family:Montserrat-Medium; margin-right:0.4px; border-radius:4px; background:#d8f3dc; padding-top:2px; padding-bottom:2px; top:-2px; padding-left:6px; padding-right:6px; ">124 sold</span>
                 </div>

               </div>
           </div>



        </div>



      </div>



    </div>

  </div>
</template>



<script>
import userSummaryWidget from './user-summary.vue';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default {
  name: "userProfileWidget",
  components:{
      userSummaryWidget, LeftCircleOutlined,
      RightCircleOutlined,
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
      flashDealList:[
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
      activeProductCategory:{
        title:"Fashion",
        subCategories:[

        ],
        itemPreviewProducts:[

        ],
        featuredBrands:[

        ],
      },
      productCategories:[

        {
            title:"Fashion",
            subCategories:[
                "Men Shoes","Men Shirts","Men Watches","Men Pants","Men Fashion","Women Bags",
                "Women Shoes","Women Shirts","Women Watches","Women Pants","Women Fashion","Women Fashion",
            ],
            itemPreviewProducts:[
                { title:"Balenciaga",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Woman Bag",imgSrc:"/shorpi/assets/images/bag1.jpg" },
                { title:"Shirt",imgSrc:"/shorpi/assets/images/men-shirt-1.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-2.jpeg" },
                { title:"Balenciaga",imgSrc:"/shorpi/assets/images/puma3.jpeg" },
                { title:"Men Hat",imgSrc:"/shorpi/assets/images/puma1.jpg" },
            ],
            featuredBrands:[
                { title:"Adiddas",imgSrc:"/shorpi/assets/images/logo-adiddas.jpg" },
                { title:"Balenciaga",imgSrc:"/shorpi/assets/images/logo-balenciaga.jpg" },
                { title:"Fila",imgSrc:"/shorpi/assets/images/logo-fila.png" },
                { title:"Nike",imgSrc:"/shorpi/assets/images/logo-nike.png" },
                { title:"Puma",imgSrc:"/shorpi/assets/images/logo-puma.png" }

            ],

      },
      {
          title:"Phones",
          subCategories:[
              "Handsets ","Smartphones","iphones","iPads","Android Tablets","Adapters","Batteries",
              "Battery Chargers","Bluetooth Headsets","Screen Protectors","Smart Watches","Selfie Sticks",
              "Chargers",
          ],
          itemPreviewProducts:[
              { title:"iphone 13",imgSrc:"/shorpi/assets/images/phone-1.jpeg" },
              { title:"Huawei P30",imgSrc:"/shorpi/assets/images/phone-2.jpg" },
              { title:"Xiaomi m2",imgSrc:"/shorpi/assets/images/phone-3.png" },
              { title:"Ipad pro",imgSrc:"/shorpi/assets/images/tab-1.jpg" },
              { title:"Beats Headphone",imgSrc:"/shorpi/assets/images/headphone-1.png" },
              { title:"Airpod Pro",imgSrc:"/shorpi/assets/images/airpod-1.jpg" },
          ],
          featuredBrands:[
              { title:"Apple",imgSrc:"/shorpi/assets/images/logo-apple.png" },
              { title:"Huawei",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
              { title:"Lg",imgSrc:"/shorpi/assets/images/logo-lg.png" },
              { title:"Motorolla",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
              { title:"Xiaomi",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

          ],
      },
      {
          title:"Computing",
          subCategories:[
              "Laptops","Desktops","External Hard Drives","USB Flash Drives","Antivirus","Inkjet Printers","Laser Printers",
              "Printer Ink & Toner","Keyboards & Mice","Uninterrupted Power Supply","Memory Cards","Batteries",
              "Scanners","Video Projectors",
          ],
          itemPreviewProducts:[
              { title:"iphone 13",imgSrc:"/shorpi/assets/images/phone-1.jpeg" },
              { title:"Huawei P30",imgSrc:"/shorpi/assets/images/phone-2.jpg" },
              { title:"Xiaomi m2",imgSrc:"/shorpi/assets/images/phone-3.png" },
              { title:"Ipad pro",imgSrc:"/shorpi/assets/images/tab-1.jpg" },
              { title:"Beats Headphone",imgSrc:"/shorpi/assets/images/headphone-1.png" },
              { title:"Airpod Pro",imgSrc:"/shorpi/assets/images/airpod-1.jpg" },
          ],
          featuredBrands:[
              { title:"Apple",imgSrc:"/shorpi/assets/images/logo-apple.png" },
              { title:"Huawei",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
              { title:"Lg",imgSrc:"/shorpi/assets/images/logo-lg.png" },
              { title:"Motorolla",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
              { title:"Xiaomi",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

          ],
      },

      {
            title:"Baby Care Products",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }


                ],

        },

        {
          title:"Kitchen",
            categoryLabel:"",
            subCategories:[

            ],
            itemPreviewProducts:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
            ],
            featuredBrands:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }


            ],
        },



    {
        title:"Office",
            categoryLabel:"",
            subCategories:[

            ],
            itemPreviewProducts:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
            ],
            featuredBrands:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

            ],
        },

    {
        title:"Equipments",
            categoryLabel:"",
            subCategories:[

            ],
            itemPreviewProducts:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
            ],
            featuredBrands:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

            ],
        },

    {
        title:"Books",
            categoryLabel:"",
            subCategories:[

            ],
            itemPreviewProducts:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
            ],
            featuredBrands:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

            ],
        },

        {
            title:"Gaming",
                categoryLabel:"",
                subCategories:[
                    "Playstation 3","Playstation 3","Playstation 3","Playstation 2","XBOX","XBOX One","XBOX 360"," XBOX",
                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
          title:  "Assessories",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
          title: "Tools",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Machinery",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Electronics",
                categoryLabel:"",
                subCategories:[
                    "Televisions","Smart TVs","DVD Players & Recorders","Home Theatre Systems","Receivers & Amplifiers",
                    "Sound Bars","Projectors","Video Surveillance","Camcorders","Generators","Power Inverters","Solar & Wind Power",
                    "Stablizers",

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Home Applicances",
                categoryLabel:"",
                subCategories:[
                    "Ironing & Laundry","Kettles","Mixing & Blending","Microwave Ovens","Vacuum Cleaners","Kitchen Bundles",

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },{
            title:"Home Decoration",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Outdoor",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Sports",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Pets",
                categoryLabel:"",
                subCategories:[
                    "Dogs","Cats","Birds","Fish & Aquatic Pets",
                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }
                ],

        },

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
      goProductDetail(id){
        //this.transitionName = 'slither';

        this.$router.push('/details')

      },


      goTourToday(){
        this.$router.push('/tour-today')
      },
      goModule(index,path){
        //this.transitionName = 'slither';
        console.log(path)
        this.$router.push(path)

      },
      getFlashDeal(image){
        return image
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
