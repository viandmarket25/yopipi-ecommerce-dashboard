
<template>
    <div id="search-container" class="search-container" style="width:100%;  height:50px;  margin-bottom:10px; user-select: none; float:left; " align="center">
        <div id="search-field" class="search-field" style="width:760px;  height:50px; background:#ffffff; padding-left:8px; padding-right:4px;  margin:10px; border-radius:12px; overflow:hidden; padding-top:0px;"> 
          <div id="search-button" class="search-button" style="width:30px;  height:40px;  line-height:40px; color:#ffffff; font-size:18px; font-family:Poppins-Bold; float:left;  padding-top:0px;">
            <img src='@/assets/icons/nft-search.png' class="nft-option-select" style="height:28px; width:28px; position:relative; float:right;  border-radius:100px; top:10px; " /> 
          </div>
          <input placeholder="Search Music, Comedy and Voice Notes!" id="search-input" class="search-input" style="width:600px;  height:50px; background:none; float:left; border:none; padding-left:10px; font-size:16px; color:#404040; outline:none; font-family:Poppins-SemiBold; padding-top:0px;">
          <div id="search-button" @click="goSearch('param')" class="search-button" style="width:60px;  height:40px; background:#9d4edd; line-height:40px; color:#ffffff; border-radius:0px 0px 10px 6px; cursor:pointer; font-size:18px; font-family:Poppins-Bold; float:right;  padding-top:0px;">Go</div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
  name: 'SearchWidget',
  props: {
    msg: String
  },
  data(){
    return{

    }
  },
  computed(){

  },
  created(){

  },
  mounted(){

  },
  methods:{
    goSearch(){
      this.$router.push('/search');
    },



  }



}
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #fafafa inset !important;
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
