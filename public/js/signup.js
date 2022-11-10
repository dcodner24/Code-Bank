
const signupForm = async(event)=>{
    event.preventDefault();


  // Collect values from the login form
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const dateOfBirth = document.querySelector('#dateofbirth-signup').value.trim();
  //const dueDate = dueDateInputEl.val().trim();

  if (username && email && password && dateOfBirth) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, dateOfBirth }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // If successful, redirect the browser to the account page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupForm);