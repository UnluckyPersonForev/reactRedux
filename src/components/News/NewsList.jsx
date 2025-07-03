import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopNewsThunk } from "../../app/news/newsThunk";
import NewsItem from "./NewsItem";
import s from "./NewsList.module.css";
function NewsList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopNewsThunk());
    }, [dispatch]);
    const { news, loading, error } = useSelector((store) => store.news);

    return (
        <section className={s.news}>
            <div className={s.news__container}>
                <h2 className={s.news__title}>Latest News</h2>
                {news && (
                    <ul className={s.news__list}>
                        {news.map((item) => (
                            <NewsItem news={item} />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default NewsList;
