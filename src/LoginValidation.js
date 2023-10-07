function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  if (values.email === "") {
    error.email = "El email no puede estar vacío";
  } else if (!email_pattern.test(values.email)) {
    error.email = "No coincide el email";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "El password no puede estar vacío";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
