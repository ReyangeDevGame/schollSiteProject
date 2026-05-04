// Authentication logic for the client side
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // If user is already logged in, redirect them directly to the dashboard
    if (localStorage.getItem('studentToken')) {
        window.location.href = '/dashboard.html';
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const matricule = document.getElementById('matricule').value.trim();
            const pin = document.getElementById('pin').value.trim();
            const submitBtn = loginForm.querySelector('button[type="submit"]');

            // Reset UI state
            errorMessage.classList.add('hidden');
            submitBtn.disabled = true;
            submitBtn.textContent = "Connexion en cours...";

            try {
                // Call the auth API (US-04: uses username/password mapping)
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        username: matricule, 
                        password: pin 
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Identifiants incorrects.");
                }

                // Authentication successful: Save JWT token
                localStorage.setItem('studentToken', data.token);

                // Redirect to the dashboard
                window.location.href = '/dashboard.html';

            } catch (error) {
                // Display error message
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('hidden');
            } finally {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.textContent = "Se connecter";
            }
        });
    }
});
