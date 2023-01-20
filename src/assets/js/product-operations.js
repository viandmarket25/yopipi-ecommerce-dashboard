let elementFunction = {
    imgFunction: function(elementID, elementClass, content) {
        let result = document.createElement("img");
        result.setAttribute("src", content)
        result.setAttribute("id", elementID)
        result.setAttribute("class", elementClass)
        return result
    },
    divFunction: function(elementID, elementClass, content) {
        let result = document.createElement("div");
        content != null ? result.innerHTML = content : result.innerHTML = " ";
        result.setAttribute("id", elementID)
        result.setAttribute("class", elementClass)
        return result
    },
    textAreaFunction: function(elementID, elementClass, content) {
        let result = document.createElement("textarea");
        content != null ? result.innerHTML = content : result.innerHTML = " ";
        result.setAttribute("id", elementID)
        result.setAttribute("class", elementClass)
        return result
    },
    labelFunction: function(elementID, elementClass, content) {
        let result = document.createElement("label");
        result.setAttribute("id", elementID)
        result.setAttribute("class", elementClass)
        result.innerHTML = content
        return result
    },
    spanFunction: function(elementID, elementClass, content) {
        let result = document.createElement("span");
        content != null ? result.innerHTML = content : result.innerHTML = " ";
        result.setAttribute("id", elementID)
        result.setAttribute("class", elementClass)
        return result
    },
    inputFunction: function(elementID, elementClass, content, placeholder) {
        let result = document.createElement("input");
        result.setAttribute("placeholder", placeholder);
        result.setAttribute("id", elementID)
        result.setAttribute("class", elementClass)
        return result
    },
    numberInputFunction: function(elementID, elementClass, content, placeholder) {
        let result = document.createElement("input");
        result.value = content;
        result.setAttribute("type", "number")
        result.setAttribute("placeholder", 0.00);
        result.setAttribute("id", elementID)
        result.setAttribute("class", elementClass)
        return result
    },
    fileInputFunction: function(elementID, elementClass, content, placeholder) {
        let result = document.createElement("input");
        result.setAttribute("id", elementID)
        result.setAttribute("class", elementClass)
        return result
    },
}
let getCookie=(cookieName)=> {
  const name = cookieName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let result;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) result = val.substring(name.length);
  })
  return result
}
let lifeTimeParameters = {
    sellerPreviousSelection: "#dashboard",
    sellerPresentSelection: null,
    sellerPreviousTextSelection: "#dashboard-text",
    sellerPresentTextSelection: null,
}
let appParameters = {
    cartTotalMainId: "cart-total-products-main",
    cartTotalId: "cart-total-products",
    ordersTotalId: "",
    confirmedOrdersTotalId: "",
    shippingProductsTotalId: "",
    cartCheckoutData: {

        products: {},
        productKeys: {},


    },

}

let buyerCartParameters = {
    productId: 0,
    productQuantity: 0,
    productStockLeft: 10,
    productQuantityId: "",
    productOriginalPrice: 0,
    productPrice: 0,
    productPriceLabelId: "",
    productVariationsId: [],
    productVariationsData: {

    },
    productVariationUiControl: {

    },
    calculateNewPrice: async() => {

    },

}
console.log(buyerCartParameters)
    /**
     *
     *
     * title:"",
            selectedVariation:"",
     *
     *
     */
let addCommas = (stringValue) => {
    let result
    if (stringValue.length == 4) {
        result = stringValue.substring(0, 1) + "," + stringValue.substring(1, stringValue.length)
    } else if (stringValue.length == 5) {
        result = stringValue.substring(0, 2) + "," + stringValue.substring(2, stringValue.length)
    } else if (stringValue.length == 6) {
        result = stringValue.substring(0, 3) + "," + stringValue.substring(3, stringValue.length)
    } else if (stringValue.length == 7) {
        result = stringValue.substring(0, 1) + "," + stringValue.substring(1, 4) + "," + stringValue.substring(5, stringValue.length)
    } else if (stringValue.length == 8) {
        result = stringValue.substring(0, 2) + "," + stringValue.substring(1, 5) + "," + stringValue.substring(7, stringValue.length)
    }
    return result
}
let cutOff__ = (value, type) => {
    // ::::::::: 0 to underscore, 1 to hiphen
    type == 0 ? value = value.split("-").join("_") : value = value.split("_").join("-")
    return value
}
let cutString = (value, type, start, stop) => {
    value.length > stop ? value = value.substring(start, stop) + "..." : value = value
    return value
}
let getUniqueId = () => {
    let stringV = Date.now().toString(36) + Math.random().toString(36).substr(2);
    return stringV
}
let purchaseProduct = async() => {


}
let addCartProductToCheckout = async(clickedId, targetElement) => {
    // :::get product id, quantity, cart product id
    console.log("")
    let elementId = document.getElementById(clickedId)
    let cartProductId = elementId.dataset.cart_product_id
    let cartProductPrice = elementId.dataset.cart_product_price

    let checkoutData = {
        productId: "",
        productQuantity: 0,
        productPrice: 0,

    }


    if (!(cartProductId in appParameters.cartCheckoutData.productKeys)) {
        appParameters.cartCheckoutData.products[cartProductId] = checkoutData
        appParameters.cartCheckoutData.productKeys[cartProductId] = cartProductId
            // :::::::: update ui
        $("#" + clickedId).css("background", "#ffffff")
        $("#" + clickedId).animate({
            "opacity": "0",
            "opacity": "0.3",
            "opacity": "0.6",
            "opacity": "1",
        }, 200)
        setTimeout(function() {
            $("#" + clickedId).css("background", "#06d6a0")
        }, 200)
        console.log("not inside", appParameters.cartCheckoutData.productKeys)
    } else {
        delete appParameters.cartCheckoutData.productKeys[cartProductId]
        $("#" + clickedId).css("background", "#ffffff")
        console.log("inside", appParameters.cartCheckoutData.productKeys)
            //appParameters.cartCheckoutData.productKeys

    }
    //console.log(appParameters.cartCheckoutData.productKeys, "", Object.keys(appParameters.cartCheckoutData.products))


}
let awaitAddProductToCheckout = async(clickedId, targetElement) => {
    $("#" + clickedId).click(function() {
        // :::get product id, quantity, cart product id
        addCartProductToCheckout(clickedId, targetElement)


    })
}
let increaseCartProduct = async() => {
    //$("#" + appParameters.cartTotalMainId).html(Number($("#" + appParameters.cartTotalMainId).html()) + 1);
    $({ countNum: $("#" + appParameters.cartTotalMainId).html() }).animate({ countNum: Number($("#" + appParameters.cartTotalMainId).html()) + 1 }, {
        duration: 300,
        easing: 'linear',
        step: function() {
            $("#" + appParameters.cartTotalMainId).html(Math.floor(this.countNum));
        },
        complete: function() {
            $("#" + appParameters.cartTotalMainId).html(this.countNum);
            //alert('finished');
        }
    });
    getFromCart("gfc", "requestType", {}, "files")
        //console.log($("#" + appParameters.cartTotalMainId.innerHTML), "::", $("#" + appParameters.cartTotalMainId).innerHTML)
}
let canIncreaseCartProduct = () => {
    // :::::::
    return true
}
let awaitIncreaseCartProductQuantity = (clickedId, targetElement) => {
    $("#" + clickedId).click(function() {
        if (buyerCartParameters.productQuantity < buyerCartParameters.productStockLeft && canIncreaseCartProduct() == true) {
            buyerCartParameters.productQuantity = buyerCartParameters.productQuantity + 1
            console.log(buyerCartParameters.productQuantityId)
            $("#" + buyerCartParameters.productQuantityId).val(buyerCartParameters.productQuantity)

        }

    })
}
let awaitDecreaseCartProductQuantity = (clickedId, targetElement) => {
    $("#" + clickedId).click(function() {
        if (buyerCartParameters.productQuantity > 1) {
            buyerCartParameters.productQuantity = buyerCartParameters.productQuantity - 1
            console.log(buyerCartParameters.productQuantityId)
            $("#" + buyerCartParameters.productQuantityId).val(buyerCartParameters.productQuantity)
        }
    })
}

let buildCartItems = async(targetElement, data, param3) => {
    $("#" + appParameters.cartTotalMainId).html(data.length)
    $("#" + appParameters.cartTotalId).html(data.length)
    $("#" + targetElement).empty()
    for (let itemI = 0; itemI < data.length; itemI++) {
        let stockLeft = 10
        let cartItem = {
            id: data[itemI].ID,
            avatar: data[itemI].MEDIA_SOURCE,
            title: data[itemI].TITLE,
            description: data[itemI].DESCRIPTION,
            category: data[itemI].PRODUCT_CATEGORY,
            price: data[itemI].PRICE,
            stockLeft: stockLeft,
            originalStock: data[itemI].STOCK_CAPACITY,
            brand: data[itemI].BRAND,
            shopTitle: data[itemI].SHOP_TITLE,
            productAvatar: data[itemI].PRODUCT_AVATAR,
            quantity: data[itemI].QUANTITY,
            variations: data[itemI].SELECTED_VARIATIONS,
        }
        buildProductCartItem(targetElement, 1, cartItem, "list-view")
    }


}
let getFromCart = async(action, requestType, payload, files) => {
        console.log(payload)
        let tempPayload = payload
        payload = JSON.stringify(payload)
        let promise = new Promise((resolve, reject) => {
            let __ip;
            var targetUrl = "/shorpi/buyer/controllers/cartController.php";
            let formData = new FormData()
            formData.append('action', action)
            formData.append('auth_crd', JSON.parse(getCookie("siteAccessT")).token)
            formData.append('payload', payload)
            formData.append('requestType', requestType)
            $.ajax({
                url: targetUrl,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(data) {
                    console.log(data)
                    let result = JSON.parse(data)
                    console.log(result)
                    if (result.resultCode == 1) {
                        buildCartItems("cart-product-list-items", result.resultContent, "param3")
                            // :::::: show success
                    }

                }
            });
            setTimeout(() => resolve(), 1000)
        });
        await promise;
        return 0

    }
    // :::: get from cart
    //getFromCart("gfc", "requestType", "payload", "files")

setTimeout(function() {
    //getFromCart("gfc", "requestType", {}, "files")

}, 1400)

let addToCart = async(action, requestType, payload, files) => {
    console.log(payload)
    let tempPayload = payload
    payload = JSON.stringify(payload)
        //console.log(JSON.parse(localStorage.getItem("siteAccessT")).token)
    let promise = new Promise((resolve, reject) => {
        let __ip;
        var targetUrl = "/shorpi/buyer/controllers/cartController.php";
        let formData = new FormData()
        formData.append('action', action)
        formData.append('auth_crd', JSON.parse(getCookie("siteAccessT")).token)
        formData.append('payload', payload)
        formData.append('requestType', requestType)
            //console.log(formData)
        $.ajax({
            url: targetUrl,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                console.log(data)
                increaseCartProduct()
                    /*
                    let result = JSON.parse(data)
                    console.log(result)
                    if (result.resultCode == 1) {
                        // :::::: show success
                        // productCreatedSuccessfully()
                        buyerPreviewProduct("product-preview-main-container", result.resultContent)
                        $("#search-results-container").hide()
                    }
                    */
            }
        });
        setTimeout(() => resolve(), 1000)
    });
    await promise;
    return 0
}
let awaitAddToCartClick = (clickedId, targetElement) => {
    // :::::::::::::: get all cart data
    $("#" + clickedId).click(function() {
        //alert(JSON.stringify(buyerCartParameters))
        let mediaSource = ""
        let foundSource = 0;
        try {
            for (let i = 0; i < Object.keys(buyerCartParameters.productVariationsData).length && foundSource == 0; i++) {
                if ('mediaSource' in buyerCartParameters.productVariationsData[i]) {
                    if (typeof(buyerCartParameters.productVariationsData[i]['mediaSource']) !== 'undefined' && buyerCartParameters.productVariationsData[i]['mediaSource'] != '') {
                        mediaSource = buyerCartParameters.productVariationsData[i]['mediaSource']
                        foundSource = 1
                        console.log("mds")
                    }
                }
            }
        } catch (e) {
            console.log(e)
        }

        let payload = {
            productId: buyerCartParameters.productId,
            price: buyerCartParameters.productPrice,
            quantity: buyerCartParameters.productQuantity,
            selectedVariations: JSON.stringify(buyerCartParameters.productVariationsData),
            mediaSource: mediaSource,
        }
        console.log("payload::", payload)
        addToCart("atc", "requestType", payload, "files")

    })
}

let awaitVariationSelectionListener = (clickedId, targetElement) => {
    $("#" + clickedId).click(function() {
        let data_ = document.getElementById(clickedId)
        let variationId = data_.dataset.variation_id
        $("#" + buyerCartParameters.productVariationUiControl[variationId]["elementId"]).css("box-shadow", "0px 0px 0px 1px #f1f1f1")
        $("#" + buyerCartParameters.productVariationUiControl[variationId]["elementId"]).css("border-radius", "2px")
        buyerCartParameters.productVariationUiControl[variationId]["elementId"] = clickedId
        let cartInfo__id = data_.dataset.variation_id
        let cartInfo__title = data_.dataset.cartinfo__title
        let cartInfo__mediaSource = data_.dataset.cartinfo__mediasource
        let cartInfo__masterId = data_.dataset.cartinfo__masterid
        buyerCartParameters.productVariationsData[variationId] = {
            id: cartInfo__id,
            title: cartInfo__title,
            mediaSource: cartInfo__mediaSource,
            masterId: cartInfo__masterId,
        }
        $("#" + clickedId).css("box-shadow", "0px 0px 0px 3px #000000")
            //$("#" + clickedId).css("border-radius", "6px")
        $("#" + clickedId).animate({
                "border-radius": "6px"
            }, 300)
            /*
            $("#search-results-container").show()
            $("#search-results-container").animate({
                opacity: 1
            }, 300)
            */
        console.log(buyerCartParameters)
    })

}
let awaitCloseProductPreviewListener = function(clickedId, targetElement) {
    $("#" + clickedId).click(function() {
        //$("#product-preview").css("display", "block")
        //$("#product-preview").show()
        //product-preview-main-container

        //buyerCartParameters.productVariationUiControl[i]

        $("#" + targetElement).empty()
        $("#" + targetElement).hide()
        $("#search-results-container").css("opacity", "0")
        $("#search-results-container").show()
        $("#search-results-container").animate({
            opacity: 1
        }, 300)
    })
}

let buyerPreviewProduct = async(targetElement, renderData) => {
    $("title").html(renderData.productAttributes.TITLE)
    buyerCartParameters = {
        productId: 0,
        productQuantity: 0,
        productStockLeft: 10,
        productQuantityId: "",
        productOriginalPrice: 0,
        productPrice: 0,
        productPriceLabelId: "",
        productVariationsId: [],
        productVariationsData: {

        },
        productVariationUiControl: {

        },
    }
    buyerCartParameters.productOriginalPrice = renderData.productAttributes.PRICE
    buyerCartParameters.productPrice = renderData.productAttributes.PRICE
    buyerCartParameters.productId = renderData.productAttributes.ID
    buyerCartParameters.productQuantity = 1

    let uniqueId = getUniqueId()
    targetElement = document.getElementById(targetElement)
    let productPreviewContainer = elementFunction.divFunction("", "", null)
    console.log(targetElement)
    productPreviewContainer.setAttribute("align", "center")
    productPreviewContainer.setAttribute("style", " width:720px; height:auto; background:#fcfcfc; position:relative; overflow:hidden;   ")
    targetElement.appendChild(productPreviewContainer)
        // z-index:11111;
    let productGlobalInformation = elementFunction.divFunction("", "", null)
    let productPreviewActionsContainer = elementFunction.divFunction("", "", null)
    productGlobalInformation.setAttribute("style", "width:720px; height:40px; position:relative; box-shadow:0px 0px 0px 1px #f1f1f1;  ")
    productPreviewActionsContainer.setAttribute("style", "width:720px; height:40px; background:#f1faee; margin-top:4px; position:relative;  ")

    let closeProductPreview = elementFunction.divFunction("", "", null)
    closeProductPreview.setAttribute("style", " width:40px; height:40px; position:relative;  box-shadow:0px 0px 0px 1px #f1f1f1; margin-right:10px; float:left; cursor:pointer;")
    let closePreviewImage = elementFunction.imgFunction("close-product-detail-preview" + uniqueId, "close-product-detail-preview", "/shorpi/assets/icons/cancel-icon-button.png")
    closePreviewImage.setAttribute("style", "width:24px; height:24px; position:relative; top:8px; ")
    closeProductPreview.appendChild(closePreviewImage)
    productGlobalInformation.appendChild(closeProductPreview)


    let visitShopPreview = elementFunction.divFunction("", "", null)
    visitShopPreview.setAttribute("style", " width:40px; height:40px; position:relative;   margin-right:0px; float:left; cursor:pointer;")
    let visitShopImage = elementFunction.imgFunction("close-product-detail-preview" + uniqueId, "close-product-detail-preview", "/shorpi/assets/icons/shop-icon.png")
    visitShopImage.setAttribute("style", "width:24px; height:24px; position:relative; top:8px; ")
    visitShopPreview.appendChild(visitShopImage)
    productGlobalInformation.appendChild(visitShopPreview)

    let rightButtonsContainer = elementFunction.divFunction("", "", null)
    rightButtonsContainer.setAttribute("style", " width:340px; height:40px; position:relative;  margin-right:10px; float:right; cursor:pointer;")
        //productGlobalInformation.appendChild(rightButtonsContainer)


    //productPreviewActionsContainer.appendChild(visitShopPreview)
    productPreviewActionsContainer.appendChild(rightButtonsContainer)

    // :::::::::: share button
    let shareButtonContainer = elementFunction.divFunction("", "", null)
    shareButtonContainer.setAttribute("style", " width:40px; height:40px; position:relative;   margin-right:10px; float:right; cursor:pointer;")
    let shareButtonImage = elementFunction.imgFunction("close-product-detail-preview" + uniqueId, "close-product-detail-preview", "/shorpi/assets/icons/icons8-share.png")
    shareButtonImage.setAttribute("style", "width:20px; height:20px; position:relative; top:10px; ")
    shareButtonContainer.appendChild(shareButtonImage)
        // ::::::::: message buttons
    let messageButtonContainer = elementFunction.divFunction("", "", null)
    messageButtonContainer.setAttribute("style", " width:40px; height:40px; position:relative; margin-left:4px; margin-right:4px; float:right; cursor:pointer;")
    let messageButtonImage = elementFunction.imgFunction("close-product-detail-preview" + uniqueId, "close-product-detail-preview", "/shorpi/assets/icons/icons8-speech_bubble.png")
    messageButtonImage.setAttribute("style", "width:20px; height:20px; position:relative; top:10px; ")
    messageButtonContainer.appendChild(messageButtonImage)
        // ::::::::: qr code
    let qrcodeButtonContainer = elementFunction.divFunction("", "", null)
    qrcodeButtonContainer.setAttribute("style", " width:40px; height:40px; position:relative;  margin-right:4px; float:right; cursor:pointer;")
    let qrcodeTarget = elementFunction.divFunction("close-product-detail-preview" + uniqueId, "close-product-detail-preview", null)
    qrcodeTarget.setAttribute("style", "width:36px; height:30px; position:relative; border-radius:8px; top:5px; box-shadow:0px 0px 0px 1px #ffd6a5; ")
    qrcodeButtonContainer.appendChild(qrcodeTarget)
    rightButtonsContainer.appendChild(shareButtonContainer)
    rightButtonsContainer.appendChild(messageButtonContainer)
        //rightButtonsContainer.appendChild(qrcodeButtonContainer)
    productPreviewContainer.appendChild(productGlobalInformation)
        //productPreviewActionsContainer.appendChild(productGlobalInformation)

    // ::-----------
    //productPreviewContainer.appendChild(productPreviewActionsContainer)



    let shopTitleContainer = elementFunction.divFunction("cart-shop-title-container" + mainId, "cart-shop-title-container", null)
    shopTitleContainer.setAttribute("style", "width:auto; height:40px; float:left;   ")
    let shopTitle = elementFunction.divFunction("cart-shop-title-container" + mainId, "cart-shop-title-container", "Elene Ikrostics")
    shopTitle.setAttribute("style", "width:auto; height:30px; float:left; text-align:left; line-height:30px; font-family:Montserrat-SemiBold; cursor:pointer; font-size:12px;  color:#606060; position:relative; top:5px; left:10px;  ")
    shopTitleContainer.appendChild(shopTitle);
    productGlobalInformation.appendChild(shopTitleContainer)



    //
    let previewProductDetailsContainer = elementFunction.divFunction("", "", null)
    previewProductDetailsContainer.setAttribute("style", "width:720px; height:auto;  padding-bottom:200px; overflow-x:hidden; overflow-y:scroll;")
    productPreviewContainer.appendChild(previewProductDetailsContainer)
        //
    let avatarsTargetContainer = elementFunction.divFunction("", "", null)
    avatarsTargetContainer.setAttribute("style", "width:100%; height:280px;  ")
    previewProductDetailsContainer.appendChild(avatarsTargetContainer)


    let navigationTargetContainer = elementFunction.divFunction("", "", null)
    navigationTargetContainer.setAttribute("style", "width:100%; height:70px;  ")
    previewProductDetailsContainer.appendChild(navigationTargetContainer)


    previewProductDetailsContainer.appendChild(productPreviewActionsContainer)
    let previewProductSplide = elementFunction.divFunction("preview-product-splide", "splide", null)
    previewProductSplide.setAttribute("align", "center")
    previewProductSplide.setAttribute("style", "width:720px; height:280px;  ")
    avatarsTargetContainer.appendChild(previewProductSplide)

    let splideTrack = elementFunction.divFunction("", "splide__track", null)
    previewProductSplide.appendChild(splideTrack)
    let splideList = elementFunction.divFunction("", "splide__list", null)
    splideTrack.appendChild(splideList)
        // ":::" images list is
    for (let i = 0; i < renderData.productMedia.length; i++) {
        let avatarContainer = elementFunction.divFunction("", "splide__slide", null)
        avatarContainer.setAttribute("align", "center ")
        previewProductSplide.setAttribute("style", "position:relative; left:200px; right:200px;  ")
        let avatar = elementFunction.imgFunction("", "product-preview-image-data", renderData.productMedia[i].MEDIA_SOURCE)
        avatarContainer.appendChild(avatar)
        splideList.appendChild(avatarContainer)
    }
    // ::::::image steps indicator image
    let previewProductSplide2 = elementFunction.divFunction("preview-product-splide2", "splide", null)
    previewProductSplide2.setAttribute("align", "left")
    previewProductSplide2.setAttribute("style", "width:720px; height:70px;  ")
    navigationTargetContainer.appendChild(previewProductSplide2)
    let splideTrack2 = elementFunction.divFunction("", "splide__track", null)
    previewProductSplide2.appendChild(splideTrack2)
    let splideList2 = elementFunction.divFunction("", "splide__list", null)
    splideTrack2.appendChild(splideList2)
    for (let i = 0; i < renderData.productMedia.length; i++) {
        let avatarContainer = elementFunction.divFunction("", "splide__slide  splide_radius", null)
        let avatar = elementFunction.imgFunction("", "product-preview-image-data", renderData.productMedia[i].MEDIA_SOURCE)
        avatar.setAttribute("style", " cursor:pointer; ")
        avatarContainer.appendChild(avatar)
        splideList2.appendChild(avatarContainer)
    }


    // :::::: product title
    let productTitleContainer = elementFunction.divFunction("", "", null)
    productTitleContainer.setAttribute("align", "left")
    productTitleContainer.setAttribute("style", "width:100%; height:auto; margin-top:20px; float:left;  ")
    let productTitle = elementFunction.divFunction("", "", renderData.productAttributes.TITLE)
    productTitle.setAttribute("align", "left")
    productTitle.setAttribute("style", "width:90%; max-height:300px; position:relative; font-size:13px; font-family:Montserrat-Medium; color:#000000; left:10px;")
    productTitleContainer.appendChild(productTitle)
    previewProductDetailsContainer.appendChild(productTitleContainer)
        // :::::: product description
    let productDescriptionContainer = elementFunction.divFunction("", "", null)
    productDescriptionContainer.setAttribute("align", "left")
    productDescriptionContainer.setAttribute("style", "width:100%; height:auto; margin-top:20px; float:left;  ")
    let productDescription = elementFunction.divFunction("", "", renderData.productAttributes.DESCRIPTION)
    productDescription.setAttribute("align", "left")
    productDescription.setAttribute("style", "width:90%; max-height:300px; position:relative; font-size:11px; font-family:Montserrat-Regular; color:#404040; left:10px;")
    productDescriptionContainer.appendChild(productDescription)
    previewProductDetailsContainer.appendChild(productDescriptionContainer)
        // :::::: product price
    let productPriceContainer = elementFunction.divFunction("", "", null)
        //background-color: #00DBDE;  background:#f1faee;
        // background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
    productPriceContainer.setAttribute("style", "width:100%; height:40px; margin-top:10px; background:#f1faee; line-height:40px; float:left;  ")
    previewProductDetailsContainer.appendChild(productPriceContainer)
    let productPrice = elementFunction.divFunction("", "", null)
    productPrice.setAttribute("align", "left")
    productPrice.setAttribute("style", "height:24px; width:140px; float:left; border-radius:10px; font-size:14px; position:relative; left:10px; margin-top:2px; color:#000000; line-height:40px; font-family:Montserrat-Bold; font-size:18px; ")
    productPriceContainer.appendChild(productPrice)
    let productCurrency = elementFunction.spanFunction("", "", "$")
    productCurrency.setAttribute("style", "font-size:12px; font-family:Montserrat-SemiBold; margin-right:2px;")
    productPrice.appendChild(productCurrency)
    $(productPrice).html($(productPrice).html() + addCommas(renderData.productAttributes.PRICE))
        // :::::: product variations
    let productVariationContainer = elementFunction.divFunction("", "", null)
    productVariationContainer.setAttribute("style", "width:100%; max-height:auto; margin-top:20px; float:left; ")
    previewProductDetailsContainer.appendChild(productVariationContainer)
    for (let i = 0; i < renderData.productVariations.length; i++) {
        let productVariationTitleContainer = elementFunction.divFunction("", "", null)
        productVariationTitleContainer.setAttribute("align", "left")
        productVariationTitleContainer.setAttribute("style", "width:100%; height:30px; margin-top:20px; float:left; ")
        let productVariationTitle = elementFunction.divFunction("", "", renderData.productVariations[i].TITLE)
        productVariationTitle.setAttribute("align", "left")
        productVariationTitle.setAttribute("style", "width:90%; max-height:300px; position:relative; font-size:14px; font-family:Montserrat-Bold; color:#000000; left:2%;")
        productVariationTitleContainer.appendChild(productVariationTitle)
        productVariationContainer.appendChild(productVariationTitleContainer)
        let productVariationOptionsContainer = elementFunction.divFunction("", "", null)
        productVariationOptionsContainer.setAttribute("style", "width:80%; max-height:auto; margin-top:4px; float:left; padding-bottom:10px; color:#404040; ")
        productVariationContainer.appendChild(productVariationOptionsContainer)
            // :::::::::::::::: variation type checks
        if (renderData.productVariations[i].IS_PRICE_VARIATION == 0) {
            // ::::::::  variation without price
            if (renderData.productVariations[i].VARIATION_TYPE == "text") {
                // ::::::: only text variation
                for (let j = 0; j < renderData.productVariations[i]['options'].length; j++) {
                    // :::::::::: variation options
                    if (j == 0) {
                        let cartInfo__id = renderData.productVariations[i]['options'][j].ID
                        let cartInfo__title = renderData.productVariations[i]['options'][j].TITLE
                        let cartInfo__mediaSource = ""
                        cartInfo__mediaSource = renderData.productVariations[i]['options'][j].MEDIA_SOURCE != undefined && renderData.productVariations[i]['options'][j].MEDIA_SOURCE != null ? cartInfo__mediaSource = renderData.productVariations[i]['options'][j].MEDIA_SOURCE : cartInfo__mediaSource = ""
                        let cartInfo__masterId = renderData.productVariations[i]['options'][j].VARIATION_MASTER_ID

                        let productVariationOptionContainer = elementFunction.divFunction("variation-option-container" + uniqueId + i + j, "", null)
                        productVariationOptionContainer.setAttribute("style", " min-width:20px; max-width:300px; height:auto; float:left; position:relative; margin:4px; margin-left:10px; border-radius:6px; padding-top:8px; padding-bottom:8px; padding-left:14px; padding-right:14px; cursor:pointer; background:#fcfcfc; box-shadow: 0px 0px 0px 3px #000000;  line-height:30px; font-size:12px;  color:#000000;  ")
                        productVariationOptionContainer.setAttribute("align", "left")

                        productVariationOptionContainer.setAttribute("data-variation_id", i)
                        productVariationOptionContainer.setAttribute("data-cartInfo__id", cartInfo__id)
                        productVariationOptionContainer.setAttribute("data-cartInfo__title", cartInfo__title)
                        productVariationOptionContainer.setAttribute("data-cartInfo__mediaSource", cartInfo__mediaSource)
                        productVariationOptionContainer.setAttribute("data-cartInfo__masterId", cartInfo__masterId)

                        //variation_id
                        let variationOptionTitle = elementFunction.divFunction("variation-option" + uniqueId + i + j, "", renderData.productVariations[i]['options'][j].TITLE)
                        variationOptionTitle.setAttribute("style", "width:auto; height:auto; font-family:Montserrat-Medium; color:#404040; position:relative; font-size:12px; line-height:14px; text-align:left; left:0px; ")
                        productVariationOptionContainer.appendChild(variationOptionTitle)
                        productVariationOptionsContainer.appendChild(productVariationOptionContainer)
                        buyerCartParameters.productVariationUiControl[i] = {
                            "elementId": "variation-option-container" + uniqueId + i + j,
                        }
                        buyerCartParameters.productVariationsData[i] = {
                            id: cartInfo__id,
                            title: cartInfo__title,
                            mediaSource: cartInfo__mediaSource,
                            masterId: cartInfo__masterId,
                        }
                        awaitVariationSelectionListener("variation-option-container" + uniqueId + i + j, "")
                    } else if (j > 0) {
                        let cartInfo__id = renderData.productVariations[i]['options'][j].ID
                        let cartInfo__title = renderData.productVariations[i]['options'][j].TITLE
                        let cartInfo__mediaSource = ""
                        cartInfo__mediaSource = renderData.productVariations[i]['options'][j].MEDIA_SOURCE != undefined && renderData.productVariations[i]['options'][j].MEDIA_SOURCE != null ? cartInfo__mediaSource = renderData.productVariations[i]['options'][j].MEDIA_SOURCE : cartInfo__mediaSource = ""
                        let cartInfo__masterId = renderData.productVariations[i]['options'][j].VARIATION_MASTER_ID
                        let productVariationOptionContainer = elementFunction.divFunction("variation-option-container" + uniqueId + i + j, "", null)
                        productVariationOptionContainer.setAttribute("style", " min-width:20px; max-width:300px; height:auto; float:left; position:relative; margin:4px; margin-left:10px; border-radius:2px; padding-top:8px; padding-bottom:8px; padding-left:14px; padding-right:14px; cursor:pointer; background:#fcfcfc; box-shadow:0px 0px 0px 1px #f1f1f1;  line-height:30px; font-size:12px;  color:#000000;  ")
                        productVariationOptionContainer.setAttribute("align", "left")
                        productVariationOptionContainer.setAttribute("data-variation_id", i)

                        productVariationOptionContainer.setAttribute("data-cartInfo__id", cartInfo__id)
                        productVariationOptionContainer.setAttribute("data-cartInfo__title", cartInfo__title)
                        productVariationOptionContainer.setAttribute("data-cartInfo__mediaSource", cartInfo__mediaSource)
                        productVariationOptionContainer.setAttribute("data-cartInfo__masterId", cartInfo__masterId)

                        let variationOptionTitle = elementFunction.divFunction("variation-option" + uniqueId + i + j, "", renderData.productVariations[i]['options'][j].TITLE)
                        variationOptionTitle.setAttribute("style", "width:auto; height:auto; font-family:Montserrat-Medium; color:#404040; position:relative; font-size:12px; line-height:14px; text-align:left; left:0px; ")
                        productVariationOptionContainer.appendChild(variationOptionTitle)
                        productVariationOptionsContainer.appendChild(productVariationOptionContainer)

                        awaitVariationSelectionListener("variation-option-container" + uniqueId + i + j, "")
                    }
                }
            } else if (renderData.productVariations[i].VARIATION_TYPE == "image-text") {
                // ::::::: image and text variation
                if (renderData.productVariations[i]['options'] != undefined) {
                    for (let j = 0; j < renderData.productVariations[i]['options'].length; j++) {
                        // :::::::::: variation options
                        if (j == 0) {
                            let cartInfo__id = renderData.productVariations[i]['options'][j].ID
                            let cartInfo__title = renderData.productVariations[i]['options'][j].TITLE
                            let cartInfo__mediaSource = ""
                            cartInfo__mediaSource = renderData.productVariations[i]['options'][j].MEDIA_SOURCE != undefined && renderData.productVariations[i]['options'][j].MEDIA_SOURCE != null ? cartInfo__mediaSource = renderData.productVariations[i]['options'][j].MEDIA_SOURCE : cartInfo__mediaSource = ""
                            let cartInfo__masterId = renderData.productVariations[i]['options'][j].VARIATION_MASTER_ID
                            let productVariationOptionContainer = elementFunction.divFunction("variation-option-container" + uniqueId + i + j, "", null)
                            productVariationOptionContainer.setAttribute("style", "width:160px; min-height:200px; cursor:pointer; border-radius:6px; box-shadow:0px 0px 0px 3px #000000;   margin-top:10px; margin-left:8px;  margin-right:4px; float:left; ")
                            productVariationOptionContainer.setAttribute("align", "left")
                            productVariationOptionContainer.setAttribute("data-variation_id", i)

                            productVariationOptionContainer.setAttribute("data-cartInfo__id", cartInfo__id)
                            productVariationOptionContainer.setAttribute("data-cartInfo__title", cartInfo__title)
                            productVariationOptionContainer.setAttribute("data-cartInfo__mediaSource", cartInfo__mediaSource)
                            productVariationOptionContainer.setAttribute("data-cartInfo__masterId", cartInfo__masterId)

                            productVariationOptionsContainer.appendChild(productVariationOptionContainer)
                            let variationAvatarContainer = elementFunction.divFunction("", "", null)
                            variationAvatarContainer.setAttribute("style", "width:160px; height:140px; float:left; ")
                            productVariationOptionContainer.appendChild(variationAvatarContainer)
                                //
                            let variationAvatar = elementFunction.imgFunction("", "", renderData.productVariations[i]['options'][j].MEDIA_SOURCE)
                            variationAvatar.setAttribute("style", "width:100%; height:140px; float:left;  border-radius:6px; ")
                            variationAvatarContainer.appendChild(variationAvatar)
                            let variationOptionTitleContainer = elementFunction.divFunction("", "", null)
                            variationOptionTitleContainer.setAttribute("style", " width:176px; min-height:40px; max-height:auto; float:left; position:absolute;")
                            let variationOptionTitle = elementFunction.divFunction("", "", renderData.productVariations[i]['options'][j].TITLE)
                            variationOptionTitle.setAttribute("style", "min-height:40px; max-height:80px; overflow:hidden; width:156px; float:left; border-radius:10px; padding:3px; margin-top:160px; color:#404040; font-family:Montserrat-Regular; font-size:11px; ")
                            variationOptionTitleContainer.appendChild(variationOptionTitle)
                            productVariationOptionContainer.appendChild(variationOptionTitleContainer)
                            buyerCartParameters.productVariationUiControl[i] = {
                                "elementId": "variation-option-container" + uniqueId + i + j,
                            }
                            buyerCartParameters.productVariationsData[i] = {
                                id: cartInfo__id,
                                title: cartInfo__title,
                                mediaSource: cartInfo__mediaSource,
                                masterId: cartInfo__masterId,
                            }
                            awaitVariationSelectionListener("variation-option-container" + uniqueId + i + j, "")
                        } else if (j > 0) {
                            let cartInfo__id = renderData.productVariations[i]['options'][j].ID
                            let cartInfo__title = renderData.productVariations[i]['options'][j].TITLE
                            let cartInfo__mediaSource = ""
                            cartInfo__mediaSource = renderData.productVariations[i]['options'][j].MEDIA_SOURCE != undefined && renderData.productVariations[i]['options'][j].MEDIA_SOURCE != null ? cartInfo__mediaSource = renderData.productVariations[i]['options'][j].MEDIA_SOURCE : cartInfo__mediaSource = ""
                            let cartInfo__masterId = renderData.productVariations[i]['options'][j].VARIATION_MASTER_ID

                            let productVariationOptionContainer = elementFunction.divFunction("variation-option-container" + uniqueId + i + j, "", null)
                            productVariationOptionContainer.setAttribute("style", "width:160px; min-height:200px; cursor:pointer; border-radius:2px; box-shadow:0px 0px 0px 1px #f1f1f1;   margin-top:10px; margin-left:8px;  margin-right:4px; float:left; ")
                            productVariationOptionContainer.setAttribute("align", "left")
                            productVariationOptionContainer.setAttribute("data-variation_id", i)

                            productVariationOptionContainer.setAttribute("data-cartInfo__id", cartInfo__id)
                            productVariationOptionContainer.setAttribute("data-cartInfo__title", cartInfo__title)
                            productVariationOptionContainer.setAttribute("data-cartInfo__mediaSource", cartInfo__mediaSource)
                            productVariationOptionContainer.setAttribute("data-cartInfo__masterId", cartInfo__masterId)

                            productVariationOptionsContainer.appendChild(productVariationOptionContainer)
                            let variationAvatarContainer = elementFunction.divFunction("", "", null)
                            variationAvatarContainer.setAttribute("style", "width:160px; height:140px; float:left;  border-radius:6px; ")
                            productVariationOptionContainer.appendChild(variationAvatarContainer)
                                //
                            let variationAvatar = elementFunction.imgFunction("", "", renderData.productVariations[i]['options'][j].MEDIA_SOURCE)
                            variationAvatar.setAttribute("style", "width:100%; height:140px; float:left; border-radius:6px; ")
                            variationAvatarContainer.appendChild(variationAvatar)
                            let variationOptionTitleContainer = elementFunction.divFunction("", "", null)
                            variationOptionTitleContainer.setAttribute("style", " width:176px; min-height:40px; max-height:auto; float:left; position:absolute;")
                            let variationOptionTitle = elementFunction.divFunction("", "", renderData.productVariations[i]['options'][j].TITLE)
                            variationOptionTitle.setAttribute("style", "min-height:40px; max-height:80px; overflow:hidden; width:156px; float:left; border-radius:10px; padding:3px; margin-top:160px; color:#404040; font-family:Montserrat-Regular; font-size:11px; ")
                            variationOptionTitleContainer.appendChild(variationOptionTitle)
                            productVariationOptionContainer.appendChild(variationOptionTitleContainer)

                            awaitVariationSelectionListener("variation-option-container" + uniqueId + i + j, "")
                        }
                        //productVariationOptionsContainer.appendChild(productVariationOptionContainer)
                    }
                }
            }
        } else if (renderData.productVariations[i].IS_PRICE_VARIATION == 1) {
            // ::::::::  variation with price
            if (renderData.productVariations[i].VARIATION_TYPE == "text") {

            } else if (renderData.productVariations[i].VARIATION_TYPE == "image-text") {

            }
        }
    }
    // ::::::::::::::::
    let productQuantityLabelContainer = elementFunction.divFunction("", "", null)
    productQuantityLabelContainer.setAttribute("align", "left")
    productQuantityLabelContainer.setAttribute("style", "width:100%; height:auto; margin-top:20px; float:left;  ")
    let productQuantityLabel = elementFunction.divFunction("product-quantity-label" + uniqueId, "", "Quantity")
    productQuantityLabel.setAttribute("align", "left")
    productQuantityLabel.setAttribute("style", "width:90%; max-height:300px; position:relative; font-size:13px; font-family:Montserrat-Medium; color:#000000; left:10px;")
    productQuantityLabelContainer.appendChild(productQuantityLabel)
    previewProductDetailsContainer.appendChild(productQuantityLabelContainer)

    // ::::::::::::::::::::::: product quantity control,
    let productQuantityContainer = elementFunction.divFunction("product-preview-quantity-container" + mainId, "product-preview-quantity-container", null)
    previewProductDetailsContainer.appendChild(productQuantityContainer)
    let controlQuantityButtonHolder = elementFunction.divFunction("", "", null)
    controlQuantityButtonHolder.setAttribute("style", "width:150px; height:30px; float:left; box-shadow:0px 0px 0px 1px #f1f1f1; position:relative; padding-left:4px; margin-top:18px;  ")
    productQuantityContainer.appendChild(controlQuantityButtonHolder)
    let increaseButtonHolder = elementFunction.divFunction("increase-button-holder-" + uniqueId, "", null)
    increaseButtonHolder.setAttribute("style", "width:20px; height:30px; float:left; position:relative; cursor:pointer; margin-left:8px;")
    let decreaseButtonHolder = elementFunction.divFunction("decrease-button-holder-" + uniqueId, "", null)
    decreaseButtonHolder.setAttribute("style", "width:20px; height:30px; float:left;  position:relative; cursor:pointer; margin-right:8px;")
    let productCartItemQuantity = elementFunction.numberInputFunction("product-cart-item-quantity" + uniqueId, "", 1, 1)
    productCartItemQuantity.setAttribute("style", "width:50px; height:30px; float:right; position:relative; background:#ffffff; outline:none; font-family:Montserrat-SemiBold; font-size:13px; text-align:left; padding-left:6px; border:none;   ")
    buyerCartParameters.productQuantityId = "product-cart-item-quantity" + uniqueId
        // ::::::::
    let productCartItemPrefix = elementFunction.divFunction("", "", "X")
    productCartItemPrefix.setAttribute("style", "width:24px; height:30px; float:left; position:relative; background:#f1f1f1; color:#707070; font-family:Montserrat-SemiBold; line-height:30px; font-size:13px; text-align:center; border:none;   ")
    let productCartItemPrefixAndQuantityHolder = elementFunction.divFunction("", "", null)
    productCartItemPrefixAndQuantityHolder.setAttribute("style", "width:84px; height:30px; float:left; position:relative; overflow:hidden; background:#f1f1f1; font-family:Montserrat-SemiBold; line-height:30px; font-size:13px; text-align:center; border:none;   ")
    productCartItemPrefixAndQuantityHolder.appendChild(productCartItemPrefix)
    productCartItemPrefixAndQuantityHolder.appendChild(productCartItemQuantity)
    let increaseButtonImage = elementFunction.imgFunction("", "", "/shorpi/assets/icons/increase-product-icon.png")
    increaseButtonImage.setAttribute("style", "width:16px; height:16px; float:left; top:7px; position:relative; cursor:pointer;  ")
    let decreaseButtonImage = elementFunction.imgFunction("", "", "/shorpi/assets/icons/decrease-product-icon.png")
    decreaseButtonImage.setAttribute("style", "width:16px; height:16px; float:left; top:7px;  position:relative; cursor:pointer; ")
    increaseButtonHolder.appendChild(increaseButtonImage)
    decreaseButtonHolder.appendChild(decreaseButtonImage)
    controlQuantityButtonHolder.appendChild(decreaseButtonHolder)
    controlQuantityButtonHolder.appendChild(productCartItemPrefixAndQuantityHolder)
    controlQuantityButtonHolder.appendChild(increaseButtonHolder)

    // ::::::::::::::::::::::::::::: action buttons for
    let productActionContainer = elementFunction.divFunction("", "", null)
    productActionContainer.setAttribute("style", "width:100%; height:54px; margin-top:20px; float:left;  ")
    previewProductDetailsContainer.appendChild(productActionContainer)
    let productActionButtonContainer = elementFunction.divFunction("", "", null)
    productActionButtonContainer.setAttribute("style", "width:360px; height:50px; float:left;  ")
    productActionContainer.appendChild(productActionButtonContainer)

    let buyNowButton = elementFunction.divFunction("", "buy-now-button", "Buy Now")
    buyNowButton.setAttribute("style", "width:130px; height:34px; position:relative; text-align:center; margin-left:20px; top:10px; border-radius:2px;  font-family:Montserrat-Medium; font-size:12px;  line-height:34px; cursor:pointer; color:#06d6a0; right:10px; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; background:#fafafa; ")
    productActionButtonContainer.appendChild(buyNowButton)
    let addToCartButton = elementFunction.divFunction("add-to-cart-button", "add-to-cart-button", "Add to Cart")
    addToCartButton.setAttribute("style", "width:110px; height:34px; position:relative; text-align:center; margin-left:20px; top:10px; border-radius:2px;  font-family:Montserrat-Medium; font-size:12px;  line-height:34px; cursor:pointer; color:#ffffff; right:10px; box-shadow:0px 0px 0px 1px #f1f1f1; float:left;  background:#06d6a0;  ")
    productActionButtonContainer.appendChild(addToCartButton)

    // :::::::::::: product more media
    let productMoreMediaContainer = elementFunction.divFunction("", "", null)
    productMoreMediaContainer.setAttribute("style", "width:100%; height:auto; margin-top:20px; float:left;  ")
    previewProductDetailsContainer.appendChild(productMoreMediaContainer)
        // ::::::::::: children media
    for (let i = 0; i < renderData.productMoreMedia.length; i++) {
        let avatarContainer = elementFunction.divFunction("", "", null)
        avatarContainer.setAttribute("style", "width:720px; max-height:720px; float:left; margin-top:10px;")
        let avatar = elementFunction.imgFunction("", "", renderData.productMoreMedia[i].MEDIA_SOURCE)
        avatar.setAttribute("style", "max-width:720px; max-height:720px; float:left; margin-top:10px;")
        avatarContainer.appendChild(avatar)
        productMoreMediaContainer.appendChild(avatarContainer)
    }
    var main = new Splide('#preview-product-splide', {
        type: 'fade',
        heightRatio: 0.4,
        widthRatio: 0.4,
        focus: 'center',
        fixedHeight: 280,
        fixedWidth: 320,
        pagination: false,
        arrows: false,
        cover: true,
    });
    var thumbnails = new Splide('#preview-product-splide2', {
        rewind: true,
        fixedWidth: 90,
        fixedHeight: 70,
        isNavigation: true,
        gap: 1,
        focus: 'left',
        pagination: false,
        cover: true,
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
        breakpoints: {
            640: {
                fixedWidth: 66,
                fixedHeight: 38,
            },
        },
    }).mount();
    main.sync(thumbnails);
    main.mount();
    //thumbnails.mount();

    //main.sync(thumbnails);
    /*
    new Splide("#preview-product-splide", {
        type: "slide",
        autoplay: false,
        rewind: true,
        drag: true,
        interval: 3500,
    }).mount();
    */
    awaitIncreaseCartProductQuantity("increase-button-holder-" + uniqueId, "");
    awaitDecreaseCartProductQuantity("decrease-button-holder-" + uniqueId, "");
    awaitAddToCartClick("add-to-cart-button", "")
    awaitCloseProductPreviewListener("close-product-detail-preview" + uniqueId, "product-preview-main-container")
}

let getProductDetails = async(action, requestType, payload, files) => {
    console.log(payload)
    let tempPayload = payload
    payload = JSON.stringify(payload)
    let promise = new Promise((resolve, reject) => {
        let __ip;
        var targetUrl = "/shorpi/seller/products/controllers/productController.php";
        let formData = new FormData()
        formData.append('action', action)
        formData.append('auth_crd', JSON.parse(getCookie("siteAccessT")).token)
        formData.append('payload', payload)
        formData.append('requestType', requestType)
        console.log(formData)
        $.ajax({
            url: targetUrl,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                console.log(data)
                let result = JSON.parse(data)
                console.log(result)
                if (result.resultCode == 1) {
                    // :::::: show success
                    //productCreatedSuccessfully()
                    buyerPreviewProduct("product-preview-main-container", result.resultContent)
                    $("#search-results-container").hide()

                }
            }
        });
        setTimeout(() => resolve(), 1000)
    });
    await promise;
    return 0
}

let awaitProductClickListener = async(clickedId, targetElement) => {
    $("#" + clickedId).click(function() {
        let productId = document.getElementById(clickedId);
        productId = productId.dataset.product_id
        let payload = {
            productId: productId
        }
        //getProductDetails("gprid_byr_product", "requestType", payload, "files")
            // :::::::::::::: show product preview

        $("#product-preview-main-container").css("opacity", "0")
        $("#product-preview-main-container").show()
        $("#product-preview-main-container").animate({
                opacity: 1
            }, 500)
            // :::::::http request
    })
}
let awaitPurchaseProductClick = () => {


}

// :::::::::::::
let awaitRemoveProductItem = async(clickedId, targetElement, param1, param2, param3) => {

}
let awaitModifyProductItem = async(clickedId, targetElement, param1, param2, param3) => {

}

let productListParameters = {
    total: 0,

}

let getOffset = (el) => {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        // chrome/safari
        if ($.browser.webkit) {
            el = el.parentNode;
        } else {
            // firefox/IE
            el = el.offsetParent;
        }
    }
    return { top: _y, left: _x };
}

let mainId = 0

let buildProductListItemTemplate = async(targetElement, param1, data, param3) => {
        mainId += 10
        let mainProductListItemTarget = document.getElementById(targetElement)
        let mainProductListItemContainer = elementFunction.divFunction("main-product-list-item-container" + mainId, "main-product-list-item-container", null)
        let productSelectCheckContainer = elementFunction.divFunction("product-select-check-container" + mainId, "product-select-check-container", null)
        let productSelectCheck = elementFunction.divFunction("product-select-check" + mainId, "product-select-check", null)
        productSelectCheckContainer.appendChild(productSelectCheck)
        mainProductListItemContainer.appendChild(productSelectCheckContainer)
            // :::
        let productAvatarTitleContainer = elementFunction.divFunction("product-avatar-title-container" + mainId, "product-avatar-title-container", null)
        let productAvatarContainer = elementFunction.divFunction("product-avatar-container" + mainId, "product-avatar-container", null)
        let productAvatar = elementFunction.imgFunction("product-avatar" + mainId, "product-avatar", data['avatar'])
        productAvatarTitleContainer.appendChild(productAvatarContainer)
        productAvatarContainer.appendChild(productAvatar)
        mainProductListItemContainer.appendChild(productAvatarTitleContainer)
            // :::
        let productTitleContainer = elementFunction.divFunction("product-title-container" + mainId, "product-title-container", null)
        let productTitle = elementFunction.divFunction("product-title" + mainId, "product-title", data['title'])
        let productDescription = elementFunction.divFunction("product-description" + mainId, "product-description", data['description'])
        productTitleContainer.appendChild(productTitle)
        productTitleContainer.appendChild(productDescription)
        productAvatarTitleContainer.appendChild(productTitleContainer)
        mainProductListItemContainer.appendChild(productAvatarTitleContainer)
            // ::
        let productCategoryLabelContainer = elementFunction.divFunction("product-category-label-container" + mainId, "product-category-label-container", null)
        let productCategoryLabel = elementFunction.divFunction("product-category-label" + mainId, "product-category-label", data['category'])
        productCategoryLabelContainer.appendChild(productCategoryLabel)
        mainProductListItemContainer.appendChild(productCategoryLabelContainer)
            // ::
        let productPriceLabelContainer = elementFunction.divFunction("product-price-label-container" + mainId, "product-price-label-container", null)
        let productPriceLabel = elementFunction.divFunction("product-price-label" + mainId, "product-price-label", data['price'])
        productPriceLabelContainer.appendChild(productPriceLabel)
        mainProductListItemContainer.appendChild(productPriceLabelContainer)
            // ::
        let productStockLabelContainer = elementFunction.divFunction("product-stock-label-container" + mainId, "product-stock-label-container", null)
        let productStockLabel = elementFunction.divFunction("product-stock-label" + mainId, "product-stock-label", data['stockLeft'] + "/")
        let productStockLabelSpan = elementFunction.spanFunction("product-stock-label-span" + mainId, "product-stock-label-span", data['originalStock'])
        productStockLabelContainer.appendChild(productStockLabel)
        productStockLabel.appendChild(productStockLabelSpan)
        mainProductListItemContainer.appendChild(productStockLabelContainer)
            // ::
        let productBrandLabelContainer = elementFunction.divFunction("product-brand-label-container" + mainId, "product-brand-label-container", null)
        let productBrandLabel = elementFunction.divFunction("product-brand-label" + mainId, "product-brand-label", data['brand'])
        productBrandLabelContainer.appendChild(productBrandLabel)
        mainProductListItemContainer.appendChild(productBrandLabelContainer)
            // ::
        let productListManageButtonsContainer = elementFunction.divFunction("product-list-manage-buttons-container" + mainId, "product-list-manage-buttons-container", null)
        let productModifyButtonContainer = elementFunction.divFunction("product-modify-button-container" + mainId, "product-modify-button-container", null)
        let productModifyButtonIcon = elementFunction.imgFunction("product-modify-button-icon" + mainId, "product-modify-button-icon", "/shorpi/assets/icons/modify-product-icon.png")
        let productDeleteButtonContainer = elementFunction.divFunction("product-delete-button-container" + mainId, "product-delete-button-container", null)
        let productDeleteButtonIcon = elementFunction.imgFunction("product-delete-button-icon" + mainId, "product-delete-button-icon", "/shorpi/assets/icons/delete-icon-button.png")

        productModifyButtonContainer.appendChild(productModifyButtonIcon)
        productDeleteButtonContainer.appendChild(productDeleteButtonIcon)
        productListManageButtonsContainer.appendChild(productModifyButtonContainer)
        productListManageButtonsContainer.appendChild(productDeleteButtonContainer)
        mainProductListItemContainer.appendChild(productListManageButtonsContainer)
        mainProductListItemTarget.appendChild(mainProductListItemContainer)

    }
    // product-list-data-container
let dataM = [{
        avatar: "/shorpi/assets/images/balenc-2.jpeg",
        title: "Nike Air",
        description: "Nike Air shoes from USA",
        category: "Shoes",
        price: "1700",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Balenciaga",
    },
    {
        avatar: "/shorpi/assets/images/apple-watch-1.jpeg",
        title: "Apple Watch 4",
        description: "Apple Watch",
        category: "Shoes",
        price: "1200",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Balenciaga",
    },
    {
        avatar: "/shorpi/assets/images/apple-watch-2.jpeg",
        title: "Apple Watch Series 7",
        description: "Apple Watch",
        category: "Shoes",
        price: "700",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Balenciaga",
    },

]

let getAllProducts = async function(action, requestType, payload, files) {
    console.log(payload)
    let tempPayload = payload
    payload = JSON.stringify(payload)
    let promise = new Promise((resolve, reject) => {
        let __ip;
        var targetUrl = "/shorpi/seller/products/controllers/productController.php";
        let formData = new FormData()
        formData.append('action', action)
        formData.append('auth_crd', "auth_crd")
        formData.append('payload', payload)
        formData.append('requestType', requestType)
        console.log(formData)
        $.ajax({
            url: targetUrl,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                console.log(data)
                let result = JSON.parse(data)
                console.log(result)
                if (result.resultCode == 1) {
                    // :::::: show success
                    //productCreatedSuccessfully()
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
                        buildProductListItemTemplate("product-list-data-container", "", newProduct, "")
                            // :::::: create preview or update data
                    }
                }
            }
        });
        setTimeout(() => resolve(), 1000)
    });
    await promise;
    return 0
}
let awaitProductPreviewClickListener = function(clickedId, targetElement) {
    $("#product-preview").click(function() {
        $("#product-preview").css("display", "block")
        $("#product-preview").show()

    })
}

// :::::::::::::::: buyer cart product list
let buildProductCartItem = async(targetElement, mainId, data, viewType) => {
    // background: #06d6a0;

    mainId = mainId + 10 + getUniqueId()
    data.avatar == '' ? data.avatar = data.productAvatar : data.avatar = data.avatar
    let mainProductListItemTarget = document.getElementById(targetElement)
    let mainProductListItemContainer = elementFunction.divFunction("cart-main-product-list-item-container" + mainId, "cart-main-product-list-item-container", null)
    let productSelectCheckContainer = elementFunction.divFunction("cart-product-select-check-container" + mainId, "cart-product-select-check-container", null)
    let productSelectCheck = elementFunction.divFunction("cart-product-select-check" + mainId, "cart-product-select-check", null)
    let shopTitleContainer = elementFunction.divFunction("cart-shop-title-container" + mainId, "cart-shop-title-container", null)
    shopTitleContainer.setAttribute("style", "width:100%; height:30px; float:left; box-shadow:0px 0px 0px 1px inset #fbfbfb;  ")
    let shopTitle = elementFunction.divFunction("cart-shop-title-container" + mainId, "cart-shop-title-container", data.shopTitle)
    shopTitle.setAttribute("style", "width:200px; height:30px; float:left; text-align:left; line-height:30px; font-family:Montserrat-Medium; font-size:11px;  color:#606060; position:relative; left:10px;  ")
    shopTitleContainer.appendChild(shopTitle);
    mainProductListItemContainer.appendChild(shopTitleContainer)
    let cartProductItemVariationContainer = elementFunction.divFunction("cart-product-item-variation-container" + mainId, "cart-product-item-variation-container", null)


    let cartProductContentContainer = elementFunction.divFunction("cart-product-content-container" + mainId, "cart-product-content-container", null)
    cartProductContentContainer.setAttribute("style", "width:100%; height:100px; float:left; ")
    cartProductItemVariationContainer.setAttribute("style", "width:100%; height:40px; float:left;  ")
    let selectCheckImage = elementFunction.imgFunction("", "", "/shorpi/assets/icons/check-cart-product.png")
    selectCheckImage.setAttribute("style", "width:14px; height:14px; float:left; top:1px; left:2px; position:relative; cursor:pointer;  ")
    productSelectCheck.appendChild(selectCheckImage)
    productSelectCheckContainer.appendChild(productSelectCheck)
    cartProductContentContainer.appendChild(productSelectCheckContainer)

    // ::::::: data settings
    productSelectCheck.setAttribute("data-cart_product_id", data.id)
    productSelectCheck.setAttribute("data-cart_product_price", data.price)

    // :::
    let productAvatarTitleContainer = elementFunction.divFunction("cart-product-avatar-title-container" + mainId, "cart-product-avatar-title-container", null)
    let productAvatarContainer = elementFunction.divFunction("cart-product-avatar-container" + mainId, "cart-product-avatar-container", null)
    let productAvatar = elementFunction.imgFunction("cart-product-avatar" + mainId, "cart-product-avatar", data['avatar'])
    productAvatarTitleContainer.appendChild(productAvatarContainer)
    productAvatarContainer.appendChild(productAvatar)
    cartProductContentContainer.appendChild(productAvatarTitleContainer)
        // :::
    let productTitleContainer = elementFunction.divFunction("cart-product-title-container" + mainId, "cart-product-title-container", null)
    let productTitle = elementFunction.divFunction("cart-product-title" + mainId, "cart-product-title", cutString(data['title'], 0, 0, 30))
    let productDescription = elementFunction.divFunction("cart-product-description" + mainId, "cart-product-description", cutString(data['description'], 0, 0, 95))
    productTitleContainer.appendChild(productTitle)
    productTitleContainer.appendChild(productDescription)
    productAvatarTitleContainer.appendChild(productTitleContainer)
    cartProductContentContainer.appendChild(productAvatarTitleContainer)
    let productQuantityContainer = elementFunction.divFunction("cart-product-quantity-container" + mainId, "cart-product-quantity-container", null)
        //let productPriceLabel = elementFunction.divFunction("cart-product-price-label" + mainId, "cart-product-price-label", data['price'])
        //productPriceLabelContainer.appendChild(productPriceLabel)
    cartProductContentContainer.appendChild(productQuantityContainer)
    let controlQuantityButtonHolder = elementFunction.divFunction("", "", null)
    controlQuantityButtonHolder.setAttribute("style", "width:150px; height:30px; float:left; box-shadow:0px 0px 0px 1px #f1f1f1; position:relative; left:10px; padding-left:4px; margin-top:18px;  ")
    productQuantityContainer.appendChild(controlQuantityButtonHolder)
    let increaseButtonHolder = elementFunction.divFunction("", "", null)
    increaseButtonHolder.setAttribute("style", "width:20px; height:30px; float:left; position:relative; cursor:pointer; margin-left:8px;")
    let decreaseButtonHolder = elementFunction.divFunction("", "", null)
    decreaseButtonHolder.setAttribute("style", "width:20px; height:30px; float:left;  position:relative; cursor:pointer; margin-right:8px;")
    let productCartItemQuantity = elementFunction.numberInputFunction("", "", data.quantity, 1)
    productCartItemQuantity.setAttribute("style", "width:40px; height:30px; float:right; position:relative; background:#ffffff; outline:none; font-family:Montserrat-SemiBold; font-size:13px; text-align:left; padding-left:6px; border:none;   ")
    let productCartItemPrefix = elementFunction.divFunction("", "", "X")
    productCartItemPrefix.setAttribute("style", "width:24px; height:30px; float:left; position:relative; background:#f1f1f1; color:#707070; font-family:Montserrat-SemiBold; line-height:30px; font-size:13px; text-align:center; border:none;   ")
    let productCartItemPrefixAndQuantityHolder = elementFunction.divFunction("", "", null)
    productCartItemPrefixAndQuantityHolder.setAttribute("style", "width:84px; height:30px; float:left; position:relative; overflow:hidden; background:#f1f1f1; font-family:Montserrat-SemiBold; line-height:30px; font-size:13px; text-align:center; border:none;   ")
        //$(productCartItemPrefix).html($(productCartItemPrefix).innerHtml() + productCartItemQuantity)
        // productCartItemPrefix.appendChild(productCartItemQuantity)
    productCartItemPrefixAndQuantityHolder.appendChild(productCartItemPrefix)
    productCartItemPrefixAndQuantityHolder.appendChild(productCartItemQuantity)
    let increaseButtonImage = elementFunction.imgFunction("", "", "/shorpi/assets/icons/increase-product-icon.png")
    increaseButtonImage.setAttribute("style", "width:16px; height:16px; float:left; top:7px; position:relative; cursor:pointer;  ")
    let decreaseButtonImage = elementFunction.imgFunction("", "", "/shorpi/assets/icons/decrease-product-icon.png")
    decreaseButtonImage.setAttribute("style", "width:16px; height:16px; float:left; top:7px;  position:relative; cursor:pointer; ")
    increaseButtonHolder.appendChild(increaseButtonImage)
    decreaseButtonHolder.appendChild(decreaseButtonImage)
    controlQuantityButtonHolder.appendChild(decreaseButtonHolder)
    controlQuantityButtonHolder.appendChild(productCartItemPrefixAndQuantityHolder)
    controlQuantityButtonHolder.appendChild(increaseButtonHolder)
        // ::
    let productPriceLabelContainer = elementFunction.divFunction("cart-product-price-label-container" + mainId, "cart-product-price-label-container", null)
    let productCurrencyLabel = elementFunction.divFunction("cart-product-currency-label" + mainId, "cart-product-currency-label", "$")
        //productPriceLabelContainer.appendChild(productCurrencyLabel)
    let productPriceLabel = elementFunction.divFunction("cart-product-price-label" + mainId, "cart-product-price-label", addCommas(data['price']))
        //productPriceLabelContainer.appendChild(productPriceLabel)
        //$(productCurrencyLabel).html($(productCurrencyLabel).innerHTML + productPriceLabel.innerHTML)
    productPriceLabelContainer.appendChild(productCurrencyLabel)
    productPriceLabelContainer.appendChild(productPriceLabel)
    cartProductContentContainer.appendChild(productPriceLabelContainer)
    let productActionContainer = elementFunction.divFunction("cart-product-remove-container" + mainId, "cart-product-remove-container", null)
        //let productPriceLabel = elementFunction.divFunction("cart-product-price-label" + mainId, "cart-product-price-label", data['price'])
        //productPriceLabelContainer.appendChild(productPriceLabel)
        //
    cartProductContentContainer.appendChild(productActionContainer)
    let removeCartItemButtonImage = elementFunction.imgFunction("", "", "/shorpi/assets/icons/remove-from-cart-icon.png")
    removeCartItemButtonImage.setAttribute("style", "width:16px; height:16px; float:left; top:24px; left:10px; position:relative; cursor:pointer; ")
    productActionContainer.appendChild(removeCartItemButtonImage)
    mainProductListItemTarget.appendChild(mainProductListItemContainer)
    mainProductListItemContainer.appendChild(cartProductContentContainer)
    mainProductListItemContainer.appendChild(cartProductItemVariationContainer)


    // :::::::; variation options

    let variationTextOptionsContainer = elementFunction.divFunction("variation-text-option-container" + mainId, "variation-text-option-container", null)



    cartProductItemVariationContainer.appendChild(variationTextOptionsContainer)

    let cartProductVariation = JSON.parse(data.variations)
        //console.log("cartProductVariation", cartProductVariation)
    try {
        if (Object.keys(cartProductVariation).length > 0) {
            variationTextOptionsContainer.setAttribute("style", "width:80%; height:auto; float:left; background:#fbfbfb; padding-top:6px; padding-bottom:6px; padding-left:6px; padding-right:6px; top:0px; left:40px; position:relative;  ")
            for (let v = 0; v < Object.keys(cartProductVariation).length; v++) {
                console.log(cartProductVariation[Object.keys(cartProductVariation)[v]]['title'])
                let variation_ = elementFunction.divFunction("variation-option-title" + mainId, "variation-option-title", cartProductVariation[Object.keys(cartProductVariation)[v]]['title'] + " ;")
                variation_.setAttribute("style", "font-family:Montserrat-SemiBold; cursor:pointer; float:left; margin-right:10px; color:#606060; font-size:11px; position:relative;  ")

                variationTextOptionsContainer.appendChild(variation_)

            }
        }
    } catch (e) {
        console.log(e)
    }
    awaitAddProductToCheckout("cart-product-select-check" + mainId, "")

    //$(cartProductItemVariationContainer).css("background", "red")

}

// ::::::::::::: buyer search result
let buildProductSearchResultTemplate = async(mainContainer, mainId, renderData, viewType) => {
        console.log(renderData)
        console.log(productSearchParameters)
        let percentReduction = "" + Number(Math.random(10, 100) + 5) + ""
        percentReduction = percentReduction.substring(0, 3)
        mainId = "id" + 10 + getUniqueId()
        mainContainer = document.getElementById(mainContainer)
            // ::::::: id, class, content
        let previewProductDetailsContainer = elementFunction.divFunction("product-preview-details-container" + mainId, "featured-products-style", null)
        previewProductDetailsContainer.setAttribute("data-product_id", renderData.id)
        previewProductDetailsContainer.setAttribute("style", "width:160px; height:280px; cursor:pointer;  margin-top:10px; margin-left:8px;  margin-right:4px; float:left; ")
        let productAvatarContainer = elementFunction.divFunction("product-avatar-container", "", null)
        productAvatarContainer.setAttribute("style", " width:160px; height:200px; float:left; ")
        let productAvatar = elementFunction.imgFunction("product-avatar", "product-avatar", renderData.avatar)
        productAvatar.setAttribute("style", " width:100%; height:150px; float:left; ")
        let productDetailsContainer = elementFunction.divFunction("product-details-container", "product-details-container", "")
        productDetailsContainer.setAttribute("align", "left")
        productDetailsContainer.setAttribute("style", " width:176px; height:180px; float:left; position:absolute;  ")
        let productTitle = elementFunction.divFunction("product-title", "", renderData.title)
        productTitle.setAttribute("style", " height:auto; width:156px; float:left; border-radius:10px; font-size:14px; padding:3px; margin-top:160px; color:#404040; font-size:11px; font-family:Montserrat-Regular; font-size:11px; ")
        let productPrice = elementFunction.divFunction("product-price", "", "")
        productPrice.setAttribute("style", "height:24px; width:100%; float:left; border-radius:10px;  padding:3px; margin-top:2px; color:#000000;  font-family:Montserrat-SemiBold; font-size:16px; ")
        let productPriceSign = elementFunction.spanFunction("product-price-sign", "", "$")
        let productPercentReduction = elementFunction.spanFunction("percent-reduction", "", "-" + percentReduction + "%")
        productPercentReduction.setAttribute("style", "width:40px; height:30px; border-radius:4px; font-size:10px; letter-spacing:0.0016em; background:#fff1e6; font-family:Montserrat-Regular;  position:relative; left:6px; padding-top:1px; padding-bottom:1px; top:-2px; padding-left:6px; padding-right:6px; line-height:30px;  ")

        let canceledProductPrice = elementFunction.divFunction("product-price", "", "")
        canceledProductPrice.setAttribute("style", "height:20px; width:100%; float:left; border-radius:10px; font-size:11px; text-decoration: line-through; padding:3px; margin-top:0px; color:#404040; font-family:Montserrat-SemiBold;  ")
        let canceledProductPriceSign = elementFunction.spanFunction("product-price-sign", "", "$")
        canceledProductPriceSign.setAttribute("style", "font-size:11px; font-family:Montserrat-Regular; text-decoration:none; margin-right:0.4px; ")

        let productsSoldContainer = elementFunction.divFunction("product-price", "", "")
        productsSoldContainer.setAttribute("style", "height:20px; width:100%; float:left; border-radius:10px; font-size:11px; padding:3px; margin-top:0px; color:#000000; opacity:0.8; font-family:Montserrat-SemiBold;  ")
        let productsSold = elementFunction.spanFunction("product-price-sign", "", "124 sold")
        productsSold.setAttribute("style", "font-size:10px; font-family:Montserrat-Medium; margin-right:0.4px; border-radius:4px; background:#d8f3dc; padding-top:2px; padding-bottom:2px; top:-2px; padding-left:6px; padding-right:6px; ")
        productsSoldContainer.appendChild(productsSold)

        productPriceSign.setAttribute("style", "font-size:11px; font-family:Montserrat-Regular; margin-right:0.4px; ")
        previewProductDetailsContainer.appendChild(productAvatarContainer)
        productAvatarContainer.appendChild(productAvatar)
        previewProductDetailsContainer.appendChild(productDetailsContainer)
        productDetailsContainer.appendChild(productTitle)
        productDetailsContainer.appendChild(productPrice)
        productPrice.appendChild(productPriceSign)

        $(productPrice).html(productPrice.innerHTML + " " + addCommas(renderData.price))
        productPrice.appendChild(productPercentReduction)
        productDetailsContainer.appendChild(canceledProductPrice)

        canceledProductPrice.appendChild(canceledProductPriceSign)
        $(canceledProductPrice).html(canceledProductPrice.innerHTML + " " + addCommas(renderData.price))
        productDetailsContainer.appendChild(productsSoldContainer)
        mainContainer.appendChild(previewProductDetailsContainer)
        awaitProductClickListener("product-preview-details-container" + mainId, "targetElement")
    }
    //getAllProducts("gll_product", "requestType", {}, "files")

// ::::::::: buyer preview



$("#close-product-preview").click(function() {
    $("#product-preview").hide()
})
