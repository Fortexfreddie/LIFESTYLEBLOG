import { breakingNews } from "../Data/Data";
import { useNavigate } from "react-router-dom";

const PopularPosts = () => {
    const navigate = useNavigate();
    return (  
        <div className="flex flex-col gap-6 w-full">
            <h1 className='text-lg text-white font-bold uppercase animate'>Popular Posts</h1>
            {
                breakingNews.slice(10, 13).map((news, index) => (
                    <div key={index} className="flex w-full gap-4">
                        <div className="flex flex-col w-[30%] items-center rounded-md overflow-hidden shadow-md">
                            <img src={news.image} alt={news.category} loading="lazy" className="h-full max-h-36 w-full object-center object-cover" />
                        </div>
                        <div className="flex flex-col w-[70%] justify-center gap-2">
                            <p onClick={() => navigate(`/ArticleDetail/${news.id}`)} className="text-xs text-white font-semibold cursor-pointer hover:text-[#dddddd] active:text-[#dddddd] transition-colors duration-200">{news.title}</p>
                            <span className="text-xs font-mono text-[#707070] uppercase">{news.date}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default PopularPosts;