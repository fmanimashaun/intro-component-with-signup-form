import './assets/scss/main.scss';

const formEl = document.querySelector('#signup-form') as HTMLFormElement;

formEl.addEventListener('submit', (e) => {
	e.preventDefault(); // Prevent form submission

	const inputs = formEl.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
	const errors = formEl.querySelectorAll('.error-message') as NodeListOf<HTMLElement>;
	const errorMessages: string[] = [];
	let isValid = true;

	// Loop through all input elements
	inputs.forEach((input, index) => {
		let errorMessage = '';

		// Remove previous invalid class (if any) from input and parent
		input.classList.remove('invalid');
		if (input.parentElement) {
			input.parentElement.classList.remove('invalid');
		}

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

			// Add invalid class to the input and its parent
			input.classList.add('invalid');
			if (input.parentElement) {
				input.parentElement.classList.add('invalid');
			}

			// Mark form as invalid
			isValid = false;
		}

		// Add the error message (or empty string if valid) to the array
		errorMessages[index] = errorMessage;
	});

	// Update error messages on the form
	errors.forEach((error, index) => {
		error.innerText = errorMessages[index];
	});

	// Only log the FormData and reset form if everything is valid
	if (isValid) {
		// Log FormData as key-value pairs
		const data = new FormData(formEl);
		data.forEach((value, key) => {
			console.log(`${key}: ${value}`);
		});

		console.log("submitted");

		// Reset the form after submission (optional)
		formEl.reset();
	} else {
		console.log("Form contains errors, not submitting.");
	}
});

// Add event listener on the form to remove invalid classes from all inputs when any input is focused
formEl.addEventListener('focusin', (e) => {
	// Check if the event target is an input
	if (e.target instanceof HTMLInputElement) {
		const inputs = formEl.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
		const errors = formEl.querySelectorAll('.error-message') as NodeListOf<HTMLElement>;

		// Loop through all input elements and remove invalid classes from all
		inputs.forEach((input) => {
			input.classList.remove('invalid');
			if (input.parentElement) {
				input.parentElement.classList.remove('invalid');
			}
		});

	// Update error messages on the form
	errors.forEach((error) => {
		error.innerText = '';
	});
	}
});
