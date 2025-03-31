let result = 5 / 0;

function divbyzero(result) {
  try {
    if (result === Infinity || result === -Infinity) {
      throw new Error("Custom Error: Division by zero.");
    }
    return result;
  } catch (error) {
     console.error(error.message);
     return "Please dont divide by zero to avoid this error";
  }
}

console.log(divbyzero(result)); 