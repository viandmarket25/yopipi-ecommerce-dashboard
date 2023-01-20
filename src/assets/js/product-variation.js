/*****
 *  variationDynamicId, variation
 *  productVariations.multipleVariationId
 *  productVariations.variationOptionId
 *
 * ****/
// STOCK_CAPACITY, PRODUCT_CATEGORY,	STATE, PRODUCT_IS_VISIBLE, CREATED_BY, MASTER_ID, WEIGHT, BRAND, GENDER, HAS_VARIATIONS, DATE_,	TIME_
let formData = new FormData()
let addProductDataModel = {
    products: {
        title: "product_name_data_value", //
        description: "product_des_data_value", //
        price: "product_price_data_value", //
        stockCapacity: "quantity_data_value", //
        productCategory: "category_data_value", //
        state: "status_data_value", //
        productIsVisible: "", //
        created_by: "", //
        masterId: "",
        weight: "weight_data_value",
        brand: "brand_data_value",
        gender: "consumer_gender_data_value",
        hasVariation: 0,
        date: "",
        time: "",

    },
    productMediaFiles: {

    },
    productMoreMediaFiles: {

    },
    productMedia: {

    },
    productMoreMedia: {

    },
    // :::::::::: variationkey, variationOptons, variationType
    productVariations: {

    },
    productVariationFiles: [],
    productMediaUniqueId: 10,
    productMoreMediaUniqueId: 10,
}
let productVariations = {
    multipleVariation: [],
    singleVariation: [],
    singleVariationIndex: 0,
    multipleVariationIndex: 0,
    multipleVariationId: [],
    multipleVariationIndex: [],
    singleVariationId: [],
    singleVariationIndex: [],
    variationHasPrice: false,
    variationId: 1000,
    variationOptionId: 10,
}
let removeMediaRender = () => {

}
let getMediaType = () => {

}
let productCreatedSuccessfully = async() => {

}
let dataActionHttpPipe = async function(action, requestType, payload, files) {
    console.log(payload)
    let tempPayload = payload
    payload = JSON.stringify(payload)
    let promise = new Promise((resolve, reject) => {
        let __ip;
        var targetUrl = "http://127.0.0.1:3000/product-manager/";
        let formData = new FormData()
        formData.append('action', action)
        console.log("get cookie:: ",getCookie("siteAccessT"))
        formData.append('auth_crd', JSON.parse(getCookie("siteAccessT")).token)
        formData.append('payload', payload)
            // Array.keys(files.productMedia).length
        for (let f = 0; f < Object.keys(files.productMedia).length; f++) {
            formData.append("productMedia[]", files.productMedia[f])
        }
        for (let f = 0; f < Object.keys(files.productMoreMedia).length; f++) {
            formData.append("productMoreMedia[]", files.productMoreMedia[f])
        }
        for (let v = 0; v < Object.keys(tempPayload.productVariation).length; v++) {
            console.log("payload options", tempPayload.productVariation[v]['options'])
            for (let img = 0; img < tempPayload.productVariation[v]['options'].length; img++) {
                // ::::::::::::::: add file to file to formData
                let key_ = window[v];
                formData.append("" + v + "[]", tempPayload.productVariation[v]['options'][img]['images'])
                    //console.log("img :", img, " :", tempPayload.productVariation[v]['options'][0]['images'])
                console.log("img :", img, " :", tempPayload.productVariation[v]['options'])
            }
        }
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
                    productCreatedSuccessfully()
                    let newProduct = {
                        avatar: result.resultContent.MEDIA_SOURCE,
                        title: result.resultContent.TITLE,
                        description: result.resultContent.DESCRIPTION.substring(0, 45),
                        category: result.resultContent.PRODUCT_CATEGORY,
                        price: result.resultContent.PRICE,
                        stockLeft: result.resultContent.STOCK_CAPACITY,
                        originalStock: result.resultContent.STOCK_CAPACITY,
                        brand: result.resultContent.BRAND,
                    }
                    buildProductListItemTemplate("product-list-data-container", "", newProduct, "")
                        // :::::: create preview or update data
                }
            }
        });
        setTimeout(() => resolve(), 1000)
    });
    await promise;
    return 0
}
let awaitRemoveProductMedia = async(clickedId, targetElement, type, param) => {
    $("body #" + clickedId).click(function() {
        let documentId = targetElement.split("#").join("")
        documentId = document.getElementById(documentId)
        let removeCarryOn = clickedId.split("#").join("")
        removeCarryOn = document.getElementById(removeCarryOn)
        let removeElementKey = removeCarryOn.dataset.containerid
        removeElementKey = removeElementKey.split("#").join("")
        $("body #" + targetElement).animate({
            "height": "0px",
            "opacity": "0",
            "width": "0px"
        }, 300)
        setTimeout(function() {
            $("body #" + targetElement).hide()
        }, 200)
        if (type == "product_media") {
            delete addProductDataModel.productMedia[removeElementKey]
            delete addProductDataModel.productMediaFiles[removeElementKey]
        } else if (type == "product_media_more") {
            delete addProductDataModel.productMoreMedia[removeElementKey]
            delete addProductDataModel.productMoreMediaFiles[removeElementKey]
        }
    })
}
let mediaDifferentiator = (mediaSource, targetElement, type, fileObject) => {
    addProductDataModel.productMediaUniqueId = addProductDataModel.productMediaUniqueId + 10
    let productMediaId = addProductDataModel.productMediaUniqueId
    let resultElement
    let tempContainer = elementFunction.divFunction("temp-image-container-holder" + productMediaId, "temp-image-container-holder", null)
    tempContainer.setAttribute("data-targetelement", "#temp-image-container-holder")
    tempContainer.setAttribute("data-mediasource", mediaSource)
    let imageContainer = elementFunction.divFunction("temp-image-container" + productMediaId, "temp-image-container", null)
    let removeImageContainer = elementFunction.divFunction("close-temp-image-container" + productMediaId, "close-temp-image-container", null)
    let tempImage = elementFunction.imgFunction("temp-image" + productMediaId, "temp-image", mediaSource)
    let removeImage = elementFunction.imgFunction("remove-image-button" + productMediaId, "remove-image-button", "http://127.0.0.1/shorpi/assets/icons/cancel-icon-button.png")
    removeImage.setAttribute("data-containerid", "#temp-image-container-holder" + productMediaId)
    removeImage.setAttribute("data-clickedid", "#remove-image-button" + productMediaId)
    removeImage.setAttribute("data-mediasource", mediaSource)
    removeImageContainer.appendChild(removeImage)
    tempContainer.appendChild(imageContainer)
    tempContainer.appendChild(removeImageContainer)
    $(imageContainer).append(tempImage)
        //console.log(tempContainer)
    $(tempContainer).appendTo(targetElement)

    console.log(fileObject)
    if (type == "product_media") {
        addProductDataModel.productMedia["temp-image-container-holder" + productMediaId] = mediaSource
        addProductDataModel.productMediaFiles["temp-image-container-holder" + productMediaId] = fileObject

    } else if (type == "product_media_more") {
        addProductDataModel.productMoreMedia["temp-image-container-holder" + productMediaId] = mediaSource
        addProductDataModel.productMoreMediaFiles["temp-image-container-holder" + productMediaId] = fileObject

    }
    //console.log(addProductDataModel)
    awaitRemoveProductMedia("remove-image-button" + productMediaId, "temp-image-container-holder" + productMediaId, type, null)
    return (tempContainer)

}

let imagesPreview = function(input, placeToInsertImagePreview, type) {
  //alert()
    if (input.files) {
        var filesAmount = input.files.length;
        for (let i = 0; i < filesAmount; i++) {
            var reader = new FileReader();
            reader.onload = function(event) {
                let uiModified = mediaDifferentiator(event.target.result, placeToInsertImagePreview, type, input.files[i])
                    //let uiModified = mediaDifferentiator(event.target.result, placeToInsertImagePreview, type, $(input).prop("files")[i])
                    // $('#sortpicture').prop('files')[0];
            }
            reader.readAsDataURL(input.files[i]);
        }
    }
};
$("#gallery-photo-add").on("change", function() {
    imagesPreview(this, "div #preview-product-media", "product_media");
});
$("#details-photo-add").on("change", function() {
    imagesPreview(this, "div #preview-product-more-media", "product_media_more");
});
//});
let awaitSingleVariation = async(clickedId, targetElement, variationOptionsTarget, variationIsWithPrice, variationCategory) => {
    $(clickedId).click(function() {
        productVariations.variationOptionId = productVariations.variationOptionId + 10
            //console.log(productVariations.variationOptionId)
        createProductVariationOption(variationOptionsTarget, "id", variationIsWithPrice, variationCategory, null)
    })
}
let buildProductData = async(param1, param2) => {
    let payload = {
        productAttributes: {

        },
        productMedia: [],
        productMoreMedia: [],
        productVariation: {},
        productHasVariation: false,
    }
    let pushFiles = {
            "productMedia": [],
            "productMoreMedia": [],
        }
        // :::::: get product media
    for (let i = 0; i < Object.keys(addProductDataModel.productMedia).length; i++) {
        payload.productMedia.push(addProductDataModel.productMediaFiles[Object.keys(addProductDataModel.productMedia)[i]])
        pushFiles.productMedia.push(addProductDataModel.productMediaFiles[Object.keys(addProductDataModel.productMedia)[i]])
    }
    // ::::::  get more product  media
    for (let i = 0; i < Object.keys(addProductDataModel.productMoreMedia).length; i++) {
        payload.productMoreMedia.push(addProductDataModel.productMoreMediaFiles[Object.keys(addProductDataModel.productMoreMedia)[i]])
        pushFiles.productMoreMedia.push(addProductDataModel.productMoreMediaFiles[Object.keys(addProductDataModel.productMoreMedia)[i]])
    }
    // ::::::  get product attributes
    for (let i = 0; i < Object.keys(addProductDataModel.products).length; i++) {
        if (addProductDataModel.products[Object.keys(addProductDataModel.products)[i]] != "") {
            // console.log(addProductDataModel.products[Object.keys(addProductDataModel.products)[i]])
            let payloadValue = $("#" + addProductDataModel.products[Object.keys(addProductDataModel.products)[i]]).val()
                //console.log(payloadValue)
            payload.productAttributes[Object.keys(addProductDataModel.products)[i]] = payloadValue
        }
    }
    addProductDataModel.products['productIsVisible'] = true
    payload.productAttributes['productIsVisible'] = true
    payload.productAttributes['productType'] = "product"
    payload.productAttributes['materialType'] = "Cutton"
        // ::::::: get product variations from
    let countVariations = 0
    for (let i = 0; i < Object.keys(addProductDataModel.productVariations).length; i++) {
        countVariations += 1
        let variationTitle = $("#" + addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['title']).val()
        console.log(variationTitle)
        console.log(addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['title'])
        let hasPrice = addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['hasPrice']
        let category = addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['category']
        let options = [

            ]
            // ::::::::: variation options iteration
        let images = []
        for (let j = 0; j < Object.keys(addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['Options']).length; j++) {
            let innerKey = Object.keys(addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['Options'])[j]
            let price
            if (hasPrice == true) {
                price = $("#" + addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['Options'][innerKey]['price']).val()
            }
            let title = $("#" + addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['Options'][innerKey]['title']).val()
            let image = addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['Options'][innerKey]['image']
                //console.log("length of options: ", Object.keys(addProductDataModel.productVariations[Object.keys(addProductDataModel.productVariations)[i]]['Options']).length)
            images.push(image)
                //console.log("image:: ", image)
            options.push({
                title: title,
                price: price,
                images: image,
            })

        }
        //console.log("options::", options)
        hasPrice == true ? hasPrice = 1 : hasPrice = 0
        payload.productVariation[i] = {
            title: variationTitle,
            category: category,
            hasPrice: hasPrice,
            options: options
        }
    }
    console.log(addProductDataModel.productVariationFiles)
    countVariations > 0 ? payload.productHasVariation = true : payload.productHasVariation = false
    console.log("product product model: ", addProductDataModel)
        //payload = JSON.stringify(payload)
        //console.log(payload)
        // :::::::: check validity parameters, make request
    dataActionHttpPipe("cr_product", "requestType", payload, pushFiles)
}
let awaitBuildVariationPhotos = async(clickedId, targetElement, variationOptionsTarget, variationIsWithPrice, variationCategory) => {
    $(function() {
        let imagesPreview = function(input, placeToInsertImagePreview) {
            //console.log(placeToInsertImagePreview)
            if (input.files) {
                var filesAmount = input.files.length;
                for (let i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        //let uiModified = mediaDifferentiator(event.target.result, $($.parseHTML("<img>")).attr("src", event.target.result, input.files[i]),"")
                        let uiModified = mediaDifferentiator(event.target.result, $($.parseHTML("<img>")).attr("src", event.target.result), "", input.files[i])
                            // ::::::::::::::::: sent image array so that ui image or image File obj can be chosen from
                        let imageArray = {
                            uiImage: event.target.result,
                            imageFile: input.files[i],
                        }
                        createProductVariationOption(placeToInsertImagePreview, "id", variationIsWithPrice, variationCategory, imageArray)
                    }
                    reader.readAsDataURL(input.files[i]);
                }
            }
        };
        $(clickedId).on("change", function() {
            //console.log("change read")
            imagesPreview(this, variationOptionsTarget);
        });
    })
}

let awaitRemoveVariationOption = async(clickedId, targetElement, variationOptionsTarget, variationIsWithPrice, variationCategory) => {
    productVariations.variationOptionId = Number(productVariations.variationOptionId + 10)
    cli = document.getElementById(clickedId)
        //console.log(cli.dataset)
    let variationBaseId = document.getElementById(cli.dataset.variation_base_containerid)
    let variationBaseKey = variationBaseId.dataset.variationcontainerid
    let variationOptionKey = cli.dataset.variation_option_containerid
    let removeVariationBaseKey = variationBaseKey
    let removeVariationOptionKey = variationOptionKey
    removeVariationBaseKey = cutOff__(removeVariationBaseKey, 0)
    removeVariationOptionKey = cutOff__(removeVariationOptionKey, 0)
    $("body #" + clickedId).click(function() {
        //console.log(addProductDataModel.productVariations[removeVariationBaseKey]['Options'][removeVariationOptionKey])
        delete addProductDataModel.productVariations[removeVariationBaseKey]['Options'][removeVariationOptionKey]
            //console.log(removeVariationOptionKey)
        let documentId = targetElement.split("#").join("")
        documentId = document.getElementById(documentId)
        let variationOptionId = documentId.dataset.variation_option_id
            //console.log("body #" + targetElement)
        $("body #" + targetElement).animate({
            "height": "0px",
            "opacity": "0",
            "width": "0px"
        }, 600)
        setTimeout(function() {
            $("body #" + targetElement).hide()
        }, 500)
    })
}
let awaitRemoveProductVariation = async(clickedId, targetElement, variationOptionsTarget, variationIsWithPrice, variationCategory) => {
    $("body #" + clickedId).click(function() {
        let documentId = targetElement.split("#").join("")
        documentId = document.getElementById(documentId)
            // ::::::: remove this variation
        let removeVariationKey = targetElement
        removeVariationKey = cutOff__(removeVariationKey, 0)
            //console.log(removeVariationKey)
        delete addProductDataModel.productVariations[removeVariationKey]
        let variationId = documentId.dataset.variationid
            //console.log("body #" + targetElement)
        $("body #" + targetElement).animate({
            "height": "0px",
            "opacity": "0",
            "width": "0px"
        }, 600)
        setTimeout(function() {
            $("body #" + targetElement).hide()
        }, 500)
    })
}

let addVariationData = async(type, target_, key_, value_) => {
    console.log("value_::: entrance", value_)
    if (type == "variation") {
        key_ = cutOff__(key_, 0)
        addProductDataModel.productVariations[key_] = value_
    } else if (type == "variation_option") {
        target_ = cutOff__(target_, 0)
        key_ = cutOff__(key_, 0)
        addProductDataModel.productVariations[target_]['Options'][key_] = value_
            // console.log("variation option: ", addProductDataModel.productVariations)
    }
    console.log("value_::: later", value_)
}
let createVariationBase = async(targetElement, mainId, hasPrice, variationCategory) => {
    // :::::::::: if variation has price, then variation is single, else its multiple
    if (variationCategory == "text") {
        let mainVariationBaseList = document.getElementById(targetElement)
        let mainVariationBase = elementFunction.divFunction("main-variation-base" + mainId, "main-variation-base", null)
        let mainVariationBaseTop = elementFunction.divFunction("main-variation-base-top" + mainId, "main-variation-base-top", null)
        let mainVariationBaseContentHolder = elementFunction.divFunction("main-variation-base-content-holder" + mainId, "main-variation-base-content-holder", null)
        let closeBaseVariation = elementFunction.imgFunction("close-variation-base" + mainId, "close-variation-base", "http://127.0.0.1/shorpi/assets/icons/cancel-icon-button.png")
        let singleVariationNameContainer = elementFunction.divFunction("single-variation-name-container" + mainId, "single-variation-name-container", null)
        let singleVariationNameData = elementFunction.inputFunction("single-variation-name-data" + mainId, "single-variation-name-data", "http://127.0.0.1/shorpi/assets/icons/cancel-icon-button.png", "Variation Title")
        singleVariationNameData.setAttribute("type", "text")
        let singleVariationControlContainer = elementFunction.divFunction("single-variation-control-container" + mainId, "single-variation-control-container", null)
        let singleVariationControlHolder = elementFunction.divFunction("single-variation-control-holder" + mainId, "single-variation-control-holder", null)
        let singleVariationButtonHolder = elementFunction.divFunction("single-variation-button-holder" + mainId, "single-variation-button-holder centered-position", null)
        singleVariationButtonHolder.setAttribute("align", "center")
        let singleOneMoreVariationOption = elementFunction.imgFunction("single-one-more-variation-option" + mainId, "single-one-more-variation-option", "http://127.0.0.1/shorpi/assets/icons/add-icon-button-square-line.png")
        singleOneMoreVariationOption.setAttribute("data-variation-list-container", "main-variation-option-list-container" + mainId)
        let singleVariationLabel = elementFunction.divFunction("single-variation-label" + mainId, "single-variation-label", "Add Variation")
        singleVariationLabel.setAttribute("align", "left")
        let mainVariationOptionListContainer = elementFunction.divFunction("main-variation-option-list-container" + mainId, "main-variation-option-list-container", null)
        mainVariationOptionListContainer.setAttribute("data-variationcontainerid", "main-variation-base" + mainId)
        mainVariationBaseTop.appendChild(closeBaseVariation)
        mainVariationBase.appendChild(mainVariationBaseTop)
        mainVariationBase.appendChild(mainVariationBaseContentHolder)
        mainVariationBaseList.insertBefore(mainVariationBase, mainVariationBaseList.firstChild)
        singleVariationNameContainer.appendChild(singleVariationNameData)
        singleVariationControlContainer.appendChild(singleVariationControlHolder)
        singleVariationControlHolder.appendChild(singleVariationButtonHolder)
        singleVariationButtonHolder.appendChild(singleOneMoreVariationOption)
        singleVariationControlHolder.appendChild(singleVariationLabel)
        mainVariationBaseTop.appendChild(singleVariationNameContainer)
        mainVariationBaseContentHolder.appendChild(singleVariationControlContainer)
        mainVariationBaseContentHolder.appendChild(mainVariationOptionListContainer)
        mainVariationBase.setAttribute("data-variationId", mainId)
        mainVariationBase.setAttribute("data-variationContainer", "main-variation-base" + mainId)
            //addVariationData("variation", null, "main-variation-base" + mainId, [] )
        addVariationData("variation", null, "main-variation-base" + mainId, { variationData: [], variationType: "text" })
        awaitSingleVariation("#single-one-more-variation-option" + mainId, "targetElement", "main-variation-option-list-container" + mainId, hasPrice, variationCategory)
        awaitRemoveProductVariation("close-variation-base" + mainId, "main-variation-base" + mainId, "main-variation-option-list-container" + mainId, hasPrice, variationCategory)
        if (hasPrice == true) {
            //productVariations.singleVariation.push("main-variation-base" + mainId)
            //addProductDataModel.productVariations["main-variation-base" + mainId] = { Options: {}, hasPrice: hasPrice, category: variationCategory }
            let key = "main-variation-base" + mainId
            let value = {
                title: "single-variation-name-data" + mainId,
                hasPrice: hasPrice,
                category: variationCategory,
                Options: {},
            }
            addVariationData("variation",
                key, key, value,
            )
        } else if (hasPrice == false) {
            let key = "main-variation-base" + mainId
            let value = {
                title: "single-variation-name-data" + mainId,
                hasPrice: hasPrice,
                category: variationCategory,
                Options: {},
            }
            addVariationData("variation",
                key, key, value,
            )
        }

    } else if (variationCategory == "image-text") {
        let mainVariationBaseList = document.getElementById(targetElement)
        let mainVariationBase = elementFunction.divFunction("main-variation-base" + mainId, "main-variation-base", null)
        let mainVariationBaseTop = elementFunction.divFunction("main-variation-base-top" + mainId, "main-variation-base-top", null)
        let mainVariationBaseContentHolder = elementFunction.divFunction("main-variation-base-content-holder" + mainId, "main-variation-base-content-holder", null)
        let closeBaseVariation = elementFunction.imgFunction("close-variation-base" + mainId, "close-variation-base", "http://127.0.0.1/shorpi/assets/icons/cancel-icon-button.png")
        let singleVariationNameContainer = elementFunction.divFunction("single-variation-name-container" + mainId, "single-variation-name-container", null)
        let singleVariationNameData = elementFunction.inputFunction("single-variation-name-data" + mainId, "single-variation-name-data", "http://127.0.0.1/shorpi/assets/icons/cancel-icon-button.png", "Variation Title ")
        singleVariationNameData.setAttribute("type", "text")
            //mainVariationBase.setAttribute("data-variationId", mainId)
        let variationPhotoInputFile = elementFunction.inputFunction("variation-photo-input-file" + mainId, "variation-photo-input-file", "http://127.0.0.1/shorpi/assets/icons/cancel-icon-button.png", null)
        variationPhotoInputFile.setAttribute("type", "file")
        variationPhotoInputFile.setAttribute("multiple", true)
        variationPhotoInputFile.setAttribute("style", "top:-40px; position:relative; height:100%; width:100%; cursor:pointer; opacity:0; ")
        let singleVariationControlContainer = elementFunction.divFunction("single-variation-control-container" + mainId, "single-variation-control-container", null)
        let singleVariationControlHolder = elementFunction.divFunction("single-variation-control-holder" + mainId, "single-variation-control-holder", null)
        let singleVariationButtonHolder = elementFunction.divFunction("single-variation-button-holder" + mainId, "single-variation-button-holder", null)
        singleVariationButtonHolder.setAttribute("align", "center")
        let singleOneMoreVariationOption = elementFunction.imgFunction("single-one-more-variation-option" + mainId, "single-one-more-variation-option", "http://127.0.0.1/shorpi/assets/icons/add-media-icon-button.png")
        singleOneMoreVariationOption.setAttribute("data-variation-list-container", "main-variation-option-list-container" + mainId)
        let singleVariationLabel = elementFunction.divFunction("single-variation-label" + mainId, "single-variation-label", "Choose Variation Photos")
        singleVariationLabel.setAttribute("align", "left")
        let mainVariationOptionListContainer = elementFunction.divFunction("main-variation-option-list-container" + mainId, "main-variation-option-list-container", null)
        mainVariationOptionListContainer.setAttribute("data-variationcontainerid", "main-variation-base" + mainId)
        mainVariationBaseTop.appendChild(closeBaseVariation)
        mainVariationBase.appendChild(mainVariationBaseTop)
        mainVariationBase.appendChild(mainVariationBaseContentHolder)
        mainVariationBaseList.insertBefore(mainVariationBase, mainVariationBaseList.firstChild)
        singleVariationNameContainer.appendChild(singleVariationNameData)
        singleVariationControlContainer.appendChild(singleVariationControlHolder)
        singleVariationControlHolder.appendChild(singleVariationButtonHolder)
        singleVariationButtonHolder.appendChild(singleOneMoreVariationOption)
        singleVariationButtonHolder.appendChild(variationPhotoInputFile)
        singleVariationControlHolder.appendChild(singleVariationLabel)
        mainVariationBaseTop.appendChild(singleVariationNameContainer)
        mainVariationBaseContentHolder.appendChild(singleVariationControlContainer)
        mainVariationBaseContentHolder.appendChild(mainVariationOptionListContainer)
        singleVariationButtonHolder.setAttribute("style", "width:160px; height:50px; ")
        singleOneMoreVariationOption.setAttribute("style", "width:34px; height:30px; opacity:0.8; ")
        mainVariationBase.setAttribute("data-variationId", mainId)
        mainVariationBase.setAttribute("data-variationContainer", "main-variation-base" + mainId)
            //addVariationData("variation", null, "main-variation-base" + mainId, [])
        addVariationData("variation", null, "main-variation-base" + mainId, { variationData: [], variationType: "image-text" })
        awaitBuildVariationPhotos("#variation-photo-input-file" + mainId, "targetElement", "main-variation-option-list-container" + mainId, hasPrice, variationCategory)
        awaitRemoveProductVariation("close-variation-base" + mainId, "main-variation-base" + mainId, "main-variation-option-list-container" + mainId, hasPrice, variationCategory)
        if (hasPrice == true) {
            let key = "main-variation-base" + mainId
            let value = {
                title: "single-variation-name-data" + mainId,
                hasPrice: hasPrice,
                category: variationCategory,
                Options: {},
            }
            addVariationData("variation",
                key, key, value,
            )
        } else if (hasPrice == false) {
            let key = "main-variation-base" + mainId
            let value = {
                title: "single-variation-name-data" + mainId,
                hasPrice: hasPrice,
                category: variationCategory,
                Options: {},
            }
            addVariationData("variation",
                key, key, value,
            )
        }
    }

}
let createProductVariationOption = async(targetElement, mainId, variationIsWithPrice, variationType, imageSource) => {
    let variationOptionTextUniqueId = " " + mainId
    let variationOptionImageTextUniqueId = " " + mainId
        //mainId = mainId + productVariations.variationOptionId
    mainId = productVariations.variationOptionId
    if (variationType == "text") {
        let mainVariationOptionListContainer = document.getElementById(targetElement)
        let mainVariationOptionContainer = elementFunction.divFunction("main-variation-option-container" + mainId, "main-variation-option-container", null)
        mainVariationOptionContainer.setAttribute("data-variation_option_id", "main-variation-option-container" + mainId)
        mainVariationOptionContainer.setAttribute("data-variation_option_index", mainId)
        let variationOptionData = elementFunction.textAreaFunction("variation-option-data" + mainId, "variation-option-data", "")
        variationOptionData.setAttribute("placeholder", "Option Title")
        let variationPriceLabel = elementFunction.divFunction("image-variation-variation-option-price-label-text" + mainId, "image-variation-variation-option-price-label-text", "NGN")
        variationPriceLabel.setAttribute("style", "width:40px; height:40px; ")
        let variationOptionPrice = elementFunction.numberInputFunction("variation-option-price" + mainId, "variation-option-price", 0.00)
        let removeVariationOptionButtonContainer = elementFunction.divFunction("remove-variation-option-button-container" + mainId, "remove-variation-option-button-container", null)
        let removeVariationOptionButton = elementFunction.imgFunction("remove-variation-option-button" + mainId, "remove-variation-option-button", "http://127.0.0.1/shorpi/assets/icons/delete-icon-button.png")
        mainVariationOptionListContainer.appendChild(mainVariationOptionContainer)
        mainVariationOptionContainer.appendChild(variationOptionData)
        variationOptionData.setAttribute("contenteditable", "true")
        if (variationIsWithPrice == true) {
            mainVariationOptionContainer.appendChild(variationPriceLabel)
            mainVariationOptionContainer.appendChild(variationOptionPrice)
            variationOptionPrice.setAttribute("contenteditable", "true")
            variationOptionPrice.setAttribute("data-text", "0.00")
        }
        mainVariationOptionContainer.appendChild(removeVariationOptionButtonContainer)
        removeVariationOptionButtonContainer.appendChild(removeVariationOptionButton)
        mainVariationOptionContainer.setAttribute("data-variation_base_containerid", targetElement)
        mainVariationOptionContainer.setAttribute("data-variation_option_containerid", "main-variation-option-container" + mainId)
        removeVariationOptionButton.setAttribute("data-variation_base_containerid", targetElement)
        removeVariationOptionButton.setAttribute("data-variation_option_containerid", "main-variation-option-container" + mainId)
            // ::::::::: get
            //console.log(mainVariationOptionListContainer)
        let variationBase = mainVariationOptionListContainer.dataset.variationcontainerid
        let key = "main-variation-option-container" + mainId
        addVariationData("variation_option",
            variationBase, key, {
                title: "variation-option-data" + mainId,
                price: "variation-option-price" + mainId,

            }
        )
        awaitRemoveVariationOption("remove-variation-option-button" + mainId, "main-variation-option-container" + mainId, "main-variation-option-list-container" + mainId, "hasPrice", "variationCategory")

    } else if (variationType == "image-text") {
        let mainVariationOptionListContainer = document.getElementById(targetElement)
        let imageVariationMainVariationOptionContainer = elementFunction.divFunction("image-variation-main-variation-option-container" + mainId, "image-variation-main-variation-option-container", null)
        let imageVariationContainer = elementFunction.divFunction("image-variation-container" + mainId, "image-variation-container", null)
        imageVariationMainVariationOptionContainer.setAttribute("data-variation_option_id", "main-variation-option-container" + mainId)
        imageVariationMainVariationOptionContainer.setAttribute("data-variation_option_index", mainId)
        let imageVariationVariationImageData = elementFunction.imgFunction("image-variation-variation-image-data" + mainId, "image-variation-variation-image-data", imageSource.uiImage)
        let imageVariationOptionData = elementFunction.textAreaFunction("image-variation-variation-option-data" + mainId, "image-variation-variation-option-data", "")
        imageVariationOptionData.setAttribute("placeholder", "Option Title")
        imageVariationOptionData.setAttribute("contenteditable", "true")
        let imageVariationOptionPrice = elementFunction.numberInputFunction("image-variation-variation-option-price" + mainId, "image-variation-variation-option-price", 0.00)
        let variationPriceLabel = elementFunction.divFunction("image-variation-variation-option-price-label" + mainId, "image-variation-variation-option-price-label", "NGN")
        variationPriceLabel.setAttribute("style", "width:40px; height:40px; ")
        let removeVariationOptionButtonContainer = elementFunction.divFunction("image-variation-remove-variation-option-button-container" + mainId, "image-variation-remove-variation-option-button-container", null)
        let removeVariationOptionButton = elementFunction.imgFunction("remove-variation-option-button" + mainId, "remove-variation-option-button", "http://127.0.0.1/shorpi/assets/icons/delete-icon-button.png")
        imageVariationMainVariationOptionContainer.appendChild(imageVariationContainer)
        imageVariationContainer.appendChild(imageVariationVariationImageData)
        imageVariationMainVariationOptionContainer.appendChild(imageVariationOptionData)
        if (variationIsWithPrice == true) {
            imageVariationMainVariationOptionContainer.appendChild(variationPriceLabel)
            imageVariationMainVariationOptionContainer.appendChild(imageVariationOptionPrice)
            imageVariationOptionPrice.setAttribute("contenteditable", "true")
            imageVariationOptionPrice.setAttribute("data-text", "0.00")

        } else {
            imageVariationMainVariationOptionContainer.appendChild(imageVariationOptionPrice)
            imageVariationOptionPrice.innerHTML = ""
            imageVariationOptionPrice.style.background = "none"
        }
        imageVariationMainVariationOptionContainer.appendChild(removeVariationOptionButtonContainer)
        removeVariationOptionButtonContainer.appendChild(removeVariationOptionButton)
        imageVariationContainer.appendChild(imageVariationVariationImageData)
        mainVariationOptionListContainer.appendChild(imageVariationMainVariationOptionContainer)
        imageVariationMainVariationOptionContainer.setAttribute("data-variation_base_containerid", targetElement)
        imageVariationMainVariationOptionContainer.setAttribute("data-variation_option_containerid", "image-variation-main-variation-option-container" + mainId)
        removeVariationOptionButton.setAttribute("data-variation_base_containerid", targetElement)
        removeVariationOptionButton.setAttribute("data-variation_option_containerid", "image-variation-main-variation-option-container" + mainId)
            //console.log(mainVariationOptionListContainer)
        let variationBase = mainVariationOptionListContainer.dataset.variationcontainerid
        let key = "image-variation-main-variation-option-container" + mainId
        addVariationData("variation_option",
            variationBase, key, {
                title: "image-variation-variation-option-data" + mainId,
                price: "image-variation-variation-option-price" + mainId,
                image: imageSource.imageFile,
            }
        )
        awaitRemoveVariationOption("remove-variation-option-button" + mainId, "image-variation-main-variation-option-container" + mainId, "main-variation-option-list-container" + mainId, "hasPrice", "variationCategory")
    }
}


$("#submit-product").click(function() {
    alert()

    buildProductData()
})
