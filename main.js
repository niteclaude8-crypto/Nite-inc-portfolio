const body = document.querySelector("body")
const headerLinks = document.querySelectorAll("header a")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
const bar = document.querySelector(".navbar")
const close = document.querySelector(".close")
const links = document.querySelectorAll("nav a")
const nav = document.querySelector("nav")

bar.addEventListener('click', ()=>{
    nav.classList.add("nav-appear")
})

close.addEventListener('click', ()=>{
    nav.classList.remove("nav-appear")
})

links.forEach((a)=>{
    a.addEventListener('click', ()=>{
    nav.classList.remove("nav-appear")
})
})

moon.addEventListener('click',()=>{
    body.classList.add("moon-set")
    sun.style.display = "block"
    moon.style.display = "none"
})

headerLinks.forEach((a)=>{
    moon.addEventListener('click',()=>{
    a.style.color = "white"
})
    
})

sun.addEventListener('click',()=>{
    body.classList.remove("moon-set")
    sun.style.display = "none"
    moon.style.display = "block"
})

headerLinks.forEach((a)=>{
    sun.addEventListener('click',()=>{
    a.style.color = "black"
})
    
})