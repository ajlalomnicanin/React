import React, { useState } from "react";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addContact = () => {
    setContacts([...contacts, { email, password }]);
    setEmail("");
    setPassword("");
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={addContact}>Add</button>
      <br />
      <button onClick={() => deleteContact(contacts.length - 1)}>Delete</button>
      <br />
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
