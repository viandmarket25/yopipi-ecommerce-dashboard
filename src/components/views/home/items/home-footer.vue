<template>
    <div id="app-footer" class="centered-position" style="width:100%; height:280px; background:#fafafa; border-top:1px solid #f1f1f1; position:relative; padding-top:20px; margin-top:40px; float:left; ">
        <div style="width:26%; height:240px; background:#fafafa; position:relative; margin-top:0px; float:left; ">
            <div align="left" style="width:100%; height:40px; font-size:18px; font-weight:bold; user-select:none; float:left; font-family:Poppins-Bold; text-decoration:none;  ">
                <div align="left" class="app-name" style="width:200px; position:relative; color:#000000; top:0px; line-height:40px; text-decoration:none; " >Yopipi</div>
            </div>
            <div align="left" style="width:100%; height:30px; font-size:16px; font-weight:bold; user-select:none; float:left; font-family:Poppins-SemiBold; text-decoration:none;  ">
                <div align="left" class="app-name" style="width:200px; position:relative; color:#404040; top:0px; line-height:30px; text-decoration:none; " >Join our Community </div>
            </div>
            <div align="left" style="width:100%; height:40px; font-size:30px; font-weight:bold; user-select:none; float:left; color:#ff7900; font-family:Poppins-Bold; text-decoration:none;  ">
                <ul id="top-menu-list-container" class="top-menu-list-container" align="left">
                     <router-link to="/profile" >
                        <li id="latest" class="top-menu-item" style="padding-left:8px; padding-right:8px; " >
                            <img src='@/assets/icons/nft-home-instagram.png' style="height:32px; width:32px; position:relative; border-radius:8px; left:0px; top:0px; " />
                        </li>
                    </router-link>
                    <router-link to="/profile" >
                        <li id="latest" class="top-menu-item"  style="padding-left:8px; padding-right:8px; " >
                            <img src='@/assets/icons/nft-home-meta.png' style="height:32px; width:32px; position:relative;  background:none; border-radius:8px; left:0px; top:0px; " />
                        </li>
                    </router-link>
                    <router-link to="/profile" >
                        <li id="latest" class="top-menu-item"  style="padding-left:8px; padding-right:8px; "  >
                            <img src='@/assets/icons/nft-home-telegram_app.png' style="height:32px; width:32px; position:relative; border-radius:8px; left:0px; top:0px; " />
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>
        <div style="width:60%; height:240px; background:#fafafa; position:relative; margin-top:10px; float:left; ">
            <div style=" width:20%; height:240px; float:left; position:relative; user-select:none; top:0px; left:0px;  ">
                <ul id="top-menu-list-container" class="top-menu-list-container" align="left">
                    <router-link to="/how-it-works" ><li id="top" class="top-menu-item" >How it Works</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >Blog</li></router-link>
                    <router-link to="/activity" ><li id="top" class="top-menu-item" >Activity</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >About</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >Contact</li></router-link>
                    <router-link to="/activity" ><li id="top" class="top-menu-item" >Join Us</li></router-link>
                </ul>
            </div>
            <div style=" width:24%; height:240px; float:left; position:relative; user-select:none; top:0px; left:0px;  ">
                <ul id="top-menu-list-container" class="top-menu-list-container" align="left">
                    <router-link to="/how-it-works" ><li id="top" class="top-menu-item" >Merchant platform</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >Delivery Partners</li></router-link>
                    <router-link to="/activity" ><li id="top" class="top-menu-item" >Privacy Policy</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >User Agreement</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >Consumer Protection</li></router-link>
                    <router-link to="/activity" ><li id="top" class="top-menu-item" >Investor Relations</li></router-link>
                </ul>
            </div>


            <div style=" width:30%; height:60px; float:left; position:relative; user-select:none; left:20px; margin-top:0px; ">
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; top:0px; left:26px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-Bold; " align="center">
                Language
                </div>
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; top:10px; left:26px; float:left; position:relative; font-size:14px; color:#404040; font-family:Poppins-SemiBold; " align="left">
                    <input type="text"  value=""  placeholder="English" list="search-result-category_data_source"  style="height:34px; width:180px; border:none; outline:none; background:#fafafa; box-shadow:0px 0px 0px 1px #f1f1f1; padding-left:10px; padding-right:10px; font-family:Poppins-SemiBold;  border-radius:8px; " />
                    <datalist id="search-result-category_data_source" >
                        <option value="English" />
                        <option value="中文" />
                        <option value="日本語" />
                    </datalist>
                </div>
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:40px; text-align:left; margin-top:40px; left:26px; float:left; position:relative; font-size:18px; color:#404040; font-family:Poppins-Bold; " align="center">
                Our App is coming soon!
                </div>
            </div>
            <div style=" width:20%; height:240px; float:left; position:relative; user-select:none; top:0px; left:0px;  ">
                <ul id="top-menu-list-container" class="top-menu-list-container" align="left">
                    <router-link to="/how-it-works" ><li id="top" class="top-menu-item" >FAQ</li></router-link>
                    <router-link to="/profile" ><li id="latest" class="top-menu-item"  >Whitepaper</li></router-link>
                    <router-link to="/activity" ><li id="top" class="top-menu-item" >Join</li></router-link>

                </ul>
            </div>


        </div>



    </div>


</template>


<script lang="jsx">
//import { defineComponent } from '@vue/composition-api'

export default {
    name:'homeFooterWidget',
    setup() {


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
    text-align: left;
    margin: 0 auto;
}
.top-menu-list-container {
    height: 60px;
    width: auto;
    list-style-type: none;
    display: inline-block;
    text-align: left;
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
    margin: 6px;
    border-radius: 6px;
    text-align: left;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;

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
    text-align: left;
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
