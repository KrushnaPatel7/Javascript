// Module Pattern using IIFE(Immediately Invoke Function Expression)
export let myModule = (function () {
  let privateVariable = "I am private variable";

  function privateFunction() {
    console.log("This is private function");
  }
  return {
    publicFunction: function () {
      console.log("I am public function");
      privateFunction();
      console.log(privateVariable);
    },

    getPrivateVariable: function () {
      return privateVariable;
    },

    // Public setter to modify private variable
    setPrivateVariable: function (value) {
      privateVariable = value;
    },
  };
})();

// myModule.publicFunction();

// console.log(myModule.privateVariable); //will give undefined
// //myModule.privateFunction(); //error not a function

// console.log(myModule.getPrivateVariable());
// // Changing private variable using setter
// myModule.setPrivateVariable("New private variable");
// console.log(myModule.getPrivateVariable());
