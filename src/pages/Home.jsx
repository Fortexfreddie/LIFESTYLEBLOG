import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const Home = () => {
    return (  
        <div id="home" className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-grow bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-10">
                        <Hero />
                        <Featured />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Home;