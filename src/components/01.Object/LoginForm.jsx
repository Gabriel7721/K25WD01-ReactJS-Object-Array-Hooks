import { useState } from "react";

const LoginForm = () => {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e) {}
  function handleLastNameChange(e) {}
  function handleEmailChange(e) {}

  return (
    <>
      <label>
        FirstName
        <input />
      </label>
      <label>
        LastName
        <input />
      </label>
      <label>
        Email
        <input />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default LoginForm;
