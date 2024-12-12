const btnRandom = document.querySelector("#random-btn");

function mover(btn){
    btn.style.fontWeight="bold";
    btn.style.position="absolute";
    btn.style.top= Math.floor(Math.random() * 85 + 5) + "%";
    btn.style.left= Math.floor(Math.random() * 85 + 5) + "%";
}

btnRandom.addEventListener("mouseenter", function (e) {
    mover(e.target)
})