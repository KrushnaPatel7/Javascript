let arr = [1, 2, 3];
//console.log(arr[4]);

function array(arr, index) {
  try {
    if (index < 0 || index >= arr.length) {
      throw new Error("Custom Error: Array index is out of bounds.");
    }
    return arr[index];
  } catch (error) {
    console.error(error.message);
    return "Please access element within the range";
  }
}

console.log(array(arr, 5));  
