import Banner from "./Components/Banner";
import HowItWorks from "./Components/HowItWorks";
import WhyChooseUs from "./Components/WhyChooseUs";
import AllTrades from "./Components/AllTrades";
import JoinAsTrades from "./Components/JoinAsTrades";
import Testimonials from "./Components/Testimonials";
import JoinUsCTA from "./Components/JoinUsCTA";



const Home = () => {
    return (
        <div className=" min-h-screen">
            <Banner/>
            <HowItWorks/>
            <WhyChooseUs/>
            <AllTrades/>
            <JoinAsTrades/>
            <Testimonials/>   
            <JoinUsCTA/>
        </div>
    );
};

export default Home;