<template>
  <div id="vue-app" style="width:100%; height:auto; box-shadow:0px 0px 0px 1px #f1f1f1; overflow:auto;  ">
  <!--
    <TopBarLoggedInWidget v-if="isLoggedIn" :message="userCookieData" />
    <TopBarWidget v-else msg=userCookieData />
    <router-view :key="$route.fullPath">
    </router-view>
    <HomeFooterWidget msg=userCookieData />

  -->
  <router-view :key="$route.fullPath">
  </router-view>



  </div>
</template>
<script lang="jsx">

import TopBarWidget from './components/views/home/items/top-bar.vue';
import TopBarLoggedInWidget from './components/views/home/items/top-bar-logged-in.vue';
import HomeFooterWidget from './components/views/home/items/home-footer.vue';

// :::::::::
//import accountPopupWidget from  '../../modal/accountPopup.vue';
export default {
  name: 'App',
  props: {
    msg: Object
  },
  data(){
    return {
      isLoggedIn: false,
      userCookieData:{},

    }
   },
  components: {
   // TopBarWidget,TopBarLoggedInWidget,HomeFooterWidget,

     // accountPopupWidget,
  },
  created(){
     console.log("router params id:: ",this.$route.params.id);
     this.checkUserExists('auto-login')==1?this.isLoggedIn=true:this.isLoggedIn=false;
     //this.$router.push('userProfileWidget' );

  },
  mounted() {
    //this.$router.push('/home');
    window.require = (name) => new URL(name, import.meta.url).href;
  },
  methods:{
    goUserHome(){
      //this.$router.push('/yop/');
      // this.$router.push('/home');

    },
    goHome(){
      //this.$router.push('/home/');
      this.$router.push('/yop/');

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
        this.goUserHome();

      }else{
        result=0
        console.log("false")
      }
      console.log("local storage:  ",window.localStorage.getItem("siteAccessT"),localStoreData,"user cookies: ",userCookieData )



    }
    return result
  },
  },


}
</script>

<style>
@font-face {
    font-family: "Poppins-Bold";
    src: url("@/assets/fonts/Poppins/Poppins-Bold.ttf") format("truetype");
}

@font-face {
    font-family: "Poppins-SemiBold";
    src: url("@/assets/fonts/Poppins/Poppins-SemiBold.ttf") format("truetype");
}

@font-face {
    font-family: "Poppins-Medium";
    src: url("@/assets/fonts/Poppins/Poppins-Medium.ttf") format("truetype");
}

@font-face {
    font-family: "Poppins-Regular";
    src: url("@/assets/fonts/Poppins/Poppins-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Montserrat-Bold";
    src: url("@/assets/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
}

@font-face {
    font-family: "Montserrat-SemiBold";
    src: url("@/assets/fonts/Montserrat/Montserrat-SemiBold.ttf") format("truetype");
}

@font-face {
    font-family: "Montserrat-Medium";
    src: url("@/assets/fonts/Montserrat/Montserrat-Medium.ttf") format("truetype");
}

@font-face {
    font-family: "Montserrat-Regular";
    src: url("@/assets/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin:0px;
  padding:0px;
  width:100vw;

  height:100vh;
  position:absolute;
  left:0px;
  top:0px;
  float:left;
  background:#fafafa;
  display:flex;
  justify-content:center;

}


.title-text{
  width:74px; height:30px; font-size:16px;
  font-family: Montserrat-Regular;
  color:#404040; top:10px; position:relative;

}
.title-text-center{
  text-align: center;
  width:74px; height:30px; font-size:16px;
  font-family: Montserrat-Regular; color:#404040;
  top:10px; position:relative;

}
.title-text-left{
  text-align: left;
  width:74px; height:30px; font-size:16px;
  font-family: Montserrat-Regular;
  color:#404040; top:10px; position:relative;

}
.title-text-right{
  text-align: right;
  width:74px; height:30px; font-size:16px;
  font-family: Montserrat-Regular;
  color:#404040; top:10px; position:relative;

}
.bold-medium-text{
  font-size:16px; line-height:16px;
  position:relative; font-weight: bold;

}
.bold-medium-text-center{
  text-align: center;
  font-weight: bold;
  font-size:16px; line-height:16px;
  position:relative;

}
.bold-medium-text-left{
  text-align: left;
  font-weight: bold;
  font-size:16px; line-height:16px;
  position:relative;

}
.bold-medium-text-right{

  text-align: right;
  font-weight: bold;
  font-size:16px; line-height:16px;
  position:relative;


}
.bold-large-text{
  font-weight: bold;
  font-size:20px; line-height:20px;
  position:relative;

}
.bold-large-text-center{
  text-align: center;
  font-weight: bold;
  font-size:20px; line-height:20px;
  position:relative;

}
.bold-large-text-left{
  text-align: left;
  font-weight: bold;
  font-size:20px; line-height:20px;
  position:relative;

}
.bold-large-text-right{
  text-align: right;
  font-weight: bold;
  font-size:20px; line-height:20px;
  position:relative;

}
.bold-small-text{
  font-weight: bold;
  font-size:13px; line-height:13px;
  position:relative;

}
.bold-small-text-center{
  font-weight: bold;
  text-align: center;
  font-size:13px; line-height:13px;
  position:relative;

}
.bold-small-text-left{
  font-weight: bold;
  text-align: left;
  font-size:13px; line-height:13px;
  position:relative;

}
.bold-small-text-right{
  font-weight: bold;
  text-align: right;
  font-size:13px; line-height:13px;
  position:relative;

}

/* */
.normal-medium-text{
  font-size:13px; line-height:13px;
  position:relative;

}
.normal-medium-text-center{
  text-align: center;
  font-size:16px; line-height:16px;
  position:relative;

}
.normal-medium-text-left{
  text-align: left;
  font-size:16px; line-height:16px;
  position:relative;

}
.normal-medium-text-right{
  text-align: right;
  font-size:16px; line-height:16px;
  position:relative;
}
/* */
.normal-large-text{
  font-size:20px; line-height:20px;
  position:relative;

}
.normal-large-text-center{
  text-align: center;
  font-size:20px; line-height:20px;
  position:relative;
}
.normal-large-text-left{
  text-align: left;
  font-size:16px; line-height:16px;
  position:relative;

}
.normal-large-text-right{
  text-align: right;
  font-size:16px; line-height:16px;
  position:relative;

}
/* */
.normal-small-text{
  font-size:13px; line-height:13px;
  position:relative;
}
.normal-small-text-center{
  text-align: center;
  font-size:13px; line-height:13px;
  position:relative;

}
.normal-small-text-left{
  text-align: left;
  font-size:13px; line-height:13px;
  position:relative;
}
.normal-small-text-right{
  text-align: right;
  font-size:13px; line-height:13px;
  position:relative;

}

/***/
.title-highlight{
  height:20px; width:7px; background:#5757F6; float:left;
   overflow:hidden; position:relative;
   top:10px; left:10px; border-radius:14px;
}

.centered-position{
  align-items: center;
  vertical-align:middle;
  justify-content:center;
  text-align:center;
  display:flex;

}
.basic-button{
  border:none;
  outline:none;
  border-radius:10px;
}

/******/

.menu-list-container {
    height: 40px;
    width: 100vw;
    list-style-type: none;
    display: flex;
    text-align: center;
    flex-direction: row;
    vertical-align:middle;
    justify-content: center;
    align-items: center;
    margin-bottom:0px;
}

.menu-item {
  height:20px;
  line-height:20px;
  cursor: pointer;
  font-size: 14px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 6px;
  min-width: 30px;
  text-align: center;
  letter-spacing: 0.01612em;
  display: inline-block;
  position: relative;
  font-family: Poppins-SemiBold;

}
.menu-item-active {
  height:20px;
  line-height:20px;
  cursor: pointer;
  border-bottom: 1px solid rgba(117, 0, 252, 1);
  font-size: 14px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 6px;
  color:rgba(117, 0, 252, 1);
  min-width: 30px;
  text-align: center;
  letter-spacing: 0.01612em;
  display: inline-block;
  position: relative;
  font-family: Poppins-SemiBold;

}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

 .fade-enter-active,
 .fade-leave-active {
   transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
   transition-timing-function: ease;
  overflow: hidden;


 }
 router-link{
    text-decoration: none;
}


.category-menu-item{
  cursor: pointer;
  font-size: 11px;
  padding: 2px;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 16px;
  color:#000000;
  max-width: 130px;
  margin: 4px;
  border-radius: 6px;
  text-align: center;
  letter-spacing: 0.01612em;
  display: inline-block;
  position: relative;
  top:4px;
  font-family: Poppins-Medium;
  transition: 0.3s all;
  transition-delay: 0.3s;

}
.product-category-menu{
  padding-left:10%;
  width:90%; font-family:Montserrat-Medium; cursor:pointer; height:24px; font-size:11px; line-height:24px; text-align:left; margin-left:0%;
  color:#888888;
}
.product-category-menu:hover{
  padding-left:10%;

  background:#fff1e6;
  width:90%; font-family:Montserrat-Medium; cursor:pointer; height:24px; font-size:11px; line-height:24px; text-align:left; margin-left:0%;
  transition: 100ms all;
  transition-delay: 100ms;
  color:#000000;
}

.sub-category-menu{
  padding-left:8%;
  width:100%; font-family:Montserrat-Medium; cursor:pointer; height:24px; font-size:10px; line-height:24px; text-align:left; margin-left:0%;
  color:#888888;
}
.sub-category-menu:hover{
  padding-left:8%;
  background:#fff1e6;
  width:100%; font-family:Montserrat-Medium; cursor:pointer; height:24px; font-size:10px; line-height:24px; text-align:left; margin-left:0%;
  transition: 50ms all;
  transition-delay: 50ms;
  color:#000000;
}


.product-detail-menu{
  padding-left:20px; padding-right:20px;
float:left;
  min-width:40px; font-family:Montserrat-Medium; cursor:pointer; height:40px; font-size:11px; line-height:40px; text-align:center; margin-left:0px;
  color:#888888;
}
.product-detail-menu:hover{

  min-width:40px; font-family:Montserrat-Medium; cursor:pointer; height:40px; font-size:11px; line-height:40px; text-align:center; margin-left:0px;
  transition: 50ms all;
  transition-delay: 50ms;
  color:#000000;
}


.product-detail-menu-active{

    background:#fff1e6;
  padding-left:20px; padding-right:20px;
float:left;
  min-width:40px; font-family:Montserrat-SemiBold; cursor:pointer; height:40px; font-size:11px; line-height:40px; text-align:center; margin-left:0px;
  color:#000000;
}
.product-detail-menu-active:hover{

  min-width:40px; font-family:Montserrat-SemiBold; cursor:pointer; height:40px; font-size:11px; line-height:40px; text-align:center; margin-left:0px;
  transition: 50ms all;
  transition-delay: 50ms;
  color:#000000;
}






li a {
    text-decoration: none  !important;
}
a { text-decoration: none  !important; }

.shadow-st{
  box-shadow:0px 0px 4px 1px #f1f1f1;
}


.dashboard-menu-block{
  width:14vw; height:100vh; border-radius:0px; float:left; position:relative; margin-right:0%; margin-top:20px;

}
.dashboard-content-block{
  width:86vw; height:auto;  position:relative; left:0%; margin-top:0px; float:left;
}
.dashboard-content-block-inner{
  width:100%; height:auto;  position:relative; border-radius:0px; background:#ffffff; overflow:hidden; box-shadow:0px 0px 0px 1px #f1f1f1; margin-top:20px;  float:right;
}
.dashboard-background{
  width:100%; height:auto; overflow-y:hidden;  background:#ffffff; position:fixed; padding-bottom:200px;
}
.modern-shadow{
}

.input-shadow{
  box-shadow:0px 0px 4px 1px rgb(255,153,200,0.3);

}

.context-menu-container{
  height:200px !important;
}


.v3-search{
  border:none !important;
  outline:none !important;


}
</style>
