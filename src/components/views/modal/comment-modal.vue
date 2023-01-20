<template>
    <div  id="account-popup-modal" style=" display:flex; justify-content:center; z-index:222222222; position:fixed; ">
        <div id="contents-target" class="contents-target"  @click="updateVideoPost()" style="width:100vw; height:100vh; z-index:222222222; cursor:pointer; left:0px; position:fixed; top:0px; overflow:hidden; opacity:1; ">
        </div>
        <div id="contents-target" class="contents-target" style=" height:93vh; width:420px; background:#ffffff;  z-index:222222222; box-shadow:0px -0.4px 30px 4.0px #f0f0f0; border:1px solid #f1f1f1; position:fixed; right:5%; top:48px;   border-radius:12px; overflow:hidden;  ">



          <div  id="''index" style="height:100%; width:450px; position:absolute; " align="center"  >

            <div  style="height:100%; width:420px;  float:left; border-radius:10px; " align="center"  >
              <div style="width:100%; height:84%; margin-left:0px; background:none; padding-left:0px; float:right; ">
                <div id="user-comment-layout-containerl1t4ndodf0wzwkb65ys" class="user-comment-layout-container " style="height:99.9%; width:100%; margin-top:0.2%; overflow:hidden; box-shadow:0px 0px 8px 1px #f1f1f1; position:relative; background:#fcfcfc; float:right;  ">
                  <div id="top-list-container" class="top-list-container" style="width:100%; height:40px; letter-spacing:0.012em; text-align:center; padding-top:10px; box-shadow:0px 0px 0px 1px #f1f1f1; background:#fafafa; margin-bottom:10px; position:relative; margin-top:0px; left:0px; float:left; font-size:22px; color:#404040; font-family:Poppins-SemiBold; " align="center">
                    <div id="top-list-container" class="top-list-container" style="width:90%;  height:30px; text-align:left; position:relative; left:10px; font-family:Poppins-SemiBold; color:#666666; float:left; font-size:12px; " align="center">
                        Comments ({{ getCommentLength(videoPost.commentList) }})
                    </div>
                    <div id="top-list-container" class="top-list-container" style="width:10%;  height:30px; text-align:left; position:relative;  font-family:Poppins-SemiBold; float:right; font-size:12px; " align="center">
                        <img  src="@/assets/icons/social/close-square.png" @click="updateVideoPost()" class="comment-avatar-" style="width:20px; width:20px; cursor:pointer;  " id="null">
                    </div>
                  </div>
                  <div id="top-list-container" class="top-list-container" style="width:100%;  height:90%; overflow:hidden;  position:relative; float:left;" >

                     <div  id="message-emoji-container" style="width:100%;  height:100%; margin-left:0px; overflow-y:scroll;  user-select:none; float:left; position:absolute;  ">

                       <div style="width:100%; height:auto; margin-bottom:20px; border-bottom:1px solid #f1f1f1; padding-bottom:20px; float:left;  "
                        v-for="(comment, indexComment) in videoPost.commentList" :key="indexComment" >
                            <div style="width:14%; height:auto; float:left; ">
                              <img  :src="getImageUrl(comment.avatarUrl)" class="comment-avatar" id="null">
                            </div>
                            <div style="width:86%; height:auto; float:left; ">
                              <div class="comment-username" id="null">
                                {{comment.username}}
                                <div class="centered-position" style=" width:auto; font-weight:bold; color:#000000; float:right; margin-right:20px;  line-height:34px; top:0px; text-align:left;  position:relative; ">
                                  <img src='@/assets/icons/social/heart.png' style="height:18px; width:18px; cursor:pointer;  position:relative;  margin-left:6px; margin-right:6px; " />
                                  <span style="color:#404040; font-family:Poppins-Medium; font-size:11px; right:2px; position:relative;  ">{{videoPost.likes}}</span>
                                </div>
                              </div>
                              <div class="comment-content" id="null">
                                <div style="width:100%; height:auto; font-family:Poppins-Medium; ">
                                    {{comment.comment}}
                                </div>
                                <div style="width:100%; height:30px; border-top:1px solid #f1f1f1; margin-top:10px; ">
                                  <div style="width:40%; height:30px; float:left; ">
                                    <div class="time-content" >
                                      {{comment.timeDate}}
                                    </div>
                                  </div>
                                  <div style="width:60%; height:30px;  float:right; ">
                                    <div id="top-list-container" class="top-list-container" style="width:auto;  height:auto; text-align:left; position:relative; left:10px; font-family:Poppins-Medium; color:#404040; float:left; font-size:12px; " align="center">
                                        <div class="centered-position" align="center" style=" width:auto; font-weight:bold; color:#000000; float:left;  line-height:34px; top:0px; text-align:left;  position:relative; ">
                                          <span @click="showReply(indexComment)" style="color:#404040; font-family:Poppins-Medium; font-size:11px; right:2px; position:relative; font-family:Poppins-Bold; letter-spacing:0.0016em; font-size:12px;  ">
                                            Show Replies
                                         </span>
                                        </div>
                                        <!--
                                        <div class="time-content" style="font-family:Poppins-Bold; letter-spacing:0.0016em; color:#8338ec; font-size:12px; ">
                                          Replies
                                        </div>
                                      -->
                                    </div>


                                    <div id="top-list-container" class="top-list-container" style="width:auto;  height:auto; text-align:left; position:relative; left:40px; font-family:Poppins-Medium; color:#404040; float:left; font-size:12px; " align="center">
                                        <div class="centered-position" align="center" style=" width:auto; font-weight:bold; color:#000000; float:right;  line-height:34px; top:0px; text-align:left;  position:relative; ">
                                          <img @click="showReply(indexComment)" src='@/assets/icons/social/message-text.png' style="height:18px; width:18px; cursor:pointer;  position:relative;  margin-left:6px; margin-right:6px; " />
                                          <span @click="showReply(indexComment)" style="color:#404040; font-family:Poppins-Medium; font-size:11px; right:2px; position:relative; font-family:Poppins-Bold; letter-spacing:0.0016em; font-size:12px;  ">
                                            Reply
                                         </span>
                                        </div>
                                        <!--
                                        <div class="time-content" style="font-family:Poppins-Bold; letter-spacing:0.0016em; color:#8338ec; font-size:12px; ">
                                          Replies
                                        </div>
                                      -->
                                    </div>
                                    <!--
                                    <div class="centered-position" align="center" style=" width:auto; font-weight:bold; color:#000000; float:right;   line-height:34px; top:0px; text-align:left;  position:relative; ">
                                      <img src='@/assets/icons/social/heart.png' style="height:18px; width:18px; cursor:pointer;  position:relative;  margin-left:6px; margin-right:6px; " />
                                      <span style="color:#404040; font-family:Poppins-Medium; font-size:11px; right:2px; position:relative;  ">{{videoPost.likes}}</span>
                                    </div>
                                  -->
                                  </div>
                                </div>
                                <div  v-show="comment.repliesIsVisible"  class="replies" style="width:100%; height:auto; margin-top:20px; padding-top:0px;  padding-bottom:20px; border-radius:8px; margin-top:20px; float:left; ">
                                  <div style="height:20px; width:100%; margin-top:0px; float:left;  ">
                                    <div style="height:2px; width:100%; margin-top:10px; margin-left:0px;  float:left; border-top:1px solid #f1f1f1; ">

                                    </div>
                                  </div>
                                  <div id="top-list-container" class="top-list-container" style="width:100%; height:auto; letter-spacing:0.012em; text-align:center; position:relative; margin-top:10px; background:#fafafa; left:0px; float:left; font-size:22px; color:#404040; font-family:Poppins-SemiBold; " align="center">
                                    <div id="top-list-container" class="top-list-container" style="width:60%;  height:auto; text-align:left; position:relative; left:10px; font-family:Poppins-SemiBold; color:#404040; float:left; font-size:12px; " align="center">
                                       Replies ({{ getReplyLength(comment.replies)}})
                                    </div>
                                  </div>
                                  <!-- replies -->
                                  <div class="replies" style="width:100%; height:auto; margin-top:20px;   padding-top:10px; margin-top:20px; float:left; "
                                  v-for="(reply, replyIndex) in comment.replies" :key="replyIndex" >
                                    <div style="width:16%; height:auto; float:left; ">
                                      <img :src="getImageUrl(reply.avatarUrl)" class="reply-avatar" id="null">
                                    </div>
                                    <div style="width:80%; height:auto; float:left; ">
                                      <div class="comment-username" id="null">
                                        {{reply.username}}
                                      </div>
                                      <div class="comment-content" id="null" style=" background:#fefefe; " >
                                        <div style="width:100%; height:auto; background:none; color:#404040; font-family:Poppins-SemiBold; ">
                                            {{reply.reply}}
                                        </div>
                                        <div style="width:100%; height:30px;  ">
                                          <div style="width:60%; height:30px;  ">
                                            <div class="time-content" >
                                              {{reply.timeDate}}
                                            </div>
                                          </div>
                                          <div style="width:40%; height:30px;  ">

                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>


                                </div>

                              </div>
                            </div>
                        </div>




                     </div>
                     <div v-show="emojiOptions.visible" id="comment-emoji-container" style="width:420px;  height:100%; margin-left:0px; user-select:none; float:left; position:absolute;  ">
                       <div  id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:auto; width:100%; margin-bottom:0px; float:left;  ">
                         <div  id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:55.8vh; width:350px; background:#fafafa; margin-right:10px; margin-top:80px; border-radius:10px; box-shadow:0px 0px 8px 1px #f1f1f1; margin-bottom:0px; float:right;  ">
                         <div  id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:55vh; width:300px; margin-right:2px; float:right; margin-bottom:0px;  ">
                           <EmojiPicker  @select="onSelectEmoji" style="height:55vh; width:300px; position:relative; margin-top:3px;  " />
                         </div>
                         <div  id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:55vh; width:40px; border-radius:10px;  float:right; marn-bottom:0px;  ">
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
                </div>
              </div>
              <div style="width:100%; height:16%; margin-left:0px;  padding-left:0px;  background:#fafafa; float:right; ">
                <div id="user-comment-layout-containerl1t4ndodf0wzwkb65ys" class="user-comment-layout-container centered-position" style="height:100%; width:100%; background:#fcfcfc; float:left;  ">
                    <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container" style="height:60px; width:66%;  float:left;  ">
                      <textarea placeholder="Your Comment" id="add-comment-to-video" class="comment-text-area" style="width:97.2%; height:60px; border:none; font-size:13px; resize:none;  outline:none; padding-left:4.6%; padding-top:2%; padding-bottom:1%; position:relative; left:0.5%; font-family:Poppins-SemiBold; box-shadow:0px 0px 1px #cccccc; background:#fafafa;  border-radius:10px; float:left;"></textarea>
                    </div>
                    <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:60px; width:10%; float:left;  ">
                      <img @click="showEmojiPicker()" src="@/assets/icons/music-emoji.png" id="emoji-buttonl1t4ndodf0wzwkb65ys" class="emoji-button" style="width:30px; height:30px; float:right; background:#f1f1f1; padding:2px; border-radius:10px; margin-right:10px; position:relative; cursor:pointer;">
                    </div>
                    <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:60px; width:20%;  float:left;  ">
                       <input type="button" id="" class="submit-comment-button-" value="Post" style="width:90px; height:34px; background:#8338ec; color:#ffffff; float:right; border-radius:20px; cursor:pointer; font-size:12px; font-family:Poppins-SemiBold; border:none; position:relative; margin-right:10px; opacity:0.2;">
                    </div>
                 </div>
              </div>

            </div>

          </div>
        </div>
    </div>
</template>
<script lang="jsx">
//import QrcodeVue from 'qrcode.vue';
//import QRCodeVue3 from "qrcode-vue3";
import EmojiPicker from '/src/assets/js/vue3-emoji-picker'
import '/src/assets/js/vue3-emoji-picker/dist/style.css'


export default {
    name:'accountPopupWidget',


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
  data() {
      return {
        replyIndex:0,
        emojiOptions:{
          visible:false,
          emojiItemSelected:false,

        },
        value: 'https://example.com',
        size: 100,
      }
    },
    props: {
      videoPost: Object
    },
    components:{
      EmojiPicker: EmojiPicker,
      //EmojiPicker,
      //DiscordPicker
    },
    methods: {
      closeEmojiPicker(){
        this.emojiOptions.visible=false
      },

      onSelectEmoji(emoji) {
        //e.preventDefault();
        let messageTarget=document.getElementById('add-comment-to-video')
        messageTarget.value=messageTarget.value+emoji.i
        this.emojiOptions.emojiItemSelected=true

        let emoClear=()=>{
            this.emojiOptions.emojiItemSelected=false
        }

        setTimeout(function(){
          emoClear()
        },100)

      },
      showEmojiPicker(){
        let show=()=>{
          this.emojiOptions.visible=true

        }

        setTimeout(function(){
          show()


          window.jQuery("#comment-emoji-container").css("height","0px")
          window.jQuery("#comment-emoji-container").css("margin-top","4vh")
          window.jQuery("#comment-emoji-container").animate({
            "height":"55vh"
          })
          window.jQuery("#comment-emoji-container").animate({
            "margin-top":"0px"
          })



        },200)
      },
      getCommentLength(value){
        console.log(value)
        if(value!=='undefined' && value!==undefined){
            console.log(value)
          return value.length
        }

      },
      getReplyLength(value){
        console.log(value)
        if(value!=='undefined' && value!==undefined){
            console.log(value)
          return value.length
        }

      },


      showReply(indexComment){
        let videoPost={
          repliesIsVisible:true,
          replyIndex:indexComment,
          commentsIsVisible:true,
        }
        console.log(videoPost)
        this.$emit("updateVideoPost",videoPost)

      },
      hideReply(indexComment){
        let videoPost={
          repliesIsVisible:false,
          replyIndex:indexComment,
          commentsIsVisible:true,
        }
        console.log(videoPost)
        this.$emit("updateVideoPost",videoPost)

      },

      updateVideoPost(){

        let videoPost={
          repliesIsVisible:false,
          replyIndex:null,
          commentsIsVisible:false,
        }
        console.log(videoPost)
        this.$emit("updateVideoPost",videoPost)

      },
        closeAddPrivateKeyForm(){
            this.closeForm()
        },
        closeForm(){
            let targetElement=document.getElementById('account-popup-modal')
            targetElement.style.display="none"

        },
        logoutUser(){

           this.$cookies .remove("siteAccessT");
            this.$router.push('/home');

            //setTimeout(function(){
           //   window.location.reload();
            //},100)




        },
        getImageUrl(name) {
          let imgUrl;
          let page_ = window.location.href.split("buy").join("");
          //page_=window.location.href.split("/")[0]

          if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
            imgUrl = page_ + "./src/assets/images/" + name;
          } else {
            imgUrl = page_ + "dynamic-assets/images/" + name;
          }
          console.log(imgUrl);
          return imgUrl;
        },

    },


}

</script>
<style scoped>
.menu-list-container-popup {
    height: 60px;
    width: 100%;
    list-style-type: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;

}

.menu-item-popup {
    cursor: pointer;
    margin-left:6%;
    font-size: 12px;
    float: left;

    height:40px;
    width: 80%;
    padding-left:12px;
    padding-right:12px;
    line-height:40px;
    cursor:pointer;
    color:#000000;
    text-align: left;
    letter-spacing: 0.02712em;
    position: relative;
    font-family: Poppins-Bold;

}

.menu-item-popup:hover {
    position: relative;
    font-family: Poppins-Bold;
    border-radius:10px;
    opacity:0.9;
    transition-delay:133ms;
    transition-duration: 133ms;
    background:#f1f1f1;

    color:#000000;
    transition-delay:122ms;
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
    font-size: 12px;
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



</style>
