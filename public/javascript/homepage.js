async function directFormHandler(event) {
    window.location.replace('/login');
};

document.querySelector('.direct-btn').addEventListener('click', directFormHandler);