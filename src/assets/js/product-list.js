// :::::::::::::
/*
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
        price: "700",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Balenciaga",
    },

    {
        avatar: "/shorpi/assets/images/balenc-3.jpeg",
        title: "Addidas Shoe",
        description: "Balenciaga logo embroidered on the tongue",
        category: "Shoes",
        price: "2000",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Balenciaga",
    },
    {
        avatar: "/shorpi/assets/images/balenc-5.jpeg",
        title: "Puma Shoe",
        description: "Balenciaga logo embroidered on the tongue",
        category: "Pants",
        price: "100",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Nike",
    },
    {
        avatar: "/shorpi/assets/images/balenc-4.jpeg",
        title: "Sneakers Flickers",
        description: "Balenciaga logo embroidered on the tongue",
        category: "Shoes",
        price: "200$",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Nike",
    },
    {
        avatar: "/shorpi/assets/images/balenc-3.jpeg",
        title: "Opium Slides  IN BURGUNDY",
        description: "Balenciaga logo embroidered on the tongue",
        category: "Men Shirt",
        price: "5000$",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Balenciaga",
    },
    {
        avatar: "/shorpi/assets/images/balenc-3.jpeg",
        title: "Daluto Misti",
        description: "Balenciaga logo embroidered on the tongue",
        category: "Men Trouser",
        price: "2000$",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Gucci",
    },
    {
        avatar: "/shorpi/assets/images/balenc-2.jpeg",
        title: "MEN'S RUNNER SNEAKER",
        description: "Balenciaga logo embroidered on the tongue",
        category: "Men Shoes",
        price: "4000$",
        stockLeft: "12",
        originalStock: "1000",
        brand: "Gucci",
    },
]

*/
for (let i = 0; i < dataM.length; i++) {
    //buildProductListItemTemplate("product-list-data-container", "", dataM[i], "")
    //console.log(dataM[i])
    //console.log(dataM[i]['title'])
    //console.log(dataM[i].title)
}
/*
let getCookie=(cookieName)=> {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  return cookie[cookieName];
}


*/
/*
let getAllProducts = async function(action, requestType, payload, files) {
    console.log(payload)
    let tempPayload = payload
    payload = JSON.stringify(payload)
    let promise = new Promise((resolve, reject) => {
        let __ip;
        var targetUrl = "/shorpi/seller/products/controllers/productController.php";
        let formData = new FormData()
        formData.append('action', action)
        formData.append('auth_crd', JSON.parse( getCookie("siteAccessT")).token)
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
                            title: result.resultContent[i].TITLE.length > 35 ? result.resultContent[i].TITLE.substring(0, 35) + "..." : result.resultContent[i].TITLE,
                            description: result.resultContent[i].DESCRIPTION.length > 45 ? result.resultContent[i].DESCRIPTION.substring(0, 45) + "..." : result.resultContent[i].DESCRIPTION,
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

*/
/*
let awaitProductPreviewClickListener = function(clickedId, targetElement) {
    $("#product-preview").click(function() {
        $("#product-preview").css("display", "block")
        $("#product-preview").show()

    })
}

*/
let buildProductPreview = async(mainContainer, mainId, renderData, viewType) => {

    mainContainer = document.getElementById(mainContainer)
        // ::::::: id, class, content
    let previewProductDetailsContainer = elementFunction.divFunction("product-preview-details-container", "featured-products-style", null)
    previewProductDetailsContainer.setAttribute("style", "width:160px; height:240px; cursor:pointer;  margin-top:10px; margin-left:8px;  margin-right:4px; float:left; ")
    let productAvatarContainer = elementFunction.divFunction("product-avatar-container", "", null)
    productAvatarContainer.setAttribute("style", " width:160px; height:200px; float:left; ")
    let productAvatar = elementFunction.imgFunction("product-avatar", "", avatar)
    productAvatar.setAttribute("style", " width:100%; height:150px; float:left; ")
    let productDetailsContainer = elementFunction.divFunction("product-details-container", "", "", "")
    productDetailsContainer.setAttribute("style", " width:176px; height:180px; float:left; position:absolute;  ")
    let productTitle = elementFunction.divFunction("product-title", "", "", "")
    productTitle.setAttribute("style", " height:auto; width:156px; float:left; border-radius:10px; font-size:14px; padding:3px; margin-top:160px; color:#404040; font-size:11px; font-family:Montserrat-Regular; font-size:11px; ")
    let productPrice = elementFunction.divFunction("product-price", "", "", "")
    productPrice.setAttribute("style", " height:24px; width:80px; float:left; border-radius:10px; font-size:14px; padding:3px; margin-top:2px; color:#000000; font-size:12px; font-family:Montserrat-Bold; font-size:16px; ")
    let productPriceSign = elementFunction.spanFunction("product-price-sign", "", "", "")
    productPriceSign.setAttribute("style", "font-size:11px; font-family:Montserrat-Regular; margin-right:2px; ")
    previewProductDetailsContainer.appendChild(productAvatarContainer)
    productAvatarContainer.appendChild(productAvatar)
    previewProductDetailsContainer.appendChild(productDetailsContainer)
    productDetailsContainer.appendChild(productTitle)
    productDetailsContainer.appendChild(productPrice)
    productPrice.appendChild(productPriceSign)
    productPriceSign.html(productPrice.innerHTML + " " + price)
    mainContainer.appendChild(previewProductDetailsContainer)
}
//getAllProducts("gll_product", "requestType", {}, "files")
