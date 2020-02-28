var templateParams = {
    name: 'China Travel',
    notes: 'I would like to inquire about...'
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
   
