<template>
  <div id="modal-messages" align="left" style="height:93vh; width:940px; z-index:222222222; overflow:hidden; ">
    <div style="width:100%; height:100%;  overflow-y:hidden;  z-index:222222222; padding-top:10px; padding-bottom:20px; ">
    <div id="vertical-messages-items" style="width:340px; height:100%;  overflow-y:hidden; margin-left:0%; float:right; z-index:222222222; border-radius:10px; box-shadow:0px -0.4px 10px 1.0px #f0f0f0; border:1px solid #f1f1f1; background:#fafafa;  ">
      <div style="width:100%; height:100%;  overflow-y:scroll; margin-left:0%; z-index:222222222; float:left;  ">
        <div id="top-list-container" class="top-list-container" style="width:100%;  height:10px; text-align:left; position:relative;  color:#404040; font-family:Poppins-Medium; float:left; font-size:14px; " align="center">
        </div>
        <div class="" align="left" style="height:60px; width:100%; float:left;  justify-content: space-around; ">
          <div class="centered-position" style="width:70%; height:60px;  float:left;  ">
              <div style="width:90%; font-family:Poppins-Bold; height:60px; font-size:16px; line-height:60px; text-align:left; margin-left:10px; " >Messages</div>
          </div>
          <div class="centered-position" style="width:15%; height:60px;  float:left;  ">
            <div id="top-list-container" class="top-list-container centered-position" style="width:30px;  height:30px; text-align:left; position:relative; background:#f1f1f1; border-radius:100px; font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
              <img src="@/assets/icons/dashboard-icons/add-circle.png" style="width:20px; height:20px; float:left; cursor:pointer;   opacity:0.8;" />
            </div>
          </div>
          <div class="centered-position" style="width:15%; height:60px;  float:left;  ">
            <div id="top-list-container" class="top-list-container centered-position" style="width:30px;  height:30px; text-align:left; position:relative; border-radius:100px; font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
              <img @click="hideMessagesModal()"  src="@/assets/icons/social/arrow-square-down.png" style="width:20px; height:20px; float:left; cursor:pointer;   opacity:0.8;" />
            </div>
          </div>

        </div>


        <div class="centered-position" style="width:100%; height:50px; float:left; border-radius:6px; ">
          <div style="width:96%; height:34px; box-shadow:0px 0px 3px 1px #f1f1f1; background:#fcfcfc; float:left;  margin-left:0px; border-radius:6px; ">
              <div id="create-product-label" class="create-product-label" style="width:26px; height:34px;  left:4px; font-family: Poppins-SemiBold; position:relative; float:left; line-height:34px; color:#ffffff; font-size:11px;">
                  <img src="@/assets/icons/search-normal.png" style="height:20px; width:20px; top:8px; left:3px; position:relative; float:left;">
              </div>
              <div id="create-product-button" class="create-product-button" style="width:80%; height:34px; left:0px; position:relative;  float:left; ">
                  <input type="text" placeholder="Search Customer, Message" style="height:34px; width:100%;  border:none; background:none; outline:none; left:2px; font-family: Poppins-Medium; color:#000000; font-size:12px; padding-left:4px; position:relative; float:left;">
              </div>
          </div>
        </div>
        <div id="top-list-container" class="top-list-container" style="width:100%;  height:10px; text-align:left; position:relative;  color:#404040; font-family:Poppins-Medium; float:left; font-size:14px; " align="center">
        </div>

        <div @click="openMessageItemContent()"  id="top-list-container" class="top-list-container" style="width:100%; height:50px; padding-top:4px; padding-bottom:4px; text-align:left; cursor:pointer; position:relative;  left:0px; color:#404040; font-family:Poppins-Medium; float:left; font-size:14px; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:20%;  height:30px; text-align:center; position:relative; left:0px; font-family:Poppins-SemiBold; float:left; font-size:14px; " align="center">
              <img src='@/assets/icons/message-notification.png' style="height:30px; width:30px; cursor:pointer; border-radius:100px; position:relative; top:5px; margin-left:0px; margin-right:6px; " />
            </div>
            <div id="top-list-container" class="top-list-container" style="width:80%; height:40px; text-align:center; position:relative;  left:0px; font-family:Poppins-SemiBold; float:left; font-size:14px; " align="center">
              <div id="top-list-container" class="top-list-container" style="width:100%;  height:40%; text-align:left; position:relative; left:0px; font-family:Poppins-SemiBold; float:left; font-size:14px; " align="center">
                <span style="color:#8338ec; font-family:Poppins-SemiBold; color:#404040; font-size:13px; position:relative; top:2px; left:0px; ">Notification</span>
              </div>
              <div id="top-list-container" class="top-list-container" style="width:100%;  height:50%; text-align:left; position:relative; left:0px; font-family:Poppins-SemiBold; float:left; font-size:14px; " align="center">
                <span style="color:#8338ec; font-family:Poppins-Regular; color:#404040; font-size:10px; position:relative; top:0px; left:0px; ">motivated people</span>
              </div>
            </div>
        </div>

      </div>
    </div>
    <div id="vertical-messages-contents" style="width:580px; height:100%;  overflow:hidden; margin-left:0.4%; float:right;   box-shadow:0px 0.4px 4px 1.0px #f0f0f0; border:1px solid #f1f1f1; border-radius:10px; overflow-x:hidden;  background:#ffffff;   ">
      <div style="width:100%; height:8%; margin-left:0px; overflow-y:hidden; background:#fafafa; box-shadow:0px 0px 0px 1px #f1f1f1;  padding-right:10px; padding-left:10px;  ">

        <div class="centered-position" style="width:90%; height:100%; margin-left:0px; overflow-y:hidden; background:#fafafa; float:left;   ">
          <div id="create-product-label" class="create-product-label" style="width:100%; height:34px;  left:4px; font-family: Poppins-SemiBold; position:relative; float:left; line-height:34px; font-size:11px;">
            <div id="create-product-label" class="create-product-label" style="width:100%; height:34px;  left:4px; font-family: Poppins-SemiBold; position:relative; text-align:left; float:left; line-height:34px; font-size:11px;">
              buyer233 (Product in Cart)
              <span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; font-family:Montserrat-Regular;  position:relative; left:6px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; padding-right:6px; line-height:30px;  ">5 in Cart</span>
            </div>
          </div>
        </div>
        <div class="centered-position" style="width:10%; height:100%; margin-left:0px; overflow-y:hidden; background:#fafafa; float:left; ">
          <div id="create-product-label" class="create-product-label" style="width:26px; height:34px;  left:4px; font-family: Poppins-SemiBold; position:relative; float:left; line-height:34px; color:#ffffff; font-size:11px;">
              <img @click="hideMessageContent()" src="@/assets/icons/social/close-square.png" style="height:20px; width:20px; top:8px; left:3px; position:relative; float:left;">
          </div>
        </div>
      </div>
      <div style="width:100%; height:62%; margin-left:0px; float:left; padding-top:20px;  ">


        <div style="width:580px;  height:62%; margin-left:0px; overflow-y:scroll; float:left;  position:absolute;  ">
          <div id="top-list-container" class="top-list-container" style="width:100%; height:40px;  letter-spacing:0.012em; text-align:center; position:relative; margin-top:10px; left:0px; float:left; font-size:22px; color:#404040; font-family:Poppins-SemiBold; " align="center">
            <div id="top-list-container" class="top-list-container" style="width:100%;  height:30px; text-align:center; position:relative; left:0px; font-family:Poppins-Medium; float:left; font-size:12px; " align="center">
              <div id="top-list-container" class="top-list-container" style="width:24%;  height:30px; text-align:center; position:relative; margin-left:6%;  font-family:Poppins-Medium; float:left; font-size:12px; " align="center">
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:1px; background:#f1f1f1; top:8px; text-align:center; position:relative; left:6px; font-family:Poppins-Medium; float:left; font-size:12px; " align="center">

                </div>
              </div>
              <div id="top-list-container" class="top-list-container" style="width:40%;  height:30px; text-align:center; position:relative; font-family:Poppins-Medium; float:left; font-size:10px; " align="center">
              9:23 AM 17th July, 2021
              </div>
              <div id="top-list-container" class="top-list-container" style="width:24%;  height:30px; text-align:center; position:relative;  margin-right:6%;  font-family:Poppins-Medium; float:left; font-size:12px; " align="center">
                <div id="top-list-container" class="top-list-container" style="width:100%;  height:1px; background:#f1f1f1; text-align:center; position:relative; top:8px; left:10px; font-family:Poppins-Medium; float:left; font-size:12px; " align="center">

                </div>
              </div>

            </div>
          </div>
          <div style="width:100%; height:auto; margin-bottom:20px;  padding-bottom:20px; float:left;  "
          v-for="(message, index) in messageList" :key="index" >
              <div style="width:100%; height:auto; float:left; " v-if="!message.senderIsUserId">
                <div style="width:80px; height:auto; float:left; " v-if="!message.senderIsUserId" >
                  <img  :src="getImageUrl(message.avatarUrl)" class="comment-avatar" id="null">
                </div>
                <div style="width:64%; height:auto; float:left; " v-if="!message.senderIsUserId">
                <div class="comment-username" id="null">
                  {{message.username}}
                </div>
                <div class="comment-content" id="null">
                  <div style="width:100%; height:auto; font-family:Poppins-SemiBold; ">
                      {{message.comment}}
                  </div>
                  <div style="width:100%; height:30px;  ">
                    <div style="width:40%; height:30px; float:left; ">
                      <div class="time-content" >
                        {{message.timeDate}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div style="width:100%; height:auto; float:right;  " v-if="message.senderIsUserId">
                <div style="width:64%; height:auto; float:right;  " v-if="message.senderIsUserId">
                  <div class="comment-content" id="null" style="  background:rgb(189,224,254,0.2);  ">
                    <div style="width:100%; height:auto; font-family:Poppins-SemiBold; color:#000000;  ">
                        {{message.comment}}
                    </div>
                    <div style="width:100%; height:30px;  ">
                      <div style="width:40%; height:30px; float:left; ">
                        <div class="time-content" style="color:#505050;" >
                          {{message.timeDate}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>



        </div>
        <div v-show="emojiOptions.visible" id="message-emoji-container" style="width:580px;  height:62%; margin-left:0px; user-select:none; float:left; position:absolute;  ">
          <div  id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:auto; width:100%; margin-bottom:0px; float:left;  ">
            <div  id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:55.4vh; width:350px; background:#fafafa; margin-right:20px; border-radius:10px; box-shadow:0px 0px 8px 1px #f1f1f1; margin-bottom:0px; float:right;  ">
            <div  id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:55vh; width:300px; margin-right:2px; float:right; margin-bottom:0px;  ">
              <EmojiPicker  @select="onSelectEmoji" style="height:55vh; width:300px; position:relative; margin-top:3px;  " />
            </div>
            <div  id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:55vh; width:40px; border-radius:10px;  float:right; margin-bottom:0px;  ">
              <div id="create-product-label" class="create-product-label" style="width:100%; height:120px;  margin-top:180px; border-radius:200px; background:rgb(228,193,249,0.3); font-family: Poppins-SemiBold; position:relative; float:left; ">
                <div id="create-product-label" class="create-product-label" style="width:90%; height:40px; background:#fafafa; border-radius:0px 0px 14px 0px; margin-right:2px; font-family: Poppins-SemiBold; position:relative; float:left; line-height:34px; color:#ffffff; font-size:11px;">
                </div>
                <div id="create-product-label" class="create-product-label" style="width:40px; height:40px; border-radius:20px 0px 0px 10px; font-family: Poppins-SemiBold; position:relative; float:left; line-height:34px; color:#ffffff; font-size:11px;">
                  <div id="create-product-label" class="create-product-label" style="width:100%; height:34px;  left:4px; font-family: Poppins-SemiBold; position:relative; float:left; line-height:34px; color:#ffffff; font-size:11px;">
                      <img @click="closeEmojiPicker()" src="@/assets/icons/social/close-square.png" style="height:20px; width:20px; top:8px; left:3px; cursor:pointer; position:relative; float:left;">
                  </div>
                </div>
                <div id="create-product-label" class="create-product-label" style="width:90%; height:40px; background:#fafafa; border-radius:0px 14px 0px 0px; margin-right:2px;   font-family: Poppins-SemiBold; position:relative; float:left; line-height:34px; color:#ffffff; font-size:11px;">
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        </div>
        <div style="width:100%; height:30%; margin-left:0px; padding-top:0px; float:left; padding-left:0px;  ">
          <div class="discussion-comment-container" id="discussion-comment-containerid8" style="display: block;">
          <div id="discuss-comment-layout-containerl1t4ndodf0wzwkb65ys" class="discuss-comment-layout-container">
             <div id="user-comment-layout-containerl1t4ndodf0wzwkb65ys" class="user-comment-layout-container" style="height:auto; width:100%; box-shadow:2px 3px 2px #f1f1f1; background:#fafafa; ">
               <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="min-height:40px; width:100%; float:left;  ">
                 <textarea placeholder="Message" id="message-value" class="comment-text-area" style="width:97.2%; height:70px; border:none; resize:none; min-height:70px; outline:none; padding-left:1.6%; padding-top:1%; padding-bottom:1%; position:relative; top:4px; left:0.5%; font-family:Poppins-SemiBold; box-shadow:0px 0px 1px #cccccc; background:#fcfcfc; margin-top:20px; border-radius:4px; float:left;"></textarea>
               </div>
               <div id="action-buttons-area-containerl1t4ndodf0wzwkb65ys" class="action-buttons-area-container" style="height:40px; width:100%; float:left; margin-top:6px; ">
                  <div id="submit-comment-button-holderl1t4ndodf0wzwkb65ys" class="submit-comment-button-holder" align="right" style="height:40px; float:right; ">
                    <input type="button" id="submit-comment-buttonl1t4ndodf0wzwkb65ys" class="submit-comment-button" value="Send" style="width:80px; height:34px; background:#8338ec; color:#ffffff; float:right; border-radius:6px; font-size:13px; font-family:Poppins-SemiBold; position:relative; top:10px; margin-right:10px; opacity:0.2;">
                  </div>
                  <div id="submit-comment-button-holderl1t4ndodf0wzwkb65ys" class="submit-comment-button-holder" align="right" style="height:40px; float:right; ">
                    <img @click="showEmojiPicker()" src="@/assets/icons/music-emoji.png" id="emoji-buttonl1t4ndodf0wzwkb65ys" class="emoji-button" style="width:30px; height:30px; float:right; padding:4px; background:#fafafa; border-radius:10px; margin-right:10px; position:relative; top:12px; cursor:pointer;">
                  </div>
                  <div id="submit-comment-button-holderl1t4ndodf0wzwkb65ys" class="submit-comment-button-holder" align="right" style="height:40px; width:100px; float:right; ">


                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>



    </div>

    </div>






  </div>

</template>

<script lang="jsx">

/*
import EmojiPicker from "vue3-emoji-picker";
import "/node_modules/vue3-emoji-picker/dist/style.css";
*/
import EmojiPicker from '/src/assets/js/vue3-emoji-picker'
import '/src/assets/js/vue3-emoji-picker/dist/style.css'


// import picker compopnent


//import DiscordPicker from 'vue3-discordpicker'
//import { EmojiPicker } from 'vue-emoji-picker'
//import TopBarLoggedInWidget from '../../../../items/top-bar-messages.vue';
//import HomeFooterWidget from '../../../../components/views/home/items/home-footer.vue';


export default {
  name: 'messagesWidget',
  props: {
    msg: String
  },

  components:{
    EmojiPicker: EmojiPicker,
    //EmojiPicker,
    //DiscordPicker
  },
  mounted(){

    //this.checkUserExists('auto-login')
    //this.hideFooter();
    //this.hideOverflow();
  },
  created() {

        let appClickListener=document.querySelector('body')
        let updatePopupState=()=>{
          if(  this.emojiOptions.visible==true && this.emojiItemSelected===false ){

            //alert(this.productOptionPopupActive)

            this.closeEmojiPicker()

          }

        }
          appClickListener.addEventListener("click",()=>{

            setTimeout(function(){ updatePopupState() },100)




          },false);

    console.log(" route query::  ",this.$route.query,this.$route.param)
  },
  data(){
    return {
      emojiOptions:{
        visible:false,
        emojiItemSelected:false,

      },



      topBarData:{
        totalProducts:0,
        userCookieData:{},
      },

            sellerPagesList:[
              {
                title:'Dashboard',
                path:'/dashboard',
                iconPath:'grid-3.png',
                canShowPage:false,
              },
              {
                title:'Products',
                path:'/products',
                iconPath:'box.png',
                canShowPage:false,
              },
              {
                title:'Add Product',
                path:'/add-product',
                iconPath:'add-circle.png',
                canShowPage:true,
              },
              {
                title:'Messages',
                path:'/messages/s/',
                iconPath:'message-text.png',

                canShowPage:false,
              },
               {
                 title:'Shops',
                 path:'/shops',
                 iconPath:'shop.png',

                canShowPage:false,
              },

              {
                title:'Orders',
                path:'/orders',
                iconPath:'wallet-money.png',

                canShowPage:false,
              },
              {
                 title:'Transactions',
                 path:'/transactions',
                 iconPath:'arrange-square.png',

                canShowPage:false,
              },
               {
                 title:'Customers',
                 path:'/customers',
                 iconPath:'people.png',
                canShowPage:false,
              },

            {
                 title:'Coupons',
                 path:'/coupons',
                 iconPath:'dollar-square.png',
                canShowPage:false,
              },
            {
                 title:'Settings',
                 path:'/settings',
                 iconPath:'setting-2.png',

                canShowPage:false,
              },
            {
                title:'Analytics',
                path:'/analytics',
                iconPath:'activity.png',

                canShowPage:false,
              },
              {
                title:'Reports',
                path:'/reports',
                iconPath:'receipt-text.png',

                canShowPage:false,
              },



            ],

        isLoggedIn: false,
      userCookieData:{},
      activePage:'messages',
      messageList:[
         {
          walletAddress:'',
          username:'Fire Beats',
          avatarUrl:'music-img-1.jpeg',
          likes:'100',
          senderIsUserId:false,
          timeDate:'9:23 AM 17th July, 2021',
          comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
        },
        {
          walletAddress:'',
          username:'Fire Beats',
          avatarUrl:'music-img-1.jpeg',
          likes:'100',
          senderIsUserId:true,
          timeDate:'9:23 AM 17th July, 2021',
          comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
        },
        {
          walletAddress:'',
          username:'Fire Beats',
          avatarUrl:'music-img-1.jpeg',
          likes:'100',
           senderIsUserId:true,
          timeDate:'9:23 AM 17th July, 2021',
          comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
        },
         {
          walletAddress:'',
          username:'Hands Down',
          avatarUrl:'music-img-4.jpeg',
          likes:'100',
           senderIsUserId:false,
          timeDate:'9:00 AM, Yesterday',
          comment:' Apply today!]  ',
        },
        {
          walletAddress:'',
          username:'crypto punk',
          avatarUrl:'music-img-2.jpeg',
          likes:'109',
           senderIsUserId:false,
          timeDate:'Now',
          comment:' Apply today!]  ',
        },


      ],
    }
  },
  methods:{



    onSelectEmoji(emoji) {
      //e.preventDefault();
      let messageTarget=document.getElementById('message-value')

      messageTarget.value=messageTarget.value+emoji.i
        this.emojiOptions.emojiItemSelected=true

        let emoClear=()=>{
            this.emojiOptions.emojiItemSelected=false
        }

        setTimeout(function(){
          emoClear()
        },100)

      //console.log(emoji)
      //alert(emoji)
      /*
        // result
        {
            i: "????",
            n: ["kissing face"],
            r: "1f61a", // with skin tone
            t: "neutral", // skin tone
            u: "1f61a" // without tone
        }
        */
    },
    closeEmojiPicker(){
      this.emojiOptions.visible=false
    },
    showEmojiPicker(){
      let show=()=>{
        this.emojiOptions.visible=true

      }

      setTimeout(function(){
        show()

        window.jQuery("#message-emoji-container").css("height","0px")
        window.jQuery("#message-emoji-container").css("margin-top","4vh")
        window.jQuery("#message-emoji-container").animate({
          "height":"53vh"
        })
        window.jQuery("#message-emoji-container").animate({
          "margin-top":"0px"
        })


      },200)
    },


    openMessageItemContent(){

      window.jQuery("#vertical-messages-contents").css("width","0px")
      window.jQuery("#vertical-messages-contents").show()
      window.jQuery("#vertical-messages-contents").animate({
        "width":"580px"
      },600)

      window.jQuery("#modal-messages").css("width","940px")
      //window.jQuery("#vertical-messages-contents").show()
      window.jQuery("#vertical-messages-contents").css("height","100%")


    },
    hideMessageContent(){
      window.jQuery("#vertical-messages-contents").animate({
        "width":"0px"
      },300)

      let hide_=()=>{
        let messagesContent=document.getElementById("vertical-messages-contents")
        messagesContent.style.display="none"
      }

      setTimeout(function(){
        hide_()
      },300)


    },
    hideMessagesModal(){

      let messagesPopupWidget=document.getElementById("messages-popup-modal")
      messagesPopupWidget.style.display="none"


    },


    goModule(index,path){
      this.$router.push(path);

    },
    getDashboardIcons(name){
      let imgUrl;
      let page_ = window.location.href.split("/messages/s").join("");
      //page_=window.location.href.split("/")[0]

      if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
        imgUrl = page_ + "./src/assets/icons/dashboard-icons/" + name;
      } else {
        imgUrl = page_ + "dynamic-assets/icons/dashboard-icons/" + name;
      }
      console.log(imgUrl);
      return imgUrl;

      //return "@/assets/icons/dashboard-icons/"+path;
    },
    checkUserExists(type){
    let result
    if(type=='auto-login'){
      console.log('check user ')
      //window.localStorage.getItem("username") === null
      let userCookieData
      let localStoreData
      if(this.$cookies.isKey('siteAccessT') ){
        userCookieData=this.$cookies.get("siteAccessT")
        this.userCookieData=userCookieData
        //$cookies.isKey(keyName)
        // localStorage.getItem("siteAccessT") !== null
        console.log(userCookieData)
        localStoreData = JSON.parse( window.localStorage.getItem("siteAccessT"))
        this.topBarData.userCookieData=userCookieData

        console.log( localStoreData ,window.localStorage.getItem("siteAccessT"))
        console.log("true")
        result=1;
       // this.goUserHome();

      }else{
        this.$router.push('/home/')
        result=0
        console.log("false")
      }
      console.log("local storage:  ",window.localStorage.getItem("siteAccessT"),localStoreData,"user cookies: ",userCookieData )



    }
    return result
    },
    hideFooter(){
      let footer=document.getElementById("app-footer")
      footer.style.display="none"

    }, hideOverflow(){
      let vueApp=document.getElementById("vue-app")
      vueApp.style.overflowY="hidden"
       let app=document.getElementById("app")
      app.style.overflowY="hidden"

    },
    getMenuClass(item,index){
      console.log(item.title,index)
      return item.title.toLowerCase()==this.activePage?'top-menu-item-active':'top-menu-item';

    },
    getImageUrl(name) {
      let imgUrl;
      let page_ = window.location.href.split("products").join("");
      //page_=window.location.href.split("/")[0]

      if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
        imgUrl = page_ + "./src/assets/images/" + name;
      } else {
        imgUrl = page_ + "dynamic-assets/images/" + name;
      }
      console.log(imgUrl);
      return imgUrl;
    },
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
    font-size: 12px;
    padding: 8px;
    padding-left: 10px;
    padding-right: 10px;
    min-width: 16px;
    max-width: 230px;
    margin: 6px;
    border-radius: 16px;
    color:#404040;
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
    transition-delay:.2s;
}
.company-logo-alignment {
    width: 200px;
    height: 60px;
    top: -10px;
    position: relative;
    float: left;
    left: 30px;
}

.discussion-content-render {
    width: 90%;
    min-height: 60px;
    height: auto;
    background: #fdfdfd;
    display: none;
    padding-bottom: 20px;
    border-radius: 6px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-left:50px;
    margin-top: 1px;
}

input {
    border: none;
    outline: none;
}

.column1 {
    position: relative;
    top: 60px;
    left: 65px;
    width: 280px;
    margin-left: 40px;
    float: left;
}

.column2 {
    float: right;
    width: 62%;
    margin-top: 10px;
    top: -80px;
    padding-left: 40px;
    padding-top: 20px;
    margin-right: 10%;
    height: 88vh;
    border-radius: 10px;
    text-decoration: none;
    background: #ffffff;
}

.avatar-alignment {
    width: 34px;
    height: 34px;
    border-radius: 100px;
    background: #fcfcfc;
    position: relative;
    cursor: pointer;
    float: left;
}

.post-button {
    float: left;
    margin-left: 10px;
    height: 40px;
    width: 80px;
    background: #fcfcfc;
    margin-top: 15px;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 10px;
}

.post-label {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 40px;
    color: #404040;
}

.comment-container {
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #fafafa;
    height: auto;
    float: left;
    margin-bottom: 20px;
}

.comment-avatar-container {
    width: 50px;
    height: 50px;
    float: left;
}

.comment-content-container {
    width: auto;
    float: left;
    margin-left: 10px;
}

.comment-username {
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    text-align: left;
    font-family: Poppins-Bold;
}

.comment-avatar {
    margin-left: 20px;
    box-shadow: 0px 0px 0px 4px #f1f1f1;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    background: #fcfcfc;
    position: relative;
    float: left;
}
.reply-avatar {
    margin-left: 10px;
    box-shadow: 0px 0px 0px 4px #f1f1f1;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    background: #fcfcfc;
    position: relative;
    float: left;
}


.time-content {
    font-weight: normal;
    text-align: left;
    cursor: pointer;
    white-space: normal;
    margin-top: 4px;
    color: #606060;
    overflow: wrap;
    font-size: 10px;
    padding-top: 10px;
    padding-left: 2px;
    font-family: Poppins-SemiBold;
}

.comment-content {
    font-weight: normal;
    text-align: left;
    cursor: pointer;
    white-space: normal;
    max-width: 460px;
    width:94%;
    text-align: left;
    display: inline-block;
    overflow: wrap;
    float:left;
    font-size: 12px;
    margin-top: 4px;
    background: #fafafa;
    padding: 10px;
    border-radius: 10px;
    font-family: Poppins-Regular;
}

a {
    text-decoration: none;
    color: black;
}

.discussion-top-base-structure {
    width: 98%;
    padding-right: 20px;
    margin-left: 0px;
    float: left;
}

.discussion-title-layout {
    width: 100%;
    max-height: auto;
    display: inline-block;
    cursor: pointer;
}


.discussion-comment-container {
    width: 99%;
    height: auto;
    display: none;
    padding-bottom: 20px;
    border-radius: 6px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-top: 1px;
}

.discussion-title-holder {
    width: 40%;
    height: 20px;
    float: left;
}

.discussion-title {
    height: 20px;
    float: left;
    position: relative;
    left: 15px;
    top: 13px;
    color: #000000;
    font-family: Poppins-SemiBold;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.0212em;
}

.discussion-title-data {
    position: relative;
}

.discussion-title-time {
    font-size: 11px;
    font-family: Poppins-Regular;
    position: relative;
    left: 6px;
    top: -1px;
    color: #707070;
}

.discussion-time-data {
    font-weight: bold;
}

.expand-discussion-content-button-holder {
    width: 70%;
    height: 40px;
    float: right;
    display: inline-block;
}

.expand-discussion-content-button {
    position: relative;
    float: right;
    right: 10px;
    height: 20px;
    width: 20px;
    top: 10px;
    cursor: pointer;
}

.expand-discussion-content-button:hover {
    position: relative;
    float: right;
    right: 10px;
    height: 20px;
    width: 20px;
    top: 10px;
    opacity: 0.6;
    cursor: pointer;
}

.discussion-details-container {
    height: 30px;
    width: 100%;
    float: left;
    margin-top: 18px;
}

.comment-indicator-container {
    height: 30px;
    width: 70px;
    float: left;
    margin-left: 20px;
    margin-top: 0px;
}

.discuss-comment-icon-container {
    width: 20px;
    height: 24px;
    float: left;
}

.discuss-comment-icon {
    width: 18px;
    height: 18px;
    opacity: 0.6;
}

.discuss-comment-icon-container {
    width: 20px;
    height: 24px;
    float: left;
}

.discuss-total-comment {
    width: 30px;
    height: 30px;
    float: left;
    font-family: Poppins-Regular;
    position: relative;
    text-align: left;
    left: 2px;
    top: 2px;
    font-size: 11px;
    color: #808080;
}

.created_by-container {
    float: left;
}

.created_by-avatar {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    box-shadow: 0px 0px 1px #ccc;
    float: left;
    cursor: pointer;
}

.created_by-username {
    font-size: 11px;
    font-family: Poppins-Regular;
    position: relative;
    left: 6px;
    top: 2px;
    color: #808080;
    float: left;
}

.discuss-comment-layout-container {
    width: 100%;
    height: 140px;
}

#app{
  overflow-y:hidden;
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
    padding-left: 15px;
    padding-right: 16px;
    height:30px;
    line-height:30px;

    color:#000000;
    width: 160px;
    margin-top: 12px;
    text-align: left;
    letter-spacing: 0.01712em;
    display: inline-block;
    position: relative;
    font-family: Poppins-Medium;
    transition: 0.1s all;
    transition-delay: 0.1s;
}
.top-menu-item-active {
    cursor: pointer;
    font-size: 12px;

    padding-left: 12px;
    padding-right: 16px;
    height:30px;
    line-height:30px;

    color:#000000;
    width: 160px;
    border-radius: 4px;
    margin-top: 12px;

    text-align: left;
    letter-spacing: 0.01712em;
    display: inline-block;
    position: relative;
    transition: 0.1s all;
    transition-delay: 0.1s;
    font-family:Poppins-Bold;
    background: #fafafa;


    border-left:3px solid #000000;



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
    font-size: 12px;
    padding: 8px;
    padding-left: 16px;
    padding-right: 16px;
    min-width: 16px;
    max-width: 230px;
    margin: 6px;
    border-radius: 16px;
    color:#404040;
    text-align: center;
    letter-spacing: 0.01612em;
    display: inline-block;
    position: relative;
    box-shadow:0px 0px 0px 2px #f1f1f1;
    font-family: Poppins-SemiBold;

}

.menu-item:hover {
    position: relative;
    font-family: Poppins-SemiBold;
    background-color: #f1f1f1;
    transition-delay:.2s;
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
#app-vue{
  overflow:hidden;
}
#app{
  overflow:hidden;
}
body{
    overflow:hidden;
}
</style>
