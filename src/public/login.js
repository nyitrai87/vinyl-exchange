const loginForm = document.getElementById('login-form');

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);

    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formDataJsonString,
    };

    const response = await fetch('/login', fetchOptions);

    if (!response.ok) {
        const errorMessage = document.getElementById('login-error-message');
        errorMessage.classList.remove('hidden');
        return;
    }

    location.assign('/home');

}

loginForm.addEventListener('submit', handleFormSubmit);

