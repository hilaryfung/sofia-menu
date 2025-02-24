const lunchtime = document.querySelector("#lunchtime")
const pricecheck = document.querySelector("#lunchtime")
const disclaimer = document.querySelector("#disclaimer")

const lunchtimenote = function(){
    disclaimer.innerHTML="Croissants usually sell out at lunch so please check with your server!"
    
}
const discount1 = document.querySelector("#discount1")
const discount2 = document.querySelector("#discount2")
const discount3 = document.querySelector("#discount3")
const onClickd = function(){
    discount1.innerHTML = "30% off!"
    discount2.innerHTML = "10% off!"
    discount3.innerHTML = "50% off!"
}

lunchtime.addEventListener("click", lunchtimenote)
pricecheck.addEventListener("click", onClickd)


