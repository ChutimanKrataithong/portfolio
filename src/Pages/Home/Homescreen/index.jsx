import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
// import Testimonial from "../Testimonials";
// import ContactMe from "../ContactMe";
// import EmailForm from "../EmailForm";
import EmailRestAPI from "../EmailRestAPI";
// import Footer from "../Footer";

export default function Home () {
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            {/* <Testimonial /> */}
            {/* <EmailForm/> */}
            <EmailRestAPI />
            {/* <ContactMe /> */}
            {/* <Footer /> */}
        </>
    );
}