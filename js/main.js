// Declare variables that will store references 
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitbutton = document.getElementById("submit-button");


// Store regular expression for email 
let emailData= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Validation form 


    function validateForm(event){
    event.preventDefault();

        console.clear();
     
           let data = {};
           let errors = [];
    
   
    // Check if fullname is not empty start
    if(fullname.value !=""){
        data.fullname = fullname.value;
    }
    else{
        errors['fn'] = "Full name is missing";
    }
    // Check if fullname is not empty end

    // Check if email is not empty start
    if(email.value !=""){
        // start nested condition 
        if (email.value.match(emailData)) {
            data.email = email.value;
          } else {
            errors['em'] = "Email is not valid";
          }
          // End nested condition 
    }
    else{
        errors['em'] = "Email is missing";
    }
    // Check if email is not empty end

    // Check if message is not empty start
    if(message.value !=""){
        data.message =  message.value;
    }
    else{
        errors['msg'] = "Message name is missing";
    }
    // Check if message is not end

    // Check if there is anything in array errors
    if(typeof errors['fn'] != 'undefined' || typeof errors['em'] != 'undefined' || typeof errors['msg'] != 'undefined'){
        console.log("ERRORS");
        console.log(errors);
    }
    else{
        fullname.value = "";
        email.value = "";
        message.value = "";
        console.log("COLLECTED DATA");
        console.log(data);
    }
 
 }
//  validation form end

submitbutton.addEventListener('click', validateForm);