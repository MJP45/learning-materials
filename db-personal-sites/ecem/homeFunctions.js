function switchVisible() {
    if (document.getElementById('homeLeftDiv')) {

        if (document.getElementById('homeLeftDiv').style.display == 'none') {
            document.getElementById('homeLeftDiv').style.display = 'block';
            document.getElementById('homeLeftDiv2').style.display = 'none';
        }
        else {
            document.getElementById('homeLeftDiv').style.display = 'none';
            document.getElementById('homeLeftDiv2').style.display = 'block';
        }
    }
}