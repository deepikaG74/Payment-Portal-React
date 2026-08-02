import {useState} from "react";
import AddCardForm from "./AddCardForm";
const SavedCards = ({ cards, onCardUpdate }) => {
  const [addCardFormVisible, setAddCardFormVisible] = useState(false);

  const handleNewCard = (newCard) => {
    onCardUpdate(newCard);
    setAddCardFormVisible(false);
  };

  const handleCancel = () => {
    setAddCardFormVisible(false);
  };

  return (
    <div className="saved-cards">  
        <h3>Saved Cards</h3>
        <div className="card-list">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-header-row">
              <h4 className="card-title">{card.type}</h4>
              <button
                type="button"
                className="card-delete-button"
                onClick={() => onCardUpdate({ ...card, deleted: true })}
              >
                ×
              </button>
            </div>
            <p>Card Number: {card.lastFour}</p>
            <div className="card-status-row">
              <span className="card-status-label">Status: {card.active ? "Active" : "Inactive"}</span>
              <button
                type="button"
                className="card-status-toggle"
                onClick={() => onCardUpdate({ ...card, active: !card.active })}
              >
                { card.active ? "Deactivate" : "Activate"}
              </button>
            </div>
          </div>
        ))}
        </div>
        {cards.length === 0 && (
          <div>
            <p>No saved cards available.</p>
            <p>Click "Add New Card" to add a card.</p>
          </div>
        )}
        <div className="card-actions">
          <button type="button" className="add-card-button" onClick={() => setAddCardFormVisible(!addCardFormVisible)}>
            Add New Card
          </button>
        </div>
        {addCardFormVisible && (
          <AddCardForm onCardAdd={handleNewCard} onCancel={handleCancel} />
        )}
    </div>
  );
};

export default SavedCards;