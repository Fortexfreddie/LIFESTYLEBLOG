import Sidebar from "./Sidebar";
import culture from "../assets/images/unsplash_culture.webp";
import world from "../assets/images/unsplash_world.webp";
import author from "../assets/images/author.jpg";
import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';


const BlogDetail = ({ post }) => {
    if (!post) {
        return <p className="text-center text-gray-500">No article to display.</p>;
    }
    return (  
        <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col xl:flex-row gap-10 w-full md:w-[90%] lg:w-full">
                <div className="w-full xl:w-[70%] flex flex-col gap-14 md:gap-10">
                    <div className="h-72 md:h-[400px] w-full rounded-md overflow-hidden shadow-md">
                        <img src={post.image} alt="" className="object-center object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-center gap-8">
                        <p className="text-lg text-gray-900">{post.content}</p>
                        <span className="flex flex-col gap-8">
                            <h1 className="text-2xl font-semibold text-gray-950">Show Off Your Personality</h1>
                            <span className="text-lg text-gray-900 flex flex-col gap-8">
                                <p>You see the holiday season approaching on the calendar, and suddenly, you find yourself in action mode. You’re scrolling through your favorite online stores, flagging items that might make the perfect gift for your adored ones.</p>
                                <p>You’re shaking the dust off the decorations that have been tucked in the basement for the last 12 months.</p>
                            </span>
                            <div class="max-w-2xl mx-auto">
                                <div class="relative pl-10 text-gray-800 text-2xl font-serif">
                                    <span class="absolute left-0 top-0 text-7xl text-blue-600">“</span>
                                    <p>He’s so similar to me. In person, we’re just weird and silly and stupid together. He makes me the happiest I’ve ever been in my life.
                                    </p>
                                    <p class="mt-4 text-sm text-gray-400 uppercase tracking-wider">- Shane Doe</p>
                                </div>
                            </div>
                            <span className="text-lg text-gray-900 flex flex-col gap-8">
                                <p>You see the holiday season approaching on the calendar, and suddenly, you find yourself in action mode. You’re scrolling through your favorite online stores, flagging items that might make the perfect gift for your adored ones.</p>
                                <p>Also Read: <span className="text-blue-500 hover:text-blue-700 transition-colors duration-200 cursor-pointer">Lagos Hosts West Africa’s First Digital Art Biennale</span></p>
                            </span>
                        </span>
                        <div className="h-72 md:h-[400px] w-full rounded-md overflow-hidden shadow-md">
                            <img src={culture} alt="" className="object-center object-cover w-full h-full" />
                        </div>
                        <span className="flex flex-col items-center justify-center gap-2">
                            <div className="flex gap-4 items-center justify-center w-full">
                                <span className="max-w-lg bg-gray-400 h-[0.5px] w-full"></span>
                                <img src={author} alt="" className="h-20 w-20 rounded-full shadow-md" />
                                <span className="max-w-lg bg-gray-400 h-[0.5px] w-full"></span>
                            </div>
                            <span className="uppercase text-xs text-blue-600 font-medium">author</span>
                            <p className="text-xl font-semibold text-gray-900">Shane Doe</p>
                            <p className="mt-2 text-center text-md text-gray-800">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                            <span className="flex items-center text-gray-400 space-x-1 mt-2">
                                <FaFacebook className="hover:text-gray-600 transition-colors duration-300 cursor-pointer" />
                                <FaXTwitter className="hover:text-gray-600 transition-colors duration-300 cursor-pointer" />
                                <FaInstagram className="hover:text-gray-600 transition-colors duration-300 cursor-pointer" />
                            </span>
                        </span>
                    </div>
                </div>
                <div className="w-full xl:w-[30%]">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
 
export default BlogDetail;