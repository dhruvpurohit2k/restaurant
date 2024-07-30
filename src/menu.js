import img1 from "./images/menu/menu-item1.png"
import img2 from "./images/menu/menu-item2.png"
import img3 from "./images/menu/menu-item3.png"
import img4 from "./images/menu/menu-item4.png"
import img5 from "./images/menu/menu-item5.png"
import img6 from "./images/menu/menu-item6.png"

let listOfFood = [
  [img1, "Chicken Golden Delight", "Barbeque chicken with a topping of golden corn loaded with extra cheese.", "4$"],
  [img2, "Non Veg Supreme", "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers", "4.5$"]
  , [img3, "Chicken Dominator", "Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers", "5$"]
  , [img4, "Pepper Barbecue and Onion", "Pepper Barbecue Chicken | Onion", "3.5$"]
  , [img5, "Pepper Barbecue chicken", "Pepper Barbecue Chicken I Cheese", "3.5$"]
  , [img6, "Chicken Sausge", "Chicken Sausage and Cheese", "3.5%"]
];

function createMenuPage() {
  let content = document.querySelector("#content");
  let text = document.createElement("p");
  text.textContent = "MENU";
  text.setAttribute("class", "menu-header");
  content.appendChild(text.cloneNode(true));
  let menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  let menuItem = document.createElement("div");
  menuItem.setAttribute("class", "menu-item");
  let menuItemImage = new Image();
  let menuItemDesription = document.createElement("ul");
  let menuItemDesriptionListItem = document.createElement("LI");
  listOfFood.forEach(item => {
    menuItemImage.src = item[0];
    menuItemImage.setAttribute("class", "menu-item-image");
    menuItem.appendChild(menuItemImage.cloneNode("true"));
    menuItemDesription.setAttribute("class", "menu-item-description");
    menuItemDesriptionListItem.textContent = item[1];
    menuItemDesription.appendChild(menuItemDesriptionListItem.cloneNode("true"));
    menuItemDesriptionListItem.textContent = item[2];
    menuItemDesription.appendChild(menuItemDesriptionListItem.cloneNode("true"));
    menuItemDesriptionListItem.textContent = item[3];
    menuItemDesription.appendChild(menuItemDesriptionListItem.cloneNode("true"));
    menuItem.appendChild(menuItemDesription.cloneNode("true"));
    menu.appendChild(menuItem.cloneNode("true"));
    menuItem.innerHTML = "";
    menuItemDesription.innerHTML = "";
  })
  content.appendChild(menu);


}

export default createMenuPage;