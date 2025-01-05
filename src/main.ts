import './assets/scss/main.scss';

const formEl = document.querySelector('#signup-form') as HTMLElement;

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = formEl.querySelectorAll('input') as NodeListOf<HTMLInputElement>
    const errors = formEl.querySelectorAll('.error-message') as NodeListOf<HTMLElement>;
    const errorMessages: string[] = [];

    // Loop through all input elements
    inputs.forEach((input) => {
      let errorMessage = '';
  
      // Check if the input is invalid
      if (!input.checkValidity()) {
        if (input.value === '') {
          // Custom message for empty inputs
          errorMessage = `${input.placeholder} cannot be empty`;
        } else if (input.type === 'email' && input.validity.typeMismatch) {
          // Custom message for invalid email format
          errorMessage = 'Looks like this is not an email';
        } else {
          // Use the default validation message for other cases
          errorMessage = input.validationMessage;
        }
      }
  
      // Add the error message (or empty string if valid) to the array
      errorMessages.push(errorMessage);
    });

    errors.forEach((error, index) => {
        error.innerText = errorMessages[index];
    })
});