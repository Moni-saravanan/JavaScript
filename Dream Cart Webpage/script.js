// working -> +
// Select + -> class='update-wish'
// select class=popup-box,popup-overlay
var updateWish=document.querySelector(".update-wish")
var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
updateWish.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

// canceling popup while clicking cancel in popup
// select cancel-> id='cancel-popup'

var cancelPopup=document.getElementById("cancel-popup")
cancelPopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

// working add button in popup
// selecting add btn in popup-> id='add-wish'
// while clicking add the container, text-wish

var addWish=document.getElementById("add-wish")
var container=document.querySelector(".container")
var textWish=document.getElementById("text-wish")

addWish.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","wish-list")
    div.innerHTML=`<h3>${textWish.value}</h3>
            <button class="btn" id="remove-wish">Remove</button>`
    container.append(div)
    div.style.padding="15px"
    div.style.width="25%"
    div.style.backgroundColor="#B2C9AD"
    div.style.borderRadius="10px"
    div.style.verticalAlign="top"
    div.style.display="inline-block"
    div.style.marginLeft="70px"
    div.style.marginTop="20px"
    textWish.value=""
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

var removeWish=document.getElementById("remove-wish")
removeWish.addEventListener("click",function(event){
    event.preventDefault()
    event.target.parentElement.remove()
})
