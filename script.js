
document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('checkbox').checked;

            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            alert(`Logged in as ${username}`);

            // Show existing user button if details are stored
            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                document.getElementById('existing').style.display = 'block';
            }
        });

        // Function to handle existing user login
        document.getElementById('existing').addEventListener('click', function() {
            const username = localStorage.getItem('username');
            alert(`Logged in as ${username}`);
        });

        // On page load, check if user details are stored
        window.onload = function() {
            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                document.getElementById('existing').style.display = 'block';
            }
        }
