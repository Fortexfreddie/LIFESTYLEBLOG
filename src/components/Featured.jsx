import { useAllNews } from "../context/NewsContext";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom"


const Featured = () => {
    const navigate = useNavigate();
    const {allNews, setAllNews} = useAllNews();
    
    return (  
        <div className="flex flex-col items-center p-6 gap-10">
            <div className="mt-4 text-center">
                <h1 className="text-2xl md:text-5xl text-blue-950 font-semibold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">News</span></h1>
            </div>
            <div className="flex flex-col xl:flex-row gap-10 w-full md:w-[90%] lg:w-full">
                <div className="w-full xl:w-[70%] flex flex-col gap-14 md:gap-10">
                    {
                        allNews.slice(0, 7).map((news, index) => (
                            <div key={index} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="h-64 md:h-auto flex flex-col items-center rounded-md overflow-hidden shadow-md">
                                    <img src={news.image} alt={news.category} loading="lazy" className="h-full lg:max-h-72 w-full object-cover object-center hover:scale-105 transition duration-300" />
                                </div>
                                <div className="flex flex-col justify-center gap-4">
                                    <span className="flex items-center gap-2">
                                        <span className="text-sm font-mono text-gray-400">{news.date}</span>
                                        <span className="text-sm text-gray-400 font-semibold">-</span>
                                        <span className="text-sm text-blue-700 hover:text-blue-800 hover:scale-105 active:scale-105 transition duration-200 font-semibold uppercase cursor-pointer">{news.category}</span>
                                    </span>
                                    <p className="text-lg font-semibold text-gray-950">{news.title}</p>
                                    <p className="text-md text-gray-900">{news.preview}..</p>
                                    <span className="w-fit border-b border-blue-700">
                                        <p onClick={() => navigate(`/ArticleDetail/${news.id}`)} className="text-sm text-gray-950 cursor-pointer hover:text-blue-700 hover:scale-105 active:scale-105 transition duration-200">Read More</p>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                    <div className="w-full mt-4">
                        <button className="w-full uppercase bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-800 hover:to-sky-600 p-3 font-semibold hover:bg-black transition-colors duration-300 shadow-sm cursor-pointer">load more</button>
                    </div>
                </div>
                <div className="w-full xl:w-[30%]">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
 
export default Featured;