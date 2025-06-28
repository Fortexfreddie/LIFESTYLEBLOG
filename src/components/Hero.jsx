import { breakingNews } from "../Data/Data";

const Hero = () => {
    const handleDaisyClick = (e, href) => {
        e.preventDefault();

        const scrollY = window.scrollY; // Save current scroll position
        window.location.hash = href;    // Manually set the hash
        window.scrollTo(0, scrollY);    // Restore scroll position immediately
    };

    const slicedNews = breakingNews.slice(9, 18); // Only 9 items

    return (  
        <div className="flex flex-col items-center justify-center p-6 gap-10">
            <div className="mt-4 text-center mb-6">
                <h1 className="text-2xl md:text-5xl text-blue-950 font-semibold mb-4">Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">News & Updates</span></h1>
                <p className="text-gray-700">Get the latest news updates from around the world.</p>
            </div>
            <div className="carousel w-full md:w-[90%] h-96 rounded-lg shadow-md">
            {
                slicedNews.map((news, index) => (
                    <div key={index} id={`slide${index+1}`} className="carousel-item relative w-full">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 px-2">
                            <div className="flex flex-col bg-white/90 p-6 md:p-8 rounded-md shadow-sm text-blue-950 max-w-xl gap-3 w-full">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <p className="uppercase text-sm font-bold text-blue-700">{news.category}</p>
                                    <p className="text-md text-center md:text-lg font-bold">{news.title}</p>
                                </div>
                                <span className="flex justify-center items-center gap-2">
                                    <span className="text-sm text-blue-800 font-semibold">{news.date}</span>
                                    <span>-</span>
                                    <span className="text-sm text-blue-800 font-semibold">{news.comments} COMMENTS</span>
                                </span>
                            </div>
                        </div>
                        <img src={news.image} loading="lazy" className="w-full h-full object-center object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a onClick={(e) => handleDaisyClick(e, `slide${index === 0 ? slicedNews.length : index}`)} href={`#slide${(index + 2) > slicedNews.length ? 1 : index + 2}`} className="btn btn-circle">❮</a>
                        <a onClick={(e) => handleDaisyClick(e, `slide${(index + 2) > slicedNews.length ? 1 : index + 2}`)} href={`#slide${index === 0 ? slicedNews.length : index}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}
 
export default Hero;