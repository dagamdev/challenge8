const iconBurger = document.querySelector("#icon__burger");
const menu = document.querySelector("#menu");

iconBurger.addEventListener("click", function () {
    menu.classList.toggle("show__menu");
});


const list = document.querySelectorAll("#menu .list")

list.forEach((item)=> {
    item.addEventListener("click", ()=>{
        list.forEach((itemTwo) => {
            itemTwo.classList.remove("active")
        })
        item.classList.add("active")
    })
})

const nav = document.querySelector("nav")
document.addEventListener("scroll", () => {
    nav.classList.toggle("active", window.scrollY > 200)
})