
<template>
<a-drawer
  :visible="editProductPhotosAndMore.visible"
   :closable="false" :width="1000" :body-style="{ paddingBottom: '80px' }">

  <div id=""  style="width:1000px; height:40px;  float:left;  ">
    <div id=""  style="width:50%; height:100%;  float:left;  ">
      <div class="centered-position" align="left" style="height:40px; width:90px; float:left;  justify-content: space-around; ">
        <div class="centered-position" style="width:40px; height:60px;  float:left;  ">
          <div id="top-list-container" class="top-list-container centered-position" style="width:30px;  height:30px; text-align:left; position:relative; border-radius:100px; font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
            <img @click="closeEditProduct()"  src="@/assets/icons/social/close-square.png" style="width:20px; height:20px; float:left; cursor:pointer;   opacity:0.8;" />
          </div>
        </div>
        <div class="centered-position" style="width:330px; height:60px;  float:left;  ">
            <div style="width:90%; font-family:Poppins-SemiBold; height:60px; font-size:12px; color:#404040; line-height:60px; text-align:left; margin-left:10px; " >Close</div>
        </div>
      </div>

    </div>
    <div id=""  style="width:50%; height:100%;  float:left;  ">
      <div id="" class="centered-position" style="width:100%; height:100%; float:left;  ">
        <div  @click="closeEditProduct()" id="" class="buy-now-button" style="width:100px; height:34px; position:relative; text-align:center;   border-radius:20px;  font-family:Poppins-SemiBold; font-size:12px;  line-height:34px; cursor:pointer; color:#404040; margin-left:10px; float:left; background:#f1f1f1; ">Cancel</div>
        <div id="add-to-cart-button" class="add-to-cart-button" style="width:110px; height:34px; position:relative; text-align:center; margin-left:20px; border-radius:20px;  font-family:Poppins-Bold; font-size:12px;  line-height:34px; cursor:pointer; color:#ffffff; right:10px;  float:left;  background:#000000;  ">Update</div>
      </div>
    </div>

 </div>


 <div id=""  style="width:800px; height:auto;  float:left;  ">

   <div class="new_list_product" >
   <div id="add-product-container" >
   <!---batch basic details -->
       <div align="left" class="basic_product_details" id="basic_product_details" >
           <div class="" style="width:100%; height:50px; float:left; ">
               <div style="font-family:bahnschrift; height:30px; font-size:16px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Edit Product Photo and More</div>
           </div>
           <div class="centered-position" style="width:100%; height:260px; float:left;  margin-top:10px; ">
             <div style="width:98%; height:200px; float:left; border-radius:10px; box-shadow:0px 0px 10px 2px #f1f1f1; ">

             </div>
           </div>



           <div style="width:100%; height:40px; float:left; border-top:1px solid #f1f1f1; margin-top:10px; "></div>

           <div class="" style="width:100%; height:80px; margin-bottom:50px;  float:left; ">
               <div class="" style="width:100%; height:80px; float:left; ">
                   <div style="font-family:bahnschrift; height:30px; font-size:15px; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Show your Customers what the Product looks like</div>
                   <div style="height:30px; width:500px; font-family:Poppins-Medium;  color:#666666; letter-spacing:0.0012em; font-size:13px;  position:relative; padding:5px;">
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
        <div id="preview-product-media" style="width:540px; height:auto; position:relative; margin-bottom:20px; float:left; margin-top:20px; "></div>
       <!---->


       <!-- more Product details -->

       <div style="width:100%; height:40px; float:left; border-top:1px solid #f1f1f1; margin-top:10px; "></div>
       <div class="" style="width:100%; height:80px; margin-top:20px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:16px; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">More Product Information</div>
           <div style="height:30px; width:500px; font-family:Poppins-Medium; color:#666666; font-size:12px;  position:relative; padding:5px;">
               <b>Tip:</b> Here you add more photos of your product, Make them see themselves using this product, if it is a shoe we suggest you add a photo
               of someone wearing it.
           </div>
       </div>
       <div class="" style="width:100%; height:60px; margin-bottom:40px;  margin-top:40px; float:left; ">
           <div align="center" class="centered-position" style="height:50px; width:300px; border-radius:8px; padding:10px; border:3px dotted #f1f1f1; ">
               <div class="centered-position" align="center" id="" style="width:45px; height:45px; position:relative; top:0px; background-size:100%; border-radius:200px; " >
                       <input type="file" @change="detailsPhotoAdd()" id="details-photo-add" style="width:100%; height:100%;  cursor:pointer;opacity:0; left:0px; position:absolute; z-index:100; " multiple=3 />
                       <img src="@/assets/icons/add-media-icon-button.png" style="cursor:pointer; height:30px; width:30px; " class="temp_image" />
                   </div>
               </div>
           </div>
       </div>
       <div id="preview-product-more-media" style="width:540px; height:auto; position:relative; margin-bottom:20px; float:left; margin-top:20px; "></div>






   <div style="width:100%; height:260px; float:left; " >
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




</template>

<script>



export default {
  name: "userProfileWidget",
  components:{

  },
  //mixins: [web3Modal],
  props: {
    editProductPhotosAndMore: Object
  },
  created() {


  },
  mounted() {
    //this.listenAddProductEvent()

  },
  data(){
    return {
      editProductVisible:false,

      shopOptions:['X Fashions','Reflect Shop','Mr Nice Guy'],
          username:'',
          activeProfilePage:'',
          selectedVerticalButton:'no-link',
          selectedHorizontalButton:'',

    }

  },

  methods:{
    updateEditProduct(){
      let editProductPhotosAndMore={
        visible:false
      }

      console.log(editProductPhotosAndMore)
      this.$emit("updateEditProductPhotosAndMore",editProductPhotosAndMore)
      /*
      //this.$watch('$props', handler, { deep: true })
      this.$watch("$props", (value, previousValue) => {
        console.log(value, previousValue)
        debugger
      })
      */

    },
    showEditProduct(){
      this.createShopVisible=true
      this.topBarData.createShopVisible=true

    },
    closeEditProduct(){
      //this.createShopVisible=false
      //this.topBarData.createShopVisible=false

      this.updateEditProduct();

    },

    galleryPhotoAdd(){
      let input_=document.getElementById("gallery-photo-add")
      imagesPreview(input_, "div #preview-product-media", "product_media");

    },
    detailsPhotoAdd(){
      let input_=document.getElementById("details-photo-add")
      imagesPreview(input_, "div #preview-product-more-media", "product_media_more");

    },
    submitProduct(){
      //alert();
      buildProductData()

    },
    listenAddProductEvent(){
      let singleText=document.getElementById('add-one-text-single-variation')
      let multipleText=document.getElementById('add-one-text-multiple-variation')
      let singleImage=document.getElementById('add-one-image-text-single-variation')
      let multipleImage=document.getElementById('add-one-image-text-multiple-variation')
      singleText.addEventListener('click',function(){
        //alert()
        productVariations.variationHasPrice=true
        productVariations.variationId=productVariations.variationId+10
        createVariationBase("single-variation-base-list",productVariations.variationId,true,"text")

      })
      multipleText.addEventListener('click',function(){
        //alert()
        productVariations.variationHasPrice=false
        productVariations.variationId=productVariations.variationId+10
        createVariationBase("multiple-variation-base-list",productVariations.variationId,false,"text")
      })
      singleImage.addEventListener('click',function(){
        productVariations.variationHasPrice=true
        productVariations.variationId=productVariations.variationId+10
        createVariationBase("single-variation-base-list",productVariations.variationId,true,"image-text")
      })
      multipleImage.addEventListener('click',function(){
        //alert()
        productVariations.variationHasPrice=false
        productVariations.variationId=productVariations.variationId+10
        createVariationBase("multiple-variation-base-list",productVariations.variationId,false,"image-text")
      })




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
    getDatasetFromElement(element){
      //element.preventDefault();
      var whichFilterItem = element. currentTarget.dataset.key_;
      alert(whichFilterItem);
      return whichFilterItem
    },
    getMenuClass(item,index){
      console.log(item.title,index)
      return item.title.toLowerCase()==this.activePage?'top-menu-item-active':'top-menu-item';

    }

  }
}


/*
$("#add-one-more-variation-option").click(function(){
    createTextVariation("main-variation-option-list-container","mainId",true,"text")

})
*/


</script>
<style>

.shadow-st{
  box-shadow:0px 0px 0px 1px #f1f1f1;
}
</style>
