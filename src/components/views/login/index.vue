<template>
  <div style="width:100%; height:100vh; background:#ffffff; overflow-y:scroll; padding-bottom:200px;  ">
        <div style="height:140px; width:100%; background:#fcfcfc; ">
           <div style=" font-family: Poppins-SemiBold;  user-select:none; font-size:18px; position:relative; margin-top:20px; ">
              <img src="@/assets/icons/yopipi-logo-y.png" style=" max-width:42px; max-height:42px; user-select:none; position:relative; top:6px; opacity:0.8; ">
           </div>
            <div style=" font-family: Poppins-Bold;  user-select:none; font-size:20px; position:relative; top:30px; ">Login to your Account</div>


        </div>
        <div align="center" style=" min-height:500px; max-height:auto; width:100%; background:#fcfcfc; display:inline-block; ">
            <div style="width:600px; height:500px; background:#ffffff;  box-shadow:0px 0px 0px 1px #f1f1f1; display:inline-block; margin-top:0px;  ">
                <div style="width:600px; height:40px; margin-top:40px;  ">
                    <div style=" width:260px; height:24px; margin-bottom:4px; border-radius:8px; user-select:none; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">Username</div>
                    <div style=" width:260px; height:34px; margin-bottom:4px;  border-radius:8px; background:#fafafa;  display:inline-block; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">
                        <img src="@/assets/icons/user-account.svg" style="float:left; width:22px; height:22px; user-select:none; position:relative; top:6px; opacity:0.8; ">
                        <input required id="username" style="width:216px; height:32px;  font-family: Poppins-SemiBold;  float:right; outline:none; background:#fcfcfc; text-align:center; font-size:13px; border:none; " type="text" placeholder="nft user">
                    </div>
                    <br>
                    <div style=" width:260px; height:24px; margin-bottom:4px; border-radius:8px; user-select:none; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">Password</div>
                    <div style=" width:260px; height:34px; margin-bottom:4px;  border-radius:8px; background:#fafafa;  display:inline-block; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">
                        <img src="@/assets/icons/user-password.svg" style="float:left; width:22px; height:22px; user-select:none; opacity:0.8; position:relative; top:6px; opacity:0.8; ">
                        <input required id="password" style="width:216px; height:32px;  font-family: Poppins-SemiBold;  float:right; margin-bottom:10px;  outline:none; background:#fcfcfc; text-align:center; font-size:13px; border:none; " type="password" placeholder="*********">
                    </div>
                    <div style="background:#f1f1f1; height:1px; margin-top:20px; margin-bottom:20px; "></div>
                    <div style="width:260px; height:50px;">
                        <div style="float:left; "> </div>
                        <div style="float:right; font-size:12px; font-family: Poppins-Medium; user-select:none; cursor:pointer; ">Login via SMS </div>
                    </div>
                    <div style="width:260px; height:50px;">
                        <div id="login-button"  @click="loginAccount()" style="width:120px; height:40px; float:right; border-radius:20px; user-select:none; background:#06D6A0; line-height:40px; color:#ffffff;  cursor:pointer; font-family: Poppins-SemiBold; ">
                            Login
                        </div>
                    </div>
                    <div style="height:40px; width:100%; margin-top:20px; user-select:none; ">
                      <div style=" font-family:Montserrat-Medium;  user-select:none; font-size:13px; position:relative; top:0px; ">Hey, I want new Yopipi Account <router-link to="/join" ><span style="  font-family:Poppins-Bold; margin-left:10px; color:#06D6A0; letter-spacing:0.012em; cursor:pointer; text-decoration:none; ">Join</span></router-link></div>
                    </div>
                </div>
            </div>



        </div>
          <div align="center" style=" width:100%; height:240px; float:left; position:relative; user-select:none; top:0px; left:0px;  ">
                <ul id="top-menu-list-container" class="top-menu-list-container" align="left">
                    <router-link to="/" ><li id="top" class="top-menu-item" >© Yopipi</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >Contact</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >Privacy & terms</li></router-link>
                </ul>
          </div>



  </div>
</template>

<script lang="jsx">
import axios from "axios";


//import Popper from 'vue-popperjs';
//import 'vue-popperjs/dist/vue-popper.css';
//import VueCookies from 'vue3-cookies'

export default {
  name: 'userProfileWidget',
  props: {
    msg: String
  },
  components:{
    //'popper': Popper,

  },
  data(){
    return{
      //eth-frontend/public/account/controllers/userAuthenticationManager.php
      listA:[],
      targetUrl:'http://192.168.1.5:3000/login-user',
      appCookies:'',
    }
  },
  computed(){



  },
  created(){
    //this.fetchUserAccount()
    this.appCookies=this.$cookies;
    this. checkUserExists('auto-login')
  },
  mounted() {


  },
  methods:{
    goUserHome(){
      this.$router.push('/dashboard');
    },
    goAdminHome(){
      this.$router.push('/dashboard');
    },
    getRequest(){


    },
    checkUserExists(type){
      let result
      if(type=='auto-login'){
        console.log('check user ')
        //window.localStorage.getItem("username") === null
        let userCookieData
        let localStoreData
        console.log(localStoreData,"user cookies: ",userCookieData )
        if(this.$cookies.isKey('siteAccessT') ){
          userCookieData=this.$cookies.get("siteAccessT")
          //$cookies.isKey(keyName)
          // window.localStorage.getItem("siteAccessT") !== null
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
      }else if(type=='login-event'){
        this.loginAccount('')
      }
      return result
    },
    async loginAccount(){
      let result
      //console.log(param)
      let username = document.getElementById('username').value
      let password = document.getElementById('password').value
      await this.fetchUserAccount(username, password)

      // ::::::::  if user signed in before, take him to home, else try login
      //this.checkUserExists()==1?this.goUserHome(): result=0
      return result
    },
   async fetchUserAccount(username,password){
      // formData.append('auth_crd', JSON.parse(window.localStorage.getItem("siteAccessT")).token)
      let goUserHome=this.goUserHome;
      let goAdminHome=this.goAdminHome;
      let payload={
        username: username,
        password: password,
      }
      let dataObject = {
        payload: JSON.stringify(payload),
      }
      let formData = new FormData();
      for (let key in dataObject) {
        formData.append(key, dataObject[key])
      }
      console.log(payload, formData)
      try {

        const response = await axios({
            method: "post",
            url: this.targetUrl,
            //params: {t:new Date().getTime() },
            data: formData,
            headers: {
            'Content-Type': 'multipart/form-data'
          },
           baseURL: 'http://localhost',
        });
        console.log(response.data)
          // console.log(response);
        //console.log(response.data);
        //let result=JSON.parse(response.data);
        let result =response.data
        //response.data=null;
        //console.log("result: ",result)
        console.log(
          goAdminHome,goUserHome
        )
        if (result.resultCode == 1) {
          let localStoreData
          localStoreData = JSON.stringify({
            role: result.resultContent.role,
            username: result.resultContent.username,
            token: result.resultContent.token,
          })
          this.appCookies.set('siteAccessT',localStoreData);
          //window.localStorage.setItem("siteAccessT", localStoreData )
          console.log(localStoreData)
          window.location.reload();
          //result.resultContent.role == 10 ? goUserHome() : goAdminHome()
          } else  if (result.resultCode == 0)  {
              alert("check your username and password!")
          }
        } catch(error) {
          console.log(error)
        }
    }


  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    font-size: 11px;
    padding: 12px;
    padding-left: 12px;
    padding-right: 12px;

    min-width: 70px;
    color:#000000;
    max-width: 130px;
    margin: 2px;
    border-radius: 6px;
    text-align: left;
    letter-spacing: 0.01712em;
    display: inline-block;
    position: relative;
    top:4px;
    font-family: Poppins-Regular;
    transition: 0.1s all;
    transition-delay: 0.1s;
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
