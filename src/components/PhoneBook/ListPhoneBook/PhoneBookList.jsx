import s from "./PhoneBook.module.css";
import { useSelector } from "react-redux";
function PhoneBookList() {
    const { isLoading, error, items } = useSelector(
        (state) => state.phoneBook.contacts
    );
    const filter = useSelector((state) => state.phoneBook.filter);

    const filteredContacts = items.filter((item) =>
        item.name.toUpperCase().includes(filter.toUpperCase())
    );

    return (
        <>
            <ul className="phonebook_list">
                {filteredContacts.map((item) => (
                    <li key={item.id} className="phonebook_item">
                        <div className="item_name">{item.name}</div>
                        <div className="item_number">{item.number}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default PhoneBookList;
