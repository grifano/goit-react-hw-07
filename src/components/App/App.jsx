import { useDispatch, useSelector } from "react-redux";
import css from "../App/App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const isLoading = useSelector(selectLoading);
  const hasError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Contacts Book</h1>
      <div className={css.phonebookContentWrap}>
        <div className={css.containerCol}>
          <ContactForm />
        </div>
        <div className={css.containerCol}>
          <div className={css.phonebookContactsWrap}>
            <SearchBox />
            {hasError && (
              <CustomErrorMessage
                message={"There is something wrong, please reload the page"}
              />
            )}
            <ContactList />
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
      <Toaster />
    </div>
  );
}
