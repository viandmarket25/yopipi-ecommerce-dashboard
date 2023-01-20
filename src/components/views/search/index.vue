<template>
  <div id="search-container" class="search-container" style="width:100%;  height:auto; background:#ffffff;  margin-bottom:10px; user-select:none; padding-bottom:200px; float:left; " align="center">
      
    <div id="search-container" class="search-container" style="width:100%;  height:40px;  margin-bottom:10px; user-select: none; float:left; " align="center">
      <div id="search-field" class="search-field" style="width:84%;  height:50px; background:#fafafa; padding-left:8px; padding-right:4px; margin:10px;  border-radius:12px; overflow:hidden; padding-top:0px;"> 
        <div id="search-button" class="search-button" style="width:30px;  height:40px;  line-height:40px; color:#ffffff; font-size:18px; font-family:Poppins-Bold; float:left;  padding-top:0px;">
          <img src='@/assets/icons/nft-search.png' class="nft-option-select" style="height:28px; width:28px; position:relative; float:right;  border-radius:100px; top:10px; " /> 
        </div>
        <input placeholder="Search Music, Comedy and Voice Notes!" id="search-input" class="search-input" style="width:94%;  height:50px; background:none; float:left; color:#404040; border:none; padding-left:10px; outline:none; font-family:Poppins-SemiBold; padding-top:0px;">
        <!---
        <div id="search-button" class="search-button" style="width:60px;  height:40px; background:#ff7900; line-height:40px; color:#ffffff; border-radius:0px 0px 10px 6px; cursor:pointer; font-size:18px; font-family:Poppins-Bold; float:right;  padding-top:0px;">Go</div>
        --->
      </div>
    </div>
    <div id="search-result-container" class="search-container" style="width:100%;  height:50px; margin-top:30px; margin-bottom:10px; user-select: none; float:left; " align="center">
     <div id="top-list-container" class="top-list-container" style="width:30%;  height:40px; text-align:left;  left:100px; float:left; position:relative; font-size:16px; color:#000000; font-family:Poppins-Medium; " align="center">
        Found items: <span style="color:#5e60ce; font-family:Poppins-Bold; ">1,200 </span> 
      </div>
    </div>
    <div id="filter-container" class="search-container" style="width:100%;  height:auto;  margin-bottom:10px; user-select: none; float:left; " align="center">
      <div id="filter-container" class="search-container" style="width:88%;  height:auto;  margin-bottom:10px; margin-left:6%; user-select: none; float:left; " align="center">    
        <div id="search-result-filter-container" class="search-container" style="width:24%;  height:800px;  margin-bottom:10px; box-shadow:0px 0px 0px 1px #f1f1f1; user-select: none; float:left; " align="center">

            <div id="top-list-container" class="top-list-container" style="width:90%;  height:60px; text-align:left; top:20px; left:20px; float:left; position:relative; font-size:16px; color:#000000; font-family:Poppins-Medium; " align="center">
              Filters 
            </div>

            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:20px; left:20px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-SemiBold; " align="center">
              Category
            </div>
            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:10px; left:20px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-SemiBold; " align="center">
              <input type="text"  value="" style="height:34px; width:180px; border:none; outline:none; background:#fafafa; padding-left:10px; padding-right:10px;  font-family:Poppins-SemiBold;  border-radius:8px; " placeholder="Select Category" list="search-result-category_data_source"/>
              <datalist id="search-result-category_data_source" >
                  <option value="Art" />
                  <option value="Collectibles" />
                  <option value="Domains" />
                  <option value="Lands" />
                  <option value="Music" />
                  <option value="Photo" />
                  <option value="Sports" />
              </datalist> 
            </div>

            

            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:20px; left:20px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-SEmiBOld; " align="center">
              Type
            </div>
            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:10px; left:20px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-SemiBold; " align="center">
              <input type="text"  value="" style="height:34px; width:180px; border:none; outline:none; background:#fafafa; padding-left:10px; padding-right:10px;  font-family:Poppins-SemiBold;  border-radius:8px; " placeholder="Select Type" list="search-result-type_data_source"/>
              <datalist id="search-result-type_data_source" >
                  <option value="Fixed Price" />
                  <option value="Auction" />
                  <option value="Auction with Buy Now" />
                 
              </datalist> 
            </div>


            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:20px; left:20px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-SEmiBOld; " align="center">
              Price
            </div>
            <div id="top-list-container" class="top-list-container" style="width:90%;  height:40px; text-align:left; top:10px; left:20px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-SemiBold; " align="center">
              <input type="text"  value="" style="height:34px; width:180px; border:none; outline:none; background:#fafafa; padding-left:10px; padding-right:10px; font-family:Poppins-SemiBold;  border-radius:8px; " placeholder=" Price Range" list="search-result-price-range_data_source"/>
              <datalist id="search-result-price-range_data_source" >
                  <option value="0 - 100" />
                  <option value="100 - 1000 " />
                  <option value="1000 - 10000" />
              </datalist> 
            </div>
        </div>
        <div id="search-result-list-container" class="search-container" style="width:76%;  height:auto;  margin-bottom:10px; overflow-y:scroll; user-select: none; float:left; " align="center">
            <div  v-for="(artUrl,index) in nftArtList.artUrl" :key="index"  @click="goDetail('/details/')" class="nft-search-item" style="width:206px; height:410px; margin-top:4px; margin-bottom:14px; float:left; margin-left:14px; box-shadow:0px 0px 0px 1px #f1f1f1; border-radius:8px; cursor:pointer; overflow:hidden;   " >             
                <div align="left" style="height:40px; width:100%; margin-top:20px; ">
                  <img src='@/assets/images/art4.jpg' style="height:28px; width:28px; position:relative;  box-shadow:0px 0px 0px 4px #f1f1f1; border-radius:100px; left:24px; top:10px; " /> 
                  <img src='@/assets/icons/nft-show-more.png' class="nft-option-select" style="height:28px; width:28px; position:relative; float:right; right:24px; box-shadow:0px 0px 8px 1px #f1f1f1; border-radius:100px; top:10px; " /> 

                </div>
                <div style="height:200px; width:100%; overflow:hidden; " >
                  <img :src="getImageUrl(artUrl)"  style="height:186px; width:88%; position:relative; top:10px; border-radius:12px; float:left; left:6%; " /> 
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
                    <input type="button" value="Buy Now" style="height:28px; width:90px; cursor:pointer; border-radius:4px; background:#DCFFF9; outline:none; border:none; font-family:Poppins-SemiBold;  font-size:13px; line-height:20px;  " >
                  </div>
                   <div  align="center" style=" width:40%; font-weight:bold; color:#000000; float:left; left:20px; font-size:22px; line-height:20px; top:0px; text-align:left; font-family:Poppins-Bold; position:relative; ">  
                    <input type="button" value="Bid" style="height:28px; width:70px; cursor:pointer; border-radius:4px; background:#f1f1f1; outline:none; border:none; margin-left:20px; font-family:Poppins-SemiBold;  font-size:13px; line-height:20px; padding-left:4px; " >
                  </div>
                 
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchPageWidget',
  props: {
    msg: String
  },
  data(){
    return {
          // carousel settings
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
    goDetail(param){
      console.log(param)
      this.$router.push(param)

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
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #fafafa inset !important;
}
.nft-option-select:hover{
  opacity:0.6;
  transition-delay: 125ms;
  transition-duration: 200ms;

}
.nft-search-item:hover{
  opacity:0.94;
  transition-delay: 125ms;
  transition-duration: 200ms;
  box-shadow:0px 0px 0px 3px #404040;

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
