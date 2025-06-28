import img from "../assets/images/footer-bg.webp";
import { FaXTwitter, FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaChevronUp } from 'react-icons/fa6';
import LatestPosts from "./LatestPosts";
import PopularPosts from "./PopularPosts";

const Footer = () => {
    return (  
        <footer style={{ backgroundImage: `url(${img})` }} className="bg-cover bg-center w-full">
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
                    <div className='flex flex-col justify-center text-center text-md text-[#989898] items-center gap-6'>
                        <h1 className='text-4xl text-white font-bold uppercase animate'>lifesty<span className='inline-block rotate-45 animate-bounce'>le</span></h1>
                        <p className="text-xs leading-relaxed">
                            Lifestyle is your go-to blog for smart tips, fresh trends, and inspiring stories in fashion, wellness, tech, and culture helping you live better, stay informed, and enjoy the journey every day.
                        </p>
                        <div className="flex items-center gap-2 text-[#dddddd] my-4">
                            <span className="bg-[#222222] p-2 border border-white/10 hover:text-blue-700 hover:scale-105 active:text-blue-700 active:scale-105 cursor-pointer shadow-sm transition duration-300"><FaFacebook className="h-4 w-4" /></span>
                            <span className="bg-[#222222] p-2 border border-white/10 hover:text-blue-700 hover:scale-105 active:text-blue-700 active:scale-105 cursor-pointer shadow-sm transition duration-300"><FaXTwitter className="h-4 w-4" /></span>
                            <span className="bg-[#222222] p-2 border border-white/10 hover:text-blue-700 hover:scale-105 active:text-blue-700 active:scale-105 cursor-pointer shadow-sm transition duration-300"><FaTiktok className="h-4 w-4" /></span>
                            <span className="bg-[#222222] p-2 border border-white/10 hover:text-blue-700 hover:scale-105 active:text-blue-700 active:scale-105 cursor-pointer shadow-sm transition duration-300"><FaInstagram className="h-4 w-4" /></span>
                            <span className="bg-[#222222] p-2 border border-white/10 hover:text-blue-700 hover:scale-105 active:text-blue-700 active:scale-105 cursor-pointer shadow-sm transition duration-300"><FaYoutube className="h-4 w-4" /></span>
                        </div>
                        <div className="text-xs flex flex-col items-center gap-2">
                            <p>Contact: <a href="mailto:kamyz042@gmail.com" className="hover:underline active:underline">info@lifestyleblog.com</a></p>
                            <p>Phone: <a href="tel:+1234567890" className="hover:underline active:underline">+1 (234) 567-890</a></p>
                            <p>Copyright &copy; 2025 FredsTech. All rights reserved. Designed by <span className="text-[#dddddd]">FredsTech</span>.</p>
                        </div>
                    </div>
                    <LatestPosts />
                    <PopularPosts />
                </div>
                <div className="flex items-center justify-between border-t border-white/10 py-6 text-md text-[#989898]">
                    <ul className="flex gap-2 space-y-1 text-xs">
                        <li><a href="/privacy-policy" className="hover:underline active:underline">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" className="hover:underline active:underline">Terms of Service</a></li>
                    </ul>
                    <span className="uppercase text-xs hover:text-[#dddddd] active:text-[#dddddd] cursor-pointer transition-colors duration-300"><a href="#home" className="flex items-center gap-2"><FaChevronUp />top</a></span>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;