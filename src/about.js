import aboutpicture from './images/pizza-banner.jpg'

function createAboutPage() {
  let text;
  let heading = document.createElement("h1");
  heading.setAttribute("id", "about-heading");
  heading.textContent = "ABOUT US";
  let aboutpic = new Image();
  aboutpic.src = aboutpicture;
  let content = document.querySelector("#content");
  let div = document.createElement("div");
  div.appendChild(heading);
  div.setAttribute("id", "about");
  let para = document.createElement("p");
  para.textContent = "\
What’s better than having a crispy melty pizza, you ask?\
Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.\
With PIZZARIA it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.\
There is something for everyone here. The vegetarians, non-vegetarians, the sides’ lovers and also the ones who love to have something sweet by the time they reach the last bite of the last slice of pizza slice.";
  div.appendChild(aboutpic);
  div.appendChild(para);
  content.appendChild(div);
}

export default createAboutPage;