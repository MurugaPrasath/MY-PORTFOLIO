document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation (you can expand this)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or do something else upon successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
