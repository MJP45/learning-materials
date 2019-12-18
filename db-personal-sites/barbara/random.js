function myFunction() {
  var person = prompt("Please enter your name");
  if (person != null) {
    document.getElementById("response").innerHTML = "Hello " + person + "! Welcome to my page. Happy scrolling :)";
    document.getElementById("hello").style.display = 'none';
  }
}

function GetFact()
{
    var myfacts = new Array("I studied primate bones in Mexico.","I studied brain regeneration in Germany.","I studied bacterial resistance in Croatia.", "So far I had one boxing match.", "I love martial arts.", "I train wrestling.", "I love building Gundam robot models.", "Honey badgers are the best.", "I love tacos.", "I don't like chocolate.");
    var random = myfacts[Math.floor(Math.random() * myfacts.length)];
    document.getElementById("message").innerHTML = random;
}