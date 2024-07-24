const burger = document.getElementById("burger");
const menu = document.getElementById("burger__tree");
let flag = false;
burger.addEventListener("click", () => {
    if (!flag) {
        menu.style.opacity = 1;
        flag = true;
        console.log(flag);
    } else {
        menu.style.opacity = 0;
        flag = false;
        console.log(flag);
    }
})