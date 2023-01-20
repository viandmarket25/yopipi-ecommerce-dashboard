// ::::::::::::::::::::::::::
let baseUrl='http://192.168.1.5:3000'
let requestEndpoints={
  productEndpoint:baseUrl+'/product-manager/',
  orderEndpoint:baseUrl+'',
  settingsEndpoint:baseUrl+'',
  couponsEndpoint:baseUrl+'',
  customersEndpoint:baseUrl+'',
  dashboardEndpoint:baseUrl+'',
  messagesEndpoint:baseUrl+'',
  analyticsEndpoint:baseUrl+'',
  shopsEndpoint:baseUrl+'',
  transactionsEndpoint:baseUrl+'',
}

let productsRequest={
  getAllProducts: async(payload, files)=> {
      console.log(payload)
      let tempPayload = payload
      payload = JSON.stringify(payload)
      return new Promise((resolve, reject) => {
          let requestResult
          let __ip;
          var targetUrl = requestEndpoints.productEndpoint;
          let formData = new FormData()
          formData.append('action', 'gll_product')
          formData.append('auth_crd', JSON.parse(getCookie("siteAccessT")).token)
          formData.append('payload', payload)
          formData.append('requestType', 'requestType')
          console.log(formData)
          $.ajax({
              url: targetUrl,
              type: 'POST',
              data: formData,
              processData: false,
              contentType: false,
              success: function(data) {
                  //console.log(data)
                  let result = JSON.parse(data)
                  console.log(result)
                  if (result.resultCode == 1) {
                      // :::::: show success
                      let productList=[]
                      for (let i = 0; i < result.resultContent.length; i++) {
                          productListParameters.total = i
                          let newProduct = {
                              avatar: result.resultContent[i].MEDIA_SOURCE,
                              title: result.resultContent[i].TITLE,
                              description: result.resultContent[i].DESCRIPTION.substring(0, 45),
                              category: result.resultContent[i].PRODUCT_CATEGORY,
                              price: result.resultContent[i].PRICE,
                              stockLeft: result.resultContent[i].STOCK_CAPACITY,
                              originalStock: result.resultContent[i].STOCK_CAPACITY,
                              brand: result.resultContent[i].BRAND,
                          }
                          productList.push(newProduct)
                      }
                      requestResult=productList
                  }
              }
          });
          setTimeout(() => resolve(requestResult), 2000)
      });
      //await promise;
      //return 0
  },
  deleteProduct:()=>{

  },
  modifyProduct:()=>{


  }

}
let ordersRequest={

}
let transactionsRequest={

}
let couponsRequest={

}
let customersRequest={

}
let dashboardRequest={

}
let settingsRequest={

}
let analyticsRequest={

}
let messagesRequest={

}
let shopsRequest={

}
