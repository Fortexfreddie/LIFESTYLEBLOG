import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogDetail from "../components/BlogDetail";
import { FaXTwitter, FaFacebook, FaYoutube, FaPinterest, FaPlus, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAllNews } from "../context/NewsContext";


const ArticleDetail = () => {
    const [showSocials, setShowSocials] = useState(false);
    const { allNews } = useAllNews();

    const { id } = useParams();

    const post = allNews.find(p => String(p.id) === String(id));

    if (!post && allNews.length > 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-500">Sorry, this article no longer exists.</p>
            </div>
        );
    }

    if (!post && allNews.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
            <p className="text-xl text-gray-600">Loading article...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
            <p className="text-xl text-red-500 font-semibold">Post not found</p>
            </div>
        );
    }

    return (  
        <div id="home" className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="flex-grow bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-col p-6 gap-10">
                        <div className="mt-10 flex flex-col gap-4">
                            <span className="uppercase py-1 px-2 bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-xs font-medium tracking-wide shadow-sm w-fit">{post.category}</span>
                            <h1 className="text-2xl md:text-4xl text-blue-950 font-semibold max-w-4xl">{post.title}</h1>
                            <p className="text-gray-500">{post.preview}</p>
                            <span className="flex items-center gap-2">
                                <span className="text-sm font-mono text-gray-400">{post.date}</span>
                                <span className="text-sm text-gray-400 font-semibold">-</span>
                                <span className="text-sm text-[#505050] hover:text-blue-800 hover:scale-105 transition duration-200 uppercase cursor-pointer">{post.comments} comments</span>
                            </span>
                            <div className="flex gap-2 w-full my-4">
                                <button className="hidden lg:flex items-center justify-center gap-4 px-10 py-2 bg-[#1877F2] hover:bg-[#166FE5] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaFacebook className="h-5 w-5" /> <span>1.1K Fans</span></button>
                                <button className="hidden lg:flex items-center justify-center gap-4 px-10 py-2 bg-[#000000] hover:bg-[#1a1a1a] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaXTwitter className="h-5 w-5" /> <span>68.9K Fans</span></button>

                                <button className="flex lg:hidden px-4 py-3 bg-[#1877F2] hover:bg-[#166FE5] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaFacebook className="h-5 w-5" /></button>
                                <button className="flex lg:hidden px-4 py-3 bg-[#000000] hover:bg-[#1a1a1a] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaXTwitter className="h-5 w-5" /></button>

                                <button onClick={() => setShowSocials(true)} className={`${showSocials ? `hidden` : `flex`} px-3 py-3 bg-[#aaaaaa] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer`}><FaPlus className="h-5 w-5" /></button>

                                <span className={`${showSocials ? `flex` : `hidden`} w-fit gap-2`}>
                                    <button className="px-4 py-3 bg-[#E60023] hover:bg-[#cc001f] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaPinterest className="h-5 w-5" /></button>
                                    <button className="px-4 py-3 bg-[#02669a] hover:bg-[#005983] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaLinkedin className="h-5 w-5" /></button>
                                    <button className="px-4 py-3 bg-[#FF0000] hover:bg-[#cc0000] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaYoutube className="h-5 w-5" /></button>
                                    <button className="px-4 py-3 bg-[#19232d] hover:bg-[#1a1a1a] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer"><FaEnvelope className="h-5 w-5" /></button>
                                </span>
                                <button onClick={() => setShowSocials(false)} className={`${showSocials ? `flex` : `hidden`} px-3 py-3 bg-[#aaaaaa] transition duration-300 rounded-md shadow-md hover:scale-105 cursor-pointer`}><FaMinus className="h-5 w-5" /></button>
                            </div>
                        </div>
                        <BlogDetail post={post} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default ArticleDetail;