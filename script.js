//პირველი დავალება
function comparison(a, b) {
  if (a === b) {
    console.log("ტოლია");
  } else {
    console.log("არ არის ტოლი");
  }
}

console.log(comparison(11, 4));

//მეორე დავალება

function farengeightToCelsius(fr) {
  if (typeof fr === "number") {
    console.log(`${fr} ფარენგეიტი უდრის ${((fr - 32) * 5) / 9} ცელსიუსს`);
  } else {
    console.log("false");
  }
}

console.log(farengeightToCelsius(14));

//მესამე დავალება

function foo(a, b, operation) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("a და b უნდა იყოს ციფრები");
  }

  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        console.log("error");
      }
    default:
      console.log("error");
  }
}

console.log(foo(5, 3, "+"));
