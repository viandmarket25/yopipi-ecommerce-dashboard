<template>
    <div style="width:100%; height:auto; position:relative; left:0%; background:#ffffff; float:left; " align="center">
        <div id="top-list-container" class="top-list-container" style="width:100%; height:210px; letter-spacing:0.012em; cursor:pointer; text-align:center; position:relative; margin-top:40px; left:0px; float:left; font-size:22px; color:#888888; font-family:Poppins-SemiBold; " align="center">
            <div align="center" class="home-banner-container" style=" width:94%; height:200px; box-shadow:0px 0px 0px 1.4px #f1f1f1; left:3%; background-position:78% 65%; background:#fafafa;  line-height:20.4px; background: linear-gradient(to right, #fafafa 0%, #ccdbfd 40%, #FAF1D5 60%, #fefefe 100%); border-radius:12px; position:relative; " >
                <div align="center" class="home-banner" style=" width:100%; height:200px; background-position:78% 65%; background-size:260px 200px; background-repeat:no-repeat; border-radius:12px; position:relative; " >
                    <div  align="center" style=" width:70%; height:100%; font-weight:bold; user-select:none; color:#404040; background:none; float:left; font-family:Poppins-SemiBold; position:relative; ">  
                        <img src='@/assets/images/nft1.png' style="height:78px; width:78px; position:relative; padding:8px; background:#ffffff; box-shadow:0px 0px 0px 2.4px #f1f1f1; border-radius:100px; left:24px; top:138px; " /> 
                    </div>
                    <div align="center" style=" width:30%; height:100%;  font-weight:bold; background:none; color:#404040; float:left; font-family:Poppins-SemiBold; position:relative; ">  
                    </div>
                </div>
            </div>
        </div>  
        <div id="top-list-container" class="top-list-container" style="width:100%; height:100px; letter-spacing:0.012em; cursor:pointer; text-align:center; position:relative; margin-top:4px; left:0px; float:left; font-size:22px; color:#888888; font-family:Poppins-SemiBold; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; top:20px; left:20px; float:left; position:relative; font-size:14px; color:#000000; font-family:Poppins-SemiBold; " align="center">
                <div id="top-list-container" class="top-list-container" style="width:70%;  height:34px; text-align:center; top:20px; left:20px; float:left; position:relative; font-size:24px; color:#000000; font-family:Poppins-Bold; " align="center">
                   Ferari Arts Finiti
                </div>
                <div id="top-list-container" class="top-list-container" style="width:70%;  height:30px; text-align:center; top:20px; left:20px; float:left; position:relative; font-size:16px; color:#404040; font-family:Poppins-Bold; " align="center">
                   Cryotoman1
                </div>
            </div>
        </div>  
        <div id="top-list-container" class="top-list-container" style="width:100%; height:80px; letter-spacing:0.012em; text-align:center; position:relative; margin-top:40px; left:0px; float:left; font-size:22px; color:#888888; font-family:Poppins-SemiBold; " align="center">
          <div id="top-list-container" class="top-list-container" style="width:80%;  height:40px; text-align:left; position:relative; left:40px; float:left; " align="center">
            <ul id="menu-list-container" class="menu-list-container" style=" user-select:none; " align="center">
              <li id="collectibles" class="menu-item"  style=" background:#f1f1f1; color:#000000; font-weight:Poppins-Bold; " >All Nfts</li>
              <li id="lands" class="menu-item" >Purchased</li>
              <li id="lands" class="menu-item" >Activity</li>
            </ul>
          </div>
        </div>

        <div id="search-result-list-container" class="search-container" style="width:100%;  height:auto;  margin-bottom:10px; overflow-y:scroll; user-select: none; float:left; " align="center" >
            <div  v-for="(artUrl,index) in nftArtList.artUrl" :key="index"  @click="goDetail('/details/')" style="width:18.8%; height:410px; margin-top:4px; margin-bottom:18px; float:left; margin-left:14px; box-shadow:0px 0px 0px 1px #f1f1f1; border-radius:8px; cursor:pointer; overflow:hidden;   " >             
                <div align="left" style="height:40px; width:100%; margin-top:20px; ">
                  <img src='@/assets/images/art4.jpg' style="height:28px; width:28px; position:relative;  box-shadow:0px 0px 0px 4px #f1f1f1; border-radius:100px; left:24px; top:10px; " /> 
                </div>
                <div style="height:200px; width:100%; overflow:hidden; " >
                  <img :src="getImageUrl(artUrl)"   style="height:186px; width:88%; position:relative; top:10px; border-radius:12px; float:left; left:6%; " /> 
                </div>
                <div style="height:40px; width:100%; ">
                  <div  align="center" style=" width:70%; font-weight:bold; color:#000000; float:left; left:20px; font-size:16px; line-height:20px; top:10px; text-align:left; font-family:Poppins-Medium; position:relative; ">  
                    {{nftArtList.brief[index]}}
                  </div>
                  <div  align="center" style=" width:30%; font-weight:bold; color:#000000; float:right; right:0px; font-size:16px; line-height:20px; top:10px; text-align:left; font-family:Poppins-Medium; position:relative; ">  
                    <img src='@/assets/icons/polygon-matic.png' style="height:24px; width:24px; position:relative; float:right; background:#fbf8cc; box-shadow:0px 0px 0px 0px #f1f1f1; border-radius:100px; right:20px; top:0px; " /> 
                  </div>
                </div>
                <div style="height:40px; width:100%; margin-bottom:10px; ">
                  <div  align="center" style=" width:100%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:4px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    {{nftArtList.price[index]}} <span style="color:#06D6A0; font-size:16px; ">ETH </span>
                  </div>
                  <div  align="center" style=" width:100%; font-weight:bold; color:#404040; margin-top:0px; float:left; left:20px; font-size:14px; line-height:20px; margin-top:10px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    {{nftArtList.bids[index]}} <span style="color:#888888; font-family:Poppins-SemiBold; " >Bids</span>
                  </div>
                </div>
                <div style="height:30px; width:100%; margin-top:20px;">
                  <div  align="center" style=" width:40%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:0px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    <input type="button" value="Modify" style="height:28px; width:90px; cursor:pointer; border-radius:4px; background:#DCFFF9; outline:none; border:none; font-family:Poppins-SemiBold;  font-size:13px; line-height:20px;  " >
                  </div>
                   <div  align="center" style=" width:40%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:0px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    <input type="button" value="Burn" style="height:28px; width:70px; cursor:pointer; border-radius:4px; background:#f1f1f1; outline:none; border:none; margin-left:20px; font-family:Poppins-SemiBold;  font-size:13px; line-height:20px; padding-left:4px; " >
                  </div>       
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="jsx">

export default {
  name: "sellerStoreWidget",
  components:{
    //AccountWalletWidget,
    //VueMetamask,
    //Header,
    //Web3ModalVue
  },
  //mixins: [web3Modal],
  props: {
    msg: String
  },
  created() {
   
 
  },
  mounted() {
    this.activeProfilePage=document.getElementById('active-profile-page')
     //console.log("web3 modal: ",window.web3)

  },
  data(){
    return {
      /*
      Web3Modal: window.Web3Modal.default,
      WalletConnectProvider: window.WalletConnectProvider.default,
      EvmChains: window.EvmChains,
      Fortmatic: window.Fortmatic,
      */
      // Web3modal instance
      web3Modal: 0,
      // Chosen wallet provider given by the dialog window
      provider: 0,
      // Address of the selected account
      selectedAccount: 0,
      activeProfilePage:'',

      number: 0,
      balance: 0,
      selectedVerticalButton:'my-wallet-link',
      selectedHorizontalButton:'',
    /***
     * 
     * {"item":{"name":"Leslie","job":"Deputy Director"},
     * "option":{"name":"Add Star","slug":"add-star","class":"my-custom-class"}}
    ***/
    items: {
      item:{"name":"Leslie","job":"Deputy Director"},
      option:{"name":"Add Star","slug":"add-star","class":"my-custom-class"}
    },
      // Unpkg imports
    nftArtList:{
      artUrl:['music-img-1.jpeg','music-img-4.jpeg','music-img-3.jpeg','music-img-2.jpeg','music-img-5.jpeg','music-img-6.jpeg','music-img-7.jpeg','music-img-8.jpeg','music-img-9.jpeg'],
      brief:['Pokens Face','June Baby girl','Nanjing Panda','Cute Poppies','Ferrow Wellows','Hot Bummies','Angel Wings','Dancing Mouse','Sindi Samdra'],
      description:[],
      price:['0.012','0.1','0.01','0.33','2.0','0.12','1.03','0.06','0.17'],
      bids:['122','0','10','24','2','14','102','6','17'],
    },
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      1200: {
        itemsToShow: 4,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    }
  },
  methods:{
    onComplete(data){
                console.log('data:', data);
    },
    connect() {
      this.$store.dispatch('connect')
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
      previousButton.style.background="#fcfcfc"
      targetButton.style.background="#f1f1f1"
      previousButton.style.fontFamily="Poppins-Medium"
      targetButton.style.fontFamily="Poppins-SemiBold"
      this.activeProfilePage.innerHTML=activePage
      console.log(this.activeProfilePage)


      console.log(this.selectedVerticalButton)

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
    getImageUrl (name) {
      //console.log("art url: ",name)
      return '/src/assets/images/'+name;
        //return new URL(`@/assets/images/${name}`, import.meta.url).href
    }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-banner{
  background:url('/src/assets/images/nft-backg.png')
}
.top-menu-list-container {
    height: 60px;
    width: auto;
    list-style-type: none;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
}
.top-menu-item {
    cursor: pointer;
    font-size: 12px;
    padding: 12px;
    padding-left: 22px;
    padding-right: 16px;

    min-width: 90%;
    color:#000000;
    max-width: 130px;
    margin: 6px;
    border-radius: 6px;
    text-align: left;
    letter-spacing: 0.01712em;
    display: inline-block;
    position: relative;
    top:24px;
    font-family: Poppins-Medium;
    transition: 0.1s all;
    transition-delay: 0.1s;
}



.menu-list-container {
    height: 60px;
    width: auto;
    list-style-type: none;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
}

.menu-item {
    cursor: pointer;
    font-size: 14px;
    padding: 8px;
    padding-left: 16px;
    padding-right: 16px;
    min-width: 16px;
    max-width: 230px;
    margin: 6px;
    border-radius: 16px;
    color:#888888;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    box-shadow:0px 0px 0px 2px #f1f1f1;
    font-family: Poppins-SemiBold;

}

.menu-item:hover {
    position: relative;
    font-family: Poppins-SemiBold;
    background-color: #f1f1f1;
    transition-delay:.2s;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
