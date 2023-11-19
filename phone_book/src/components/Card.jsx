import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContacts } from "../ContactsContext"; 

function Card({ id, name, phone }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { deleteContact } = useContacts(); 

  const handleDelete = () => {
    deleteContact(id);
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <div className="actions">
          <Link to={`/edit/${id}`} className="editLink">
            Edit
          </Link>
          <button
            className="deleteButton"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="bottom">
        <p className="info">{phone}</p>
      </div>
      {showDeleteConfirmation && (
        <div className="confirmationModal">
          <p>Are you sure you want to delete this contact?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowDeleteConfirmation(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
