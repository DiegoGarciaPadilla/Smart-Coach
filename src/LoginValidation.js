// Define a function called Validation that takes in an object called values as a parameter
function Validation(values) {
  // Initialize an empty object called error
  let error = {};
  // Define a regular expression pattern for email validation
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Define a regular expression pattern for password validation (currently commented out)

  // Check if the email value in the values object is empty
  if (values.email === "") {
    // If it is, add an error message to the error object
    error.email = "El email no puede estar vacío";
  // If the email value is not empty, check if it matches the email pattern
  } else if (!email_pattern.test(values.email)) {
    // If it doesn't match, add an error message to the error object
    error.email = "No coincide el email";
  // If the email value is not empty and matches the email pattern, set the email error message to an empty string
  } else {
    error.email = "";
  }

  // Check if the password value in the values object is empty
  if (values.password === "") {
    // If it is, add an error message to the error object
    error.password = "El password no puede estar vacío";
  // If the password value is not empty, set the password error message to an empty string
  } else {
    error.password = "";
  }
  // Return the error object
  return error;
}

// Export the Validation function as the default export of the module
export default Validation;
