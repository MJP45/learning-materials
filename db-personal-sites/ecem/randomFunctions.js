var facts = [
  "When I was little, I used to wee in the garden because I saw the dog do it and I thought this made it okay.",
  "My favourite desserts are apple crumble, carrot cake and anything dark chocolate!",
  "I'm obsessed with The Joker and my favourite movie is The Dark Knight.",
  "I recently went paragliding off a mountain over 10,000 feet high.",
  "I really want to go sky diving!",
  "I've been to Aucshwitz twice...",
  "I love running and weight training.",
  "I have never been to university.",
  "I once got headbutted at a concert and had a massive nose bleed in the middle of the crowd.",
  "Black olives are the best olives and if you disagree then you are wrong.",
  "Growing up, I was obsessed with online computer games. It went from Club Penguin to Guild Wars 2"
];

function newFact() {
var randomNumber = Math.floor(Math.random() * (facts.length)); 

// Math randomk will always be decimal between 0 and 1 but math floor is always rounding down to the nearest decimal.

document.getElementById('factDisplay').innerHTML = facts[randomNumber];

}
