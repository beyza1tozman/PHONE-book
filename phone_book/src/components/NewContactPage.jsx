import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../ContactsContext";

function NewContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { addContact } = useContacts();

  const handleAddContact = () => {
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      phone
    };
    addContact(newContact);
    navigate("/MainPage");
  };
  return (
    <div className={"mainContainer logInContainer"}>
      <div className={"titleContainer"}>
        <div className={"titleContainer"}>
          <div className="bigTitle">
            Add <span className={"littleTitle"}>new contact</span>
          </div>
        </div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          placeholder="Enter the name here"
          className={"inputBox"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          placeholder="Enter the phone number here"
          className={"inputBox"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={handleAddContact}
          value={"Add"}
        />
      </div>
    </div>
  );
}

export default NewContactPage;
