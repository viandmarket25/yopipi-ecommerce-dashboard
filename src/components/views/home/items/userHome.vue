<template>
  <div style="width:100%; height:100vh; background:#ffffff; overflow-y:scroll; padding-bottom:200px;  ">
    <!--<TopBarWidget msg=""/>--->
    <CategoriesWidget msg=""/>
    <SearchWidget msg=""/>
    <HomeBriefWidget msg=""/>
    <LatestListWidget msg=""/>
    <TopListWidget msg=""/>
  </div>
</template>

<script lang="jsx">


import SearchWidget from './search-widget.vue'
import CategoriesWidget from './categories.vue'
//import TopBarWidget from './/items/top-bar.vue'
import HomeBriefWidget from './home-brief.vue'
import TopListWidget from './top-list.vue'
import LatestListWidget from './latest-list.vue'
import HomeBannerWidget from './banner.vue'


export default {
  name: 'userhomeWidget',
  props: {
    msg: String
  },
  components:{
    SearchWidget,CategoriesWidget,HomeBriefWidget,TopListWidget,HomeBannerWidget,  LatestListWidget,
        //TopBarWidget,

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
</style>
