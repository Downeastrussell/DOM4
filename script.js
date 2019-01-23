
document.querySelector(".article__header").innerHTML = "Welcome to the Russell Miller Blog";


const header = document.querySelectorAll(".article__header")
for(i=0; i<header.length; i++){

        header[i].classList.add("important");

}

document.querySelector(".aside_box--dark").classList.remove("dashed");

document.querySelector(".article__footer").classList.add("goldenrod");