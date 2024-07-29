import './style.css';
import pizzapic1 from './images/pizza-pic1.jpg';
import pizzapic2 from './images/pizza-pic2.jpg';
import pizzapic3 from './images/pizza-pic3.jpg';
import background from './images/kitchen.jpg'

let bannerpic1 = new Image();
bannerpic1.src = pizzapic1;
let bannerpic2 = new Image();
bannerpic2.src = pizzapic2;
let bannerpic3 = new Image();
bannerpic3.src = pizzapic3;

function createHomePage() {
  let body = document.querySelector("body");
  body.setAttribute("style", `background-image: url(${background})`);

  let content = document.querySelector("#content");

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
  alcolades.appendChild(alcolade.cloneNode("true"));
  alcolades.appendChild(alcolade.cloneNode("true"));

  content.appendChild(alcolades);
}


createHomePage();