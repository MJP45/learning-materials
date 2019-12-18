
//-------------------------------------------------------------------------------
// Display the current selected Item swapping out the content with this content
// index = element in the interests array to show
//-------------------------------------------------------------------------------

    const displayInterest= index =>{

        //make sure index is not out of bounds
        if(index > interests.length || interests < 0){
            return
        };

        //get reference to the heading tag

        const h2 = document.querySelector('h2.secondary_text');
        h2.innerText = interests[index].heading;

        // get reference to the p tag where our narrative will be shown

        const para = document.querySelector('.sectionWrapper p');
        para.innerHTML = interests[index].narrative;

        //display any images

        const ul = document.querySelector('.sectionWrapper ul');
        ul.innerHTML = ""

            interests[index].images.forEach(image =>{
                         
            const li = `<li><img src="${image.src}" alt="${image.alt}>"</li>`

            ul.innerHTML += li;


        })
    }

    
//-------------------------------------------------------------------------------
// show how many items there are and where our current place is
// and if at the end "disable" the nav button 
// and if at the first item"disable" the nav button 
//-------------------------------------------------------------------------------

  updateNavigation=()=>{
    
    const span = document.querySelector('nav span');
    span.innerText = `${selectedIndex + 1} of ${interests.length}`
        
    const prev = document.querySelector('.navButtonPrevious');
    prev.classList.remove('navButtonDisabled')

    const next = document.querySelector('.navButtonNext');
    next.classList.remove('navButtonDisabled')

    if(selectedIndex==0){
        prev.classList.add('navButtonDisabled')
    };

    if(selectedIndex == interests.length -1){
        next.classList.add('navButtonDisabled')
     };
  }  

//-------------------------------------------------------------------------------
// Respond to the next button being clicked - move to the next item in our
// data set 
//-------------------------------------------------------------------------------

 onNextClicked=()=>{
  //  console.log("nextClicked")

  
    selectedIndex++;
    
    selectedIndex = selectedIndex >= interests.length ? interests.length-1 : selectedIndex;
    
    displayInterest(selectedIndex);
    updateNavigation();
};


//-------------------------------------------------------------------------------
// Respond to the previous button being clicked - move to the previous item in our
// data set 
//-------------------------------------------------------------------------------

onPreviousClicked=()=>{

  //  console.log("previousClicked")
    
    selectedIndex--;

    selectedIndex = selectedIndex < 0 ? 0 :selectedIndex;
      
    displayInterest(selectedIndex);
    updateNavigation();
};

//-------------------------------------------------------------------------------
// when the window loads show the first item
//-------------------------------------------------------------------------------
window.onload=function(){
    console.log("I have loaded");
    
    // initialize our data
    initializeData();
    
    displayInterest(selectedIndex);

    updateNavigation();


}