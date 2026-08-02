import {useState} from "react";
import WalletCard from "../components/WalletCard";
import Profile from "../components/Profile";
import SavedCards from "../components/SavedCards";
import Transactions from "../components/Transactions";
import { cards, transactions, wallet, customer } from "../assets/data/sampleData";
export default function Dashboard(){
    const [userProfile, setUserProfile] = useState(customer);
    const[cardsData, setCardsData] = useState(cards);
    const handleProfileUpdate = (keyOrPatch, value) => {
        if (typeof keyOrPatch === "object") {
            setUserProfile((prevProfile) => ({
                ...prevProfile,
                ...keyOrPatch,
            }));
            return;
        }

        setUserProfile((prevProfile) => ({
            ...prevProfile,
            [keyOrPatch]: value,
        }));
    }

    const handleCardUpdate = (updatedCard) => {
        setCardsData((prevCards) => {
            if (updatedCard.deleted) {
                return prevCards.filter((card) => card.id !== updatedCard.id);
            }

            const exists = prevCards.some((card) => card.id === updatedCard.id);
            if (exists) {
                return prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card));
            }
            return [...prevCards, updatedCard];
        });
    };

    return(
    <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h2>Dashboard</h2>
            <p>Welcome to your payment dashboard!</p>
          </div>
        </div>
        <div className="dashboard-grid">
          <WalletCard wallet={wallet} />
          <Profile userProfile={userProfile} onProfileUpdate={handleProfileUpdate} />
          <SavedCards cards={cardsData} onCardUpdate={handleCardUpdate} />
          <Transactions transactions={transactions} />
        </div>
    </div>)
};