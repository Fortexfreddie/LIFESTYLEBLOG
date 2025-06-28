import SearchBar from "./SearchBar";
import { FaXTwitter, FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa6';
import { breakingNews } from "../Data/Data";

const Sidebar = () => {
    const categoryCounts = breakingNews.reduce((acc, item) => {
        const category = item.category;
        acc[category] = acc[category] ? acc[category] + 1 : 1;
        return acc;
    }, {});
    return (  
        <div className='flex flex-col w-full gap-4 lg:sticky top-2'>
            <p className="text-md text-gray-700 font-semibold tracking-wider uppercase">Search</p>
            <SearchBar />
            <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="flex items-center justify-center gap-4 px-auto py-2 bg-[#1877F2] hover:bg-[#166FE5] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaFacebook className="h-5 w-5" /> <span>1.1K Fans</span></button>
                <button className="flex items-center justify-center gap-4 px-auto py-2 bg-[#E60023] hover:bg-[#cc001f] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaPinterest className="h-5 w-5" /> <span>16.3K Fans</span></button>
                <button className="flex items-center justify-center gap-4 px-auto py-2 bg-[#000000] hover:bg-[#1a1a1a] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaXTwitter className="h-5 w-5" /> <span>68.9K Fans</span></button>
                <button className="flex items-center justify-center gap-4 px-auto py-2 bg-[#F77737] hover:bg-[#e95f1f] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaInstagram className="h-5 w-5" /> <span>46.2K Fans</span></button>
                <button className="flex items-center justify-center gap-4 px-auto py-2 bg-[#FF0000] hover:bg-[#cc0000] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaYoutube className="h-5 w-5" /> <span>6.8K Fans</span></button>
                <button className="flex items-center justify-center gap-4 px-auto py-2 bg-[#010101] hover:bg-[#1c1c1c] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaTiktok className="h-5 w-5" /> <span>12.7K Fans</span></button>
            </div>
            <div className="flex flex-col items-center justify-center text-center bg-gray-200 gap-6 p-8">
                <span className="flex flex-col items-center gap-4">
                    <p className="text-md text-gray-800 font-semibold uppercase">Your daily updates</p>
                    <span className="border-b border-0.5 w-[30px] border-gray-700"></span>
                </span>
                <p className="text-md text-gray-700">Subscribe now. We’ll make sure you never miss a thing</p>
                <div className="w-full">
                    <form action="">
                        <input type="text" name="" id="" placeholder="Your email address..." className='w-full text-sm outline-blue-500 p-4 border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'/>
                        <button className="w-full uppercase bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-800 hover:to-sky-600 p-3 font-semibold hover:bg-black transition-colors duration-300 shadow-sm cursor-pointer">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
                <span className="w-full uppercase p-3 font-semibold text-gray-900 text-center border border-blue-600 mb-4">popular</span>
                {
                    breakingNews.slice(4, 8).map((news, index) => (
                        <div key={index} className="flex w-full gap-4">
                            <div className="flex flex-col w-[30%] items-center rounded-md overflow-hidden shadow-md">
                                <img src={news.image} alt={news.category} loading="lazy" className="h-full max-h-36 w-full object-center object-cover" />
                            </div>
                            <div className="flex flex-col w-[70%] justify-center gap-4">
                                <p className="text-md text-gray-900 font-semibold">{news.title}</p>
                                    <span className="text-xs font-mono text-gray-400 uppercase">{news.date}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <div className="flex flex-col gap-4 w-full mt-4">
                <span className="w-full uppercase p-3 font-semibold text-gray-900 text-center border border-blue-600">categories</span>
                <ul className="w-full flex flex-col items-center">
                    {
                        Object.entries(categoryCounts).map(([category, count], index) => (
                           <li key={index} className="flex items-center justify-between w-full border-b border-gray-300 py-4 text-gray-900">
                                <div className="group flex items-center gap-4 cursor-pointer">
                                    <span className="group-hover:bg-blue-600 h-2 w-2 rounded-full border border-blue-600 transition-all duration-200"></span>
                                    <span className="hover:scale-95 group-hover:text-blue-600 transition-all duration-200">{category}</span>
                                </div>
                                <span className="text-gray-500">({count})</span>
                            </li> 
                        ))
                    }
                </ul>
            </div> */}
        </div>
    );
}
 
export default Sidebar;