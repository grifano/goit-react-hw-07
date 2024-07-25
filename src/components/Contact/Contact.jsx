import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function Contact({ name, phoneNumber, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <div className={css.contactInfoCol}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contactInfoCol}>
          <FaPhoneAlt />
          <p>{phoneNumber}</p>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
