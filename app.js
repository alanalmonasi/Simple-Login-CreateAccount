function setFormMessage(formElement, type, message){
   const messageElemet = formElement.querySelector('.form-message');

   messageElemet.textContent = message;
   messageElemet.classList.remove('form-message-error', 'form-message-success');
   messageElemet.classList.add(`form-message-${type}`);

}

function setInputError(inputElement, message){
   inputElement.classList.add('form-input-error');
   inputElement.parentElement.querySelector('.form-input-error-message').textContent = message;
}

function clearInputError(inputElement){
   inputElement.classList.remove('form-input-error');
   inputElement.parentElement.querySelector('.form-input-error-message').textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
   const loginForm = document.querySelector('#login');
   const createAccount = document.querySelector('#create-account');

   document.querySelector('#link-create-account').addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.classList.add('form-hidden');
      createAccount.classList.remove('form-hidden');
   });

   document.querySelector('#link-login').addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.classList.remove('form-hidden');
      createAccount.classList.add('form-hidden');
   });

   loginForm.addEventListener('submit', e => {
      e.preventDefault();

      setFormMessage(loginForm, 'error', 'Incorrect username/password');
      
      setTimeout(function(){
         document.querySelector('.form-message-error').innerText = '';
      }, 2000);
   });

   document.querySelectorAll('.form-input').forEach(inputElement => {
      inputElement.addEventListener('blur', e => {
         if(e.target.id === 'signupUser' && e.target.value.length >= 0 && e.target.value.length < 6){
            setInputError(inputElement, 'Username must be at least 6 characters');
         }
      });

      inputElement.addEventListener('input', e => {
         clearInputError(inputElement);
      });
   });
});

