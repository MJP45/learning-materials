function removeCurtain(){
    const curtain = document.querySelector('.curtain');
    console.log(curtain);
    curtain.classList.toggle('fade');
    setTimeout(hide, 2000, curtain);
    console.log('JAMES')
    document.querySelector('html').style.backgroundColor = "#2e2e2e";
    
}

function hide(selected_div){
    selected_div.style.display = "none"; //Hide curtain
    //document.querySelector('html').setAttribute('class','end');
    // document.querySelector('article').style.display = "block";
    // document.querySelector('footer').style.display = "block";
}