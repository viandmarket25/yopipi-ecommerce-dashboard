const homeView = () =>
    import ('./components/views/home/index.vue')
    /*
const itemDetailsWidget = () =>
    import ('./components/views/item-details/index.vue')
    */
const userProfileWidget = () =>
    import ('./components/views/profile/index.vue')
const searchItemsWidget = () =>
    import ('./components/views/search/index.vue')
const activityWidget = () =>
    import ('./components/views/activity/index.vue')
const loginWidget = () =>
    import ('./components/views/login/index.vue')
const joinWidget = () =>
    import ('./components/views/join/index.vue')
const userHomeView = () =>
    import ('./components/views/user-home/index.vue')
const messagesView = () =>
    import ('./components/views/messages/index.vue')
const sellerStoreView = () =>
    import ('./components/views/seller-store/index.vue')
const howItWorksView = () =>
    import ('./components/views/how-it-works/index.vue')
//::::::::::: yopipi shopping
const dashboardWidget = () =>
    import ('./components/views/seller/dashboard/index.vue')
const ordersWidget = () =>
    import ('./components/views/seller/orders/index.vue')
const shopsWidget= () =>
    import ('./components/views/seller/shops/index.vue')
const productsWidget= () =>
    import ('./components/views/seller/products/index.vue')
const transactionsWidget = () =>
    import ('./components/views/seller/transactions/index.vue')
const customersWidget = () =>
    import ('./components/views/seller/customers/index.vue')
const couponsWidget = () =>
    import ('./components/views/seller/coupons/index.vue')
const settingsWidget = () =>
    import ('./components/views/seller/settings/index.vue')
const analyticsWidget = () =>
    import ('./components/views/seller/analytics/index.vue')
const reportsWidget= () =>
    import ('./components/views/seller/reports/index.vue')

const  searchPageWidget = () =>
    import ('./components/views/buyer/items/search-page.vue')
const  cartPageWidget = () =>
    import ('./components/views/buyer/items/cart-page.vue')
const  ordersPageWidget = () =>
    import ('./components/views/buyer/items/orders-page.vue')
const  buyerHomeWidget = () =>
    import ('./components/views/buyer/index.vue')
const  itemDetailsWidget = () =>
    import ('./components/views/buyer/items/item-details.vue')
const  profilePageWidget = () =>
    import ('./components/views/buyer/items/profile-page.vue')
const  checkoutPageWidget = () =>
    import ('./components/views/buyer/items/checkout-page.vue')
const  addProductWidget = () =>
    import ('./components/views/seller/add-product/index.vue')
const  sellerMessagesWidget = () =>
    import ('./components/views/seller/messages/index.vue')
const  categoryPageWidget = () =>
    import ('./components/views/buyer/items/category-page.vue')
const  postVideoWidget = () =>
    import ('./components/views/buyer/items/post-video.vue')




export default [
/*
    {
      Path: '',
      redirect: '/home'
    },
*/
    {
        path: '/',
        component: homeView,
        name: homeView
    },


     {
        path: '/home',
        component: homeView,
        name: homeView
    }, {
        path: '/details',
        component: itemDetailsWidget,
        name: itemDetailsWidget,
        props: true,
    },
    /*
    {
        path: '/details/:id',
        component: itemDetailsWidget,
        name: itemDetailsWidget,
        props: true,
    },
    */
    {
        path: '/profile',
        component: userProfileWidget,
        name: userProfileWidget
    }, {
        path: '/search',
        component: searchItemsWidget,
        name: searchItemsWidget
    }, {
        path: '/activity',
        component: activityWidget,
        name: activityWidget
    }, {
        path: '/login',
        component: loginWidget,
        name: loginWidget
    }, {
        path: '/join',
        component: joinWidget,
        name: joinWidget
    }, {
        path: '/app',
        component: userHomeView,
        name: userHomeView
    }, {
        path: '/messages',
        component: messagesView,
        props: true,
        name: messagesView
    }, {
        path: '/seller-store',
        component: sellerStoreView,
        name: sellerStoreView
    }, {
        path: '/seller-store/:id',
        component: sellerStoreView,
        props: true,
        name: sellerStoreView
    },
    {
        path: '/how-it-works',
        component: howItWorksView,
        name: howItWorksView
    },
    {
        path: '/dashboard',
        component: dashboardWidget,
        name: dashboardWidget
    },

    {
        path: '/shops',
        component: shopsWidget,
        name: shopsWidget
    },


    {
        path: '/products',
        component: productsWidget,
        name: productsWidget
    },

    {
        path: '/orders',
        component: ordersWidget,
        name: ordersWidget
    },
    {
        path: '/transactions',
        component: transactionsWidget,
        name: transactionsWidget
    },
    {
        path: '/customers',
        component: customersWidget,
        name: customersWidget
    },

    {
        path: '/coupons',
        component: couponsWidget,
        name: couponsWidget
    },
    {
        path: '/settings',
        component: settingsWidget,
        name: settingsWidget
    },

    {
        path: '/analytics',
        component: analyticsWidget,
        name: analyticsWidget
    },

    {
        path: '/reports',
        component: reportsWidget,
        name: reportsWidget
    },

    {
        path: '/buy',
        component: buyerHomeWidget,
        name: buyerHomeWidget
    },
    {
        path: '/orders',
        component: ordersPageWidget,
        name: ordersPageWidget
    },
    {
        path: '/search-buy',
        component: searchPageWidget,
        name: searchPageWidget
    },
    {
        path: '/search-buy/:keyword',
        component: searchPageWidget,
        name: searchPageWidget
    },
    {
        path: '/cart',
        component: cartPageWidget,
        name: cartPageWidget
    },
    {
        path: '/details/:id',
        component: itemDetailsWidget,
        name: itemDetailsWidget,
          props: true,
    },
    {
        path: '/profile/',
        component: profilePageWidget,
        name: profilePageWidget,
          props: true,
    },
    {
        path: '/checkout/',
        component: checkoutPageWidget,
        name: checkoutPageWidget,
          props: true,
    },
    {
        path: '/messages/s/:sid',
        component: sellerMessagesWidget,
        name: sellerMessagesWidget,
          props: true,
    },
    {
        path: '/messages/s/',
        component: sellerMessagesWidget,
        name: sellerMessagesWidget,
          props: true,
    },
    {
        path: '/add-product/',
        component: addProductWidget,
        name: addProductWidget,
          props: true,
    },
    {
        path: '/category/',
        component: categoryPageWidget,
        name: categoryPageWidget,
          props: true,
    },
    {
        path: '/post-video/',
        component: postVideoWidget,
        name: postVideoWidget,
          props: true,
    },




















]
