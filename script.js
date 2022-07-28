var Icon = document.querySelector(".icon")
var iconcLick = document.querySelector(".icon-click")
var sliderMenu = document.querySelector(".slider-menu")

Icon.onclick = function() {
    sliderMenu.style.width = "300px"
    iconcLick.style.display = "block"
}
iconcLick.onclick = function () {
    sliderMenu.style.width = "0px"
    this.style.display = "none"
}