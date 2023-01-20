<template>
  <div style="width:100%; height:100vh; overflow-y:scroll; padding-bottom:200px;  ">

    <searchBar msg=""/>
    <div id="post-video-container" class="centered-position" style="width:100vw; height:auto; display:flex; justify-items:center; float:left; user-select:none; ">

    <div  style="min-width:1100px;  max-width:1100px; max-height:auto; min-height:560px; border-radius:10px; box-shadow:0px 0px 0px 1px #f1f1f1; background:#ffffff; ">

      <div style="width:94%; height:auto; background:#ffffff;  overflow-y:hidden; margin-left:3%;  ">
        <div style="width:74%; height:auto; padding-bottom:200px; overflow-y:hidden; margin-left:13%;  ">
          <div id="top-list-container" class="top-list-container" style="width:100%; height:40px; letter-spacing:0.012em; text-align:center; position:relative; margin-top:30px; left:0px; float:left; font-size:22px; color:#000000; font-family:Poppins-SemiBold; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:60%;  height:30px; text-align:left; position:relative; left:100px; float:left; font-size:18px; font-family:Poppins-SemiBold;" align="center">
                Post Video on your account
            </div>
          </div>

          <div id="top-list-container" class="top-list-container" style="width:100%; height:80px; letter-spacing:0.012em; text-align:center; position:relative; margin-top:20px; left:0px; float:left; font-size:22px; color:#000000; font-family:Poppins-SemiBold; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:60%;  height:40px; text-align:left; position:relative; left:100px; float:left; font-size:16px; " align="center">
              <span style="color:#888888; font-size:12px; font-family:Poppins-Medium; " >
                Choose Video<span style="color:#000000; " > (Max 1 minute) </span>            Or drag and drop a file
                MP4 or WebM
                720x1280 resolution or higher
                Up to 60 seconds and
                Less than 200MB </span>
            </div>
          </div>
          <div id="top-list-container" class="top-list-container" style="width:100%; height:100px; letter-spacing:0.012em; text-align:center; position:relative; margin-top:10px; left:0px; float:left; font-size:22px; color:#000000; font-family:Poppins-SemiBold; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:60%;   height:80px; text-align:left; position:relative; left:100px; float:left; font-size:16px; " align="center">
                <div style="width:140px; height:80px;  border:2px dashed #ccc; overflow:hidden; cursor:pointer; background:#fafafa; border-radius:4px; " >
                  <div style="width:140px; height:40px;  border-radius:6px; display:flex; justify-content: center; align-items:center; " >
                    <img src='@/assets/icons/upload-album-art.png' style="height:28px; width:28px; position:relative;   top:4px; " />
                  </div>
                  <div style="width:140px; height:30px; text-align:center; color:#000000; font-family:Poppins-Medium; font-size:11px; line-height:30px;  border-radius:6px; " >
                    Choose Video
                  </div>
                  <input type="file" id="album-art" style="width:140px; height:80px; opacity:0; position:absolute; top:0px; float:left; background:pink; " />
                </div>
            </div>
          </div>

          <div id="top-list-container" class="top-list-container" style="width:100%; height:40px; letter-spacing:0.012em; text-align:center; position:relative; margin-top:30px; left:0px; float:left; font-size:22px; color:#000000; font-family:Poppins-SemiBold; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:60%;  height:40px; text-align:left; position:relative; left:100px; float:left; font-size:16px; " align="center">
                Video Caption
            </div>
          </div>
          <div id="top-list-container" class="top-list-container" style="width:100%; height:220px; letter-spacing:0.012em; position:relative; margin-top:0px; left:0px; float:left; font-size:22px; color:#000000; font-family:Poppins-SemiBold; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:70%;  height:200px; text-align:left; position:relative; left:100px; float:left; " align="center">
              <textarea type="text" id="nft-description" placeholder="eg: Yopipi Smart Watch" style="width:98%; height:200px; font-family:Poppins-Medium; padding-top:10px; background:#fcfcfc; box-shadow:0px 0px 0px 1px #f1f1f1; font-size:13px; border-radius:4px; max-height:300px; padding-left:20px; padding-right:20px; outline:none; border:none;  " ></textarea>
            </div>
          </div>
          <div id="top-list-container" class="top-list-container" style="width:100%; height:50px; letter-spacing:0.012em; text-align:center; position:relative; margin-top:10px; left:0px; float:left; font-size:22px; color:#000000; font-family:Poppins-SemiBold; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:70%;  height:40px; text-align:left; position:relative; right:100px; float:right; " align="center">
              <input type="button" class="list-item-button"  @click="" value="Post" style="width:100px; height:40px; cursor:pointer; font-family:Poppins-Medium; font-size:16px; border-radius:20px; line-height:40px; padding-left:10px; padding-right:10px; outline:none; float:right; right:60px; position:relative; color:#ffffff; background:#000000; font-family:Poppins-Bold; border:none; box-shadow:0px 0px 0px 1px #f1f1f1; " />
            </div>
          </div>

        </div>
      </div>

    </div>

</div>



    <HomeFooterWidget msg=""/>
  </div>
</template>

<script lang="jsx">

import searchBar from './search-bar.vue';


/*
axios.post(this.baseUrl, this.data)
.then(function (response) {
    window.location = response.data.redirect; // full URI to redirect to
})
.catch(function (error) {

});
*/
import axios from "axios";
export default {
  name: 'userProfileWidget',
  components:{
  searchBar
  },

  data(){
    return {
      isLoggedIn: false,

      activePage:'',
      targetUrl:'http://localhost:3000/list-item',
      userCookieData:{},

      mintInitialize:{
        investment:{
          allowInvesting:false,
          allowedPercent:0,
        },
        mintUrl:'',
        soundFileType:'pop',
        priceType:'fixed',

      }
    }
  },
  created() {

   setTimeout(function(){



   },300)

  },
  mounted: function(){
 this.checkUserExists('auto-login')
  //this.showFooter();
    this.showOverflow();
  },
  methods:{
       showOverflow(){
      let vueApp=document.getElementById("vue-app")
      vueApp.style.overflowY="scroll"
       let app=document.getElementById("app")
      app.style.overflowY="hidden"

    },
     checkUserExists(type){
    let result
    if(type=='auto-login'){
      console.log('check user ')
      //window.localStorage.getItem("username") === null
      let userCookieData
      let localStoreData
      if(this.$cookies.isKey('siteAccessT') ){
        userCookieData=this.$cookies.get("siteAccessT")
        this.userCookieData=userCookieData
        //$cookies.isKey(keyName)
        // localStorage.getItem("siteAccessT") !== null
        console.log(userCookieData)
        localStoreData = JSON.parse( window.localStorage.getItem("siteAccessT"))
        console.log( localStoreData ,window.localStorage.getItem("siteAccessT"))
        console.log("true")
        result=1;
       // this.goUserHome();

      }else{
        this.$router.push('/home/')
        result=0
        console.log("false")
      }
      console.log("local storage:  ",window.localStorage.getItem("siteAccessT"),localStoreData,"user cookies: ",userCookieData )



    }
    return result
  },
    showFooter(){
      let footer=document.getElementById("app-footer")
      footer.style.display="block"
    },

    getMintData(){
      let soundFileType=this.mintInitialize. soundFileType
      let nftTitle=document.getElementById("nft-title").value
      let nftSubTitle=document.getElementById("nft-sub-title").value
      let nftDescription=document.getElementById("nft-description").value
      let nftPrice=document.getElementById("nft-price").value
      //let soundFile=document.getElementById("sound-file").value
      let soundFiles=document.getElementById("sound-file").files[0];
      let albumFile=document.getElementById("album-art").files[0];
      let nftPriceType=this.mintInitialize.priceType
      //console.log(nftTitle.value, nftSubTitle.value,soundFileType,nftDescription.value,soundFile,albumFile )
      //alert(nftTitle.value+ nftSubTitle.value+soundFileType+nftDescription.value+soundFile+albumFile)
      let payload={
          soundFileType:soundFileType,
          nftTitle:nftTitle,
          nftSubTitle:nftSubTitle,
          nftPrice:nftPrice,
          nftDescription:nftDescription,
          nftPriceType:nftPriceType,
      }
      let filePayload={
        albumFile:albumFile,
        soundFiles:soundFiles,
      }
      if(this.$cookies.isKey('siteAccessT') ){
        this.userCookieData=this.$cookies.get("siteAccessT")
        payload.token=this.userCookieData.token;
        this.listItem(payload,filePayload)
        console.log("payload: ",payload)
      }
    },
    listItem(payload,filePayload){
      console.log(filePayload)
      let dataObject = {
        payload: JSON.stringify(payload),
        //filePayload: filePayload,
      }
      let formData = new FormData();
      for (let key in dataObject) {
        formData.append(key, dataObject[key])
      }
      for (let key in filePayload) {
        formData.append(key,  filePayload[key])
      }


      //formData.append("albumFile",filePayload.albumFile);
      //formData.append('f1',payload.);

      axios.post(this.targetUrl,formData, {
        params: { action: "list-item" },
        headers: { 'Content-Type': 'multipart/form-data' },"Access-Control-Allow-Origin": "*",
        baseURL: 'http://localhost',
      })
      .then(function (response) {
       // console.log(response);
        console.log(response.data);
        //let result=JSON.parse(response.data);
        let result =response.data
        console.log("result: ",result)

        if (result.resultCode == 1) {

          console.log(result)
        }

      }).catch(function (error) {
        console.log(error);
      });



    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    color:#000000;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    box-shadow:0px 0px 0px 1px #f1f1f1;
    font-family: Poppins-SemiBold;

}

.menu-item:hover {
    position: relative;
    font-family: Poppins-SemiBold;
    background-color: #f1f1f1;
    color:#000000;
    transition-delay:122ms;
}
.list-item-button:hover{
  opacity:0.7;
  transition-duration:344ms;
 transition-delay:223ms;


}
</style>
