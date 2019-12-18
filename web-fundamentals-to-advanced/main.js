/* Hide the modal from the user when the page is initially loaded */
$("#modal-base").hide();
$("#form-modal").hide();
$("#error-msg").hide();

/* () = > {} is ES6 syntax that defines a function.
 * We have named this function toggleMenu, as we want it to toggle the visibility of the menu
 * We don't require dyanamic input which is why () is empty for the function definition
 * This function doesn't return any information so we haven't included a return statement
 */

const toggleMenu = () => {
  /* Using JQuery we can refactor our original function to one line of code */
  $("#main-nav").toggleClass("show");
};

/* Function to be called on form submission */
const submitForm = () => {
  if (canSubmit()) {
    $("#modal-base").show();
    $("#form-modal").show();

    /* return to the top of the screen */
    window.scrollTo(0, 0);

    /* remove ability to scroll by setting page overflow to hidden */
    $("body").css("overflow", "hidden");
  } else {
    $("#error-msg").show();
  }
};

const canSubmit = () => {
  /* Declaring the relevant HTML elements as variables for later use */
  const name = $("#name").val();
  const email = $("#email").val();
  const occupation = $("#occupation").val();

  /* Checking input fields aren't empty and match any expected regex */
  const isOccupationValid = checkOccupation(occupation);
  const isEmailValid = checkEmail(email);
  const isNameValid = checkName(name);

  return isNameValid && isEmailValid && isOccupationValid;
};

const checkName = name => {
  /* If name is longer than 6 characters return true else change error message text */
  return name.length >= 6 ? true : $("#error-msg").text("Name must be at least six characters");
};

const checkEmail = email => {
  /* If email contains an @ and . then return true, else edit the error message text */
  if (!email.includes("@")) {
    $("#error-msg").text('Email must contain an "@" symbol');
  } else if (!email.includes(".")) {
    $("#error-msg").text('Email must contain an "." after the "@" symbol');
  } else {
    return true;
  }
};

const checkOccupation = occupation => {
  /* If occupation is not empty return true, else update the error message*/
  if (occupation === "") {
    $("#error-msg").text("Occupation is a required field");
  } else {
    return true;
  }
};
