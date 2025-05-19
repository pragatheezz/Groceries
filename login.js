document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageEl = document.getElementById('message');
  
    // Basic validation
    if (!username || !password) {
      messageEl.textContent = 'Please fill in all fields.';
      return;
    }
    
    // Simulate authentication (replace with your API logic)
    if (username === 'admin' && password === 'jmc') {
      alert `login successfully`;
      window.location.href = "index.html";
      // Redirect or perform further actions here.
    } else {
      alert `Invalid username or password`
      messageEl.style.color = 'red';
      messageEl.textContent = 'Invalid username or password.';
    }
  });
  