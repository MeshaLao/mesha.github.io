var form = document.getElementById('validationForm');

form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    form.classList.add('was-validated');

    // validation for the email
    var email = document.getElementById('logEmail');
    var password = document.getElementById('logPassword');
    
    if (email.value) { 
        email.classList.add('is-valid'); 
    
        if (password.value.length < 8) { // Checks the password
            password.classList.add('is-invalid'); 
        } else {
            password.classList.remove('is-invalid'); 
            alert('Successful login!');
        }
    }

    form.addEventListener("check", function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    
        // validation for the registration
        var email = document.getElementById('RegEmail');
        var password = document.getElementById('regPassword');
        
        if (email.value) { 
            email.classList.add('is-valid'); 
        
            if (password.value.length < 8) { // Checks the password
                password.classList.add('is-invalid'); 
            } else {
                password.classList.remove('is-invalid'); 
                alert('Successful login!');
            }
        }


}, false);