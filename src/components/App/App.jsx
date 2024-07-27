import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import Container from "../Container/Container";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";
import css from "../App/App.module.css";

export default function App() {
  const isLoading = useSelector(selectLoading);
  const hasError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebook}>
      <Container>
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
      </Container>
    </div>
  );
}
