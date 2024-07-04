import Banner from "./Banner";
import Services from "./Services";
import SkillsHome from "./SkillsHome";

const Home = () => {
    return (
        <div>
            <div className="bg-[#052949]">
                <Banner></Banner>
            </div>
            <SkillsHome></SkillsHome>
            <Services></Services>
        </div>
    );
};

export default Home;