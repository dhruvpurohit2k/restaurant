import createAboutPage from './about';
import './index-style.css';
import pizzapic1 from './images/pizza-pic1.jpg';
import pizzapic2 from './images/pizza-pic2.jpg';
import pizzapic3 from './images/pizza-pic3.jpg';
import background from './images/kitchen.jpg'
import createMenuPage from './menu';

let bannerpic1 = new Image();
bannerpic1.src = pizzapic1;
let bannerpic2 = new Image();
bannerpic2.src = pizzapic2;
let bannerpic3 = new Image();
bannerpic3.src = pizzapic3;

let home = document.querySelectorAll("nav button")[0];
let menu = document.querySelectorAll("nav button")[1];
let about = document.querySelectorAll("nav button")[2];
let body = document.querySelector("body");
body.setAttribute("style", `background-image: url(${background})`);
let content = document.querySelector("#content");
function createHomePage() {
  let banner = document.createElement("div");
  banner.setAttribute("id", "banner");
  let div = document.createElement("div");
  div.setAttribute("class", "image-card");
  banner.appendChild(div.cloneNode(true))
  banner.appendChild(div.cloneNode(true))
  banner.appendChild(div.cloneNode(true))
  let div_list = banner.querySelectorAll("div");
  div_list[0].appendChild(bannerpic1);
  div_list[1].appendChild(bannerpic2);
  div_list[2].appendChild(bannerpic3);

  content.appendChild(banner);

  let alcolades = document.createElement("div");
  alcolades.setAttribute("id", "alcolades");
  let alcolade = document.createElement("p");
  alcolade.textContent = "The Best Pizza in New Delhi";
  alcolades.appendChild(alcolade.cloneNode("true"));
  alcolade.textContent = "Dine-in at the Top-rated Authentic Restaurant";
  alcolades.appendChild(alcolade.cloneNode("true"));
  alcolade.textContent = "Late Night Food Delivery in New Delhi";
  alcolades.appendChild(alcolade.cloneNode("true"));

  content.appendChild(alcolades);
}


createHomePage();
about.addEventListener("click", () => {
  content.innerHTML = "";
  createAboutPage();
})
home.addEventListener("click", () => {
  content.innerHTML = "";
  createHomePage();
})
menu.addEventListener("click", () => {
  content.innerHTML = "";
  createMenuPage();
})