<template>
    <div id="contents-target" class="contents-target" style="width:68%; height:1800px; margin-left:16%; position:relative;  top:0px; border-radius:8px; overflow:hidden; ">
        <div id="wallet-summary-container" class="wallet-summary-container"> 
            <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; float:left; font-size:24px; color:#000000;  font-family:Poppins-Medium; " align="left">
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:center; position:relative; left:0px; float:left; font-size:18px; color:#404040; font-family:Poppins-SemiBold; " align="left">
                    <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; position:relative; line-height:40px; left:20px; float:left; font-size:14px; color:#888888; font-family:Poppins-Medium; " align="center">
                        Create <span style="font-family:Poppins-Bold; color:#ff7900;">Machinft</span> Wallet Address
                    </div>
                </div>
            </div>
            <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:center; position:relative; line-height:40px; left:0px; float:left; font-size:14px; color:#404040; font-family:Poppins-Medium; "  >
                <div align="left" @click="showAddPrivateKeyForm('my-wallet-link','My Wallet')" id="wallet-action-button-containerreceive-token-form-id" class="wallet-action-button-container" style=" cursor:pointer; display:flex; margin-left:20px; justify-content:left; ">
                    <img src="@/assets/icons/polygon-matic.png" id="wallet-action-icon" class="wallet-action-icon" style="width:24px; height:24px; position:relative; top:3px; right:4px;  ">
                    <div id="wallet-action-text" class="wallet-action-text" style=" min-width:40px;  height:30px; line-height:30px; font-size:13px; font-family:Poppins-SemiBold; ">Connect</div>
                </div>
            </div>
            <!---
            <div style="height:2px; width:100%; background:#f1f1f1; float:left; margin-top:30px; "></div>
            <div id="top-list-container" class="top-list-container" style="width:100%;  height:60px; text-align:left; float:left; font-size:24px; color:#000000; font-family:Poppins-Medium; " align="center">
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:center; position:relative; left:0px; float:left; font-size:18px; color:#404040; font-family:Poppins-SemiBold; " align="left">
                    <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; position:relative; line-height:40px; left:20px; float:left; font-size:14px; color:#888888; font-family:Poppins-Medium; " align="left">
                        Connect Another Wallet Provider
                    </div>
                </div>
            </div>
            <div id="top-list-container" class="top-list-container" style="width:100%;  height:120px; text-align:center; position:relative; line-height:40px; left:0px; float:left; font-size:14px; color:#404040;  font-family:Poppins-Medium; "  >
                <div id="top-list-container" class="top-list-container" style="width:100px;  height:100px; text-align:center; position:relative; cursor:pointer; box-shadow:0px 0px 0px 2.5px #f1f1f1; padding-top:10px; margin-left:20px; float:left; font-size:18px; border-radius:10px; color:#404040; font-family:Poppins-SemiBold; " align="left">
                    <div id="top-list-container" class="top-list-container" style="width:100%;  height:60px; text-align:left; position:relative; line-height:40px;  font-size:14px; color:#888888; font-family:Poppins-Medium; display:flex; justify-content:center; " align="center">
                        <img src="@/assets/icons/wallet-metamask.png" id="wallet-user-profile-photo" class="wallet-user-profile-photo" style=" width:60px; height:60px; border-radius:20px;  background-size:100% 100%; overflow:hidden; ">      
                    </div>
                    <div id="top-list-container" class="top-list-container" style="width:100%;  height:30px; text-align:left; position:relative; text-align:center; line-height:40px;  font-size:13px; color:#ff7900; font-family:Poppins-SemiBold; " >
                       MetaMask            
                    </div>
                </div>
                <div id="top-list-container" class="top-list-container" style="width:100px;  height:100px; text-align:center; position:relative; cursor:pointer; box-shadow:0px 0px 0px 2.4px #f1f1f1; padding-top:10px; margin-left:20px; float:left; font-size:18px; border-radius:10px; color:#404040; font-family:Poppins-SemiBold; " align="left">
                    <div id="top-list-container" class="top-list-container" style="width:100%;  height:60px; text-align:left; position:relative; line-height:40px;  font-size:14px; color:#888888; font-family:Poppins-Medium; display:flex; justify-content:center; " align="center">
                        <img src="@/assets/icons/wallet-binance.jpeg" id="wallet-user-profile-photo" class="wallet-user-profile-photo" style=" width:60px; height:60px; border-radius:20px;  background-size:100% 100%; overflow:hidden; ">      
                    </div>
                    <div id="top-list-container" class="top-list-container" style="width:100%;  height:30px; text-align:left; position:relative; text-align:center; line-height:40px;  font-size:13px; color:#ff7900; font-family:Poppins-SemiBold; " >
                       Binance          
                    </div>
                </div>
            </div>
            --->


            <div style="height:1.4px; width:100%; background:#f1f1f1; float:left; margin-top:30px; "></div>

            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:20px; left:20px; float:left; position:relative; font-size:14px; color:#000000; font-family:Poppins-SemiBold; " align="center">
              Networks
            </div>
            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:10px; left:20px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-SemiBold; " align="center">
              <input type="text"  value="" style="height:34px; width:180px; border:none; outline:none; background:#4895ef; padding-left:10px; padding-right:10px; background:#f1faee; box-shadow:0px 0px 0px 1px #f0f0f0; color:#404040; font-family:Poppins-SemiBold;  border-radius:8px; " placeholder="Ethereum Mainnet" list="search-result-category_data_source"/>
              <datalist id="search-result-category_data_source" >
                  <option value="Ethereum Mainnet" />
                  <option value="Harmony Maininet" />
                  <option value="Ropsten Testnet" />
                  <option value="Kovan Testnet" />
                  <option value="Rinkeby Testnet" />
                  <option value="Goerli Testnet" />
                  <option value="Localhost 8545" />
              </datalist> 
            </div>
            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:20px; left:20px; float:left; position:relative; font-size:14px; color:#000000; font-family:Poppins-SemiBold; " align="center">
              Accounts
            </div>
            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:20px; border-radius:12px; cursor:pointer; left:26px; border-left:4px solid #ffc6ff; float:left; padding-left:10px; margin:4px; line-height:40px; position:relative; font-size:14px; color:#888888; font-family:Poppins-SemiBold; " align="center">
              0x105B8baF26777fC2a5d654b36Ce533a9863C3a55
            </div>
            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:20px; border-radius:12px; cursor:pointer; left:26px; border-left:4px solid #a0c4ff; float:left; padding-left:10px; margin:4px; line-height:40px; position:relative; font-size:14px; color:#888888; font-family:Poppins-SemiBold; " align="center">
              0x105B8baF26777fC2a5d654b36Ce533a9863C3a55
            </div>
            <!---

            <VueMetamask userMessage="msg" 
            @onComplete="onComplete" > </VueMetamask>
            --->


        <!---
        <QRCodeVue3 :width="200" :height="200"
          value="qr code data"
          :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
          :imageOptions="{ image:'@/assets/icons/user-profile.png',hideBackgroundDots: true, imageSize: 10.4, margin: 0 }"
          :dotsOptions="{
            type: 'dots', color: '#26249a',
            gradient: { type: 'linear', rotation: 0,
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

                <!---
        
                <div id="wallet-user-profile-photo-container" class="wallet-user-profile-photo-container" style=" width:100%; height:60px; margin-top:30px; float:left; ">
                    <img src="@/assets/icons/user-profile.png" id="wallet-user-profile-photo" class="wallet-user-profile-photo" style=" width:60px; height:60px; border-radius:100%;  background-size:100% 100%; overflow:hidden; "></div>
                    <div id="wallet-user-account" class="wallet-user-account" style="width:100%; height:40px; float:left; margin-top:4px; padding-top:10px; display:flex; justify-content:center; "> 
                    <div id="wallet-user-account-text" class="wallet-user-account-text" style="width:100%; height:40px; font-size:16px; font-family:Poppins-SemiBold; ">Joe Risk</div>
                    </div>
                    <div id="wallet-user-account-balance" class="wallet-user-account-balance" style="width:100%; height:60px; float:left; display:flex; margin-top:10px; font-size:30px; font-family:Poppins-SemiBold; justify-content:center; ">
                    <span id="wallet-currency-sign" class="wallet-currency-sign" style="font-size:30px; font-family:Poppins-Regular; position:relative; top:0px; color:#888888; left:-4px; justify-content:center; ">$</span>
                    <div id="wallet-user-account-balance-text" class="wallet-user-account-balance-text">8888.88</div>
                    </div>
                    <div id="wallet-user-account-token-balance" class="wallet-user-account-token-balance" style="width:100%; height:30px; float:left; display:flex; margin-top:10px; margin-bottom:20px; font-size:20px; font-family:Poppins-Bold; justify-content:center; ">
                    <div id="wallet-user-account-token-balance-text" class="wallet-user-account-token-balance-text" style="font-size:20px; color:#888888; font-family:Poppins-Regular; position:relative; top:0px;  justify-content:center; ">0.001 ETH</div></div>
                    <div id="wallet-user-account-address" class="wallet-user-account-address" style="width:100%; height:30px; float:left; display:flex; margin-top:20px; user-select:none; cursor:pointer; margin-bottom:20px;  font-family:Poppins-Regular; justify-content:center; "> 
                    <div id="wallet-user-account-address-text-abd-action-container" class="wallet-user-account-address-text-abd-action-container" style=" font-family:Poppins-Regular; height:30px; line-height:30px; min-width:200px; background:#f1faee;  padding:3px; padding-left:16px; padding-right:16px; display:flex;  border-radius:10px; box-shadow:0px 0px 0px 1px #f1f1f1; justify-content:center; ">
                    <div id="wallet-user-account-address-text" class="wallet-user-account-balance-text" style=" font-family:Poppins-SemiBold; height:30px; font-size:14px; line-height:30px; min-width:20px; justify-content:center; ">0xE337D2F17d5D7F71e022088ff916677A9E8D3940</div>
                    <img src="@/assets/icons/nft-copy-address.png" id="wallet-user-account-address-text" class="wallet-user-account-balance-text" style="width:20px; height:20px; position:relative; cursor:pointer; opacity:0.6; top:3px; margin-left:12px; float:left;  "></div></div>
                    <div id="wallet-user-account-actions-container" class="wallet-user-account-actions-container" style="width:100%; height:60px; float:left; display:flex; margin-top:20px; justify-content:center; "> 
                    <div id="wallet-action-button-containersend-token-form-id" class="wallet-action-button-container"   style="max-width:150px; min-width:40px; height:30px; background:#fafafa; box-shadow:0px 0px 0px 2px #f1f1f1; margin:10px; padding:4px; cursor:pointer; user-select:none; padding-left:10px; padding-right:10px; border-radius:10px; position:relative; display:flex; justify-content:center; ">
                    <img src="@/assets/icons/wallet-send.png" id="wallet-action-icon" class="wallet-action-icon" style="width:24px; height:24px; position:relative; top:3px; right:2px;  "><div id="wallet-action-text" class="wallet-action-text" style=" min-width:40px;  height:30px; line-height:30px; font-size:13px; font-family:Poppins-SemiBold; ">Send</div></div>
                                     
                    <div id="wallet-action-button-containerreceive-token-form-id" class="wallet-action-button-container" @click="showReceiveTokenValueForm('my-wallet-link','My Wallet')" style="max-width:150px; min-width:40px; height:30px; background:#fafafa; box-shadow:0px 0px 0px 2px #f1f1f1; margin:10px; padding:4px; cursor:pointer; user-select:none; padding-left:10px; padding-right:10px; border-radius:10px; position:relative; display:flex; justify-content:center; ">
                    <img src="@/assets/icons/wallet-receive.png" id="wallet-action-icon" class="wallet-action-icon" style="width:24px; height:24px; position:relative; top:3px; right:2px;  "><div id="wallet-action-text" class="wallet-action-text" style=" min-width:40px;  height:30px; line-height:30px; font-size:13px; font-family:Poppins-SemiBold; ">Receive</div></div>

                            </div>
                        <div id="wallet-user-account-address" class="wallet-user-account-address" style="width:100%; height:40px; float:left; margin-top:20px; font-family:Poppins-Regular; justify-content:center; ">
                        <div id="wallet-user-account-address" class="wallet-user-account-address" style="width:20%; height:40px; left:30px; position:relative; float:left;  font-family:Poppins-Regular;  ">
                        <img src="@/assets/icons/polygon-matic.png" id="wallet-user-account-address-text" class="wallet-user-account-balance-text" style="width:20px; height:20px; position:relative; top:10px; opacity:0.7; right:4px; float:left;  ">
                    
                    <div id="wallet-user-account-address-text" class="wallet-user-account-balance-text" style="font-family:Poppins-Regular; height:40px; line-height:40px; float:left;  font-size:14px; justify-content:center; ">Transactions</div>
                    </div><div id="wallet-user-account-address-text" class="wallet-user-account-balance-text" style="width:70%; height:1.2px; background:#f1f1f1; margin-top:20px; float:left; font-family:Poppins-Regular; justify-content:center; "> 
                        </div>
                </div>
                --->
                


    <addPrivateKeyModalWidget v-if=canShowAddPrivateKey >
    </addPrivateKeyModalWidget>
    <receiveTokenValueWidget v-if=canShowReceiveTokenValue >
    </receiveTokenValueWidget>

    

    </div>
    </div>



</template>


<script lang="jsx">

//import QrcodeVue from 'qrcode.vue';
//import QRCodeVue3 from "qrcode-vue3";
//import VueMetamask from "vue-metamask";
import addPrivateKeyModalWidget from '../../modal/addAccountPrivateKey.vue';
import receiveTokenValueWidget from '../../modal/receiveTokenValue.vue'

export default {
    name:'accountWalletWidget',
      data() {
      return {
        canShowAddPrivateKey:false,
        canShowReceiveTokenValue:false,
        value: 'https://example.com',
        size: 100,
        metamaskData:{
            web3:{},
            metaMaskAddress:'',
            message:'',
            type:'',
            networkId:'',
        },
      }
    },
    components: {
     // QRCodeVue3,
     addPrivateKeyModalWidget, receiveTokenValueWidget, 
     //VueMetamask,
      
    },
    created() {
       

    },   
    mounted(){
        //var web3 = new Web3();
          
    // You should initialize web3 instance after window load event has fired to avoid any race condition.               
       // window.addEventListener('load',this.initweb3());
        this.onComplete()
        console.log('make metamask connection::..')
        this.init()
      
        //this.connect()
        
       

    },
    methods: {
        /****
         * if metamask is not connected, its prompted to connect
         * 
         * ***/
              
        async init() {
            console.log("metamask data: ",this.metamaskData)
           // console.log(Web3,Web3Modal)
        },
        onComplete(data){
            if(data!==undefined){
                this.metamaskData.message=data.message
                this.metamaskData.networkId=data.netId
                this.metamaskData.metaMaskAddress=data.metaMaskAddress
                this.metamaskDatatype=data.type
                this.metamaskDataweb3=data.web3

                console.log('data:', this.metamaskData);


            }
        },
        showAddPrivateKeyForm(param1,param2){
            console.log(param1,param2);
            this.canShowAddPrivateKey=true
            let targetElement
            setTimeout(function (){
                document.getElementById('add-private-key-modal')!=null? targetElement=document.getElementById('add-private-key-modal'):targetElement=null
                targetElement.style.display="block"
            } ,300)
        },
        showReceiveTokenValueForm(param1,param2){
            console.log(param1,param2);
            this.canShowReceiveTokenValue=true
            let targetElement
            setTimeout(function (){
                document.getElementById('receive-token-value-modal')!=null? targetElement=document.getElementById('receive-token-value-modal'):targetElement=null
                targetElement.style.display="block"
            } ,300)
        },
        closeAddPrivateKeyForm(){

        },

    },


}

</script>