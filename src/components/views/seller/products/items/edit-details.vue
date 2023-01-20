
<template>
<a-drawer
  :visible="editProductBasicDetailsData.visible"
   :closable="false" :width="1000" :body-style="{ paddingBottom: '80px' }">

  <div id=""  style="width:1000px; height:40px;  float:left;  ">
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
   <div align="left" class="basic_product_details" id="basic_product_details" >
       <div class="" style="width:100%; height:120px; float:left; clear:left; ">
         <!--
           <div class="" style="width:100%; height:70px; float:left;  ">
               <div style="font-family:bahnschrift; height:40px; font-size:18px; float:left; position:relative; margin-bottom:4px; color:#000000;  font-family:Poppins-Bold; ">Add Product</div>
           </div>
         -->
           <div class="" style="width:100%; height:40px; float:left; ">
               <div style="font-family:bahnschrift; height:30px; font-size:16px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Basic Product Information</div>
           </div>
           <div class="" style="width:100%; height:50px; float:left; ">
               <div style="height:30px; width:500px; font-family:Poppins-Medium; font-size:12px;  position:relative; padding:5px;">
                 <b>Tip:</b> Nice keywords increase the chance of finding your Products
               </div>
           </div>
       </div>
       <div class="" style="width:100%; height:30px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:14px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Product Name</div>
       </div>
       <div class="" style="width:100%; height:80px; float:left; ">

           <div style="width:100%; height:50px; margin-bottom:10px; float:left;  " >
               <input type="text" class="each_product_list_data input-shadow" id="product_name_data_value"  placeholder="iPhone 13" />
           </div>
       </div>
       <div class="" style="width:100%; height:30px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:14px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Product Description</div>
       </div>
       <div class="" style="width:100%; height:240px; float:left; ">
           <div align="left" class="" style="width:100%; height:30px;   ">
               <div style="font-family:Poppins-Medium; height:30px; width:500px; color:#606060; font-size:12px; position:relative;  ">
                   <b>Tip:</b> Accurate and Honest Description reduces product returns
               </div>
           </div>
           <div align="left" style="width:100%; height:200px; position:relative;  margin-bottom:2px;" >
               <textarea type="text" placeholder="Apple iphone 13, released 2022 " style="height:200px; width:500px; padding-top:10px; margin-left:1px; background:#fcfcfc;  font-size:13px; float:left; " id="product_des_data_value" class="product_des_data input-shadow" autofocus ></textarea>
           </div>
       </div>
       <div class="" style="width:100%; height:30px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:14px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Product Specifications</div>
       </div>
       <div class="" style="width:100%; height:240px; float:left; ">
           <div align="left" class="" style="width:100%; height:30px;   ">
               <div style="font-family:Montserrat-Regular; height:30px; width:500px; font-size:12px; position:relative;  ">
                   <b>Tip:</b> Clearly Write the Specifications for your Product
               </div>
           </div>
           <div align="left" style="width:100%; height:200px; position:relative;  margin-bottom:2px;" >
               <textarea type="text" placeholder="Iphone 13 16gb, Dual back camera" style="height:200px; width:500px; padding-top:10px; margin-left:1px; background:#fcfcfc;  font-size:13px; float:left; " id="product_spec_data_value" class="product_des_data input-shadow" autofocus ></textarea>
           </div>
       </div>
       <div class="" style="width:100%; height:30px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:14px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Product Price, Quantity and Condition</div>
       </div>
       <div class="" style="width:100%; height:40px; float:left; margin-bottom:50px; margin-top:10px;  ">
           <div style="width:50px; height:35px; float:left; font-size:13px; line-height:38px; box-shadow:inset 0px 0px 0px 1px #f1f1f1; color:#606060; position:relative; padding-bottom:2px; top:2px; padding-left:8px; padding-right:8px; border-radius:6px; font-family:Poppins-SemiBold; " >NGN</div>
           <input type="number" class="each_product_list_data input-shadow" id="product_price_data_value" style="width:120px; " placeholder="0.00" />
           <input type="number" class="each_product_list_data input-shadow" id="quantity_data_value" style="width:100px;  "  placeholder="Quantity" />
           <input type="text" id="status_data_value" class="each_product_list_data input-shadow" value="" style="width:130px;  " placeholder="Select State" list="state_data_source"/>
           <datalist id="state_data_source">
               <option value="New"></option>
               <option value="Old"></option>
           </datalist>
       </div>

       <div class="" style="width:100%; height:30px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:14px; float:left; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Product Discount</div>
       </div>
       <div class="" style="width:100%; height:40px; float:left; margin-bottom:50px; margin-top:10px;  ">

           <input type="text" id="status_data_value" class="each_product_list_data input-shadow" value="" style="width:190px;  " placeholder="Select Discount Type" list="state_data_source"/>
           <datalist id="state_data_source">
               <option value="Price"></option>
               <option value="Percentage"></option>
           </datalist>
           <div style="width:50px; height:35px; float:left; font-size:13px; line-height:38px; box-shadow:inset 0px 0px 0px 1px #f1f1f1; color:#606060; position:relative; padding-bottom:2px; top:2px; padding-left:8px; padding-right:8px; border-radius:6px; font-family:Poppins-SemiBold; " >NGN</div>


           <input type="number" class="each_product_list_data input-shadow" id="product_price_data_value" style="width:120px; " placeholder="0.00" />


       </div>

       <div style="width:100%; height:40px; float:left; border-top:1px solid #f1f1f1; margin-top:10px; "></div>
       <div class="" style="width:100%; height:80px; margin-bottom:50px;  float:left; ">
           <div class="" style="width:100%; height:80px; float:left; ">
               <div style="font-family:bahnschrift; height:30px; font-size:15px; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">Show your Customers what the Product looks like</div>
               <div style="height:30px; width:500px; font-family:Poppins-Medium; font-size:12px;  position:relative; padding:5px;">
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
       <div class="" style="width:100%; height:60px; float:left; ">
           <input type="text" id="category_data_value" style="float:left; " class="each_product_list_data input-shadow" value=""  placeholder="Select Category" list="category_data_source"/>
           <datalist id="category_data_source">
               <option value="Fashion"></option>
               <option value="Books"></option>
               <option value="Phones"></option>
               <option value="Laptops"></option>
               <option value="Shoes"></option>
               <option value="Toys"></option>
               <option value="Kids"></option>
               <option value="Babies"></option>
               <option value="Beauty Care"></option>
               <option value="Office"></option>
               <option value="Equipments"></option>
               <option value="Gaming"></option>
               <option value="Electronics"></option>
               <option value="Home Decorations"></option>
               <option value="Outdoor"></option>
               <option value="Sports"></option>
               <option value="Pets"></option>
           </datalist>
           <div style="width:40px; height:35px; float:left; font-size:13px; margin-left:10px; line-height:38px; box-shadow:inset 0px 0px 0px 1px #f1f1f1; color:#606060; position:relative; padding-bottom:2px; top:2px; padding-left:8px; padding-right:8px; border-radius:6px; font-family:Poppins-SemiBold; " >KG</div>
           <input type="number" class="each_product_list_data input-shadow" id="weight_data_value" style="width:100px; background:#fafafa;  "  placeholder="Weight" />
       </div>
       <div class="" style="width:100%; height:60px; float:left; ">
           <input type="text" id="brand_data_value" class="each_product_list_data input-shadow" value=""   placeholder="Select Brand" list="brand_data_source"/>
           <datalist id="brand_data_source">
               <option value="None"></option>
               <option value="Nike"></option>
               <option value="Balenciaga"></option>
               <option value="Addidas"></option>
               <option value="Gucci"></option>
               <option value="Puma"></option>
               <option value="Jordan"></option>
           </datalist>
       </div>
       <div class="" style="width:100%; height:60px; float:left; ">
           <input type="text" id="consumer_gender_data_value" class="each_product_list_data input-shadow" value=""  placeholder="Select Consumer Gender" list="gender_data_source"/>
           <datalist id="gender_data_source">
               <option value="Unisex"></option>
               <option value="Male"></option>
               <option value="Female"></option>
           </datalist>
       </div>

       <!--
       <div class="" style="width:300px; height:90px; position:fixed; bottom:40px;  right:40px; z-index:10000; ">
           <div class="" style="width:260px; height:60px; position:relative; top:10px; border-radius:10px; right:10px;  float:right; background:#fefefe; box-shadow:0px 0px 0px 1px #fafafa;  ">
               <div id="event-result-label" style="width:inherit; height:34px; display:none; position:relative; text-align:left; margin-left:14px; top:10px; border-radius:6px;  font-family:Poppins-SemiBold; font-size:13px;  line-height:34px; cursor:pointer; color:#06d6a0;  float:left;  ">
                   Product Added
               </div>
               <div id="event-result-label" style="width:inherit; height:34px;  position:relative; text-align:left; margin-left:14px; top:10px; border-radius:6px;  font-family:Poppins-SemiBold; font-size:13px;  line-height:34px; cursor:pointer; color:#06d6a0;  float:left;  ">
                   <img src="@/assets/icons/yopipi-processing.gif" style="width:34px; height:34px; user-select:none; margin-left:10px; float:left; cursor:pointer; top:4px;  position:relative; " />
               </div>
           </div>
           <div class="" style="width:260px; height:60px; position:relative; top:10px; border-radius:10px; right:10px;  float:right; background:#fefefe; box-shadow:0px 0px 0px 1px #fafafa;  ">
               <div id="cancel-product-creation" class="cancel-product-creation" style="width:90px; height:34px; position:relative; text-align:center; top:10px; border-radius:20px; font-family:Poppins-Medium; font-size:13px; line-height:34px; cursor:pointer; left:10px;  float:left; background:#fafafa; ">
                   Cancel
               </div>
               <div id="submit-product" @click="submitProduct()" class="submit-product" style="width:90px; height:34px; position:relative; text-align:center; margin-left:20px; top:10px; border-radius:20px;  font-family:Poppins-SemiBold; font-size:13px;  line-height:34px; cursor:pointer; color:#ffffff; left:10px; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; background:#000000; ">
                   Ok, Done
               </div>
           </div>

       </div>
     -->

       <!---more Product details

       -->

       <div style="width:100%; height:40px; float:left; border-top:1px solid #f1f1f1; margin-top:10px; "></div>
       <div class="" style="width:100%; height:80px; margin-top:20px; float:left; ">
           <div style="font-family:bahnschrift; height:30px; font-size:16px; position:relative; margin-bottom:4px;  font-family:Poppins-SemiBold; ">More Product Information</div>
           <div style="height:30px; width:500px; font-family:Poppins-Medium; font-size:12px;  position:relative; padding:5px;">
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
       <div style="width:500px; height:500px; " >

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
    editProductBasicDetailsData: Object
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
      let editProductBasicDetailsData={
        visible:false
      }

      console.log(editProductBasicDetailsData)
      this.$emit("updateEditProductBasicDetails",editProductBasicDetailsData)
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
