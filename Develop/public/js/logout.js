// public/js/logout.js
document.addEventListener('DOMContentLoaded', () => {
  // Function to handle logout
  const logout = async () => {
    try {
      const response = await fetch('/api/users2/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Redirect to the homepage after successful logout
        document.location.replace('/');
      } else {
        alert('Failed to log out. Please try again.');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('An error occurred while trying to log out. Please try again.');
    }
  };

  // Selecting the logout button
  const logoutButton = document.querySelector('#logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      logout();
    });
  }
});
