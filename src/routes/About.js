import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import "../components/AboutStyles.css"
import AboutNavBar from "../components/AboutNavBar"



function About(){
    return(
        <>
            <NavBar/>
     <div>
            <Hero
            cName="heroAbout"
            heroImg= "https://i.pinimg.com/564x/24/cc/b9/24ccb967105ecbc9c097e0d02144e040.jpg"
            
        />  
    </div>

        <AboutNavBar/>

            <h1>About</h1>
            <div className="aboutdes">
                <p>At TravelBuddy, we are passionate about creating unforgettable travel experiences. Our mission is to inspire and empower travelers to explore the world with confidence. From curated itineraries to personalized recommendations, we provide the tools and support you need to make every journey memorable. Join us as we explore the beauty of diverse cultures, breathtaking landscapes, and the joy of discovery. Let's embark on this adventure together!</p>
            </div>
        </>
    )
}
export default About;

