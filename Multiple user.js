let
  attempts = 3,
  logins = new Map([
    ['root', 'root'],
    ['admin', 'admin']
  ]);
  formElement = document.getElementById('form');

function disableForm() {
  const
    usernameInput = document.getElementById('username'),
    passwordInput = document.getElementById('password'),
    submitButton = document.getElementById('submit');

  usernameInput.setAttribute('disabled', 'disabled');
  passwordInput.setAttribute('disabled', 'disabled');
  submitButton.setAttribute('disabled', 'disabled');  
}

function decreaseAttemptsLeft() {
 
  attempts--;
  

  if (attempts === 0) {
    
    disableForm();
    
    alert('You have failed  to log in 3 times, Fields have been turned off. Please try again later');
  } else {
    
    const
      message = `You have ${attempts} attempt(s) left.`;
    alert(message);  
  }
}

function onFormSubmit(event){
 
  event.preventDefault();
  
  const
    usernameInput = document.getElementById('username'),
    passwordInput = document.getElementById('password');
  
  if (
    
    !logins.has(usernameInput.value) ||
    
    logins.get(usernameInput.value) !== passwordInput.value
  ) {
    
    decreaseAttemptsLeft();
   
    return;
  }
  
 
  alert('Login success!');
  
  attempts = 3;
}
  
form.addEventListener('submit', onFormSubmit);
