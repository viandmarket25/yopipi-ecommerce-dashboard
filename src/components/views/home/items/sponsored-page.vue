<template>
  <div  class="centered-position" style="width:100vw; height:560px; display:flex; overflow:hidden; justify-items:center; float:left; user-select:none; ">
    <div @mouseleave="hoverCategoryView(0)"  style="min-width:1100px;  max-width:1400px;  height:560px;  background:#ffffff; ">
      <div style="width:24%; height:560px; margin-right:1%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left;  ">
        <div style="width:100%; height:50px;  float:left;  ">
            <div style="width:90%; font-family:Montserrat-Bold; height:50px; font-size:16px; line-height:50px; text-align:left; margin-left:10%; " >All Categories</div>
        </div>
        <div @mouseover="hoverProductCategoryContainer(1)" style="width:100%; height:90vh;  float:left;  ">
          <div @mouseover="hoverProductCategory(1,productCategory)" @mouseleave="hoverProductCategory(0,productCategory)" v-for="(productCategory,index) in productCategories"  :key="index" class="product-category-menu" style=""  >{{productCategory.title}}</div>
        </div>
      </div>
      <div style="width:50%; height:560px; float:left; overflow:hidden; position:relative; ">
        <div style="width:100%; height:560px; float:left; overflow:hidden; position:absolute; ">
          <div @mouseover="hoverCategoryView(0)"  style="width:100%; height:40px; margin-top:2px; float:left;  ">
            <div class="centered-position" style=" width:100%; height:auto;  ">
                <router-link to="/" ><li class="category-menu-item" >Featured</li></router-link>
                <router-link to="/" ><li class="category-menu-item" >Map</li></router-link>
                <router-link to="/" ><li class="category-menu-item" >Global Market</li></router-link>
            </div>
          </div>
          <div style="width:100%; height:190px; margin-top:2px; float:left;  ">

            <div  style=" width:100%;  height:190px;   ">
              <a-carousel arrows autoplay >
                <template #prevArrow>
                  <div class="custom-slick-arrow" style="left:10px; z-index:1; ">
                    <left-circle-outlined />
                  </div>
                </template>
                <template #nextArrow>
                  <div class="custom-slick-arrow" style="right:10px">
                    <right-circle-outlined />
                  </div>
                </template>
                <div v-for="(image,index) in mainBannerList"  :key="index"  >
                    <img :src="getImageUrl(image)" style="width:100%; height:190px; " />
                </div>
              </a-carousel>
            </div>

          </div>







          <div style="width:100%; height:150px;  margin-top:6px; float:left;  ">
            <div style="width:49.6%; height:150px; margin-right:0.4%; float:left;  ">
              <img src="@/assets/images/banner-3.png" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
            <div style="width:49.6%; height:150px; margin-left:0.4%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left;  ">
              <img src="@/assets/images/banner-2.png" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
          </div>

          <div style="width:100%; height:150px;  margin-top:6px; float:left;  ">
            <div style="width:70.6%; height:150px; margin-right:0.4%; float:left;  ">
              <img src="@/assets/images/banner-3.png" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
            <div style="width:28.6%; height:150px; margin-left:0.4%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left;  ">
              <img src="@/assets/images/vert-banner-4.png" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
          </div>

        </div>
        <div v-show="subCategoryViewActive"   style="width:100%; height:560px; float:left; overflow:hidden;  z-index: 1; position:absolute; ">
          <div @mouseover="hoverCategoryView(1)" @mouseleave="hoverCategoryView(0)" style="width:98%; height:80%; margin-top:40px; float:left; background:#fcfcfc; box-shadow:0px 0px 0px 1px #f1f1f1; overflow:hidden; position:absolute; ">
            <div style="width:100%; height:50px;  float:left;  ">
                <div style="width:90%; font-family:Montserrat-Bold; border-bottom:1px solid #f1f1f1; height:50px; font-size:16px; line-height:50px; text-align:left; margin-left:6.2%; " >{{activeProductCategory.title}}</div>
            </div>
            <div  style="width:100%; height:auto;  float:left;  ">
                <div  style="width:40%; height:auto; padding-left:4%; float:left;  ">
                  <div v-for="(subCategory,index) in activeProductCategory.subCategories"  :key="index"  class="sub-category-menu" style=""  >{{subCategory}}</div>

                </div>
                <div  style="width:70%; height:auto;  float:left;  ">

                </div>


            </div>
          </div>
        </div>

        <!--
        <div style="width:100%; height:230px; overflow:hidden; margin-top:4px; float:left;  ">
          <div v-for="(hotDeal,index) in hotDeals"  :key="productCategory" style="width:32.8%; height:120px; margin-left:0.2%;  float:left;  ">
            <div style="width:100%; height:200px; margin-top:0px; float:left;  ">
              <img :src="getImageUrl(hotDeal.image)" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
          </div>
        </div>
        -->

      </div>
      <div class="" style="width:24%; height:560px; margin-left:1%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; ">
        <userSummaryWidget  msg=""/>
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

      goProductDetails(){
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
router-link{
   text-decoration: none;
}

</style>
