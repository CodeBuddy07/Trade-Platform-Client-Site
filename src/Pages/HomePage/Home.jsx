import JoinAsTrades from "../../Components/JoinAsTrades";
import PostJobMessage from "../../Components/PostJobMessage";
import AllTrades from "./AllTrades";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";


const Home = () => {
    return (
        <div className="space-y-32">
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <PostJobMessage></PostJobMessage>
            <AllTrades></AllTrades>
            <JoinAsTrades></JoinAsTrades>
            <Testimonials></Testimonials>   
        </div>
    );
};

export default Home;