
<template>
  <!--
  <div  class="centered-position" style="width:100vw; height:560px; display:flex; overflow:hidden; justify-items:center; float:left; user-select:none; ">
   <div style="height:460px; width:1100px; display:inline-block; border-radius:10px; white-space:nowrap; box-shadow:0px 0px 0px 1px #f1f1f1; z-index:1; float:left; "  >
       <div id="mapGlue" style="height:100%; width:100%; " align="center"  ></div>
   </div>
 </div>
-->

 <div  v-for="(videoPost, indexPost) in videoPostList" :key="indexPost" :id="`video-post-list-container`+indexPost" style="min-height:460px; max-height:6000px; width:560px; margin-bottom:40px; position:relative; background:#fcfcfc; padding-top:10px; border-bottom:1px solid #f1f1f1; z-index:1;" align="center"  >
    <div  id="video-post-container"  style=" height:auto;   " align="center"  >
      <div  style="height:100%; width:450px; float:left; border-radius:10px; margin-left:10px; display:block; white-space:no-wrap; " align="center"  >
        <div style="width:100%; height:40px; margin-top:1%; margin-left:0px; float:left; ">
          <div id="top-list-container" class="top-list-container" style="width:40px;  height:30px; text-align:left; position:relative;  font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
              <img :src="getImageUrl(videoPost.avatarUrl)" @click="hideComments(indexPost)" class="comment-avatar-" style="width:30px; height:30px; margin-left:10px; border-radius:100px; cursor:pointer;  " id="null">
          </div>
          <!--
          <div id="top-list-container" class="top-list-container" style="width:40px;  height:30px; text-align:left; position:relative;  font-family:Poppins-SemiBold; float:left; font-size:12px; " align="center">
            <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:100%; float:left;  ">
              <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:30px; cursor:pointer; position:absolute; background:#f1f1f1; border-radius:100px; ">
                <img src="@/assets/icons/social/heart.png" id="" class="" style="width:22px; height:22px; float:left;  position:relative; cursor:pointer; ">
              </div>
              <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:30px; cursor:pointer; position:absolute; background:#f1f1f1; border-radius:100px; ">
                <img src="@/assets/icons/dashboard-icons/add-circle.png" id="" class="" style="width:22px; height:22px; float:left;  position:relative; cursor:pointer; ">
              </div>
            </div>
          </div>
        -->
          <div id="top-list-container" style="width:60%;  height:30px; text-align:left; color:#000000; position:relative; left:10px; font-family:Poppins-Bold; float:left; line-height:30px; font-size:12px; " align="center">
              {{videoPost.username}}
              <span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; font-family:Montserrat-Bold; cursor:pointer; position:relative; left:6px; padding-top:1.4px; padding-bottom:1.4px; top:-1px; padding-left:6px; padding-right:6px; line-height:30px;  ">Follow</span>
          </div>
          <div id="top-list-container" style="width:40px;  height:30px; text-align:left; color:#000000; position:relative; left:10px; font-family:Poppins-Bold; float:right; line-height:30px; font-size:12px; " align="center">
            <img src="/src/assets/icons/nft-show-more.png" @click="hideComments(indexPost)" class="comment-avatar-" style="width:30px; height:30px; margin-left:10px; border-radius:100px; cursor:pointer;  " id="null">

          </div>

        </div>
        <div id="stack-container" style="width:450px; height:auto; min-height:300px; overflow:hidden; margin-left:0px; float:left; ">
          <div :id="`video-container`+indexPost" style="width:450px; height:auto; position:absolute; float:left;  ">
            <!--  <input id="video-seeker" type="range" max="100" value="0" style="width:160px; height:6px; border-radius:10px; top:-1px; position:relative; background:rgb(32,32,32,0.3); cursor:pointer;  border-radius:10px;  " />
            -->
                <video @mouseover="showControls(indexPost)"  @mouseleave="hideControls(indexPost)" :id="`video-target`+indexPost" v-on:load="setPostHeight(`video-target`+indexPost,`video-post-content`+indexPost,`video-post-list-container`+indexPost )" autoplay :src="getVideoUrl(videoPost.videoMediaUrl)" style="min-height:100px; max-height:1400px; width:90%; position:relative; margin-left:10%; border-radius:10px; max-aspect-ratio: 3/2; cursor:pointer; box-shadow:0px 0px 0px 1px #f1f1f1; " />

          </div>
          <div @mouseover="showControls(indexPost)"  @mouseleave="hideControls(indexPost)" v-show="videoPost.videoControl.controlsIsVisible" :id="`video-controls-container`+indexPost"  style="width:450px; height:auto; cursor:pointer; position:absolute; float:left; ">
            <!--
            <div class="centered-position" style="width:90%; position:relative; margin-left:10%; height:240px; top:20px; position:relative; float:left; ">
              <div  @click="goProductDetail('')" id="product-preview-details-containerid10l4pyy3med2bsschrb7o" class="featured-products-style-" data-product_id="416" style="width:130px; height:220px; cursor:pointer;  background:rgb(0,0,0,0.6); border-radius:10px; margin-top:10px; padding-top:10px; margin-left:0px;  margin-right:4px; float:left; ">
                 <div id="product-avatar-container" class="" style=" width:100%; height:130px; overflow:hidden; float:left; ">
                    <img :src="getProductPhoto('./src/assets/images/watch-1.png')" id="product-avatar" class="product-avatar-" style=" width:100%; max-height:150px; float:left; ">
                 </div>
                 <div id="product-details-container" class="product-details-container" align="left" style=" width:100%; height:100px; float:left; position:relative; overflow:hidden; ">
                   <div id="product-title" class="" style=" height:auto; width:90%; float:left; margin-left:4px; border-radius:10px; font-size:14px; margin-top:4px; color:#f1f1f1; font-family:Poppins-Regular; font-size:11px; ">
                     Watch Series 4
                   </div>
                   <div id="product-price" class="" style="height:24px; width:90%; float:left; margin-left:4px; border-radius:10px;   margin-top:2px; color:#f1f1f1;  font-family:Poppins-SemiBold; font-size:16px; ">
                     <span id="product-price-sign" class="" style="font-size:11px; font-family:Poppins-Regular; margin-right:0.4px; ">$</span>
                     75,666<span id="percent-reduction" class="" style="width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; color:#404040; font-family:Poppins-Regular;  position:relative; left:6px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; padding-right:6px; line-height:30px;  ">-5.8%</span>
                   </div>
                 </div>
               </div>
            </div>
          -->


            <div  :id="`video-controls`+indexPost" style="width:450px; height:100px; cursor:pointer; overflow:hidden; position:relative; ">




              <div class="centered-position" style="width:90%; position:relative; margin-left:10%; height:40px; position:relative; float:left; ">
                <div class="centered-position" style="width:50px; margin-right:40px; height:40px; ">
                  <div v-show="videoPost.videoControl.playButtonVisible" @click="playVideo(indexPost)" id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container video-control-buttons centered-position" style="height:40px; width:40px; cursor:pointer;  border-radius:100px; ">
                    <img src="@/assets/icons/social/play-circle.png" id="" class="" style="width:26px; height:26px; float:left;  position:relative; cursor:pointer; ">
                  </div>
                  <div v-show="videoPost.videoControl.pauseButtonVisible" @click="pauseVideo(indexPost)" id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container video-control-buttons centered-position" style="height:40px; width:40px; cursor:pointer;  border-radius:100px; ">
                    <img src="@/assets/icons/social/pause-circle.png" id="" class="" style="width:26px; height:26px; float:left;  position:relative; cursor:pointer; ">
                  </div>
                </div>
                <div  class="centered-position" style="width:50px; height:40px; ">
                  <div v-show="videoPost.videoControl.muteButtonVisible" @click="muteVideo(indexPost)" id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container video-control-buttons centered-position" style="height:40px; width:40px; cursor:pointer;  border-radius:100px; ">
                    <img src="@/assets/icons/social/volume-high.png" id="" class="" style="width:26px; height:26px; float:left;  position:relative; cursor:pointer; ">
                  </div>
                  <div v-show="videoPost.videoControl.unmuteButtonVisible" @click="unmuteVideo(indexPost)" id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container video-control-buttons centered-position" style="height:40px; width:40px; cursor:pointer;  border-radius:100px; ">
                    <img src="@/assets/icons/social/volume-slash.png" id="" class="" style="width:26px; height:26px; float:left;  position:relative; cursor:pointer; ">
                  </div>
                </div>
              </div>
              <div class="centered-position" style="width:90%; position:relative; margin-left:10%; border-radius:20px; margin-top:10px; height:10px; position:relative; float:left; ">
                <div style="width:98.2%; height:10px; text-align:center; position:relative; left:0px; font-family:Poppins-Regular; float:left; font-size:10px; " align="center">
                    <div style="width:100%; height:7px; position:relative; border-radius:10px; border-radius:20px; top:8px; left:0px; font-family:Poppins-Regular; float:left; font-size:10px; " align="center">
                      <!-----   background:#9080E9;  ---->
                      <input class="video-seeker" :id="`video-seeker`+indexPost" type="range" max="100" value="0" style="width:100%; height:6px; border-radius:10px; top:-1px; position:relative; background:rgb(0,0,0,0.3); cursor:pointer;  border-radius:10px;  " />
                    </div>
                </div>
              </div>
            </div>



          </div>


        </div>



        <div :id="`video-post-content`+indexPost" style="width:450px; height:auto; margin-top:10px; margin-bottom:20px; margin-left:0px; position:relative; float:left; ">
          <div id="top-list-container" style="width:90%;  height:30px; text-align:left; color:#000000; position:relative; left:10px; font-family:Poppins-Bold; float:left; font-size:12px; " align="center">
              {{videoPost.postTitle}}
          </div>
          <div id="top-list-container"  style="width:90%;  height:30px; text-align:left; position:relative; left:10px; font-family:Poppins-SemiBold; float:left; font-size:11px; " align="center">
              {{videoPost.postBody}}
          </div>

        </div>
      </div>
      <div  class="centered-position" style="height:100%; width:80px; float:left;  " align="center"  >
        <div  style="height:70%; width:80px; margin-top:40px;" align="center"  >
<!--
          <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="" style="height:40px; width:100%; margin-top:20px; float:left;  ">
            <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:100%; float:left;  ">
              <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:40px; width:40px; cursor:pointer; position:absolute; background:#f1f1f1; border-radius:100px; ">
                <img src="@/assets/icons/social/heart.png" id="" class="" style="width:22px; height:22px; float:left;  position:relative; cursor:pointer; ">
              </div>
              <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:40px; width:40px; cursor:pointer; position:absolute; background:#f1f1f1; border-radius:100px; ">
                <img src="@/assets/icons/dashboard-icons/add-circle.png" id="" class="" style="width:22px; height:22px; float:left; margin-top:10px; position:relative; cursor:pointer; ">
              </div>
            </div>

          </div>
        -->

          <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="" style="height:70px; width:100%; margin-top:40px; float:left;  ">
            <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:100%; float:left;  ">
              <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:40px; width:40px; cursor:pointer; background:#f1f1f1; border-radius:100px; ">
                <img src="@/assets/icons/social/heart.png" id="" class="" style="width:22px; height:22px; float:left;  position:relative; cursor:pointer; ">
              </div>
            </div>
            <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:100%; margin-top:10px; font-size:12px; font-family:Poppins-SemiBold; float:left;   ">
              122.2k
            </div>
          </div>
          <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="" style="height:70px; width:100%; margin-top:20px; float:left;  ">
            <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:100%; float:left;  ">
              <div id="text-area-containerl1t4ndodf0wzwkb65ys" @click="showComments(indexPost)"  class="text-area-container centered-position" style="height:40px; width:40px; cursor:pointer; background:#f1f1f1; border-radius:100px; ">
                <img src="@/assets/icons/social/message-text.png" @click="showComments(indexPost)" id="" class="" style="width:22px; height:22px; float:left;  position:relative; cursor:pointer; ">
              </div>
            </div>
            <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:100%; margin-top:10px; font-size:12px; font-family:Poppins-SemiBold; float:left;   ">
              1.2k
            </div>
          </div>
          <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="" style="height:70px; width:100%; margin-top:20px; float:left;  ">
            <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:100%; float:left;  ">
              <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:40px; width:40px; cursor:pointer; background:#f1f1f1; border-radius:100px; ">
                <img src="@/assets/icons/social/send-2.png" id="" class="" style="width:22px; height:22px; float:left;  position:relative; cursor:pointer; ">
              </div>
            </div>
            <div id="text-area-containerl1t4ndodf0wzwkb65ys" class="text-area-container centered-position" style="height:30px; width:100%; margin-top:10px; font-size:12px; font-family:Poppins-SemiBold; float:left;   ">
              11.2k
            </div>
          </div>
        </div>

      </div>
    </div>







 </div>


 <videoCommentWidget v-on:updateVideoPost="updateVideoPost" v-if="videoPost.commentsIsVisible" :videoPost="videoPost"/>

</template>


<script>

import videoCommentWidget from '../../../../components/views/modal/comment-modal.vue';


export default {

  components:{
    videoCommentWidget,
  },
  mounted(){
    let setPostHeight=async(video,postContent,container,index)=>{
      video=document.getElementById(video)
      postContent=document.getElementById(postContent)
      container=document.getElementById(container)

      //var vid = document.getElementById("foo");
      //video.videoHeight; // returns the intrinsic height of the video
      //video.videoWidth; // returns the intrinsic width of the video
      video.addEventListener( "loadedmetadata", function (e) {

          //let width = this.videoWidth,
          //let height = this.videoHeight;
          //window.jQuery(video).height()
          console.log( "video h:", Number( window.jQuery(video).height() + window.jQuery(postContent).height() )+"px")


          console.log( "video h:", video.videoHeight+ " post height::", window.jQuery(postContent).height()+"px")


          //alert(Number( window.jQuery(video).height() + window.jQuery(postContent).height() )+"px")



          window.jQuery(container).css("height",Number( window.jQuery(video).height() + window.jQuery(postContent).height()+100 )+"px")
          window.jQuery("#stack-container").css("height",Number( window.jQuery(video).height() +10)+"px")

          window.jQuery("#video-container"+index).css("height",Number( window.jQuery(video).height())+"px")
          window.jQuery("#video-controls-container"+index).css("height",Number( window.jQuery(video).height())+"px")


          console.log(index)

          //let el=window.jQuery("#"+clickedEl)
          let elementPosition=  elementPositions_(video)
          console.log(elementPosition)
          let left_=Number(elementPosition.left-226)
          let top_=Number(elementPosition.top+10)
          //window.jQuery("#video-controls"+index).css("top",Number( window.jQuery(video).height()+top_ -100)+"px")

          window.jQuery("#video-controls"+index).css("top",Number( window.jQuery(video).height()-67)+"px")






      }, false );








    }

    for(let i=0; i<this.videoPostList.length; i++){

      setTimeout(async function(i){
        await setPostHeight(`video-target`+i,`video-post-content`+i,`video-post-list-container`+i,i)

      },200,i)


    }
  },
data(){
  return{

    videoPost:{
      commentsIsVisible:false,
    },
    visibleComment:{},
    activeVideoPost:{
      index:0,
    },
    videoPostList:[
      {
        videoControl:{
          controlsIsVisible:false,
          muteButtonVisible:true,
          playButtonVisible:true,
          pauseButtonVisible:false,
          unmuteButtonVisible:false,
        },
        userId:'',
        username:'Longtact IT ltd-Yopipi',
        postTitle:'Yopipi Smart Controller',
        postBody:'Yopipi smart controller is now available in the market for sale, order yours now!',
        videoMediaUrl:'vid-1.mp4',
        commentsIsVisible:false,
        walletAddress:'',
        avatarUrl:'music-img-1.jpeg',
        likes:'100',
        shares:'234',
        timeDate:'9:23 AM 17th July, 2021',
        commentList:[
          {
            username:'@jUN JUN',
            avatarUrl:'music-img-1.jpeg',
            repliesIsVisible:false,
            comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
            replies:[
              {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'',
                timeDate:'9:23 AM 17th July, 2021',
              },
               {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'77',
                timeDate:'9:23 AM 17th July, 2021',
              }

            ],


          }
        ],
      },
      {
        videoControl:{
          controlsIsVisible:false,
          muteButtonVisible:false,
          playButtonVisible:true,
          pauseButtonVisible:false,
          unmuteButtonVisible:true,
        },
        userId:'',
        username:'Addidas inc',
        postTitle:'Addidas',
        postBody:'Addidas Sports shoe version 2 now available for sale on yopipi',
        videoMediaUrl:'vid-2.mp4',
        commentsIsVisible:false,
        walletAddress:'',
        avatarUrl:'music-img-1.jpeg',
        likes:'100',
        shares:'234',
        timeDate:'9:23 AM 17th July, 2021',
        commentList:[
          {
            username:'@jUN JUN',
            avatarUrl:'music-img-1.jpeg',
            repliesIsVisible:false,
            comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
            replies:[
              {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'',
                timeDate:'9:23 AM 17th July, 2021',
              },
               {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'77',
                timeDate:'9:23 AM 17th July, 2021',
              }

            ],

          },
          {
            username:'@jUN JUN',
            avatarUrl:'music-img-1.jpeg',
            repliesIsVisible:false,
            comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
            replies:[
              {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'',
                timeDate:'9:23 AM 17th July, 2021',
              },
               {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'77',
                timeDate:'9:23 AM 17th July, 2021',
              }

            ],

          },
          {
            username:'@jUN JUN',
            avatarUrl:'music-img-1.jpeg',
            repliesIsVisible:false,
            comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
            replies:[
              {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'',
                timeDate:'9:23 AM 17th July, 2021',
              },
               {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'77',
                timeDate:'9:23 AM 17th July, 2021',
              }

            ],

          },
          {
            username:'@jUN JUN',
            avatarUrl:'music-img-1.jpeg',
            repliesIsVisible:false,
            comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
            replies:[
              {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'',
                timeDate:'9:23 AM 17th July, 2021',
              },
               {
                userId:'',
                walletAddress:'',
                username:'crypto punk',
                avatarUrl:'music-img-2.jpeg',
                reply:'wow, amazing',
                likes:'77',
                timeDate:'9:23 AM 17th July, 2021',
              }

            ],

          }
        ],
      },



    ],
    commentList:[
       {
         commentIsVisible:false,
         walletAddress:'',
         username:'Fire Beats',
         avatarUrl:'music-img-1.jpeg',
         likes:'100',
         timeDate:'9:23 AM 17th July, 2021',
         comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
         replies:[
           {
             walletAddress:'',
             username:'crypto punk',
             avatarUrl:'music-img-2.jpeg',
             reply:'wow, amazing',
             likes:'',
             timeDate:'9:23 AM 17th July, 2021',
           },
            {
             walletAddress:'',
             username:'crypto punk',
             avatarUrl:'music-img-2.jpeg',
             reply:'wow, amazing',
             likes:'77',
             timeDate:'9:23 AM 17th July, 2021',
           }
         ],
       },
        {
         walletAddress:'',
         username:'Hands Down',
         avatarUrl:'music-img-4.jpeg',
         likes:'100',
         timeDate:'9:00 AM, Yesterday',
         comment:' Apply today!]  ',
         replies:[
           {
             walletAddress:'',
             username:'crypto punk',
             avatarUrl:'music-img-2.jpeg',
             reply:'wow, amazing',
             likes:'',
             timeDate:'9:23 AM 17th July, 2021',
           }
         ],
       },
         {
         walletAddress:'',
         username:'crypto punk',
         avatarUrl:'music-img-2.jpeg',
         likes:'109',
         timeDate:'Now',
         comment:' Apply today!]  ',
         replies:[
           {
             walletAddress:'',
             username:'crypto punk',
             avatarUrl:'music-img-2.jpeg',
             reply:'wow, amazing',
             likes:'908',
             timeDate:'9:23 AM 17th July, 2021',
           }
         ],
       },


     ],
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
  getProductPhoto(image){
    return image
  },
  showControls(index){
    this.videoPostList[index].videoControl.controlsIsVisible=true


  },
  hideControls(index){
    this.videoPostList[index].videoControl.controlsIsVisible=false

  },
  setPostHeight(video,postContent,container){
    video=document.getElementById(video)
    postContent=document.getElementById(postContent)
    container=document.getElementById(container)

    //window.jQuery(video).height()

    console.log(Number( window.jQuery(video).height() + window.jQuery(postContent).height() )+"px")


    window.jQuery(video).css("height",Number( window.jQuery(video).height() + window.jQuery(postContent).height() )+"px")




  },
  playVideo(index){
    let video=document.getElementById(`video-target`+index)
      let videoSeeker=document.getElementById(`video-target`+index)


    video.play()

    let pause=()=>{
      this.pauseVideo(index)
    }

    videoPlayHandler.loadTrack(video,'video-seeker'+index)

    video.addEventListener("ended",function(){ pause()  });

    this.videoPostList[index].videoControl.playButtonVisible=false
    this.videoPostList[index].videoControl.pauseButtonVisible=true
    this.videoPostList[index].commentsIsVisible=false

    const i = setInterval(function() {
	  if(video.readyState > 0) {
    		var minutes = parseInt(video.duration / 60, 10);
    		var seconds = video.duration % 60;

        videoSeeker.value=minutes+seconds


    		//clearInterval(i);
    	}
    }, 200);


  },
  pauseVideo(index){
    let video=document.getElementById(`video-target`+index)
    video.pause()
    this.videoPostList[index].videoControl.playButtonVisible=true
    this.videoPostList[index].videoControl.pauseButtonVisible=false



  },
  muteVideo(index){
    let video=document.getElementById(`video-target`+index)
    this.videoPostList[index].videoControl.unmuteButtonVisible=true
    this.videoPostList[index].videoControl.muteButtonVisible=false

  },
  unmuteVideo(index){
    let video=document.getElementById(`video-target`+index)
    this.videoPostList[index].videoControl.unmuteButtonVisible=false
    this.videoPostList[index].videoControl.muteButtonVisible=true

  },
  updateVideoPost(videoPost){


    if(videoPost.replyIndex!==null && videoPost.replyIndex!=='undefined' ){
      console.log("before video post:: ",this.videoPost,this.videoPostList[this.activeVideoPost.index])
      this.videoPostList[this.activeVideoPost.index].commentList[videoPost.replyIndex].repliesIsVisible=videoPost.repliesIsVisible

      //console.log(this.videoPostList[this.activeVideoPost.index])
      this.videoPost= this.videoPostList[this.activeVideoPost.index]

      console.log("after video post:: ",this.videoPost)
    }else{
      this.videoPost=videoPost
      this.videoPostList[this.activeVideoPost.index].commentsIsVisible=false;
      let videosPage=document.getElementById('videos-container')
      videosPage.style.overflowY="scroll"
    }

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
  showComments(index){
    this.activeVideoPost.index=index
    this.videoPostList[index].commentsIsVisible=true;
    this.videoPost=this.videoPostList[index];
    console.log("index::",index,"video post:: ",this.videoPost)
    let videosPage=document.getElementById('videos-container')
    videosPage.style.overflowY="hidden"


    //console.log("show index::",index)
    //this.videoPostList[index].commentsIsVisible=true;

  },
  hideComments(index){
    let videosPage=document.getElementById('videos-container')
    videosPage.style.overflowY="scroll"


    console.log("hide index::",index)

    this.videoPostList[index].commentsIsVisible=false;

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
  getVideoUrl(name) {
    let imgUrl;
    let page_ = window.location.href.split("buy").join("");
    //page_=window.location.href.split("/")[0]

    if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
      imgUrl = page_ + "./src/assets/videos/" + name;
    } else {
      imgUrl = page_ + "dynamic-assets/videos/" + name;
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
.video-seeker::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius:10px;

  background: #DADAFF;

}
.video-seeker::-webkit-slider-thumb:hover{
      background: #DADAFF;
}
input[type="range"] {
 -webkit-appearance: none;
 background-color: #D64928;
}

input[type="range"]:focus {
 outline: none;
}


.video-control-buttons{
  background:rgb(241,241,241,0.4);
}


.video-control-buttons:hover{
  background:rgb(241,241,241,0.8);
  transition-delay:100ms;
  transition-duration:100ms;

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
