<template>
  <div id="app-logo" class="app-logo" align="center" style=" width:100%; height:10px; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; float:left; margin-bottom:20px; position:relative; margin-top:0px; ">
    <!---
    <div id="app-logo-text" class="app-logo-text" align="center" style="font-size:38px; line-height:48px; width:60%; font-weight:bold; color:#404040; font-family:Poppins-SemiBold; position:relative; "> Explore the top Art and Collectibles Listing and Trading Platform  
    </div>
    --->

  </div>


</template>


<script>
export default {
  name: 'HomeBriefWidget',
  props: {
    msg: String
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
