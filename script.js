// selection de l element CSS  screen et btn
let screen = document.querySelector("#screen");
//console.log(screen)
let btn = document.querySelectorAll(".btn");
// parcourir un tableau des btn + recuperer l action click de chaque btn
for (let item of btn) {
    item.addEventListener("click", (e) => {
    e.preventDefault();
    // L'objet événement renvoyé sera transmis à la fonction de rappel () en tant que paramètre appelé e
    let btnText = e.target.innerText;
    // console.log(e.target);
    // event.target renvoie l'élément DOM qui a déclenché un événement spécifique,
    if (btnText == "x") {
        btnText = "*";
    }
    if (btnText == "÷") {
        btnText = "/";
    }
    if (btnText == "+") {
        btnText = "+";
    }
    if (btnText == "-") {
        btnText = "-";
    }
    screen.value += btnText;
    console.log(btnText);
    });
}
// creation des fonctions + appel des fonctions

function sin() {
    screen.value = Math.sin(screen.value);
}
function cost() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
  // renvoie une valeur numérique qui représente la tangente d'un angle.
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
  screen.value = Math.sqrt(screen.value, 2); // root
}
function log() {
    screen.value = Math.log(screen.value, 2);
}
function pi() {
    screen.value = 3.14159265359;
}
function e() {
    screen.value = 2.71828182846; // nombre d'Euler
}
function getRandom() {
    screen.value = Math.random(screen.value);
}
function backSpace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
  // supprime le dernier chiffre
}
function changeColor() {
    screen.style.color = "red";
    screen.style.background = "yellow";
    screen.style.fontWeight = "bold";
}



// changement d etat d un objet appelé evennement
// Nous pouvons obtenir l'élément qui déclenche l'événement.
/* grace event.target : Nous pouvons accéder aux propriétés et aux attributs de l'élément.
Nous pouvons modifier certaines propriétés et styles de l'élément HTML. */









// creation de  HTML
// 1 ere partie : screen

/*
let div = document.createElement("div");
div.className = "container";
document.body.appendChild(div);

//console.log(document.body.appendChild(div));  div=container
let h1 = document.createElement("h1");
h1.textContent = "calculatrice JS";
div.appendChild(h1);
document.body.appendChild(div);
//console.log(document.body.appendChild(div));  h1
let div1 = document.createElement("div");
div1.className = "col";
div.appendChild(div1);
//console.log(document.body.appendChild(div));  div=col
let input = document.createElement("input");
input.id = "screen";
div1.appendChild(input);
//console.log(document.body.appenchild(div1));  input = screen
let type = document.querySelector("#screen");
type.setAttribute("type", "text"); // set les valeurs
type.setAttribute("placeholder", "0");
//console.log(type.setAttribute("type", "text"));
// 2 eme partie : le clavier

let div2 = document.createElement("div");
div2.className = "btns";
div.appendChild(div2);
document.body.appendChild(div2); // div = btns

let div3 = document.createElement("div");
div3.className = "row";
div2.appendChild(div3);
let btn1 = document.createElement('button');
btn1.className = 'btn';
div3.appendChild(btn1);


const tab = [
    {
    1: {id: "back",onclick: "backSpace()"},
    2: { onclick: "getRandom()"},
    3: { class: "btn"},
    4: {class: "btn"},
    5: { class: "btn"},
    6: { class: "btn" },
    }
];
let btns = document.querySelector('.btns');
let docFrag = document.createDocumentFragment();
function elements(tab) {
    for (let row of tab) {
        console.log(row);
        for (let [key, value] of Object.entries(row)) {
        //console.log(key, value)
        let button = document.createElement('button');
        button.textContent = button;
        docFrag.append(button);
            }
    
        }
        
        
    }
    elements(tab)
    btns.appendChild(docFrag);



    */
