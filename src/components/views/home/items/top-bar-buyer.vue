<template>
    <div id="top-bar-container"  class="top-bar-container centered-position" style="width:100%;  height:40px; background:#fcfcfc; margin-top:0px; user-select:none; padding-top:10px; padding-bottom:10px; margin-bottom:10px; " >
            <div  style="min-width:1100px; max-width:1400px;  height:auto; float:left; ">

              <div style=" width:100%; height:auto; float:right; position:relative; user-select:none; display:flex;  align-items:right;  justify-content:right; text-align: right;  ">
                  <ul id="top-menu-list-container" class="top-menu-list-container" >
                      <router-link to="/" ><li id="top" class="top-menu-item" >Activity</li></router-link>
                      <router-link to="/" ><li id="top" class="top-menu-item" >Become a Seller</li></router-link>
                      <router-link to="/" ><li id="top" class="top-menu-item" >Help</li></router-link>
                      <router-link to="/" ><li id="top" class="top-menu-item" >Message</li></router-link>
                      



                  </ul>
              </div>
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
    text-align:right;
    margin: 0 auto;
}
.top-menu-list-container {
    height: 30px;
    width: 100%;
    list-style-type: none;

    text-align:right;
    margin: 0 auto;
}
.top-menu-item {
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
    text-align: right;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    top:0px;
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
