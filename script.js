//nav toggler
const toggler = document.getElementById("nav-toggler")
const nav = document.getElementById("nav-header")

toggler.addEventListener('click', () => {
    // nav.classList.toggle("hide")
    nav.style.display = nav.style.display === 'none' ? '' : 'none'
})