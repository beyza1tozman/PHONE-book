import React from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../ContactsContext"; 
import Card from "./Card";
import Footer from "./Footer";

function MainPage() {
  const navigate = useNavigate();
  const { contacts } = useContacts(); 

  const handleDelete = (id) => {
    console.log(`Deleting contact with id ${id}`);
  };
  return (
    <div className="mainPage">
      <h1 className="heading">My Contacts</h1>
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={() => navigate("/NewContactPage")}
          value={"+Add new contact!"}
        />
      </div>
      {contacts.map((contact) => (
        <Card
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}

      <Footer />
    </div>
  );
}

export default MainPage;
