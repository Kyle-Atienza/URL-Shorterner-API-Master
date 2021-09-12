//nav toggler
const toggler = document.getElementById("nav-toggler") //toggler icon
const nav = document.getElementById("nav-header") //navigation links

toggler.addEventListener('click', () => {
    nav.classList.toggle("show")

})


var linkInput = document.getElementById("linkInput") //input link
var submitLink = document.getElementById("submitLink") //submit button
var loader = document.getElementById("loader") //loader shows when waiting for ajax
var error = document.getElementById("warningText") //warning text

var cards = document.getElementById("resultLinkContainer") //cards container
var outputCard = cards.children //container for output cards
var cardCounter = 1; //counter for shortened links

submitLink.addEventListener('click', () => {
    var longLink = $("#linkInput").val()
    var link = "https://api.shrtco.de/v2/shorten?url=" + longLink

    //loading started
    loader.style.display = "grid";

    $.ajax({
        url: link,
        success: function (data) {
            var shortLink = data.result.short_link

            // loading finish
            loader.style.display = "none"

            //add card result
            addLinkResult(longLink, shortLink)
            cardCounter++

            error.innerHTML = ""
            linkInput.classList.remove("error")

            for (let i = 0; i < outputCard.length; i++) {
                var currentCard = outputCard[i]
                var copyBtn = currentCard.querySelector("#copyLink")
                var link = currentCard.querySelector('.short-link').innerHTML

                var clipboard = new ClipboardJS(copyBtn)

            }
        },
        error: function () {
            console.log("error")
            error.innerHTML = "Invalid Input"

            // loading finish
            loader.style.display = "none"

            linkInput.classList.add("error")
        }
    })

})





function addLinkResult(long, short) {

    var resultCard =
        `<div class="output">
            <h3 class="long-link">${long}</h3>
            <h3 class="short-link" id="toCopy${cardCounter}">${short}</h3>
            <button id="copyLink" data-clipboard-target="#toCopy${cardCounter}">Copy</button>
        </div>`

    cards.insertAdjacentHTML('beforeend', resultCard)

}

console.log(cards.children)

for (let i = 0; i < outputCard.length; i++) {
    var currentCard = outputCard[i]
    var copyBtn = currentCard.querySelector("#copyLink")

    var link = currentCard.querySelector('.short-link').innerHTML

    var clipboard = new ClipboardJS(copyBtn)

    console.log(link)
}

function setShorteningError(errorCode) {
    switch (errorCode) {
        case 1:
            return "URL is empty"
            break;
        case 2:
            return "Invalid URL"
            break;
        case 3:
            return "Wait a second, try again"
            break;
        case 4:
            return "IP is violating our terms of service"
            break;
        case 5:
            return "shortcode code already taken"
            break;
        case 6:
            return "Uknown error"
            break;
        case 7:
            return "No code specified"
            break;
        case 8:
            return "Invalid Code"
            break;
        case 9:
            return "Missing required parameters"
            break;
        case 10:
            return "Trying to shorten a disallowed link"
            break;
        default:
            break;
    }
}