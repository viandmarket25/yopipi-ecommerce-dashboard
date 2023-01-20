<template>
    <div  align="center" style=" width:100%; height:260px; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; float:left; margin-bottom:40px; position:relative; margin-top:20px; ">
        <div align="center" class="home-banner-container" style=" width:900px; height:260px; background-position:78% 65%; background:#fafafa;  line-height:20.4px; background: linear-gradient(to right, #fafafa 0%, #DCFFF9 40%, #FAF1D5 60%, #fefefe 100%); border-radius:12px; position:relative; " >
            <div align="center" class="home-banner" style=" width:900px; height:260px; background-position:78% 65%; background-size:260px 200px; background-repeat:no-repeat; border-radius:12px; position:relative; " >
              <div  align="center" style=" width:70%; height:100%; font-weight:bold; user-select:none; color:#404040; background:none; float:left; font-family:Poppins-SemiBold; position:relative; ">  
                <div  align="center" style=" width:74%; font-weight:bold; color:#404040; float:left; left:70px; font-size:34px; line-height:38px; letter-spacing:0.0012em; top:40px; text-align:left; font-family:Poppins-SemiBold; position:relative; ">  
                Collect and Sell your Unique and Beautiful Nfts
                </div>
                <div  align="center" style=" width:60%; font-weight:bold; color:#404040; float:left; left:70px; font-size:16px; line-height:20px; top:60px; text-align:left; font-family:Poppins-Medium; position:relative; ">  
                Explore the top Art and Collectibles Listing and Trading Platform 
                </div>
                <div  align="center" style=" width:60%; font-weight:bold; color:#404040; float:left; left:70px; font-size:18px; line-height:20px; margin-top:80px;  text-align:left; font-family:Poppins-Medium; position:relative; ">  
                <span style="font-family:Poppins-SemiBold; color:#4361ee; " > 10,000+</span> Art Works, <span style="font-family:Poppins-SemiBold; color:#4361ee; " >1.2  Million +</span>  Users 
                </div>


              </div>
              <div  align="center" style=" width:30%; height:100%;  font-weight:bold; background:none; color:#404040; float:left; font-family:Poppins-SemiBold; position:relative; ">  
              
              </div>
          </div>
        </div>
    </div>
</template>


<script lang="jsx">
export default {
  name: 'HomeBannerWidget',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.home-banner{
  cursor:pointer;
  background:url('/Applications/XAMPP/xamppfiles/htdocs/ethereum/eth-frontend/src/assets/images/nft-backg.png')
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
