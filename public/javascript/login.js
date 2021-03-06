async function loginFormHandler(event) {
    event.preventDefault();

    // grab values from login.handlebars and POST to /api/users/login to check validPassword
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/profiles/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
                console.log('success');
                document.location.replace('index');
            } else {
                alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    // grab values from login.handlebars and POST to /api/users a new User
    const profilename = document.querySelector('#profilename-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const age = document.querySelector('#age-register').value.trim();
    const height = document.querySelector('#height-register').value.trim();
    const start = document.querySelector('#start-register').value.trim();
    const goal = document.querySelector('#goal-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    if (profilename && email && age && height && start && password) {
        const response = await fetch('/api/profiles', {
            method: 'post',
            body: JSON.stringify({
                profilename,
                email,
                age,
                height,
                start,
                goal,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
                console.log('success');
                document.location.replace('index');
            } else {
                alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.register-form').addEventListener('submit', signupFormHandler);