import Banner from "./Components/Banner";
import HowItWorks from "./Components/HowItWorks";
import WhyChooseUs from "./Components/WhyChooseUs";
import AllTrades from "./Components/AllTrades";



const Home = () => {
    return (
        <div className=" min-h-screen">
            <Banner/>
            <HowItWorks/>
            <WhyChooseUs/>
            <AllTrades/>
            {/*<JoinAsTrades></JoinAsTrades>
            <Testimonials></Testimonials>    */}
        </div>
    );
};

export default Home;