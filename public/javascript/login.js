function signupFormHandler(event) {
    event.preventDefault();

    // grab values from login.handlebars and POST to /api/users a new User
    const username = document.querySelector('#username-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const age = document.querySelector('#age-register').value.trim();
    const height = document.querySelector('#height-register').value.trim();
    const start = document.querySelector('#start-register').value.trim();
    const goal = document.querySelector('#goal-register');
    const password = document.querySelector('#password-register').value.trim();

    if (username && email && age && height && start && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                age,
                height,
                start,
                goal,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
      }).then((response) => {console.log(response)})
    }
  }