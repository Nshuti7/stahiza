document.addEventListener('DOMContentLoaded', () => {
    
    // --- Login Form Validation ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const errorDisplay = document.getElementById('loginError');
            
            errorDisplay.textContent = ''; // Reset error

            if (!usernameInput.value.trim() || !passwordInput.value.trim()) {
                errorDisplay.textContent = 'Please fill in both Username and Password.';
                return;
            }

            // Simple demo success logic
            alert('Login Successful! Welcome, Head Teacher.');
            // secure login would happen here with backend
            loginForm.reset();
        });
    }

    // --- Admission Form Validation ---
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const studentName = document.getElementById('studentName');
            const email = document.getElementById('email');
            const guardianName = document.getElementById('guardianName');
            const admissionClass = document.getElementById('admissionClass');
            const genderOptions = document.getElementsByName('gender');
            
            const errorDisplay = document.getElementById('admissionError');
            const successDisplay = document.getElementById('admissionSuccess');
            
            errorDisplay.textContent = '';
            successDisplay.textContent = '';

            let genderSelected = false;
            for (const radio of genderOptions) {
                if (radio.checked) genderSelected = true;
            }

            // Validation Checks
            if (!studentName.value.trim()) {
                errorDisplay.textContent = 'Student Name is required.';
                studentName.focus();
                return;
            }

            if (!email.value.trim()) {
                errorDisplay.textContent = 'Email address is required.';
                email.focus();
                return;
            }

            // Basic Email Regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                errorDisplay.textContent = 'Please enter a valid email address.';
                email.focus();
                return;
            }

            if (!genderSelected) {
                errorDisplay.textContent = 'Please select a gender.';
                return;
            }

            if (!guardianName.value.trim()) {
                errorDisplay.textContent = 'Parent/Guardian Name is required.';
                guardianName.focus();
                return;
            }

            if (!admissionClass.value) {
                errorDisplay.textContent = 'Please select a class.';
                admissionClass.focus();
                return;
            }

            // Success
            successDisplay.textContent = 'Application submitted successfully! We will contact you soon.';
            alert('Application Submitted Successfully!');
            admissionForm.reset();
        });
    }
});
