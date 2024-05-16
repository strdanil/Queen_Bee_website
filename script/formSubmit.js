document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
        $('.form').submit(function(event) {
            // Prevent default form submission
            event.preventDefault();
            
            // Submit form data asynchronously using AJAX
            $.ajax({
                url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSceIHVpWpweHTWKOnzTKWaw-arzNTMRFr1eytbtlKProFhq7Q/formResponse',
                method: 'POST',
                data: $(this).serialize(), // Serialize form data
                success: function(response) {
                    // Handle success response
                    alert('Form submitted successfully!');
                },
                error: function(xhr, status, error) {
                    // Handle error
                    alert('Thank you! Now, please, wait until we call you.');
                }
            });
        });
    });
}); 