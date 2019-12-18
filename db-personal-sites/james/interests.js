function changeSelection(i) {
  const old_box = document.querySelector('div.active');
  const new_box = document.querySelector('.contents'+i);
  const old_selector = document.querySelector('.chosen');
  const new_selector = document.querySelector('.selector'+i);
  
  //Hide old
  old_box.style.display = "none";
  //toggle active class
  old_box.classList.toggle('active');

  //Update links
  old_selector.classList.toggle('chosen');
  new_selector.classList.toggle('chosen');

  //Show new
  new_box.style.display = "inline-block";
  new_box.classList.toggle('active');
}

function calculatePoints() {
  const button = document.querySelector('a.calculator_button');
  const txt_box = document.querySelector('p.calculated_txt');

  //Toggle status of button & calculation
  button.classList.toggle('clicked');
  
  if (button.classList.contains('clicked')){
    //Update style
    button.style.backgroundColor = '#f5f0f0';
    button.style.color = '#000000';
    button.textContent = 'Calculated - Click again to reset!';
    //Count checked score
    boxes =document.querySelectorAll("input[type='checkbox']");
    var checked_sum = 0
    for(var i = 0; i < boxes.length; i++) {
      if (boxes[i].checked==true){
        checked_sum += Number(boxes[i].value); //Need to convert checkbox value (string) to integer
        }
    } 
    //Create witty case statements
    var witty_text
    switch (true){
      case checked_sum == 0:
        witty_text = 'Looks like there will be some awkward silences ahead...';
        break;
      case checked_sum<50 && checked_sum>0:
        witty_text = "We have some things to talk about, it won't be so bad.";
        break;
      case checked_sum>50 && checked_sum<100:
        witty_text = "This is great! We have plenty to discuss!";
        break;
      case checked_sum == 100:
        witty_text = "This has never happened before and I'm lost for words...";
        break;
    }
    //Update text box
    txt_box.textContent = 'We have ' + checked_sum + '% of my interests in common! ' + witty_text;
  } else {
    //Update style
    button.style.backgroundColor = '#000000';
    button.style.color = '#f5f0f0';
    button.textContent = 'Click to calculate!';
    
    //Update text box
    txt_box.textContent ='Select items in the box above to see how much we have in common!'

    //Return to default contents (instructions)
    document.querySelector('div.active').style.display = 'none';
    document.querySelector('div.active').classList.toggle('active');
    document.querySelector('div.contents').style.display = 'inline-block';
    document.querySelector('div.contents').classList.toggle('active');

    //Correct highlighted link class
    document.querySelector('.chosen').classList.toggle('chosen');
    document.querySelector('div.gallery.box').classList.toggle('chosen');
    //Reset all check boxes
    boxes =document.querySelectorAll("input[type='checkbox']");
    for(var i = 0; i < boxes.length; i++) {
      boxes[i].checked = false;   
  }
  }
}
