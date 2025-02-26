const lunchtime = document.querySelector("#lunchtime")
const pricecheck = document.querySelector("#pricecheck")
const disclaimer = document.querySelector("#disclaimer")

const lunchtimenote = function(){
    disclaimer.innerHTML="Croissants usually sell out at lunch so please check with your server!"
    
}

const discountedElements = document.querySelectorAll(".discount")
const discounts = ["30% off!", "10% off!", "50% off!"]
const onClickd = function() {
    discountedElements.forEach((element, i) => {
        element.innerHTML = discounts[i]
    })
}

lunchtime.addEventListener("click", lunchtimenote)
pricecheck.addEventListener("click", onClickd)


