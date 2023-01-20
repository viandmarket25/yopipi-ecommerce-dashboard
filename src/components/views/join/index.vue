<template>
  <div style="width:100%; height:100vh; background:#ffffff; overflow-y:scroll; padding-bottom:200px;  ">
        <div style="height:140px; width:100%; background:#fcfcfc; user-select:none; ">
           <div style=" font-family: Poppins-SemiBold;  user-select:none; font-size:18px; position:relative; margin-top:20px; ">
              <img src="@/assets/icons/yopipi-logo-y.png" style=" max-width:42px; max-height:42px; user-select:none; position:relative; top:6px; opacity:0.8; ">
           </div>
            <div style=" font-family: Poppins-Bold;  user-select:none; font-size:20px; position:relative; top:30px; ">Join Yopipi </div>


        </div>
        <div align="center" style=" min-height:500px; max-height:auto; width:100%; background:#fcfcfc; display:inline-block; ">
            <div style="width:600px; height:500px; background:#ffffff; display:inline-block; box-shadow:0px 0px 0px 1px #f1f1f1; margin-top:0px;  ">
                <div style="width:600px; height:40px; margin-top:40px;  ">
                    <div style=" width:260px; height:24px; margin-bottom:4px; border-radius:8px; user-select:none; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">Username</div>
                    <div style=" width:260px; height:34px; margin-bottom:4px;  border-radius:8px; background:#fafafa;  display:inline-block; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">
                        <img src="@/assets/icons/user-account.svg" style="float:left; width:22px; height:22px; user-select:none; position:relative; top:6px; opacity:0.8; ">
                        <input  required id="username" style="width:216px; height:32px;  font-family: Poppins-SemiBold;  float:right; outline:none; background:#fcfcfc; text-align:center; font-size:13px; border:none; " type="text" placeholder="music-artist">
                    </div>
                    <div style=" width:260px; height:24px; margin-bottom:4px; border-radius:8px; user-select:none; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">Email</div>
                    <div style=" width:260px; height:34px; margin-bottom:4px;  border-radius:8px; background:#fafafa;  display:inline-block; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">
                        <img src="@/assets/icons/user-account.svg" style="float:left; width:22px; height:22px; user-select:none; opacity:0.8; position:relative; top:6px; opacity:0.8; ">
                        <input required id="email" style="width:216px; height:32px;  font-family: Poppins-SemiBold;  float:right; margin-bottom:10px;  outline:none; background:#fcfcfc; text-align:center; font-size:13px; border:none; " type="email" placeholder="cryptobeast3@machinft.com">
                    </div>
                    <br>
                    <div style=" width:260px; height:24px; margin-bottom:4px; border-radius:8px; user-select:none; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">Password</div>
                    <div style=" width:260px; height:34px; margin-bottom:4px;   border-radius:8px; background:#fafafa;  display:inline-block; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">
                        <img src="@/assets/icons/user-password.svg" style="float:left; width:22px; height:22px; user-select:none; opacity:0.8; position:relative; top:6px; opacity:0.8; ">
                        <input required id="password" style="width:216px; height:32px;  font-family: Poppins-SemiBold;  float:right; margin-bottom:10px;  outline:none; background:#fcfcfc; text-align:center; font-size:13px; border:none; " type="password" placeholder="*********">
                    </div>
                    <div style=" width:260px; height:24px; margin-bottom:4px; border-radius:8px; user-select:none; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">Confirm Password</div>
                    <div style=" width:260px; height:34px; margin-bottom:4px;   border-radius:8px; background:#fafafa;  display:inline-block; text-align:left; border:none; font-size:12px;  font-family:Poppins-Medium; padding-left:10px; padding-right:10px; ">
                        <img src="@/assets/icons/user-password.svg" style="float:left; width:22px; height:22px; user-select:none; opacity:0.8; position:relative; top:6px; opacity:0.8; ">
                        <input required id="confirm-password" style="width:216px; height:32px;  font-family: Poppins-SemiBold;  float:right; margin-bottom:10px;  outline:none; background:#fcfcfc; text-align:center; font-size:13px; border:none; " type="password" placeholder="*********">
                    </div>
                    <div style="background:#f1f1f1; height:1px; margin-top:20px; margin-bottom:20px; "></div>

                    <div style="width:260px; height:50px;">
                        <div id="login-button"  @click="join('param')" style="width:120px; height:40px; float:right; border-radius:20px; user-select:none; background:#06D6A0; line-height:40px; color:#ffffff;  cursor:pointer; font-family: Poppins-SemiBold; ">
                            Join
                        </div>
                    </div>
                    <div style="height:40px; width:100%; margin-top:20px; user-select:none; ">
                      <div style=" font-family:Montserrat-Medium;  user-select:none; font-size:13px; position:relative; top:0px; ">Already have an Account? <router-link to="/login" ><span style="  font-family:Poppins-Bold; margin-left:10px; color:#06D6A0; letter-spacing:0.012em; cursor:pointer; ">Login</span></router-link></div>
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

//import { join } from "path";

import axios from "axios";

export default {
  name: 'userProfileWidget',
  data(){
    return {
      joinData:{
        username:'',
        password:'',
        email:'',
        confirmPassword:'',

      },
      targetUrl:'http://localhost:3000/create-user/',


    }
    },
  props: {
    msg: String
  },
  methods:{
    passwordMatch(){

    },
    join(){
      this.getJoinData();
      if(this.joinData.password==this.joinData.confirmPassword){
        //alert("password match proceed")
        this.createUserAccount();

      }else{
        alert("make sure password matches confirm")
      }

    },
    getJoinData(){
    this.joinData.username = document.getElementById("username").value
     this.joinData.password=document.getElementById("password").value
      this.joinData.email = document.getElementById("email").value
       this.joinData.confirmPassword = document.getElementById("confirm-password").value
      console.log(this.joinData)

    },
    createUserAccount(){
      // formData.append('auth_crd', JSON.parse(window.localStorage.getItem("siteAccessT")).token)
      let goUserHome=this.goUserHome;
      let goAdminHome=this.goAdminHome;
      let payload={
        username: this.joinData.username,
        password: this.joinData.password,
        email:this.joinData.email,
      }
      let dataObject = {
        payload: JSON.stringify(payload),
      }
      let formData = new FormData();
      for (let key in dataObject) {
        formData.append(key, dataObject[key])
      }
      axios.post(this.targetUrl,formData, {
        params: { action: "create-user" },
        headers: { 'Content-Type': 'multipart/form-data' }, "Access-Control-Allow-Origin": "*",
        baseURL: 'http://localhost',
      }).then(function (response) {
        //console.log(response);
        console.log(response.data);
        let result=response.data;


        /*
        if (result.resultCode == 1) {
          console.log(result)

          let localStoreData
          localStoreData = JSON.stringify({
            userRole: result.userRole,
            username: result.username,
            token: result.token,
          })
          cookies.set('siteAccessT',localStoreData);
          window.localStorage.setItem("siteAccessT", localStoreData )
          console.log(localStorage)
          result.userRole == 10 ? goUserHome() : goAdminHome()

          } else {
              alert("check your username and password!")
          }
          */
      })
      .catch(function (error) {
        console.log(error);
      });

    }

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

</style>
