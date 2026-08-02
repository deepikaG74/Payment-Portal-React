import { useState } from "react";
import ProfileForm from "./ProfileForm";
export default function Profile({ userProfile, onProfileUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(userProfile);

  const startEditing = () => {
    setEditProfile(userProfile);
    setIsEditing(true);
  };
  const cancelEditing = () => {
    setEditProfile(userProfile);
    setIsEditing(false);
  };
  const saveProfile = () => {
    onProfileUpdate(editProfile);
    setIsEditing(false);
  };

  const handleFieldChange = (key, value) => {
    setEditProfile((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <h3>Profile</h3>
        {!isEditing && (
          <button type="button" className="profile-toggle-button" onClick={startEditing}>
            Edit Profile
          </button>
        )}
      </div>
      <div className="profile-content">
        <div className="view-profile" style={{ display: isEditing ? "none" : "block" }}>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Address: {userProfile.address}</p>
          <p>Phone: {userProfile.phone}</p>
        </div>
        <div className="edit-profile-form" style={{ display: isEditing ? "block" : "none" }}>
          <ProfileForm customer={editProfile} onFieldChange={handleFieldChange} onSave={saveProfile} onCancel={cancelEditing}   />
        </div>
      </div>
    </div>
  );
}
