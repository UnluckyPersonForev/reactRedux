import s from "./Filter.module.css";
import { useSelector } from "react-redux";
import { setFilter } from "../../app/phoneBook/phoneBookSlice";
import { useDispatch } from "react-redux";
function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.phoneBook.filterQuery);
    const handleInputChange = (event) => {
        dispatch(setFilter(event.target.value));
    };
    return (
        <div className={s.filter__container}>
            <form action="" className={s.filter__form}>
                <input
                    type={s.filter__input}
                    value={filter}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}
export default Filter;
