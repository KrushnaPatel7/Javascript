const parentDiv = document.getElementById("parent");
const button = document.getElementById("child");
const button1 = document.getElementById("innerchild");

button1.addEventListener("click", () => {
  console.log("Button 1 clicked (capturing)");
});

button.addEventListener(
  "click",
  () => {
    console.log("Button clicked (capturing)");
  }
  // true
);

parentDiv.addEventListener(
  "click",
  () => {
    console.log("Parent Div Clicked(capturing)");
  },
  true
);
