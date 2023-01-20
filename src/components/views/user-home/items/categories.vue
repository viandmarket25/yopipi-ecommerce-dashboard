<template>
<div id="app-menu" class="app-menu" align="center"> 
    <ul id="menu-list-container" class="menu-list-container" style=" user-select:none; " align="left">
        
        <li id="pop" class="menu-item" >Pop</li>
        <li id="african" class="menu-item" >African</li>
        <li id="hiphop" class="menu-item" >Hip-Hop and Rap</li>
        <li id="worldwide" class="menu-item" >Worldwide</li>
        <li id="motivation" class="menu-item" >Motivation</li>
          <li id="comedy" class="menu-item" >Comedy</li>
        <li id="christian" class="menu-item" >Christian</li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'CategoriesWidget',
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
    height: 50px;
    padding-top: 20px;
    width: 100%;
    text-align: center;

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
    justify-content: left;
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
    background:#ffffff;
    border-radius: 16px;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    box-shadow:0px 0px 0px 1px #f1f1f1;
    font-family: Poppins-SemiBold;

}

.menu-item:hover {
    position: relative;
    font-family: Poppins-SemiBold;
    background-color: #f1f1f1;
    transition-delay:.222ms;
}
</style>
