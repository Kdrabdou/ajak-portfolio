let words = document.querySelectorAll('.word');
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentwordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentwordIndex].style.opacity = "1";
let changeText = () =>{
    let currenword = words[currentwordIndex];
    let nextWord = currentwordIndex === maxWordIndex ? words[0] : words[currentwordIndex + 1];

    Array.from(currenword.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentwordIndex = currentwordIndex === maxWordIndex ? 0 : currentwordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');
function activerMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {
        menuLi.forEach(sec => sec.classList.remove("active"));
        menuLi[len].classList.add("active");
    }
}
activerMenu();
window.addEventListener("scroll", activerMenu);


const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("stricky", this.window.scrollY > 50);
});


let menuIcoon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcoon.onclick = () =>{
    if(menuIcoon.classList.contains("fa-bars")){
        menuIcoon.classList.remove("fa-bars");
        menuIcoon.classList.add("fa-times");
    }else{
        menuIcoon.classList.add("fa-bars");
        menuIcoon.classList.remove("fa-times");
    }
    navlist.classList.toggle("open");
}
window.onscroll = () =>{
    menuIcoon.classList.remove("fa-times");
    menuIcoon.classList.add("fa-bars");
    navlist.classList.remove("open");
}