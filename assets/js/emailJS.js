//EmailJS to send a form on the contact page (contact.html) to my own personal Gmail account

$(document).ready(function () {
    
    $('#contact-form')[0].addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Validations
        if ($('#subject-select')[0].value == 'Subject...') {
            $("#fail-modal").modal("toggle");
            return;
        }

        // Sending the email form on the contact us page
        emailjs.sendForm('gmail', 'inquiry', this).
            then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                $("#success-modal").modal("toggle");
            }, function (error) {
                console.log('FAILED...', error);
                $("#fail-modal").modal("toggle");
            });
    });

    $('#success-modal-close-btn')[0].addEventListener('click', function(event){
        // Close button for modal
        $("#success-modal").modal("toggle");
    });

    $('#fail-modal-close-btn')[0].addEventListener('click', function(event){
        // Close button for modal
        $("#fail-modal").modal("toggle");
    });
});