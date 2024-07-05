import Banner from "./Banner";
import ContactMeEmail from "./ContactMeEmail";
import ProjectDemo from "./ProjectDemo";
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
            <ProjectDemo></ProjectDemo>
            <ContactMeEmail></ContactMeEmail>
        </div>
    );
};

export default Home;