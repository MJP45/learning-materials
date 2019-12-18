//-------------------------------------------------------------------------------
// class for the user's data
//-------------------------------------------------------------------------------

class _userData  {

//maintain list of invalid fields to be returned if validate is called

    invalidFields = []

    constructor(firstName, surname, email, query){

        this._firstName = firstName;
        this._surname = surname;
        this._email = email;
        this._query = query;
    
    };

    get firstName(){
        return this._firstName
    };

    set firstName(value){

        if(value.length > 0 && value != " "){

            this._firstName = value;
            
        }else{
            
            this.invalidFields.push({field:"firstName", msg:"First name is missing"});
        };
    };

    get surname(){
        return this._surname
    };

    set surname(value){

        if(value.length > 0 && value != " " ){

            this._surname = value;
            
        }else{
            
            this.invalidFields.push({field:"surname", msg:"Surname is missing"});
        };
    };

    get email(){
        return this._email;
    };

    set email(value){

        if(value.length > 0 && value != " "){
            if(value.includes("@") && value.indexOf("@") > 1){
                this._email = value;
            }else{
                this.invalidFields.push({field:"email", msg:"invalid E-mail address"});
            }
        }else{
            
            this.invalidFields.push({field:"email", msg:"email is missing"});
        };
    };

    get query(){
        return this._query;
    };

    set query(value){

       this._query = value;
       
    };
    
//-------------------------------------------------------------------------------
//  Check if we have any validation errors
//-------------------------------------------------------------------------------
    
    isDataValid(){
        return this.invalidFields.length == 0;
    };

//-------------------------------------------------------------------------------    
// returns a the array of invalid fields comprising of the field name and a 
// validation message in the form of
// {fieldName:"xxxx",msg:"contains the issue, message is end user friendly"}
// other wise will return an empty array if no validation issues
//-------------------------------------------------------------------------------
    
    getInvalidFields(){
        return this.invalidFields;
    };
  

//-------------------------------------------------------------------------------
// return the user's datail back to the ui as a list
//-------------------------------------------------------------------------------
  
    toHtmlList(){
        
        let htmlList = '<ul>';

        htmlList += `<li>Name: ${this.firstName} ${this.surname}</li>`;
        htmlList += `<li>Email: ${this.email}</li>`;
       
        if(this.query){
            htmlList += `<li>Question: ${this.query}</li>`;
        }
    
        return htmlList;
   };
    
};

//-------------------------------------------------------------------------------
// END OF CLASS DEFINTION
//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------
// retrieve the data from the form and capture it into the user object
//-------------------------------------------------------------------------------
    
    const getFormData = function(){
   
        let userData = new _userData;

        userData.firstName = document.querySelector('#firstName').value;
        userData.surname = document.querySelector('#surname').value;
        userData.email = document.querySelector('#email').value;
        userData.query = document.querySelector('#query').value;
        
        return userData;
  
    };

//-------------------------------------------------------------------------------
// Add the userData to the popup which contains a p tag which acts as a placeholder
// this will be replaced by list with the content the user has input
//-------------------------------------------------------------------------------

    const displayUserData = function(userData){
        
        const placeHolder = document.querySelector('#placeHolder');

        placeHolder.innerHTML = userData.toHtmlList();
        
    };

//-------------------------------------------------------------------------------
// highlight any fields on the form that are invalid
//-------------------------------------------------------------------------------
    
    const highlightInvalidFields = function(invalidFieldArray){

        invalidFieldArray.forEach(field =>{

            let target = document.querySelector('#' + field.field);

            target.classList.add('invalidField');
            
            const validationMsg = `<p class="validationMsg">${field.msg} </p>`;

            target.outerHTML += (validationMsg);
        
        });


    };

//-------------------------------------------------------------------------------
// Reset any fields that have been previously highlighted as invalid
//-------------------------------------------------------------------------------
    
    const clearValidationMessages = function(){

        const para = document.querySelectorAll('p.validationMsg');

        para.forEach(p =>{
            
            p.style.display = "none";
        });

        const inputs = document.querySelectorAll('input.invalidField');
        
        inputs.forEach(input =>{
            input.classList.remove('invalidField')
        })
        

    };



//-------------------------------------------------------------------------------
// shows the popup
//-------------------------------------------------------------------------------
   
    const showPopUp=() => {
        
        const popupWrapper = document.querySelector('.popupWrapper');

        popupWrapper.style.display = "block";
    
    };


//-------------------------------------------------------------------------------
// Hides the popup
//-------------------------------------------------------------------------------
   
    const hidePopUp=() => {
        
        const popupWrapper = document.querySelector('.popupWrapper');

        popupWrapper.style.display = "none";
    };

//-------------------------------------------------------------------------------
// respond the contact me form being submitted from the a tag
//-------------------------------------------------------------------------------
    
    const onFormSubmit =()=> {

      //  console.log("onFormSubmit Called");
        
        clearValidationMessages();

        let userData = getFormData();
                
        if(userData.isDataValid()){

            displayUserData(userData);

            showPopUp();

        }else{
            const invalidFields = userData.getInvalidFields();
            
            highlightInvalidFields(invalidFields);
            
        }
    };

    const onEditClicked =()=>{
       // console.log("edit Clicked");
        hidePopUp();

    };

//-------------------------------------------------------------------------------
// return to the home page when the user clicks Ok on our popup Page
//-------------------------------------------------------------------------------
    
    const onOkClicked = () =>{
      //  console.log("Ok Clicked");
        
        hidePopUp();
        
        window.location.replace("/index.html")
    };