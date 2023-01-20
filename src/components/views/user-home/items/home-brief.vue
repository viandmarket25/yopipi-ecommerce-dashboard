<template>
  <div  id="app-logo" class="app-logo" align="center" style=" width:100%; height:360px; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; float:left; margin-bottom:20px; position:relative; margin-top:20px; ">
    <!---
    <div id="app-logo-text" class="app-logo-text" align="center" style="font-size:38px; line-height:48px; width:60%; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; position:relative; "> Explore the top Art and Collectibles Listing and Trading Platform  
    </div>
    --->


    <div id="app-logo" class="app-logo"  style=" width:98%; height:340px; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; left:5%; float:left; margin-bottom:20px; position:relative; margin-top:0px; ">
   

      <div id="app-logo" class="app-logo"  style=" width:28%; height:340px; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; left:0%; float:left;  margin-bottom:20px; position:relative; margin-top:0px;  ">
        <div id="top-list-container" class="top-list-container" style="width:100%; height:40px; float:left; user-select: none; " align="center">
          <div id="top-list-container" class="top-list-container" style="width:80%;  height:30px; text-align:left; float:left; font-size:20px; color:#000000; font-family:Poppins-Medium; " align="center">
              Top <span style=" font-family:Poppins-SemiBold; ">Accounts</span>
          </div>
          <div id="top-list-container" class="top-list-container" style="width:30%;  height:30px; float:left;  " align="center">
          
          </div>
        </div>


        <div id="top-list-container" class="top-list-container" style="width:100%; height:auto; float:left; user-select: none; margin-top:10px; " align="center">
          
          <div  v-for="(account,index) in topAccountList" :key="index"  id="top-list-container" class="top-list-container" style="width:100%; height:50px; float:left; user-select: none; padding-top:4px; padding-bottom:4px; margin-top:10px; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:22%;  height:50px; text-align:left; float:left; font-size:20px; color:#000000; font-family:Poppins-Medium; " align="center">
              <img src='@/assets/images/music-img-11.gif' style="height:42px; width:42px; position:relative; cursor:pointer;  border-radius:100px; left:14px; top:8px; " /> 
            </div>
            <div id="top-list-container" class="top-list-container" style="width:44%;  height:50px; text-align:left; float:left; color:#000000; font-family:Poppins-Medium; " align="center">
                <div style=" font-family:Poppins-Medium; color:#000000; font-size:12px; letter-spacing:0.0612em; position:relative; top:10px; ">{{account.username}}</div>
                  <div style=" font-family:Poppins-SemiBold; position:relative; top:12px; cursor:pointer; font-size:13px; color:#888888; ">
                  <img src='@/assets/icons/polygon-matic.png' style="height:20px; width:20px; position:relative; float:left;  box-shadow:0px 0px 0px 0px #f1f1f1; margin-right:4px; left:0px; top:0px; " /> 
                  {{account.tradeVolume}}
                  </div>
            </div>
            <div id="top-list-container" class="top-list-container" style="width:26%;  height:50px; text-align:left; float:left; font-size:16px; color:#404040; font-family:Poppins-Medium; " align="center">
              <div style=" font-family:Poppins-Medium; position:relative; top:20px; color:#06D6A0; ">+{{account.assetChart}}%</div>
            </div>
            <div style="height:2px; width:60%; margin-top:14px; margin-left:10px;  float:left; border-top:1px solid #f1f1f1; ">
            </div>
          </div>
          

        </div>



      </div>
      


      <div id="app-logo" class="app-logo"  style=" width:40%; height:340px; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; left:0%; float:left; margin-bottom:20px; margin-left:40px; position:relative; margin-top:0px;  ">
          <div style="height:300px; width:480px; margin-top:14px;  margin-left:10px; border-radius:20px; float:left; ">
            <div style="height:294px; width:340px;   border-radius:20px; float:left; ">
              <div style="width:100%; height:100%; background:#fafafa; margin-top:14px; overflow-y:hidden; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-10.gif' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
            </div>
            <div style="height:300px; width:110px; margin-top:14px; margin-left:10px; border-radius:20px; float:left;  ">
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-10.gif' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-9.jpeg' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-11.gif' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
            </div>
          </div>
          <!---
          <div style="height:60px; width:100%; border-radius:20px; float:left; ">
                <div style="height:40px; width:100%; margin-top:14px; ">
                  <div  align="center" style=" width:100%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:4px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    vv <span style="color:#06D6A0; font-size:16px; ">MATIC </span>
                  </div>
                  <div  align="center" style=" width:100%; font-weight:bold; color:#404040; margin-top:0px; float:left; left:20px; font-size:14px; line-height:20px; margin-top:10px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    vv <span style="color:#888888; font-family:Poppins-SemiBold; " >Bids</span>
                  </div>
                </div>
          </div>
          --->
      </div>


      <div id="app-logo" class="app-logo"  style=" width:20%; height:340px; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; left:0%; float:left; margin-bottom:20px; margin-left:20px; position:relative; margin-top:0px;  ">
          <div style="height:300px; width:480px; margin-top:14px;  margin-left:10px; border-radius:20px; float:left; ">
           
            <div style="height:300px; width:110px; margin-top:14px; margin-left:10px; border-radius:20px; float:left;  ">
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-8.jpeg' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-9.jpeg' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-10.gif' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
            </div>
              <div style="height:300px; width:110px; margin-top:14px; margin-left:10px; border-radius:20px; float:left;  ">
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-7.jpeg' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-6.jpeg' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
              <div style="width:100%; height:90px; background:#fafafa; overflow-y:hidden; margin-bottom:10px; margin-left:0%; border-radius:12px; overflow-y:hidden;  ">
                <img src='@/assets/images/music-img-11.gif' style="height:100%; width:100%;  position:relative; cursor:pointer; top:0px; " /> 
              </div>
            </div>
          </div>
          
      </div>


      






    </div>



  </div>


</template>


<script>
export default {
  name: 'HomeBriefWidget',
  data() {
    return {

      topAccountList:[
        {
          username:'NightCat318',
          tradeVolume:'22450',
          assetChart:'134',

        },
         {
          username:'HotChick18',
          tradeVolume:'2000',
          assetChart:'214',

        },
         {
          username:'LastSoldier318',
          tradeVolume:'22000',
          assetChart:'294',

        },
         {
          username:'FineShooterCat318',
          tradeVolume:'22000',
          assetChart:'234',

        },



      ],
    }
  },
  props: {
    msg: String
  },
  methods: {


  }
}
</script>

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
.app-top {
    height: 100px;
    width: inherit;
    background-color: #fcfcfc;
    user-select: none;
}

.app-menu {
    height: 80px;
    padding-top: 20px;
    width: 100%;
    text-align: center;
    background-color: #fcfcfc;
}

.app-bottom {
    height: 60px;
    width: inherit;
    margin-top: 40px;
    background-color: #f5f5f5;
}

.app-center {
    height: auto;
    width: 100vw;
    background-color: #fcfcfc;
    display: flex;
    position: relative;
    float: left;
    justify-content: center;
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
    max-width: 130px;
    margin: 6px;
    border-radius: 6px;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    box-shadow:0px 0px 0px 2px #f1f1f1;
    font-family: Poppins-Regular;
    -webkit-transition: 0.3s all;
    -webkit-transition-delay: 0.3s;
    -moz-transition: 0.3s all;
    -moz-transition-delay: 0.2s;
    -ms-transition: 0.1s all;
    -ms-transition-delay: 0.1s;
    -o-transition: 0.1s all;
    -o-transition-delay: 1s;
    transition: 0.3s all;
    transition-delay: 0.3s;
}

.menu-item:hover {
    position: relative;
    font-family: Poppins-SemiBold;
    border-radius: 6px;
    background-color: #f1f1f1;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0.3s;
    -ms-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0.3s;
}
</style>
