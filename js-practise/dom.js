// Capitalise first letter => map
//      make all uppercase - new map function
// Filter by length => filter
//      filter by is first letter a vowel
// Increase name count => filter
//      Print names to html => foreach, doc.getid, innerhtmls


let topDistance = 25;
let bottomDistance = 25;
let leftDistance = 25;
let rightDistance = 25;
const square = document.getElementById('div');
square.style.top = topDistance + "vh";
square.style.bottom = bottomDistance + "vh";
square.style.left = leftDistance + "vw";
square.style.right = rightDistance + "vw";

document.addEventListener('keyup', event => {
  if (event.which === 38) {
    square.style.top = --topDistance + "vh";
    square.style.backgroundColor = "pink";
  } else if (event.which === 40) {
    square.style.top = ++topDistance + "vh";
    square.style.backgroundColor = "orange";
  } else if (event.which === 37) {
    square.style.left = --leftDistance + "vw";
    square.style.backgroundColor = "purple";
  } else if (event.which === 39) {
    square.style.left = ++leftDistance + "vw";
    square.style.backgroundColor = "black";
  }
  console.log(leftDistance, topDistance)
});



const dbNames = [
  "ollie",
  "james",
  "harry",
  "dervla",
  "diella",
  "simon",
  "max",
  "shea",
  "barb",
  "catherine",
  "mark",
  "sofia",
  "phil",
  "ecem"
];

const namesElement = document.getElementById('names');

// namesElement.innerHTML = `<p>hello this is some html inserted via JS</p>`


const getNameHtml = name => {
  // return `<p>${name}</p>`
};

// namesElement.innerHTML = getNameHtml("barry");


const addName = () => {
  const inputValue = document.getElementById("nameInput").value;
  dbNames.push(inputValue);
  updateHtml(inputValue);
}

const updateHtml = (name) => {
  namesElement.innerHTML += `<p>${name}</p>`
}

// dbNames.forEach(updateHtml)  




const capitaliseString = string => {
  return string[0].toUpperCase() + string.substring(1);
};

const capitaliseName = string => {
  return string.toUpperCase();
};

const filterNamesByLength = names => {
  let filteredNames = [];
  for (const name of names) {
    if (name.length < 5) {
      filteredNames.push(name);
    }
  }
  return filteredNames;
};
// console.log(filterNamesByLength(dbNames));

const checkStringLength = string => {
  return string.length < 5;
};
const shortNames = dbNames.filter(checkStringLength);

const findS = string => {
  return string[0] === "s";
};

const sNames = dbNames.filter(findS);
// console.log(sNames);

// console.log(shortNames);
// const upperNames = dbNames.map(capitaliseName);
// console.log(upperNames);
// const newNames = dbNames.map(capitaliseString);
// console.log(newNames);