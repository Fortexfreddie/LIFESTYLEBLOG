import { FaBullhorn, FaFacebookSquare, FaInstagram, FaPinterest, FaChevronDown, FaSearch, FaChevronUp } from 'react-icons/fa';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { breakingNews, menus} from "../Data/Data";
import SearchBar from "./SearchBar";
import { useNews } from '../context/NewsContext';
import { useNavigate } from "react-router-dom"



const Navbar = () => {
    const navigate = useNavigate();
    const {currentNews, setCurrentNews}  = useNews();

    // news transition
    const [fade, setFade] = useState(true);

    // mobile navbar
    const [menuOpen, setMenuOpen] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    // for seach icon
    const [showSearch, setShowSearch] = useState(false);

    // for navbar sticky
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    const toggleSubmenu = (menu) => {
        setActiveSubmenu(prev => (prev === menu ? null : menu));
    }


    useEffect(() => {
        const interval = setInterval(() => {
            // Start fade out
            setFade(false);

            setTimeout(() => {
            // After fade out, change news and fade in
            setCurrentNews(prev => (prev + 1) % breakingNews.length);
            setFade(true);
        }, 1000); // match fade-out duration
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [])

    

    useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Only trigger when user scrolls more than 120px difference
        if (Math.abs(currentScrollY - lastScrollY) < 120) return;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShow(false); // scrolling down
        } else {
            setShow(true); // scrolling up
        }

        setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    
    return (  
        <nav className={`sticky top-0 left-0 w-full z-50 transition-transform duration-700 ${ show ? "translate-y-0" : "-translate-y-full" } flex flex-col shadow-sm bg-white`}>
            <div className='container mx-auto'>
                <div className="flex lg:bg-gradient-to-r from-blue-600 to-sky-400 px-10">
                    <div className="flex items-center justify-between w-full">
                        <div className="hidden lg:flex items-center gap-4">
                            <span className="flex items-center gap-2 bg-blue-800 text-white p-3 uppercase text-xs font-bold tracking-wider">Breaking <FaBullhorn /></span>
                            <ul className="flex items-center text-white font-medium text-xs">
                                <li className={` ${fade ? 'animate-fade' : 'opacity-0'}`}>
                                    {breakingNews[currentNews].title}
                                </li>
                            </ul>
                        </div>
                        <div className='flex lg:hidden items-center'>
                            <span onClick={() => setMenuOpen(!menuOpen)} className='cursor-pointer text-black lg:text-white'>
                                { menuOpen ? <HiX className='h-5 w-5' /> : <HiMenu className='hover:text-blue-950 active:text-blue-950 h-5 w-5' /> }
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 p-3 text-black lg:text-white">
                            <span className='cursor-pointer hover:animate-spin active:animate-spin'><FaFacebookSquare className='hover:text-blue-950 active:text-blue-950' /></span>
                            <span className='cursor-pointer hover:animate-spin active:animate-spin'><FaInstagram className='hover:text-blue-950 active:text-blue-950' /></span>
                            <span className='cursor-pointer hover:animate-spin active:animate-spin'><FaXTwitter className='hover:text-blue-950 active:text-blue-950' /></span>
                            <span className='cursor-pointer hover:animate-spin active:animate-spin'><FaTiktok className='hover:text-blue-950 active:text-blue-950' /></span>
                            <span className='cursor-pointer hover:animate-spin active:animate-spin'><FaPinterest className='hover:text-blue-950 active:text-blue-950' /></span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:justify-between py-5 px-10">
                    <div className='flex items-center gap-20'>
                        <h1 className='text-4xl lg:text-5xl text-blue-950 font-bold uppercase animate'>lifesty<span className='inline-block rotate-45 animate-bounce'>le</span></h1>
                        <div className='hidden lg:flex items-center gap-6'>
                            <button onClick={() => navigate("/admin/Manage")} className='flex items-center font-semibold text-blue-950 hover:text-blue-600 active:text-blue-600 uppercase text-sm cursor-pointer'>
                                home
                            </button>
                            {
                                menus.map((menu, index) => (
                                    <div key={index} className='relative'>
                                        <button onMouseEnter={() => setActiveSubmenu(menu.name)} onMouseLeave={() => setActiveSubmenu(null)} className='flex items-center gap-1 font-semibold text-blue-950 hover:text-blue-600 active:text-blue-600 uppercase text-sm cursor-pointer'>
                                            {menu.name} { activeSubmenu === menu.name ? <FaChevronUp className="text-xs mt-0.5" /> : <FaChevronDown className="text-xs mt-0.5" /> }
                                        </button>
                                        <div onMouseEnter={() => setActiveSubmenu(menu.name)} onMouseLeave={() => setActiveSubmenu(null)} className={`absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md transition-all duration-200 overflow-hidden
                                            ${activeSubmenu === menu.name ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                            <ul className='flex flex-col text-sm text-gray-800'>
                                                {
                                                    menu.list.map((item, index) => (
                                                        <li key={index} className="px-4 py-2 hover:bg-gray-100 active:bg-gray-100 cursor-pointer">{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='hidden lg:flex items-center'>
                        <span onClick={() => setShowSearch(!showSearch)} className='bg-blue-100 hover:bg-blue-200 active:bg-blue-200 text-blue-950 p-2 rounded-full cursor-pointer'>
                            { showSearch ? <HiX /> : <FaSearch />}
                        </span>
                    </div>
                </div>

                {/* Menu mobile drop down */}
                <div className={`transition-all duration-500 ease-in-out transform origin-top overflow-hidden ${menuOpen ? 'opacity-100 translate-y-0 max-h-[400px] mt-4' : 'opacity-0 -translate-y-2 max-h-0'}`}>
                    <div className="flex flex-col lg:hidden w-full gap-4 py-4 px-4">
                        <button onClick={() => navigate("/admin/Manage")} className='flex items-center font-semibold text-blue-950 hover:text-blue-600 active:text-blue-600 uppercase text-sm cursor-pointer'>
                            home
                        </button>
                        {
                            menus.map((menu, index) => (
                                <div key={index}>
                                    <button onClick={() => toggleSubmenu(menu.name)} className='flex items-center gap-1 font-semibold text-blue-950 hover:text-blue-600 active:text-blue-600 uppercase text-sm cursor-pointer'>
                                        {menu.name} { activeSubmenu === menu.name ? <FaChevronUp className="text-xs mt-0.5" /> : <FaChevronDown className="text-xs mt-0.5" /> }
                                    </button>
                                    <div className={`w-full mt-2 bg-white shadow-sm rounded-md transition-all duration-200 overflow-hidden
                                        ${activeSubmenu === menu.name ? "block" : "hidden"}`}>
                                        <ul className='flex flex-col text-sm text-gray-800'>
                                            {
                                                menu.list.map((item, index) => (
                                                    <li key={index} className="px-4 py-2 hover:bg-gray-100 active:bg-gray-100 cursor-pointer">{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Search drop down */}
                <div className={`bg-gray-700 hidden lg:block transition-all duration-500 ease-in-out transform origin-top overflow-hidden ${showSearch ? 'opacity-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 -translate-y-2 max-h-0'}`}>
                    <div className='flex flex-col items-center justify-center my-4'>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;