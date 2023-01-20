
<template>
<a-drawer
  :visible="editProductVariationsData.visible"
   :closable="false" :width="1000" :body-style="{ paddingBottom: '80px' }">

  <div id=""  style="width:1000px; height:40px;  float:left; ">
    <div id=""  style="width:50%; height:100%;  float:left;  ">
      <div class="centered-position" align="left" style="height:40px; width:140px; float:left;  justify-content: space-around; ">
        <div class="centered-position" style="width:40px; height:60px;  float:left;  ">
          <div id="top-list-container" class="top-list-container centered-position" style="width:30px;  height:30px; text-align:left; position:relative; border-radius:100px; font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
            <img @click="closeEditProduct()"  src="@/assets/icons/social/close-square.png" style="width:20px; height:20px; float:left; cursor:pointer;   opacity:0.8;" />
          </div>
        </div>
        <div class="centered-position" style="width:150px; height:60px;  float:left;  ">
            <div style="width:90%; font-family:Poppins-SemiBold; height:60px; font-size:12px; line-height:60px; text-align:left; margin-left:10px; " >Close</div>
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

       <!---->
       <!---more Product details

       -->


       </div>


       <!--- product variations

       -->
       <div style="width:100%; height:40px; float:left; border-top:1px solid #f1f1f1; margin-top:10px; "></div>
       <div class="" style="width:100%; height:80px; margin-top:20px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:15px; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Product Variations</div>
           <div style="height:30px; width:500px; font-family:Poppins-Medium; font-size:12px;  position:relative; padding:5px;">
               <b>Tip:</b> Here create a text or image with text variations of your product, this makes it easy to combine multiple products
               into one group for easy display to your customers
           </div>
       </div>
       <div class="" style="width:100%; height:30px; margin-top:40px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:15px; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Variations <span style="font-family:Poppins-Medium; font-size:12px; margin-left:4px; ">Multiple Variations</span></div>

       </div>
       <div class="" style="width:100%; height:60px; margin-top:20px;  margin-bottom:20px;  float:left; ">
               <div align="center" id="add-one-text-multiple-variation" style="width:120px; height:44px; border:2px dotted #f1f1f1; margin:4px; cursor:pointer; border-radius:6px; float:left; line-height:44px; ">Text</div>
               <div align="center" id="add-one-image-text-multiple-variation" style="width:140px; height:44px; border:2px dotted #f1f1f1; margin:4px;  cursor:pointer; border-radius:6px; float:left; line-height:44px; ">Image and Text</div>
       </div>
       <div id="multiple-variation-base-list" >
           <div style="height:100px; width:400px; "></div>
       </div>
       <div class="" style="width:100%; height:30px; margin-top:40px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:15px; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Variations with Price <span style="font-family:Poppins-Medium; font-size:12px; margin-left:4px; ">Single Variation</span></div>
       </div>
       <div class="" style="width:100%; height:60px;  margin-bottom:20px; float:left; ">
               <div align="center" id="add-one-text-single-variation" style="width:120px; height:44px; border:2px dotted #f1f1f1; margin:4px; cursor:pointer; border-radius:6px; float:left; line-height:44px; ">Text</div>
               <div align="center" id="add-one-image-text-single-variation" style="width:140px; height:44px; border:2px dotted #f1f1f1; margin:4px;  cursor:pointer; border-radius:6px; float:left; line-height:44px; ">Image and Text</div>
       </div>
       <div id="single-variation-base-list" >
           <div style="height:100px; width:400px; "></div>
         <div style="width:500px; height:500px; " >

         </div>
         <!---

         -->
     </div>

   <div style="width:100%; height:260px; float:left; " ></div>

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
    editProductVariationsData: Object
  },
  created() {


  },
  mounted() {
    this.listenAddProductEvent()

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
      let editProductVariationsData={
        visible:false
      }

      console.log(editProductVariationsData)
      this.$emit("updateEditProductVariations",editProductVariationsData)
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
