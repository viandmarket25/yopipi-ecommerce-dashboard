<template>
    <div id="account-popup-modal" style=" display:flex; justify-content:center; z-index:222222222; position:fixed; background:#000000; ">
        <div id="contents-target" class="contents-target"  @click="closeAddPrivateKeyForm()" style="width:100vw; height:100vh; z-index:222222222; cursor:pointer; left:0px; position:fixed;  top:0px; overflow:hidden; opacity:1; ">
        </div>
        <div id="contents-target" class="contents-target" style="width:240px; min-height:320px; max-height:600px; background:#ffffff;  z-index:222222222; box-shadow:0px -0.4px 30px 4.0px #f0f0f0; border:1px solid #f1f1f1; position:fixed; right:5%; top:48px;   border-radius:12px; overflow:hidden;  ">
            <div style="height:30px; width:100%; "></div>
            <div class="menu-item-popup">0XFF... <span style=" color:#8338ec;  font-family: Poppins-SemiBold; ">Copy Wallet</span></div>
            <router-link to="/profile" >
              <div class="menu-item-popup">Profile</div>
            </router-link>
            <router-link to="/profile" >
              <div class="menu-item-popup">My Shops</div>
            </router-link>
            <router-link to="/profile" >
              <div class="menu-item-popup">Manage Orders</div>
            </router-link>
            <div style="height:20px; width:100%; margin-top:0px; float:left;  ">
                <div style="height:2px; width:70%; margin-top:10px; margin-left:20px;  float:left; border-top:1px solid #f1f1f1; ">
                </div>
            </div>
            <div @click="logoutUser()" class="menu-item-popup">Logout</div>

        </div>
    </div>
</template>
<script lang="jsx">
//import QrcodeVue from 'qrcode.vue';
//import QRCodeVue3 from "qrcode-vue3";

export default {
    name:'accountPopupWidget',
      data() {
      return {
        value: 'https://example.com',
        size: 100,
      }
    },
    components: {
     // QRCodeVue3,
    },
    methods: {
        closeAddPrivateKeyForm(){
            this.closeForm()
        },
        closeForm(){
            let targetElement=document.getElementById('account-popup-modal')
            targetElement.style.display="none"

        },
        logoutUser(){

           this.$cookies .remove("siteAccessT");
            this.$router.push('/home');

            //setTimeout(function(){
           //   window.location.reload();
            //},100)




        },

    },


}

</script>
<style scoped>
.menu-list-container-popup {
    height: 60px;
    width: 100%;
    list-style-type: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;

}

.menu-item-popup {
    cursor: pointer;
    margin-left:6%;
    font-size: 12px;
    float: left;

    height:40px;
    width: 80%;
    padding-left:12px;
    padding-right:12px;
    line-height:40px;
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
    transition-delay:133ms;
    transition-duration: 133ms;
    background:#f1f1f1;

    color:#000000;
    transition-delay:122ms;
}
</style>
