

<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <!--- v-for="slide in 10" :key="slide" @click="getFlashSaleProducts(index.index,channelItem.id)"  --->
    <!----- @click="goDetail('/details/')" ---->
    <Slide  v-for="(artUrl,index) in nftArtList.artUrl" :key="index"   >
      <div class="carousel__item" >
            <div style="width:240px; height:410px; margin-top:4px; margin-bottom:4px; box-shadow:0px 0px 0px 1px #f1f1f1; background:#ffffff; border-radius:20px; cursor:pointer; overflow:hidden;   " >             
                <div align="left" style="height:40px; width:100%; margin-top:20px; ">
                  <router-link to="/seller-store" ><img src='@/assets/images/music-img-4.jpeg' style="height:28px; width:28px; position:relative;  box-shadow:0px 0px 0px 4px #f1f1f1; border-radius:100px; left:24px; top:10px; " /> 
                  </router-link>
                  <img @click="showItemOptions()" src='@/assets/icons/nft-show-more.png' style="height:28px; width:28px; position:relative; float:right; right:24px; box-shadow:0px 0px 8px 1px #f1f1f1; border-radius:100px; top:10px; " /> 
                </div>
                <div style="height:200px; width:100%; overflow:hidden; " > 
                  <img :src="getImageUrl(artUrl)"  style="height:186px; width:88%; position:relative; top:10px; border-radius:12px; float:left; left:6%; " /> 
                </div>
                <div style="height:40px; width:100%; ">
                  <div  align="center" style=" width:70%; font-weight:bold; color:#000000; float:left; left:20px; font-size:16px; line-height:20px; top:10px; text-align:left; font-family:Poppins-Medium; position:relative; ">  
                    {{nftArtList.brief[index]}}
                  </div>
                  <div  align="center" style=" width:30%; font-weight:bold; color:#000000; float:right; right:0px; font-size:16px; line-height:20px; top:10px; text-align:left; font-family:Poppins-Medium; position:relative; ">  
                    <img src='@/assets/icons/polygon-matic.png' style="height:24px; width:24px; position:relative; float:right; background:#fbf8cc; box-shadow:0px 0px 0px 0px #f1f1f1; border-radius:100px; right:20px; top:0px; " /> 
                  </div>
                </div>
                <div style="height:40px; width:100%; margin-bottom:10px; ">
                  <div  align="center" style=" width:100%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:4px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    {{nftArtList.price[index]}} <span style="color:#06D6A0; font-size:16px; ">MATIC </span>
                  </div>
                  <div  align="center" style=" width:100%; font-weight:bold; color:#404040; margin-top:0px; float:left; left:20px; font-size:14px; line-height:20px; margin-top:10px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    {{nftArtList.bids[index]}} <span style="color:#888888; font-family:Poppins-SemiBold; " >Bids</span>
                  </div>
                </div>
                <div style="height:30px; width:100%; margin-top:20px;">
                  <div  align="center" style=" width:40%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:0px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    <input type="button" value="Buy Now" style="height:28px; width:90px; cursor:pointer; border-radius:4px; background:#DCFFF9; outline:none; border:none; font-family:Poppins-SemiBold;  font-size:13px; line-height:20px;  " >
                  </div>
                   <div  align="center" style=" width:40%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:0px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    <input type="button" value="Bid" style="height:28px; width:70px; cursor:pointer; border-radius:4px; background:#f1f1f1; outline:none; border:none; margin-left:20px; font-family:Poppins-SemiBold;  font-size:13px; line-height:20px; padding-left:4px; " >
                  </div>
                </div>
                <itemOptionsPopupWidget v-if="popups.itemOptionsPopup.canShowPopup" />

            </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>

</template>

<script lang="jsx">
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import itemOptionsPopupWidget from  '../../modal/itemOptions.vue';

//import Vue from 'vue';
//import { VueContext } from 'vue-context';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'LatestListCarouselWidget',

  components: {
    Carousel,
    Slide,
    Navigation,//VueContext,
    itemOptionsPopupWidget,
  },
  props:{

  },
  methods:{
      /**
       * Alert the text of the menu item that was clicked on.
       * 
       * @param {string} text
       */
      showItemOptions(){
        this.popups.itemOptionsPopup.canShowPopup=true;

      },
      onClick (text) {
          alert(`You clicked ${text}!`);
      },
      goDetail(goUrl){
       
        this.$router.push(goUrl)

      },
      handleClick (event, item) {
          this.$refs.vueSimpleContextMenu.showMenu(event, item)
      },
      optionClicked (event) {
          window.alert(JSON.stringify(event))
      },
       getImageUrl (name) {
      //console.log("art url: ",name)
      return '/src/assets/images/'+name;
        //return new URL(`@/assets/images/${name}`, import.meta.url).href
    }

  },
  data: () => ({
    // carousel settings
       popups:{
      accountPopup:{
        canShowPopup:false,
      },
      itemOptionsPopup:{
        canShowPopup:false,

      },


    },
    nftArtList:{
      artUrl:['music-img-1.jpeg','music-img-4.jpeg','music-img-3.jpeg','music-img-2.jpeg','music-img-5.jpeg','music-img-6.jpeg','music-img-7.jpeg','music-img-8.jpeg','music-img-9.jpeg'],
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
        itemsToShow: 4.6,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },

  }),
  
});
</script>