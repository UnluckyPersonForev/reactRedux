import Filter from "../Filter";
import ContactForm from "./ContactForm";
import PhoneBookList from "./ListPhoneBook";

function PhoneBook() {
    return (
        <>
            <ContactForm />
            <Filter />
            <PhoneBookList />
        </>
    );
}
export default PhoneBook;
