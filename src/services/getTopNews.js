const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "6af828a870e04537ba9c5fa1f0df04be";
export const getTopNews = async () => {
    const data = await fetch(`${BASE_URL}/top-headlines?country=us`, {
        headers: { "X-Api-Key": API_KEY },
    });
    return await data.json();
};
