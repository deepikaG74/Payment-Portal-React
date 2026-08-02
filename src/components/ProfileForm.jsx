import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,15}$/;

const ProfileForm = ({ customer, onFieldChange, onSave, onCancel }) => {
  const [errors, setErrors] = useState({ email: "", phone: "" });

  const validateEmail = (value, isBlur = false) => {
    const email = value.trim();
    if (!email) {
      return isBlur ? "Email is required." : "";
    }
    return emailRegex.test(email) ? "" : "Enter a valid email address.";
  };

  const validatePhone = (value, isBlur = false) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) {
      return isBlur ? "Phone number is required." : "";
    }
    return phoneRegex.test(digits) ? "" : "Enter a valid phone number (10–15 digits).";
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    onFieldChange(field, value);

    if (field === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
    if (field === "phone") {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const handleBlur = (field) => (e) => {
    const value = e.target.value;
    if (field === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value, true) }));
    }
    if (field === "phone") {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value, true) }));
    }
  };

  const handlePhoneKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
      "Tab",
    ];
    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const emailError = validateEmail(customer.email, true);
    const phoneError = validatePhone(customer.phone, true);

    setErrors({ email: emailError, phone: phoneError });
    if (emailError || phoneError) {
      return;
    }

    onSave?.();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel?.();
  };

  const currentEmailError = validateEmail(customer.email, true);
  const currentPhoneError = validatePhone(customer.phone, true);
  const isFormValid =
    customer.name.trim() &&
    customer.address.trim() &&
    customer.email.trim() &&
    customer.phone.trim() &&
    !currentEmailError &&
    !currentPhoneError;

  return (
    <div className="profile-form">
      <h3>Edit Profile</h3>
      <form>
         <div className="profile-actions">
            <button
              type="button"
              className={`profile-save-button${!isFormValid ? " profile-save-button--disabled" : ""}`}
              onClick={handleSave}
              disabled={!isFormValid}
            >
              Save
            </button>
            <button type="button" className="profile-cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
         <div className="form-group">
            <p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={customer.name} required onChange={(e) => onFieldChange("name", e.target.value)} />
            </p>
            <p>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={customer.email}
                  required
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
            </p>
            <p>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  value={customer.address}
                  required
                  onChange={(e) => onFieldChange("address", e.target.value)}
                />       
            </p>
            <p>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  value={customer.phone}
                  required
                  onChange={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  onKeyDown={handlePhoneKeyDown}
                  placeholder="Digits only"
                />
                {errors.phone && <div className="field-error">{errors.phone}</div>}
            </p>
         </div>
      </form>
    </div>
  );
}

export default ProfileForm;