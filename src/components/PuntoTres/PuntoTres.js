import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";

function FormComponent() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    age: "",
  });

  const [validationStates, setValidationStates] = useState({
    emailState: true, // Supongamos que está inicialmente en un estado válido
    passwordState: true, // Supongamos que está inicialmente en un estado válido
    ageState: true, // Supongamos que está inicialmente en un estado válido
  });

  // Estado para controlar si se debe mostrar el mensaje de error del username
  const [showError, setShowError] = useState(false);

  // Estado para controlar si se debe mostrar el mensaje de error del nombre
  const [showPasswordError, setShowPasswordError] = useState(false);

  // Estado para controlar si se debe mostrar el mensaje de error de la edad
  const [showAgeError, setShowAgeError] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleAgeChange = (e) => {
    setFormValues({ ...formValues, age: e.target.value });
  };

  // Función para validar el username
  const validateEmail = (username) => {
    return username.trim() !== "";
  };

  // Función para validar el nombre
  const validatePassword = (name) => {
    return name.trim() !== "";
  };

  // Función para validar la edad
  const validateAge = (age) => {
    const ageNum = Number(age);
    return !isNaN(ageNum) && ageNum > 0;
  };

  const clickSubmit = () => {
    //Se verifica el email y la contraseña
    let newEmail = formValues.email;
    let newPassword = formValues.password;
    let newAge = formValues.age;

    const isValidEmail = validateEmail(newEmail);
    const isValidPassword = validatePassword(newPassword);
    const isValidAge = validateAge(newAge);

    console.log(isValidEmail);
    console.log(setValidationStates.passwordState);

    if (!isValidEmail) {
      setShowError(true);
    } else {
      setShowError(false);
    }

    if (!isValidPassword) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }

    if (!isValidAge) {
      setShowAgeError(true);
    } else {
      setShowAgeError(false);
    }
  };

  return (
    <div>
      <h1>Form</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={handleEmailChange}
            value={formValues.email}
            className={`form-control ${
              showError ? "border border-danger" : ""
            }`}
            isInvalid={showError}
          />
          {showError && (
            <FormControl.Feedback type="invalid">
              <div className="fieldError">Your username must not be empty.</div>
            </FormControl.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            onChange={handlePasswordChange}
            value={formValues.password}
            className={`form-control ${
              showPasswordError ? "border border-danger" : ""
            }`}
            isInvalid={showPasswordError}
          />
          {showPasswordError && (
            <Form.Text className="invalid-feedback">
              Your full name must not be empty.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Age"
            onChange={handleAgeChange}
            value={formValues.age}
            className={`form-control ${
              showAgeError ? "border border-danger" : ""
            }`}
            isInvalid={showAgeError}
          />
          {showAgeError && (
            <Form.Text className="invalid-feedback">
              Your age must be a valid number!
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormComponent;
