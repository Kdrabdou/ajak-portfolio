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

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked');
    }
});





let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');
function activerMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activerMenu();
window.addEventListener("scroll", activerMenu);


const header = document.querySelector("header");
const home = document.querySelector(".top");
window.addEventListener("scroll", function(){
    header.classList.toggle("stricky", this.window.scrollY > 50);
    home.classList.toggle("haut", this.window.scrollY > 50);
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
    couleurContent.classList.remove('afficheclr');
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollbottom = document.querySelectorAll(".scroll-bottom");
scrollbottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


var mixer = mixitup('.portfolio-gallery');


// gestion des couleur

let btnCouleur = document.querySelector('.couleur'),
    couleurContent = document.querySelector('.clrcontent'),
    couleur1 = document.querySelector('.couleur1'),
    couleur2 = document.querySelector('.couleur2'),
    couleur3 = document.querySelector('.couleur3');

btnCouleur.addEventListener('click', ()=>{
    couleurContent.classList.toggle('afficheclr');
});  
function ChangerCouleur(color){
    document.documentElement.style.setProperty('--hover-color', color);
    document.documentElement.style.setProperty('--mon-box-shadow', '0 0 .5rem' + color);
    btnCouleur.style.backgroundColor = color;
    couleurContent.classList.remove('afficheclr');
    localStorage.setItem("selcteColor", color);
}
window.onload = function(){
    let saveColor = localStorage.getItem("selcteColor");
    if(saveColor){
        document.documentElement.style.setProperty('--hover-color',saveColor);
        btnCouleur.style.backgroundColor = saveColor;
        document.documentElement.style.setProperty('--mon-box-shadow', '0 0 .5rem' + saveColor);
    }
}


// traitement du formulaire pour la recuperration des messages

emailjs.init("ocIC_JSOWrZ1F2FY8");
document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        adress : document.getElementById('adress').value,
        phone : document.getElementById('phone').value,
        message : document.getElementById('message').value,
    };

    // envoie de message

    emailjs.send("service_7f4vv2c", "template_aubq0ag", formData).then(() => {
        alert('Message envoiyé avec succès');
    }).catch((error) => {
        console.error("Erreur lors de l'envoie du message : ", error);
        alert('Une erreur s\'est produit. Veuillez ressayee !');
    });
});

