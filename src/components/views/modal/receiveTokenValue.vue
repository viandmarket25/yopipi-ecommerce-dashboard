<template>
    <div id="receive-token-value-modal" style=" display:flex; justify-content:center; ">
        <div id="contents-target-r-t" class="contents-target"  @click="closeReceiveTokenValueForm ()" style="width:100vw; height:100vh; left:0px; position:fixed; background:#000000; top:0px; overflow:hidden; opacity:0.6; ">
        </div>
        <div id="contents-target" class="contents-target" style="width:40%; height:90vh; background:#ffffff; position:fixed; left:30%; top:20px;  display:flex; border-radius:10px; justify-content:center;  overflow:hidden;  ">
            <div id="contents-target" class="contents-target" style="width:100%; height:90vh; background:#ffffff; position:relative; top:20px; overflow:hidden;   ">
              <div style="width:100%; height:40px; float:left; ">
                    <div id="top-list-container" class="top-list-container" style="width:60%;  height:40px; text-align:left; color:#888888; position:relative; left:20px; float:left; font-family:Poppins-Medium; font-size:14px; " align="center">
                       Receiving Token
                    </div>
                    <div id="top-list-container" class="top-list-container" style="width:40%;  height:40px; text-align:right; position:relative; right:0px; float:right; font-family:Poppins-Medium; font-size:14px; " align="center">
                       <div id="top-list-container" @click="closeReceiveTokenValueForm()"  class="top-list-container" style="width:100px;  height:40px; text-align:right; position:relative; right:20px; cursor:pointer; float:right; font-family:Poppins-SemiBold; font-size:14px; " align="center">
                        Close
                        </div>
                    </div>
                </div>
                <div style="width:100%; height:40px; float:left; ">
                   <QRCodeVue3
                      value="Simple QR code"
                    />

                  <!---
                  <QRCodeVue3 :width="200" :height="200"
                    value="qr code data"
                    :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                    :imageOptions="{ image:'@/assets/icons/user-profile.png',hideBackgroundDots: true, imageSize: 10.4, margin: 0 }"
                    :dotsOptions="{
                      type: 'dots', color: '#26249a', gradient: { type: 'linear', rotation: 0,
                        colorStops: [  { offset: 0, color: '#26249a' },
                          { offset: 1, color: '#888888' },
                        ], },
                    }"
                    :backgroundOptions="{ color: '#ffffff' }"
                    :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
                    :cornersDotOptions="{ type: undefined, color: '#000000' }"
                    fileExt="png"
                    :download="true" myclass="my-qur" imgclass="img-qr"
                    downloadButton="my-button" :downloadOptions="{ name: 'vqr', extension: 'png' }" />
--->

                </div>


            </div>
        </div>
       
    
    
  
    </div>
</template>
<script lang="jsx">
//import QrcodeVue from 'qrcode.vue';

import QRCodeVue3 from "qrcode-vue3";

export default {
    name:'receiveTokenValueWidget',
      data() {
      return {
        value: 'https://example.com',
        size: 100,
      }
    },
    components: {
        QRCodeVue3,
    },
    methods: {
        closeReceiveTokenValueForm(){
            this.closeForm()
        },
        closeForm(){
            let targetElement=document.getElementById('receive-token-value-modal')
            targetElement.style.display="none"
        }
    },


}

</script>