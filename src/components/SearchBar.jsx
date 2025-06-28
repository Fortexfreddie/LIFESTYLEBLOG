import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { breakingNews} from "../Data/Data";
import { useNews } from '../context/NewsContext';


const SearchBar = () => {
    const {currentNews, setCurrentNews}  = useNews();

    useEffect(() => {
        const interval = setInterval(() => {

        setCurrentNews(prev => (prev + 1) % breakingNews.length);
        }, 7000); // Change every 7 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [])

    return (  
        <div className="flex bg-gray-200 shadow-md rounded-lg p-4 gap-2 overflow-hidden max-w-3xl w-full items-center">
            <input type="text" name="" id="" placeholder={breakingNews[currentNews].title} className='w-full placeholder:text-xs text-sm outline-blue-500 rounded-md p-3 border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <a href="#">
                <button className="flex cursor-pointer items-center justify-center bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-800 hover:to-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 hover:scale-105">
                    <FaSearch className="inline mr-2 w-5 h-5" />
                    Search
                </button>
            </a>
        </div>
    );
}
 
export default SearchBar;
