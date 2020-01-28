function sendMail(contactForm) {
    var templateParams = {
        name: 'China Travel',
        notes: 'I would like to inquire about this...'
    };
    
    emailjs.send('gmail', 'inquiry', templateParams)
    "from_name"; contactForm.name.value,
    "from_email"; contactForm.email.value,
    "inquiry_request"; contactForm.comment.value

    .then(
        function(response) {
       console.log('SUCCESS!', response);
    }, 
    function(error) {
       console.log('FAILED...', error);
    });
}