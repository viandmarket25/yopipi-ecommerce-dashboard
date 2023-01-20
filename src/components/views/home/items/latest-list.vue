
<template>
    <div style="width:100%;  height:500px;  padding-top:10px; margin-bottom:40px; float:left; " align="center">
        <div style="width:90%;  height:800px;  padding-top:30px; margin-bottom:60px; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:100%; height:40px; float:left; user-select:none; " align="center">
                <div id="top-list-container" class="top-list-container" style="width:30%;  height:30px; text-align:left; float:left; font-size:24px; color:#000000; font-family:Poppins-Medium; " align="center">
                    Latest Music ><span style="color:#5e60ce; font-family:Poppins-Bold; "> Explore</span>
                </div>
                <div id="top-list-container" class="top-list-container" style="width:30%;  height:30px; float:left;  " align="center">
                
                </div>
            </div>
            <div id="top-list-container" class="top-list-container" style="width:100%;  height:400px; float:left; margin-top:20px; " align="center">
                <LatestListCarouselWidget msg=""/>
            </div>

        </div>
    </div>
</template>

<script lang="jsx">
//import 'vue3-carousel/dist/carousel.css';
//import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import LatestListCarouselWidget from './latest-list-carousel.vue';


export default {
  name: 'LatestListWidget',
  props: {
    msg: String
  },
  
  components: {

    LatestListCarouselWidget,
  },
  
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
