import s from "./NewsItem.module.css";
function NewsItem({ news }) {
    const { urlToImage, author, title, description, publishedAt, content } =
        news;
    return (
        <li className={s.news__item}>
            <img src={urlToImage} alt="" className={s.news__picture} />
            <h2 className={s.news__title}>{title}</h2>
            <p className={s.news__description}>{description}</p>
            <ul className={s.news_info__list}>
                <li className={s.news_info__item}>{author}</li>
                <li className={s.news_info__item}>{publishedAt}</li>
            </ul>
        </li>
    );
}
export default NewsItem;
