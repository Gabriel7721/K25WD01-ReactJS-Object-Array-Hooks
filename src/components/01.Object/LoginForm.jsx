import { useState } from "react";

const LoginForm = () => {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  const [log, setLog] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  }

  function handleKeyUp(e) {
    setLog((prev) => prev + e.code);
  }

  // function handleFirstNameChange(e) {
  //   setPerson({ ...person, firstName: e.target.value });
  //   // person.firstName = e.target.value;
  // }
  // function handleLastNameChange(e) {
  //   setPerson({ ...person, lastName: e.target.value });
  //   // person.lastName = e.target.value;
  // }
  // function handleEmailChange(e) {
  //   setPerson({ ...person, email: e.target.value });
  //   // person.email = e.target.value;
  // }

  return (
    <>
      <label>
        FirstName
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
      </label>
      <label>
        LastName
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
      </label>
      <label>
        Email
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
      <p>{log}</p>
    </>
  );
};

export default LoginForm;
