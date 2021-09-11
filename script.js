//nav toggler
const toggler = document.getElementById("nav-toggler")
const nav = document.getElementById("nav-header")

toggler.addEventListener('click', () => {
    nav.classList.toggle("show")
    // var navDisplay = nav.style.display === 'grid' ? 'none' : 'grid'
    // nav.style.display = navDisplay;


})



var longLink = document.getElementById("linkInput")
var submitLink = document.getElementById("submitLink")

submitLink.addEventListener('click', () => {
    var link = longLink.val()
    console.log(link)
    $.ajax({
        url: "https://api.shrtco.de/v2/shorten?url=" + link + ".org/very/long/link.html"
    },
        function () {
            console.log(result.short_link)
        }
    )

})