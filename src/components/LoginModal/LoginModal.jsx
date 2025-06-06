import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      title="Log In"
      name="logIn"
      buttonText="Log In"
      loginText="or Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      // onSubmit={onSubmit}
    >
      <label className="modal__label">
        Email*
        <input
          type="email"
          id="logInEmail"
          name="loginEmail"
          placeholder="Email address"
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          type="password"
          id="logInPassword"
          name="loginPassword"
          placeholder="Password"
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
