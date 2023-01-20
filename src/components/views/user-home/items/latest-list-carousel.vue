

<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <!--- v-for="slide in 10" :key="slide" @click="getFlashSaleProducts(index.index,channelItem.id)"  --->
    <Slide  v-for="(artUrl,index) in nftArtList.artUrl" :key="index"   >
      <!------->
      <div class="carousel__item" >
          <div style="width:240px; height:410px; margin-top:4px; margin-bottom:4px; display:grid; box-shadow:0px 0px 0px 1px #f1f1f1; background:#ffffff; border-radius:20px; cursor:pointer;    " >             


            <!-------->
            <div style="width:240px; height:410px; margin-top:0px; margin-bottom:4px; position:absolute; box-shadow:0px 0px 0px 1px #f1f1f1; background:#ffffff; border-radius:20px; cursor:pointer;  " >             
                <div align="left" style="height:40px; width:100%; margin-top:20px; ">
                  <img src='@/assets/images/music-img-11.gif' style="height:28px; width:28px; position:relative;  box-shadow:0px 0px 0px 4px #f1f1f1; border-radius:100px; left:24px; top:10px; " /> 
                 
                  <div align="center" style=" width:30px; height:30px;  font-weight:bold; color:#000000; float:right; margin-right:20px; line-height:34px; top:10px; text-align:left;  position:relative; ">  
                    <img src='@/assets/icons/nft-show-more.png' :id="'opt-id-idx'+index" @click="showItemOptions(index)" style="height:28px; width:28px; position:relative; box-shadow:0px 0px 8px 1px #f1f1f1; border-radius:100px; " /> 
                  </div>
                   <div align="center" style=" min-width:60px; max-width:120px; height:30px; background:#fafafa; padding-left:10px; padding-right:10px;  margin-right:20px; border-radius:12px; top:10px; color:#000000; float:right; text-align:left;  position:relative; ">  
                    <img src='@/assets/icons/music-like.png' style="height:18px; width:18px; cursor:pointer;  position:relative; top:5px; margin-left:6px; margin-right:6px; " /> 
                    <span style="color:#404040; font-family:Poppins-Medium; font-size:11px; line-height:30px; top:0px;  font-family:Montserrat-Bold; right:2px; position:relative;  ">{{ nftArtList.likes[index]}}</span>
                      
                  </div>
                  <!---
                  <img src='@/assets/icons/nft-show-more.png' :id="'opt-id-idx'+index" @click="showItemOptions(index)" style="height:28px; width:28px; position:relative; float:right; right:24px; box-shadow:0px 0px 8px 1px #f1f1f1; border-radius:100px; top:10px; " /> 
--->
                </div>
                <div style="height:200px; width:100%; overflow:hidden; " >
                  <img  :src="getImageUrl(artUrl)"  @click="goDetail('/details/')"   style="height:186px; width:88%; position:relative; top:10px; border-radius:12px; float:left; left:6%; " /> 
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
                    {{nftArtList.price[index]}} <span style="color:#06D6A0; font-size:16px; ">MATIC</span>
                  </div>
                  <div  align="center" style=" width:100%; font-weight:bold; color:#404040; margin-top:0px; float:left; left:20px; font-size:14px; line-height:20px; margin-top:10px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    {{nftArtList.bids[index]}} <span style="color:#888888; font-family:Poppins-SemiBold; " >Bids</span>
                  </div>
                </div>
                <div style="height:30px; width:100%; margin-top:20px;">
                  <div  align="center" style=" width:40%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:0px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    <input type="button" value="Invest" style="height:28px; width:90px; cursor:pointer; border-radius:4px; background:#DCFFF9; outline:none; border:none; font-family:Poppins-SemiBold;  font-size:13px; line-height:20px;  " >
                  </div>
                   <div  align="center" style=" width:40%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:0px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    <input type="button" value="Bid" style="height:28px; width:70px; cursor:pointer; border-radius:4px; background:#f1f1f1; outline:none; border:none; margin-left:20px; font-family:Poppins-SemiBold;  font-size:13px; line-height:20px; padding-left:4px; " >
                  </div>
                 
                </div>
                <!-------->
                <div :id="'item-opt-id-idx'+index" style="width:240px; height:410px; top:0px; display:none; position:absolute; margin-bottom:0px;  z-index:22222222277; border-radius:20px; cursor:pointer;   " >                                  
                  <div id="item-options-contents-target" class="contents-target" style="width:80%; height:320px;  background:#ffffff;   box-shadow:0px -0.4px 30px 4.0px #f0f0f0; border:1px solid #f1f1f1;   top:60px; left:8%; position:relative;  border-radius:12px;  ">
                    <div style="height:30px; width:100%; "></div>
                    <router-link to="/" ><div class="menu-item-popup">Buy Now <span style="color:#06D6A0; font-size:12px; position:relative; left:10px; "> MATIC</span></div>  </router-link>
                      <div style="height:20px; width:100%; margin-top:0px; float:left;  ">
                      <div style="height:2px; width:70%; margin-top:10px; margin-left:20px;  float:left; border-top:1px solid #f1f1f1; ">
                      </div>
                    </div>
                    <router-link to="/" ><div class="menu-item-popup">Bid</div>  </router-link>
                    <router-link to="/" ><div class="menu-item-popup">Invest</div></router-link>
                     <div style="height:20px; width:100%; margin-top:0px; float:left;  ">
                      <div style="height:2px; width:70%; margin-top:10px; margin-left:20px;  float:left; border-top:1px solid #f1f1f1; ">
                      </div>
                    </div>
                    <router-link to="/" ><div class="menu-item-popup">View Activity</div> </router-link>
                    <router-link to="/" ><div class="menu-item-popup">Report</div> </router-link>
                  </div>
                </div>


            </div>


          

           
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

//import itemOptionsPopupWidget from  '../../modal/itemOptions.vue';
//import Vue from 'vue';
//import { VueContext } from 'vue-context';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'LatestListCarouselWidget',
  created() {
    this.updateTopDistance("home-container");

    document.querySelector('body').addEventListener("click",()=>{
      //alert('click')
       if(this.visibleModal.modal!=''){
          this.visibleModal.modal. style.display='none';
          this.visibleModal.visible=false;
       }
    
     

    });
  },
  mounted() {
    this.updateTopDistance("home-container");
  },
  components: {
    Carousel,
    Slide,
    Navigation,//VueContext,
     //itemOptionsPopupWidget,
  },
  props:{

  },
  methods:{
      /**
       * Alert the text of the menu item that was clicked on.
       * 
       * @param {string} text
       */
      updateTopDistance(someDivEl){
        /*
        window.addEventListener('scroll', function() {
          let someDiv = document.getElementById(someDivEl);
          let distanceToTop = someDiv.getBoundingClientRect().top;
          this.distanceTop=distanceToTop;
          console.log(this.distanceTop)
          //return distanceToTop;
        });
        */

      },
      getScreenCordinates(obj) {
        var p = {};
        p.x = obj.offsetLeft;
        p.y = obj.offsetTop;
        while (obj.offsetParent) {
            p.x = p.x + obj.offsetParent.offsetLeft;
            p.y = p.y + obj.offsetParent.offsetTop;
            if (obj == document.getElementsByTagName("body")[0]) {
                break;
            }
            else {
                obj = obj.offsetParent;
            }
        }
        return p;
    },
    getPosition(el) {
      var xPosition = 0;
      var yPosition = 0;
      while (el) {
        if (el.tagName == "BODY") {
          // deal with browser quirks with body/window/document and page scroll
          var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
          var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
          xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
          yPosition += (el.offsetTop - yScrollPos + el.clientTop);
        } else {
          xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
          yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        }
        el = el.offsetParent;
      }
      return {
        x: xPosition,
        y: yPosition
      };  
    },
      getOffset( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
              _x += el.offsetLeft - el.scrollLeft;
              _y += el.offsetTop - el.scrollTop;
              el = el.offsetParent;
        }
        return { top: _y, left: _x };
    },
    showItemOptions(clickedElement){
      //clickedElement="opt-id-idx"+clickedElement;
      console.log("item-opt-id-idx"+clickedElement, "opt-id-idx"+clickedElement )

         let itemOptions=document.getElementById("item-opt-id-idx"+clickedElement);
         clickedElement=document.getElementById("opt-id-idx"+clickedElement);

        


         //this.popups.itemOptionsPopup.canShowPopup=true;
           

          //let getOffset=this. getOffset;
          //let getScreenOffset=this.getScreenCordinates;
          //let distanceTop=this.distanceTop;
          //let getPosition=this.getPosition;

          

          setTimeout(function( targetModal ){

          //let leftPosition = getOffset( clickedElement).left;
          //let topPosition = getOffset( clickedElement ).top;
          //console.log("x: "+ leftPosition);
          //console.log("y: "+ topPosition);

        
          console.log("clicked element: ",clickedElement)


          //let itemOptionsWidget=document.getElementById("item-options-popup-modal")

          let optionsContainer=document.getElementById("item-options-contents-target");

          //console.log(itemOptionsWidget)
          console.log(optionsContainer)


         //itemOptionsWidget.style.display="block"
         itemOptions.style.height="10px";

         window.$(itemOptions).animate(
           { 
              "height":"410px"
           },200 )


          itemOptions.style.display="block"

          targetModal.visible= true;
           itemOptions.style.position="fixed"
          targetModal.modal=itemOptions

         /*

          optionsContainer.style.left=leftPosition+"px";
          optionsContainer.style.top=topPosition+"px"

            let t=window.pageYOffset + clickedElement.getBoundingClientRect().top
          optionsContainer.style.top= Number(getScreenOffset (clickedElement)-distanceTop)+"px";
          optionsContainer.style.left=getScreenOffset (clickedElement).x+"px"




          */
         //console.log("x:",getPosition(clickedElement).x,"y:",getPosition(clickedElement).y)
        
          //optionsContainer.style.left=getPosition(clickedElement).x +"px";
          //optionsContainer.style.top=Number(getPosition(clickedElement).y-300)+"px"


          
           let vueApp=document.getElementById("vue-app")
           vueApp.style.overflowY="hidden"
            let app=document.getElementById("app")
            app.style.overflowY="hidden"
          },200,this.visibleModal)
     

      },
      onClick (text) {
          alert(`You clicked ${text}!`);
      },
      goDetail(goUrl){

        let id = 1111;
        //this.$router.push(goUrl+${})
        this.$router.push(goUrl+`${id}` )

       

/*
        this.$router.push({
           //path:goUrl,
            name: 'itemDetailsWidget',
            param: { 'var1':'', 'var2': '' }
          //goUrl
        })
        */
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
    visibleModal:{
      modal:'',
      visible:false,
    },
    distanceTop:0,
        popups:{
      accountPopup:{
        canShowPopup:false,
      },
      itemOptionsPopup:{
        canShowPopup:false,

      },


    },
    nftArtList:{
      artUrl:['music-img-10.gif','music-img-6.jpeg','music-img-11.gif','music-img-7.jpeg','music-img-2.jpeg','music-img-5.jpeg','music-img-6.jpeg','music-img-7.jpeg','music-img-8.jpeg','music-img-9.jpeg'],
      brief:['Pokens Face','June Baby girl','Nanjing Panda','Cute Poppies','Ferrow Wellows','Hot Bummies','Angel Wings','Dancing Mouse','Sindi Samdra'],
      description:[],
      price:['0.012','0.1','0.01','0.33','2.0','0.12','1.03','0.06','0.17'],
      bids:['122','0','10','24','2','14','102','6','17'],
      likes:['122','0','10','24','2','14','102','6','17'],

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

<style scoped>
.menu-item-popup {
    cursor: pointer;
    margin-left:6%;
    font-size: 12px;
    float: left;
    padding-top:4px; padding-bottom:8px;
    height:40px;
    width: 84%;
   
    padding-left:12px;
    padding-right:12px;
    line-height:34px;
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

    transition-duration: 133ms;
    background:#f1f1f1;
   
    color:#000000;
    transition-delay:122ms;
}
</style>