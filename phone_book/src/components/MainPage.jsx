import React from "react";
import { useNavigate } from "react-router-dom";
import contacts from "../contacts";
import Card from "./Card";
import Footer from "./Footer";

function MainPage() {
  return (
    <div className="mainPage">
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        imgUrl={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgUrl={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgUrl={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
      <Footer />
    </div>
  );
}

export default MainPage;
