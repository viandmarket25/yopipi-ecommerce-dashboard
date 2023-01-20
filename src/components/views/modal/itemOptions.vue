<template>
    <div id="item-options-popup-modal" style=" display:none; justify-content:center; z-index:2222222222; position:fixed; background:#000000; ">
        <div id="contents-target" class="contents-target"  @click="closeAddPrivateKeyForm()" style="width:100vw; height:100vh; z-index:222222222; cursor:pointer; left:0px; position:fixed;  top:0px; overflow:hidden; opacity:1; ">
        </div>
        <!-----
        <div id="item-options-contents-target" class="contents-target" style="width:200px; min-height:320px; max-height:600px; background:#ffffff;  z-index:222222222; box-shadow:0px 0px 1px 1.0px #f0f0f0; position:fixed; right:6%; top:68px;   border-radius:12px; overflow:hidden;  ">
            <div style="height:30px; width:100%; "></div>
            <router-link to="/" ><div class="menu-item-popup">Bid</div>  </router-link>
            <router-link to="/" ><div class="menu-item-popup">Buy Now</div>  </router-link>
            <router-link to="/" ><div class="menu-item-popup">Invest</div></router-link>
            <router-link to="/" ><div class="menu-item-popup">View Activity</div> </router-link>
          

        </div>
        --->
    </div>
</template>
<script lang="jsx">
//import QrcodeVue from 'qrcode.vue';
//import QRCodeVue3 from "qrcode-vue3";

export default {
    name:'itemOptionsPopupWidget',
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
            let targetElement=document.getElementById('item-options-popup-modal')
            targetElement.style.display="none"

        },
 

    },


}

</script>
<style scoped>

.menu-item-popup {
    cursor: pointer;
    margin-left:4%;
    font-size: 12px;
    float: left;
    padding-top:4px; padding-bottom:8px;
    height:34px;
    width: 80%;
   
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
    transition-delay:133ms;
    transition-duration: 133ms;
    background:#f1f1f1;
   
    color:#000000;
    transition-delay:122ms;
}
</style>