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
 
