/**
 * The following code contains the logic which allows a user to change the theme of the 
 * website.
 */

/** 
 * Create variables linking to parts of the website we want to change when 
 * the "change theme" button is clicked.
 */

const sun_image = document.querySelector('.sun');
const cloud_1_image = document.querySelector('.cloud_1');
const cloud_2_image = document.querySelector('.cloud_2');
const footer_html = document.querySelector('footer');
const header_html = document.querySelector('header');

/** 
 * Create variables for the images we have locally as well as for the various background 
 * colours we want to use.
 */

const sun_jpg = 'images/sun.jpg';
const cloud_jpg = 'images/cloud.jpg';
const blue_background_color = '#EDFBFF';
const rain_cloud_jpg = 'images/rainy_cloud.jpg';
const moon_jpg = 'images/moon.jpg';
const grey_background_colour = '#EAEAEA';

/** 
 * This function toggles between a set of sunny and rainy day pictures, along with blue and
 * grey backgrounds
 */

function change_theme() {
    console.log('Change_theme clicked');
    /**  
     * Figure out whether we are displaying a sun or a moon image by searching for 
     * the string "sun" in the "src" attribute of the sun_image doc selector. 
     * If we find it, set all the images and links to be rainy days.
    */
    if (sun_image.src.indexOf('sun') != -1) {
        sun_image.setAttribute('src', moon_jpg);
        cloud_1_image.setAttribute('src', rain_cloud_jpg);
        cloud_2_image.setAttribute('src', rain_cloud_jpg);
        header_html.style.backgroundColor = grey_background_colour;
        footer_html.style.backgroundColor = grey_background_colour;
    } else {
        // Else we must be displaying the rainy day and night time icons
        sun_image.setAttribute('src',sun_jpg);
        cloud_1_image.setAttribute('src', cloud_jpg);
        cloud_2_image.setAttribute('src', cloud_jpg);
        header_html.style.backgroundColor = blue_background_color;
        footer_html.style.backgroundColor = blue_background_color;
    }

}

// Create an event listener for any clicks on the sun/moon image
sun_image.addEventListener('click', change_theme);


/**
 * The following code is for the "Sign Up Form". The sign_up_validation method is called in the html
 * when the form is submitted. We take the first_name input field value then use the query selector
 * to reveal a hidden paragraph tag in the html which will be used to thank the user for signing up.
 */

function sign_up_validation(){
    console.log('Sign up form submitted');
    // Firstly, let's check that the user hasn't left any input fields blank.
    if (document.forms['sign_up_form']['first_name'].value.length == 0 ||
        document.forms['sign_up_form']['surname'].value.length == 0 ||
        document.forms['sign_up_form']['email'].value.length == 0) {
            alert('Please make sure you fill in all the details!');
    // If everything has been filled in correctly, then lets display the thank you message.
    } else {
        user_name = document.forms['sign_up_form']['first_name'].value;
        successful_sign_up_text = document.querySelector('#sign_up_confirmation');
        //The sign_up_confirmation part of the html is set to display = none, so lets now put it back to
        // the default of "block" so it is now displayed.
        successful_sign_up_text.style.display='block';
        successful_sign_up_text.innerText=`Thanks for signing up ${user_name}!`;
    }
}