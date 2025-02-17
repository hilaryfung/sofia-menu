const button = document.querySelector("#button")
const disclaimer = document.querySelector("#disclaimer")
const onClick = function(){
    disclaimer.innerHTML="croissants usually sell out at lucnh so please check with your server!"
}

button.addEventListener("click", onClick)