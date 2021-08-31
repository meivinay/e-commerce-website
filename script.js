let catDiv = document.querySelectorAll(".categories div");
let featDiv = document.querySelectorAll(".featured-group");
let lastCatActive = catDiv[0];
lastCatActive.classList.add("tri-active","selected");
let lastFeatActive = featDiv[0]
lastFeatActive.classList.add("feat-active","selected");

setTimeout(() => {
    console.log("discount")
}, 10000);

for(let i =0;i<catDiv.length;i++){
    catDiv[i].addEventListener("click",(e)=>{
        lastCatActive.classList.remove("tri-active","selected");
        e.currentTarget.classList.add("tri-active","selected");
        lastCatActive = e.currentTarget;
    })
}

for(let i=0;i<featDiv.length;i++){
    featDiv[i].addEventListener("click",(e)=>{
        lastFeatActive.classList.remove("feat-active","selected");
        e.currentTarget.classList.add("feat-active","selected");
        lastFeatActive = e.currentTarget;
    })
}

