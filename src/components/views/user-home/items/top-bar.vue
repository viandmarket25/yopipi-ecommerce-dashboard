<template>
    <div id="top-bar-container" class="top-bar-container" style="width:100%;  height:70px; user-select:none; padding-top:10px; margin-bottom:10px; " align="center">
            <div align="left" style="width:300px; height:100px; font-size:30px; font-weight:bold; user-select:none; float:left; color:#ff7900; font-family:Poppins-Bold; text-decoration:none;  "> 
                <router-link to="/home" ><div align="left" class="app-name" style="width:200px; position:relative; left:100px; color:#ff7900; top:20px; text-decoration:none; " >Machinft</div></router-link>
            </div>
            <div style=" width:600px; height:100px; float:right; position:relative; user-select:none; right:100px;  ">
                <ul id="top-menu-list-container" class="top-menu-list-container" align="center">
                    <router-link to="/mint" ><li id="art" style=" font-family:Poppins-Bold; border-radius:12px; box-shadow:0px 0px 0px 1.5px #ff7900; " class="top-menu-item" >Mint</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >My Account</li></router-link>
                    <router-link to="/activity" ><li id="top" class="top-menu-item" >Activity</li></router-link>
                    <router-link to="/join" ><li id="art" style=" font-family:Poppins-Bold; border-radius:12px; box-shadow:0px 0px 0px 1.5px #06D6A0; " class="top-menu-item" >Join Us</li></router-link>
                    <router-link to="/login" ><li id="art" style=" font-family:Poppins-Bold; border-radius:12px; box-shadow:0px 0px 0px 1.5px #ff7900; " class="top-menu-item" >Login</li></router-link>
                </ul>
            </div>

    </div>
</template>
<script lang="jsx">
//import homeWidget from './home.vue'

export default {
  name: 'TopBarWidget',
  props: {
    msg: String
  },
  mounted () {

  },
  /*
  watch: {
    '$route'(to, from) {
        const id = to.params.id
        this.AJAXRequest(id)
    }
    },
    */
   components:{
    //SearchWidget,CategoriesWidget,TopBarWidget,HomeBriefWidget,TopListWidget,HomeBannerWidget,  LatestListWidget,
    //homeWidget,
    //TopBarWidget

  },
}
</script>

<style scoped>
.app-name, a , a:link, a:visited{
    text-decoration: none;
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
    
    user-select: none;
}

.app-menu {
    height: 80px;
    padding-top: 20px;
    width: inherit;
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
    padding: 8px;
    padding-left: 16px;
    padding-right: 16px;
    min-width: 16px;
    color:#000000;
    max-width: 130px;
    margin: 6px;
    border-radius: 6px;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    top:10px;
    font-family: Poppins-Medium;

    transition: 0.3s all;
    transition-delay: 0.3s;
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
    font-family: Poppins-Regular;

    transition: 0.1s all;
    transition-delay: 0.1s;
}

.menu-item:hover {
    position: relative;
    font-family: Poppins-SemiBold;
    border-radius: 6px;
    background-color: #f1f1f1;

    transition-delay: 0.3s;
}
</style>
