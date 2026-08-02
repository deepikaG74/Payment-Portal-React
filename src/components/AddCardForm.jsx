import { useState } from "react";

const AddCardForm = ({ card, onCardAdd, onCancel }) => {
  const [formState, setFormState] = useState({
    id: card?.id || Date.now().toString(),
    lastFour: card?.lastFour || "",
    type: card?.type || "",
    active: card?.active || false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: name === "active" ? value === "active" : value,
    }));
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    onCardAdd({
      id: formState.id,
      lastFour: formState.lastFour,
      type: formState.type,
      active: formState.active,
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel?.();
  };

  return (
    <div className="add-card-form">
      <h3>Add New Card</h3>
      <form>
        
        <label htmlFor="lastFour">Card Last Four:</label>
        <input
          type="text"
          id="lastFour"
          name="lastFour"
          placeholder="Card Last Four"
          value={formState.lastFour}
          onChange={handleInputChange}
        />

        <label htmlFor="type">Card Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          placeholder="Card Type"
          value={formState.type}
          onChange={handleInputChange}
        />

        <label htmlFor="active">Card Status:</label>
        <select
          id="active"
          name="active"
          value={formState.active ? "active" : "inactive"}
          onChange={handleInputChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <div className="form-buttons">
          <button type="button" className="add-card-button" onClick={handleAddCard}>
            Add Card
          </button>
          <button type="button" className="cancel-card-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCardForm;