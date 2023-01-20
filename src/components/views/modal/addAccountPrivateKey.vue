<template>
    <div id="add-private-key-modal" style=" display:flex; justify-content:center; ">
        <div id="contents-target" class="contents-target"  @click="closeAddPrivateKeyForm()" style="width:100vw; height:100vh; left:0px; position:fixed; background:#000000; top:0px; overflow:hidden; opacity:0.6; ">
        </div>
        <div id="contents-target" class="contents-target" style="width:40%; height:90vh; background:#ffffff; position:fixed; left:30%; top:20px;  display:flex; border-radius:10px; justify-content:center;  overflow:hidden;  ">
            <div id="contents-target" class="contents-target" style="width:100%; height:90vh; background:#ffffff; position:relative; top:20px; overflow:hidden;   ">
                <div style="width:100%; height:40px; float:left; ">
                    <div id="top-list-container" class="top-list-container" style="width:60%;  height:40px; text-align:left; color:#888888; position:relative; left:20px; float:left; font-family:Poppins-Medium; font-size:14px; " align="center">
                       Link Account
                    </div>
                    <div id="top-list-container" class="top-list-container" style="width:40%;  height:40px; text-align:right; position:relative; right:0px; float:right; font-family:Poppins-Medium; font-size:14px; " align="center">
                       <div id="top-list-container" @click="closeAddPrivateKeyForm()"  class="top-list-container" style="width:100px;  height:40px; text-align:right; position:relative; right:20px; cursor:pointer; float:right; font-family:Poppins-SemiBold; font-size:14px; " align="center">
                        Close
                        </div>
                    </div>
                </div>
                <div id="top-list-container" class="top-list-container" style="width:100%; height:40px; letter-spacing:0.012em; text-align:center; position:relative; margin-top:80px; left:0px; float:left; font-size:22px; color:#404040; font-family:Poppins-SemiBold; " align="center">
                <div id="top-list-container" class="top-list-container" style="width:60%;  height:40px; text-align:left; position:relative; left:20px; float:left; font-family:Poppins-Bold; font-size:18px; " align="center">
                    Private Key
                </div>
                </div>
                <div id="top-list-container" class="top-list-container" style="width:100%; height:40px; letter-spacing:0.012em; text-align:center; position:relative; margin-top:0px; left:0px; float:left; font-size:22px; color:#888888; font-family:Poppins-SemiBold; " align="center">
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; position:relative; left:20px; float:left; " align="center">
                    <input type="text"  placeholder=" eg: 0xf " style="width:80%; height:40px; font-family:Poppins-SemiBold; border-radius:10px; background:#fafafa; color:#888888; font-size:18px; padding-left:20px; padding-right:20px; outline:none; border:none; box-shadow:0px 0px 0px 1px #f1f1f1; " />
                </div>
                </div>
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:60px; text-align:center; position:relative; line-height:40px; left:0px; float:left; display:flex; justify-content:center; margin-top:20px; white-space:normal; padding-top:20px; font-size:14px; color:#404040; font-family:Poppins-Medium; "  >
                    <div align="center" id="wallet-action-button-containerreceive-token-form-id" class="wallet-action-button-container" style=" max-width:160px; height:30px; background:#f1faee;  cursor:pointer; padding:8px; border-radius:8px;  ">
                        <img src="@/assets/icons/polygon-matic.png" id="wallet-action-icon" class="wallet-action-icon" style="width:24px; height:24px; position:relative; float:left; top:3px; right:4px;  ">
                        <div id="wallet-action-text" class="wallet-action-text" style=" min-width:40px;  height:30px; line-height:30px; font-size:13px;  float:left;font-family:Poppins-Bold; ">Connect Account</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="jsx">
//import QrcodeVue from 'qrcode.vue';
//import QRCodeVue3 from "qrcode-vue3";

export default {
    name:'addAccountPrivateKeyWidget',
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
            let targetElement=document.getElementById('add-private-key-modal')
            targetElement.style.display="none"

        }

    },


}

</script>