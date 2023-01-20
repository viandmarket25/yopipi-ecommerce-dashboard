<template>
    <div style="height:460px; width:100%; border-radius:10px; ">

      <div  style="height:90px; width:100%; margin-top:20px; border-radius:10px; ">
        <div class="centered-position" style=" height:60px; width:100%; float:left; ">
            <img src="@/assets/icons/user-profile.png" style=" width:40px; height:40px; cursor:pointer; border-radius:100px; box-shadow:0px 0px 0px 2px #f1f1f1; ">
        </div>
        <div class="centered-position" style=" height:30px; width:100%; float:left; ">
            <div id="username-label" style="height:30px; font-family:Montserrat-Regular; font-size:11px; ">Hi, buyer1</div>
        </div>

      </div>

      <!--
      <div align="left" style=" height:140px; width:100%; text-decoration:none !important; float:left; color:#404040; display:block; white-space:nowrap; ">
          <a href="/shorpi/account/login.php" style=" text-decoration:none !important; ">
              <div style=" width:220px; height:30px; float:left;  border-radius:10px; cursor:pointer; margin:4px; font-size:11px; display:inline-block; text-decoration:none; line-height:30px; font-family:Montserrat-SemiBold;   ">
                  <img src="@/assets/icons/icon-product-payments.png" style=" width:22px; height:22px; float:left; opacity:0.8; cursor:pointer;  ">
                  <div style=" width:120px; height:30px; float:left;  border-radius:10px; cursor:pointer;  margin-left:8px; line-height:26px; font-size:10px; display:inline-block; text-decoration:none; font-family:Montserrat-Medium;   ">
                      My Orders
                  </div>
              </div>
          </a>
          <a href="/shorpi/account/login.php" style=" text-decoration:none !important; ">
              <div style=" width:220px; height:30px; float:left;  border-radius:10px; cursor:pointer; margin:4px; font-size:11px; display:inline-block; text-decoration:none; line-height:30px; font-family:Montserrat-SemiBold;   ">
                  <img src="@/assets/icons/icon-order-confirmation.png" style=" width:22px; height:22px; float:left; opacity:0.8; cursor:pointer;   ">
                  <div style=" width:120px; height:30px; float:left;  border-radius:10px; cursor:pointer;  margin-left:8px; line-height:26px; font-size:10px; display:inline-block; text-decoration:none; font-family:Montserrat-Medium;   ">
                      Order Confirmation
                  </div>
              </div>
          </a>
          <a href="/shorpi/account/login.php" style=" text-decoration:none !important; ">
              <div style=" width:220px; height:30px; float:left;  border-radius:10px; cursor:pointer; margin:4px; font-size:11px; display:inline-block; text-decoration:none; line-height:30px; font-family:Montserrat-SemiBold;   ">
                  <img src="@/assets/icons/icon-product-shipping.png" style=" width:22px; height:22px; float:left; opacity:0.8; cursor:pointer;  ">
                  <div style=" width:120px; height:30px; float:left;  border-radius:10px; cursor:pointer;  margin-left:8px; line-height:26px; font-size:10px; display:inline-block; text-decoration:none; font-family:Montserrat-Medium;   ">
                      Shipping
                  </div>
              </div>
          </a>
      </div>
      -->
      <div class="centered-position" style="height:80px; width:100%; float:left;  border-radius:10px; ">
        <div style="width:100%;  height:40px; margin:4px; display:block; white-space:nowrap; ">
            <router-link to="/login" ><div style=" width:80px; height:30px; background:#fff1e6; border-radius:10px; cursor:pointer; margin:4px; font-size:11px; display:inline-block; text-decoration:none; line-height:30px; font-family:Montserrat-SemiBold;   ">
                Login
            </div></router-link>
            <router-link to="/join" ><div style=" width:80px; height:30px;  background:#f1f1f1; border-radius:10px; cursor:pointer; margin:4px; font-size:11px; display:inline-block; text-decoration:none; line-height:30px; font-family:Montserrat-SemiBold; ">
                Join Us
            </div></router-link>
        </div>
      </div>




      <div style="">

      </div>
  </div>
</template>

<script>

</script>
<style>
router-link{
   text-decoration: none;
}
a{
  text-decoration: none;
}
a div{
  text-decoration: none;
}

</style>
