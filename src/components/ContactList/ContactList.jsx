import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              phoneNumber={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
}
