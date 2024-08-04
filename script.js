document.addEventListener('DOMContentLoaded', function() {
    // Password strength meter
    const passwordInput = document.getElementById('password-signup');
    const passwordStrength = document.getElementById('password-strength');

    passwordInput.addEventListener('input', function() {
        const value = passwordInput.value;
        let strength = 'Weak';

        if (value.length >= 8) {
            strength = 'Medium';
            if (/[A-Z]/.test(value) && /[0-9]/.test(value) && /[@$!%*?&#]/.test(value)) {
                strength = 'Strong';
            }
        }

        passwordStrength.textContent = `Password Strength: ${strength}`;
        passwordStrength.style.color = strength === 'Strong' ? 'green' : strength === 'Medium' ? 'orange' : 'red';
    });

    // Social login buttons (dummy functionality)
    document.getElementById('google-login').addEventListener('click', function() {
        alert('Google login is not implemented.');
    });

    document.getElementById('facebook-login').addEventListener('click', function() {
        alert('Facebook login is not implemented.');
    });
});
