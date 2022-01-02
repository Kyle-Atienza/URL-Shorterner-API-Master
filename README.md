# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![desktop](https://user-images.githubusercontent.com/60304502/132984762-21437c5c-3e85-4283-8349-503c3001969a.png)


### Links

- Solution URL: [Github Repository](https://github.com/Kyle-Atienza/URL-Shorterner-API-Master)
- Live Site URL: [Netlify Website](https://kyle-fem-shorten-url.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - CSS pre-processor

#### Libraries

- [ClipboardJS](https://clipboardjs.com/) - Copy to lipboard library

#### API

- [Shrtcode](https://shrtco.de/) - URL shortener

### What I learned

#### AJAX

With this project it helped me to have a more deeper understandting about ajax requests, using the API with ajax to fetch the data.

#### New JavaScript Methods and Funtions

Adding contents within a container using insertAdjacentHTML
as seen here in my code:
```js
function addLinkResult(long, short) {

    var resultCard =
        `<div class="output">
            <h3 class="long-link">${long}</h3>
            <h3 class="short-link" id="toCopy${cardCounter}">${short}</h3>
            <button id="copyLink" data-clipboard-target="#toCopy${cardCounter}">Copy</button>
        </div>`

    cards.insertAdjacentHTML('beforeend', resultCard)
}
```
I did not use append, because it does not work in an empty container, instead insertAdjacentHTML inserts an element depending in the position you specified relative to the container you wnat it to be inserted.

### Continued development

One thing that i have not properly implemented is displaying the corresponding error message, I cant seem to fetch the data for code errors from shrtcode that tells what the specific reason for an error.

## Author

- Website - [Kyle Atienza](https://kyle-atienza-portfolio.netlify.app/)
- Frontend Mentor - [@Kyle-Atienza](https://www.frontendmentor.io/profile/Kyle-Atienza)
- Twitter - [@AtienzaKyle](https://twitter.com/AtienzaKyle)

