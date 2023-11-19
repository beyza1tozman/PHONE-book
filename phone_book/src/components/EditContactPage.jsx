import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContacts } from "../ContactsContext"; 

function EditContactPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contacts, deleteContact, addContact } = useContacts(); 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const contact = contacts.find((c) => c.id === id);
    if (!contact) {
      navigate("/MainPage", { replace: true }); 
      return;
    }

    setName(contact.name);
    setPhone(contact.phone);
  }, [id, contacts, navigate]);

  const handleSave = () => {
    const existingContact = contacts.find((contact) => contact.id === id);
    if (existingContact) {
      existingContact.name = name;
      existingContact.phone = phone;
    } else {
      const newContact = {
        id,
        name,
        phone
      };
      addContact(newContact);
    }

    navigate("/MainPage");
  };

  return (
    <div className={"mainContainer logInContainer"}>
      <div className={"titleContainer"}>
        <div>Edit Contact</div>
      </div>

      <div className="inputContainer">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />
      <div className={"inputContainer"}>
        <label>Phone:</label>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={handleSave}
          value={"Save"}
        />
      </div>
    </div>
  );
}

export default EditContactPage;
