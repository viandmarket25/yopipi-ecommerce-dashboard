<template>
  <div class="dashboard-background" >
<!--
   <TopBarLoggedInWidget :message="userCookieData" />
 -->

    <div style="max-width:1200px; height:auto; overflow-y:hidden; margin-left:0%; user-select:none; ">
    

      <div class="dashboard-content-block" >
        <div class="dashboard-content-block-inner">
          <TopBarLoggedInWidget :topBarData="topBarData" />


          <div align="left" style=" width:100%; height:97vh; overflow-y:scroll;   ">
<!--
            <div class="centered-position" align="left" style="height:60px; width:100%; float:left;  justify-content: space-around; ">
              <div class="centered-position" style="width:12%; height:60px;  float:left;  ">
                  <div style="width:90%; font-family:Montserrat-Bold; height:40px; font-size:16px; line-height:40px; text-align:left; margin-left:10px; " >Dashboard</div>
              </div>
              <div class="centered-position" style="width:12%; height:60px;  float:left;  ">
                <div id="" class="buy-now-button" style="width:100px; height:34px; position:relative; text-align:center;  border-radius:20px;  font-family:Montserrat-Bold; font-size:11px;  line-height:34px; cursor:pointer; color:#f1f1f1; margin-left:10px; float:left; background:#000000; ">Add Product</div>
              </div>
              <div style="width:76%; height:60px;  float:left;  ">

              </div>


            </div>
          -->


            <div align="left" style="height:20px; width:100%; float:left; display:flex; ">
            </div>
            <div align="left" style="height:100px; width:1000px;  display:flex; float:left; justify-content: space-around; ">
              <div class="centered-position" align="left" style="height:100px; width:200px; background:#fafafa;  cursor:pointer; display:flex; ">
                  <div style="width:24%; margin-right:10px; ">
                    <div class="centered-position" style="width:50px; height:50px; background:rgb(228,193,249,0.3); border-radius:10px; ">
                      <img src="@/assets/icons/seller-dash-icons/wallet-money.png" style="width:30px; height:30px; " />
                    </div>
                  </div>
                  <div style="  ">
                     <div style="font-family:Montserrat-Medium; font-size:12px; width:100%; text-align:left; "> Orders Today </div>
                     <div style="font-family:Montserrat-Bold; font-size:14px; width:100%; text-align:left;"> {{dashboardDataMap.totalOrdersToday}}</div>
                  </div>
              </div>
              <div  class="centered-position" align="left" style="height:100px; width:200px; background:#fafafa;  cursor:pointer; display:flex; ">
                <div style="width:24%; margin-right:10px; ">
                  <div class="centered-position" style="width:50px; height:50px; background:rgb(208,244,222,0.3); border-radius:10px; ">
                    <img src="@/assets/icons/seller-dash-icons/people.png" style="width:30px; height:30px; " />
                  </div>
                </div>
                <div style="  ">
                   <div style="font-family:Montserrat-Medium; font-size:12px; width:100%; text-align:left; "> Visitors Today </div>
                   <div style="font-family:Montserrat-Bold; font-size:14px; width:100%; text-align:left;"> {{dashboardDataMap.totalVisitorsToday}} </div>
                </div>

              </div>
              <div  class="centered-position" align="left" style="height:100px; width:240px; background:#fafafa;  cursor:pointer; display:flex; ">
                <div style="width:24%; margin-right:10px; ">
                  <div class="centered-position" style="width:50px; height:50px; background:rgb(144,224,239,0.3); border-radius:10px; ">
                    <img src="@/assets/icons/seller-dash-icons/message-notif.png" style="width:30px; height:30px; " />
                  </div>
                </div>
                <div style="  ">
                   <div style="font-family:Montserrat-Medium; font-size:12px; width:100%; text-align:left; "> Unread Messages </div>
                   <div style="font-family:Montserrat-Bold; font-size:14px; width:100%; text-align:left;">{{dashboardDataMap.unreadMessages}} </div>
                </div>
              </div>
              <div  class="centered-position" align="left" style="height:100px; width:300px; background:#fafafa;  cursor:pointer; display:flex; ">
                <div style="width:24%; margin-right:10px; ">
                  <div class="centered-position" style="width:50px; height:50px; background:rgb(205,180,219,0.3); border-radius:10px; ">
                    <img src="@/assets/icons/seller-dash-icons/bag-timer.png" style="width:30px; height:30px; " />
                  </div>
                </div>
                <div style="  ">
                   <div style="font-family:Montserrat-Medium; font-size:12px; width:100%; text-align:left;"> Pending Orders </div>
                   <div style="font-family:Montserrat-Bold; font-size:14px; width:100%; text-align:left;"> {{dashboardDataMap.pendingOrders}} </div>
                </div>
              </div>
            </div>

            <div align="left" style="height:20px; width:100%; float:left; display:flex; ">
            </div>


            <div align="left" style="height:100px; width:1000px;  display:flex; float:left; justify-content: space-around; ">
              <div class="centered-position" align="left" style="height:100px; width:200px; background:#fafafa;  cursor:pointer; display:flex; ">
                  <div style="width:24%; margin-right:10px; ">
                    <div class="centered-position" style="width:50px; height:50px; background:rgb(184,192,255,0.3); border-radius:10px; ">
                      <img src="@/assets/icons/seller-dash-icons/box.png" style="width:30px; height:30px; " />
                    </div>
                  </div>
                  <div style="  ">
                     <div style="font-family:Montserrat-Medium; font-size:12px; width:100%; text-align:left; "> Total Products </div>
                     <div style="font-family:Montserrat-Bold; font-size:14px; width:100%; text-align:left;"> {{dashboardDataMap.totalProducts}}</div>
                  </div>
              </div>
              <div   class="centered-position" align="left" style="height:100px; width:200px; background:#fafafa;  cursor:pointer; display:flex; ">
                <div style="width:24%; margin-right:10px; ">
                  <div class="centered-position" style="width:50px; height:50px; background:rgb(255,214,255,0.3); border-radius:10px; ">
                    <img src="@/assets/icons/seller-dash-icons/shop.png" style="width:30px; height:30px; " />
                  </div>
                </div>
                <div style="  ">
                   <div style="font-family:Montserrat-Medium; font-size:12px; width:100%; text-align:left;"> Total Shops </div>
                   <div style="font-family:Montserrat-Bold; font-size:14px; width:100%; text-align:left;"> {{dashboardDataMap.totalShops}} </div>
                </div>

              </div>
              <div  class="centered-position" align="left" style="height:100px; width:240px; background:#fafafa;  cursor:pointer; display:flex; ">
                <div style="width:24%; margin-right:10px; ">
                  <div class="centered-position" style="width:50px; height:50px; background:rgb(241,91,181,0.1); border-radius:10px; ">
                    <img src="@/assets/icons/seller-dash-icons/empty-wallet-time.png" style="width:30px; height:30px; " />
                  </div>
                </div>
                <div style="  ">
                   <div style="font-family:Montserrat-Medium; font-size:12px; width:100%; text-align:left;"> Running Low </div>
                   <div style="font-family:Montserrat-Bold; font-size:14px; width:100%; text-align:left;"> {{dashboardDataMap.runningLow}}</div>
                </div>
              </div>
              <div  class="centered-position" align="left" style="height:100px; width:300px; background:#fafafa;  cursor:pointer; display:flex; ">
                <div style="width:24%; margin-right:10px; ">
                  <div class="centered-position" style="width:50px; height:50px; background:rgb(65,234,212,0.3); border-radius:10px; ">
                    <img src="@/assets/icons/seller-dash-icons/truck-time.png" style="width:30px; height:30px; " />
                  </div>
                </div>
                <div style="  ">
                   <div style="font-family:Montserrat-Medium; font-size:12px; width:100%; text-align:left;"> Products in Route </div>
                   <div style="font-family:Montserrat-Bold; font-size:14px; width:100%; text-align:left;"> {{dashboardDataMap.productsInRoute}} </div>
                </div>
              </div>
            </div>

            <div align="left" style="height:30px; width:100%;  display:flex; float:left; ">
            </div>

            <div class="centered-position" align="left" style="height:400px; width:100%; float:left; justify-content: space-around; ">
              <div style="height:400px; width:58.8%;  ">
                <div style="width:100%; height:60px;  float:left;  ">
                    <div style="width:90%; font-family:Montserrat-Bold; height:40px; font-size:16px; line-height:40px; text-align:left; margin-left:10px; " >Weekly Sales</div>
                </div>
                <div  style="height:340px; float:left; width:100%;  ">
                  <!--<line-chart :data="weekSalesData"></line-chart>-->
                  <apexchart
                    width="500"
                    type="line"
                    :options="sales.chartOptions"
                    :series="sales.series">
                  </apexchart>
                </div>
              </div>
              <div align="left" style="height:400px; width:35%;  ">
                <div style="width:100%; height:60px;  float:left;  ">
                    <div style="width:90%; font-family:Montserrat-Bold; height:40px; font-size:16px; line-height:40px; text-align:left; margin-left:10px; " >Recent Orders</div>
                </div>
                <div  style="height:340px; float:left; width:100%;   ">


                </div>


              </div>
            </div>
            <div class="centered-position" align="left" style="height:400px; width:100%; float:left; overflow:hidden; justify-content: space-around; ">
              <div style="height:400px; width:96.8%;  ">
                <div style="width:100%; height:60px;  float:left;  ">
                    <div style="width:90%; font-family:Montserrat-Bold; height:40px; font-size:16px; line-height:40px; text-align:left; margin-left:10px; " >Daily Visits (April 20 to May 20)</div>
                </div>
                <div style="height:340px; float:left; width:100%;  ">
                  <apexchart
                    height="340px"
                    type="line"
                    :options="dailyVisit.chartOptions"
                    :series="dailyVisit.series">
                  </apexchart>
                </div>
              </div>

            </div>
            <div align="left" style="height:30px; width:100%;  display:flex; float:left; ">
            </div>



            <div class="centered-position" align="left" style="height:400px; width:100%; float:left; justify-content: space-around; ">
              <div style="height:400px; width:96.8%;  ">
                <div style="width:100%; height:60px;  float:left;  ">
                    <div style="width:90%; font-family:Montserrat-Bold; height:40px; font-size:16px; line-height:40px; text-align:left; margin-left:10px; " >Sales by Categories</div>
                </div>
                <div  style="height:340px; float:left; width:100%;  ">
                  <div>
                    <apexchart
                      width="500"
                      type="line"
                      :options="chartOptions"
                      :series="series"
                    ></apexchart>
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

import TopBarLoggedInWidget from './top-bar-dashboard.vue';
import HomeFooterWidget from '../../../../../components/views/home/items/home-footer.vue';

export default {
  name: "userProfileWidget",
  components:{
    //AccountWalletWidget,
    //AccountStoreWidget,
    TopBarLoggedInWidget ,HomeFooterWidget,

  },
  //mixins: [web3Modal],
  props: {
    msg: String
  },
  created() {


  },
  mounted() {

    this.checkUserExists('auto-login')
    this.activeProfilePage=document.getElementById('active-profile-page')
    this.showOverflow();
    // console.log("web3 modal: ",window.web3)
     //this.connect()

  },
  data(){
    return {
      topBarData:{
        totalProducts:0,
        userCookieData:{},
      },
        chartOptions: {
          chart: {
            id: "vuechart-example",
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
            }
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 35, 50, 49, 60, 70, 91],
          },
        ],


      dashboardDataMap:{
        totalOrdersToday:'1,000',
        totalVisitorsToday:'600',
        unreadMessages:'233',
        pendingOrders:'22',
        totalProducts:'12,200',
        totalShops:'3',
        runningLow:'2',
        productsInRoute:'10',

      },
      dailyVisit:{
        series: [
          {
            name: 'Daily Visits',
            data:  ['20', '221', '222', '232', '245', '325', '426','527','728','829',
            '2', '22', '23', '23', '3', '4', '5','6','7','8',
            '9', '10', '11', '12', '13', '14', '15','16','17','18',
            '19', '20']
          }
        ],
        chartOptions: {
          chart: {
            id: "vuechart-example-2",
            foreColor: '#404040',
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100]
            }
          },
          xaxis: {
            categories: ['Apr 20', '21', '22', '23', '24', '25', '26','27','28','29',
            'Apr 30', '31', 'May 1', '2', '3', '4', '5','6','7','8',
            '9', '10', '11', '12', '13', '14', '15','16','17','18',
            '19', '20']



          },
        },



      },

      sales:{
          series: [
            {
              name: 'Sales-1',
              data: [4, 3, 10, 9, 29, 19, 22]
            }
          ],
          chartOptions: {
            chart: {
              id: "vuechart-example-2",
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: []
              }
            },
            xaxis: {
              categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
          },
          /*
        forecastDataPoints: {
          count: 7
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
          tickAmount: 10,
          labels: {
            formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        title: {
          text: 'Forecast',
          align: 'left',
          style: {
            fontSize: "16px",
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        yaxis: {
          min: -10,
          max: 40
        }

*/

      },
      weekSalesData: [["Monday", 4], ["Tuesday", 2], ["Wednesday", 3], ["Thursday", 5], ["Friday", 3] ,["Saturday", 3],["Sunday", 3]],

      dailyVisitData: [["Monday", 4], ["Tuesday", 2], ["Wednesday", 3], ["Thursday", 5], ["Friday", 3] ,["Saturday", 3],["Sunday", 3],
                    ["Monday", 4], ["Tuesday", 2], ["Wednesday", 3], ["Thursday", 5], ["Friday", 3] ,["Saturday", 3],["Sunday", 3],
                    ["Monday", 4], ["Tuesday", 2], ["Wednesday", 3], ["Thursday", 5], ["Friday", 3] ,["Saturday", 3],["Sunday", 3]

      ],

      isLoggedIn: false,
      userCookieData:{},
      activePage:'dashboard',

      // Web3modal instance
      web3Modal: 0,
      // Chosen wallet provider given by the dialog window
      provider: 0,
      // Address of the selected account
      selectedAccount: 0,
      activeProfilePage:'',
      number: 0,
      balance: 0,
      selectedVerticalButton:'my-dashboard-link',
      selectedHorizontalButton:'',

      sellerPagesList:[
        {
          title:'Dashboard',
          path:'/dashboard',
          iconPath:'grid-3.png',

          canShowPage:true,
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



      profilePagesList:{
        earnings:{
          canShowPage:false,
        },
        history:{
          canShowPage:false,
        },
        profile:{
          canShowPage:false,
        },
        purchases:{
          canShowPage:false,
        },
        settings:{
          canShowPage:false,
        },
        store:{
          canShowPage:false,
        },
        wallet:{
          canShowPage:true,
        },
      },
    /***
     *
     * {"item":{"name":"Leslie","job":"Deputy Director"},
     * "option":{"name":"Add Star","slug":"add-star","class":"my-custom-class"}}
    ***/
    items: {
      item:{"name":"Leslie","job":"Deputy Director"},
      option:{"name":"Add Star","slug":"add-star","class":"my-custom-class"}
    },
      // Unpkg imports
    nftArtList:{
      artUrl:['nft1.png','nft4.png','nft3.png','nft2.png','nft5.png','nft6.png','nft7.png','nft8.png','nft9.png'],
      brief:['Pokens Face','June Baby girl','Nanjing Panda','Cute Poppies','Ferrow Wellows','Hot Bummies','Angel Wings','Dancing Mouse','Sindi Samdra'],
      description:[],
      price:['0.012','0.1','0.01','0.33','2.0','0.12','1.03','0.06','0.17'],
      bids:['122','0','10','24','2','14','102','6','17'],
    },
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      1200: {
        itemsToShow: 4,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    }
  },
  methods:{
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });

      const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      };
      // In the same way, update the series option
      this.series = [
        {
          data: newData,
        },
      ];
    },


    goModule(index,path){
      this.$router.push(path);

    },
    getDashboardIcons(name){
      let imgUrl;
      let page_ = window.location.href.split("dashboard").join("");
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
    showOverflow(){
      let vueApp=document.getElementById("vue-app")
      vueApp.style.overflowY="scroll"
       let app=document.getElementById("app")
      app.style.overflowY="hidden"

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
        this.$router.push('/')
        result=0
        console.log("false")
      }
      console.log("local storage:  ",window.localStorage.getItem("siteAccessT"),localStoreData,"user cookies: ",userCookieData )



    }
    return result
  },
    onComplete(data){
      console.log('data:', data);
    },
    connect() {
      //this.$store.dispatch('connect')
    },
    goDetail(param){
      console.log(param)
      this.$router.push(param)
    },
    handleClick (event, item) {
      this.$refs.vueSimpleContextMenu.showMenu(event, item)
    },
    optionClicked (event) {
      window.alert(JSON.stringify(event))
    },
    // ::::::::::::::
    changeButtonProfileNavStyle(targetButton,activePage){
      let previousButton=document.getElementById(this.selectedVerticalButton)
      this.selectedVerticalButton=targetButton
      targetButton=document.getElementById(targetButton)
      let key_=targetButton.getAttribute('data-key_')
      let prevKey_=previousButton.getAttribute('data-key_')

      if(key_!=prevKey_){
        console.log("key: ",key_,"prev key: ",prevKey_)
        console.log(this.sellerPagesList)
        this.sellerPagesList[key_].canShowPage=true
        this.sellerPagesList[prevKey_].canShowPage=false
        //this.getDatasetFromElement(this.profilePagesList)
        previousButton.style.background="#ffffff"
        targetButton.style.background="#f1f1f1"
        previousButton.style.fontFamily="Poppins-Medium"
        targetButton.style.fontFamily="Poppins-SemiBold"
        this.activeProfilePage.innerHTML=activePage
        console.log(this.activeProfilePage)
        console.log(this.selectedVerticalButton)

      }

    },
    changeHorizontalNavStyle(targetButton,activePage){
      let previousButton=document.getElementById(previousButton)
      targetButton=document.getElementById(targetButton)
      previousButton.style.background="#fcfcfc"
      targetButton.style.background="#f1f1f1"
      previousButton.style.boxShadow="0px 0px 0px 2px #f1f1f1"
      targetButton.style.boxShadow="0px 0px 0px 2px #ffffff"
      this.activeProfilePage.innerHTML=activePage

    },
    getDatasetFromElement(element){
      //element.preventDefault();
      var whichFilterItem = element. currentTarget.dataset.key_;
      alert(whichFilterItem);
      return whichFilterItem
    },
    getMenuClass(item,index){
      console.log(item.title,index)
      return item.title.toLowerCase()==this.activePage?'top-menu-item-active':'top-menu-item';

    }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-banner{
  background:url('/Applications/XAMPP/xamppfiles/htdocs/ethereum/eth-frontend/src/assets/images/nft-backg.png')
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
