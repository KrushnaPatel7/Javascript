const parentDiv = document.getElementById("parent");
const button = document.getElementById("child");

button.addEventListener(
  "click",
  () => {
    console.log("Button clicked (capturing");
  },
  true
);

parentDiv.addEventListener(
  "click",
  () => {
    console.log("Parent Div Clicked(capturing)");
  },
  true
);
