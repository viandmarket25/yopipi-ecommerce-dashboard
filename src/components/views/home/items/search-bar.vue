<template>
  <div  class="centered-position" style="width:100vw; height:50px; margin-bottom:30px; margin-top:20px;  float:left; ">
    <div  class="centered-position" style="min-width:1100px; max-width:1400px;  height:50px; float:left; ">
      <div align="left" style="width:25%; height:auto; font-size:30px; align-items:left; justify-content:left; display:flex;
        font-weight:bold; user-select:none; margin-left:0px; float:left; color:#ff7900; font-family:Poppins-Bold; text-decoration:none;  ">
        <div align="left" style="width:100%; height:auto; position:relative;
         font-size:30px; font-weight:bold; user-select:none; margin-left:0px; float:left; color:#ff7900; font-family:Poppins-Bold; text-decoration:none;  ">
            <router-link to="/" >
            <div align="left" id="my-home-link" class="app-name" @click="changeButtonHomeLoggedInNavStyle('my-home-link','My Home')" data-key_="home" style="width:180px; position:relative; left:0px; color:#404040; margin-right:20px; top:0px; text-decoration:none; " >
                <img src='@/assets/icons/yopipi-logo-y.png' class="nft-option-select" style="max-height:30px; max-width:30px; position:relative; float:left; left:10px; background:#fafafa;  top:12px; " />
                <span style=" font-family:Poppins-Bold; font-size:24px; position:relative; text-decoration:none;  top:0px; margin-left:20px; "> Yopipi</span>
            </div>
            </router-link>
        </div>
      </div>
      <div class="centered-position" style="width:50%; height:34px; border-radius:8px; float:left;  position:relative;  overflow:hidden; margin-top:0px;  " >
         <div style="width:100%; height:34px; border-radius:8px; background:white; position:relative;  overflow:hidden; margin-top:0px;  " >
             <input id="search-products-input" style="border-radius:10px; height:32px; width:54%; float:left; left:20px; padding-left:10px; outline:none; border:none; font-size:12px; " placeholder="I am Looking for shoes, bags, etc" />
             <input type="text" id="search-categories-in-button" class="search-categories-in-button" value="" placeholder="Select Category" style="float:left; position:relative; font-size:12px;  right:10px; top:3px; width:24%; height:26px; border:none; outline:none; padding-left:10px; box-shadow:0px 0px 0px 1px #fcfcfc; " list="gender_data_source"/>
             <datalist id="gender_data_source">';
             </datalist>
             <div class="centered-position" style=" width:30px; height:34px; float:left; border-radius:6px 0px 0px 6px; cursor:pointer; " >
                 <img src="@/assets/icons/vueax-microphone.png" style="width:16px; height:16px; position:relative; cursor:pointer;  right:2px;  " />
             </div>
             <div class="centered-position" style=" width:30px; height:34px; float:left; border-radius:6px 0px 0px 6px; cursor:pointer; " >
                 <img src="@/assets/icons/vueax-camera.png" style="width:16px; height:16px; position:relative; cursor:pointer;  right:2px;  " />
             </div>

             <div class="centered-position" style=" width:50px; height:34px; float:right; background:#06d6a0; border-radius:20px 20px 20px 20px; cursor:pointer; " >
                 <img src="@/assets/icons/search-normal.png" style="width:20px; height:20px; position:relative; cursor:pointer;  right:2px;  " />
             </div>
         </div>
       </div>

       <div class="centered-position" id="show-user-cart-products" style=" width:25%; height:34px; float:right; position:relative; cursor:pointer; " >

          <!--
         <div id="show-user-cart-products" style=" width:80px; height:34px; position:relative; cursor:pointer;  " >
             <img src="@/assets/icons/icon-yopipi-cart.png" style="width:22px; height:22px; position:relative; top:6px; cursor:pointer;  right:2px;  " />
             <div id="cart-total-products-main" style="min-width:20px; max-width:40px; height:18px; border-radius:100px; float:right; background:#06d6a0; color:#ffffff; font-family:Montserrat-SemiBold; line-height:18px; left:-28px; padding-left:4px; padding-right:4px; top:-6px; font-size:9px; position:relative; ">0</div>
         </div>
       -->

       </div>

    </div>





  </div>




</template>



<script>


</script>

<style>


</style>
