//javascript 

// author and description of page
let user = {
  name: 'Dervla', //key: value
  email: 'hydervla@hotmail.com',
  location: 'London',
  blogs: [
      { title: 'About me', likes: 30 },
      { title: '_nology', likes: 50 },
      { title: 'Favourites', likes: 50 }
  ],
  login(){ 
      console.log('the user logged in'); 
  },
  logout(){
      console.log('the user logged out');
  },
  logBlogs(){
      console.log('the user has written the following blogs:');
      this.blogs.forEach(blog => {
          console.log(blog.title, blog.likes);
      }) 
  }
};

//user input and personalised message
//greets user in the console

var username = null; 

function changeWelcome(){
    const username = window.prompt("Add your own username!", "please type a username here...");
    console.log(username);
    const welcome = document.querySelector('.welcomeMessage');
    if (username != null){
        welcome.innerText = `Welcome to my website, ${username}!`;
        user.login(); 
        console.log(user);
        function greet(){
            console.log(`Hello there ${username}, welcome to Dervla's website`);
          }
        greet();
    } 
};

console.log(username);

//slideshow feature on homepage
let slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Changes image every 2 seconds
}

//submitting the email form on the homepage
function submitFunction(){
    alert("Thank you for submitting your email! I'll be in touch.");
}


