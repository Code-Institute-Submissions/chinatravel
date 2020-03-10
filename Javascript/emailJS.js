//Form Validation to make sure inputs are correctly filled out
function validateForm (){
  
    var name = document.forms["contact-form"]["fromName"].value;
    var email = document.forms["contact-form"]["emailAddress"].value;
    var select = document.forms["contact-form"]["select"].value;
    var msg = document.forms["contact-form"]["message"].value;
    
    if (name == "") {
        alert("The name field cannot be empty.");
        return false;
    }
     if (email == "") {
        alert("The email field must not be empty.")
        return false;
    }
    if (email !== "") {
        if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
            alert("Incorrect format. Email should be eg. 'example@domain.com'")
            return false;
        }
    }
    
 //Now that the form is valid, use EmailJS to submit an email to a real email address

 var templateParams = {
    "from_name": name,
    "from email": email,
    "select": select,
    "comment": message

};

emailjs.send('gmail', 'inquiry', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
 
 $('#contact-form').on('submit', function(event) {
     event.preventDefault(); // prevent reload
     
     var formData = new FormData(this);
     formData.append('service_id', 'gmail');
     formData.append('template_id', 'inquiry');
     formData.append('user_id', 'user_KG1EmIIX6AGYKV3CSfODm');
  
     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
         type: 'POST',
         data: formData,
         contentType: false, 
         processData: false 
     }).done(function() {
         alert('Your mail is sent!');
     }).fail(function(error) {
         alert('Oops... ' + JSON.stringify(error));
     });
 });
}


//If the email has been send with no errors then create and
      //display modal with message.
      var modal = document.getElementById('myModal');
      var closeCross = document.getElementsByClassName("close-cross")[0];
      var closeBtn  = document.getElementById('close');
      
      modal.style.display = "block";
    
      //Hide the modal when the x is clicked
      closeCross.onclick = function() {
        modal.style.display = "none";
      };
      //Hide the modal when the close button is clicked
      closeBtn.onclick = function() {
        modal.style.display = "none";
      };
      //Close when the user clicks anywhere outside the modal
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    