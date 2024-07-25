import css from "../App/App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  return (
    <div className={css.phonebook}>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <div className={css.phonebookContentWrap}>
          <div className={css.containerCol}>
            <ContactForm />
          </div>
          <div className={css.containerCol}>
            <div className={css.phonebookContactsWrap}>
              <SearchBox />
              <ContactList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
