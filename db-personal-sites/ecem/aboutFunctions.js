//Countdown till Nology finish line for about page 

var countDownDate = new Date("Dec 16, 2019 00:00:00").getTime();
// Setting date for when we finish Nology 
// getTime() method returns the numeric value corresponding to the time for the specified date according to universal time.
var x = setInterval(function() {
// This ensures that the countdown updates every second 
var now = new Date().getTime();
// Setting today's date 

var timeLeft = now - countDownDate;


// These are calculations for the countdown 
var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "DEUTSCHE BANK HERE WE COME!";
  }
}, 1000);