<template>
  <div style="width:100%; height:100vh; background:#ffffff; overflow-y:scroll; padding-bottom:200px;  " >
    <TopBarLoggedInWidget :message="userCookieData" />
            <div style="width:94%; height:90vh;  overflow-y:hidden; margin-left:3%; padding-top:10px; padding-bottom:20px; ">
            
                Activity
            </div>

    <HomeFooterWidget msg=""/>
  </div>
</template>

<script lang="jsx">

import TopBarLoggedInWidget from '../../../components/views/home/items/top-bar-logged-in.vue';
import HomeFooterWidget from '../../../components/views/home/items/home-footer.vue';

export default {
  data(){
    return{
isLoggedIn: false,
      userCookieData:{},
      activePage:'',
  }

  },
  mounted(){
      this.checkUserExists('auto-login')
    },
  name: 'userProfileWidget',
  props: {
    msg: String
  },
  components:{
    TopBarLoggedInWidget ,HomeFooterWidget 
  },
  methods:{

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
  },
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
</style>
