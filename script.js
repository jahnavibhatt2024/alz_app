let isLoggedIn = false;

function showLoginForm() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('signupSection').style.display = 'none';
    document.getElementById('appSection').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('signupSection').style.display = 'block';
    document.getElementById('appSection').style.display = 'none';
}

function showAppSection() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('signupSection').style.display = 'none';
    document.getElementById('appSection').style.display = 'block';
}

document.getElementById('loginButton').addEventListener('click', function () {
    // Implement actual login logic here (for demo, just switch to the app section)
    isLoggedIn = true;
    showAppSection();
});

function signup() {
    // Implement actual signup logic here (for demo, just switch to the app section)
    isLoggedIn = true;
    showAppSection();
}

document.getElementById('uploadButton').addEventListener('click', function () {
    if (isLoggedIn) {
        document.getElementById('imageInput').click();
    } else {
        alert('Please log in first.');
    }
});

document.getElementById('imageInput').addEventListener('change', function () {
    // Handle selected image (you may want to add logic for image preview)
});

document.getElementById('predictButton').addEventListener('click', function () {
    if (isLoggedIn) {
        // Handle Alzheimer's prediction logic and display the result in the 'output' div
        document.getElementById('output').innerHTML = 'Alzheimer\'s predicted!';
    } else {
        alert('Please log in first.');
    }
});
