let catDiv = document.querySelectorAll(".categories div");
let featDiv = document.querySelectorAll(".featured-group");
let popUp = document.querySelector("#pop-up");
let popUpBtn = document.querySelector("#close-pop-up")

let contactUsBtn = document.querySelector("#footer-contact-us");
let aboutUsBtn = document.querySelector("#footer-about-us")

contactUsBtn.addEventListener("click",()=>{
    window.location = "https://www.linkedin.com/in/vinaytanwar96/"
})

aboutUsBtn.addEventListener("click",()=>{
    window.location = "https://drive.google.com/file/d/1JqREZrn9ZFNWoH8tjf6LQnKshDaTf22O/view?usp=sharing"
})

let lastCatActive = catDiv[0];
lastCatActive.classList.add("tri-active","selected");
lastCatActive.style.color = "white";

let lastFeatActive = featDiv[0]
lastFeatActive.classList.add("feat-active","selected");
lastFeatActive.style.color = "white";

window.scroll(0, 0)
setTimeout(() => {
    popUp.style.visibility="visible"
    popUp.addEventListener("click",()=>{
        window.location = "https://github.com/meivinay";
    })
    popUpBtn.addEventListener("click",(e)=>{
        e.stopPropagation()
        document.querySelector("#pop-up").remove();
    })
}, 10000);
for(let i =0;i<catDiv.length;i++){
    catDiv[i].addEventListener("click",(e)=>{
        lastCatActive.classList.remove("tri-active","selected");
        lastCatActive.style.color="black";

        e.currentTarget.classList.add("tri-active","selected");
        lastCatActive = e.currentTarget;
        lastCatActive.style.color="white";

    })
}

for(let i=0;i<featDiv.length;i++){
    featDiv[i].addEventListener("click",(e)=>{
        lastFeatActive.classList.remove("feat-active","selected");
        lastFeatActive.style.color="black";
        e.currentTarget.classList.add("feat-active","selected");
        e.currentTarget.style.color = "white";
        lastFeatActive = e.currentTarget;
    })
}

