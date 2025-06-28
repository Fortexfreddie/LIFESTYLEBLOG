import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Post from "./Post";
import { useAllNews } from "../../context/NewsContext";
import { useNavigate } from "react-router-dom"
import { useState } from "react";


const Manage = () => {
    const {allNews, setAllNews} = useAllNews();
    const navigate = useNavigate();
    const [visiblePosts, setVisiblePosts] = useState(4);


    const removeItem = (id) => {
        setAllNews(prev => prev.filter(articles => articles.id !== id));
    }

    const handleLoadMore = () => {
        setVisiblePosts(prev => prev + 2);
    };

    return (  
        <div id="home" className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-grow bg-gray-100">
                <div className="container mx-auto">
                    <div className="mt-4 text-center">
                        <h1 className="text-2xl md:text-5xl text-blue-950 font-semibold mb-4">Manage <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">News</span></h1>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-10 w-full lg:w-full p-6">
                        <div className="w-full xl:w-[70%] flex flex-col gap-14 md:gap-10">
                            {
                                allNews.slice(0, visiblePosts).map((news, index) => (
                                    <div key={index} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="h-64 md:h-auto flex flex-col items-center rounded-md overflow-hidden shadow-md">
                                            <img src={news.image} alt={news.category} loading="lazy" className="h-full lg:max-h-72 w-full object-cover object-center hover:scale-105 active:scale-105 transition duration-300" />
                                        </div>
                                        <div className="flex flex-col justify-center gap-4">
                                            <span className="flex items-center gap-2">
                                                <span className="text-sm font-mono text-gray-400">{news.date}</span>
                                                <span className="text-sm text-gray-400 font-semibold">-</span>
                                                <span className="text-sm text-blue-700 hover:text-blue-800 hover:scale-105 active:text-blue-800 active:scale-105 transition duration-200 font-semibold uppercase cursor-pointer">{news.category}</span>
                                            </span>
                                            <p className="text-lg font-semibold text-gray-950">{news.title}</p>
                                            <p className="text-md text-gray-900">{news.preview}..</p>
                                            <div className="flex gap-2 items-center">
                                                <button onClick={() => navigate(`/ArticleDetail/${news.id}`)} className="text-xs uppercase bg-blue-600 hover:bg-blue-800 hover:scale-105 active:bg-blue-800 active:scale-105 text-white px-4 py-2 transition-colors duration-300 shadow-sm cursor-pointer">View</button>
                                                <button onClick={() => removeItem(news.id)} className="text-xs uppercase bg-red-600 hover:bg-red-800 hover:scale-105 active:bg-red-800 active:scale-105 text-white px-4 py-2 transition-colors duration-300 shadow-sm cursor-pointer">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="w-full mt-4">
                                <button onClick={handleLoadMore} className="w-full uppercase bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-800 hover:to-sky-600 active:from-blue-800 active:to-sky-600 p-3 font-semibold hover:bg-black active:bg-black transition-colors duration-300 shadow-sm cursor-pointer">load more</button>
                            </div>
                        </div>
                        <div className="w-full xl:w-[30%]">
                            <div className='flex flex-col items-center w-full gap-4 lg:sticky top-20'>
                                <p className="text-md text-gray-700 font-semibold tracking-wider uppercase">Add Post</p>
                                <Post />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Manage;