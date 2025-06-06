import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddLogModal.css";
function AddLogModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      title="Add a memory"
      name="addLog"
      buttonText="Add to map"
      loginText=""
      onClose={onClose}
      isOpen={isOpen}
      // onSubmit={onSubmit}
    >
      <label className="modal__label">
        Description*
        <input
          type="text"
          id="description"
          name="description"
          placeholder="About this day..."
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
        />
      </label>
      <label className="modal__label">
        Photo URL
        <input
          type="url"
          id="photoUrl"
          name="photoUrl"
          placeholder="Image link"
          className="modal__input"
          minLength="2"
          maxLength="50"
        />
      </label>
      <label className="modal__label">
        Location*
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default AddLogModal;
