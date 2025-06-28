import { createContext, useContext, useState } from "react";
import { breakingNews } from "../Data/Data";
import { useEffect } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [currentNews, setCurrentNews] = useState(0);

    return (
        <NewsContext.Provider value={{ currentNews, setCurrentNews }}>
            {children}
        </NewsContext.Provider>
    );
};
export const useNews = () => useContext(NewsContext);


const AllNewsContext = createContext();

export const AllNewsProvider = ({ children }) => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        setAllNews(breakingNews);
    }, []);

    return (
        <AllNewsContext.Provider value={{ allNews, setAllNews }}>
            {children}
        </AllNewsContext.Provider>
    );
};
export const useAllNews = () => useContext(AllNewsContext);