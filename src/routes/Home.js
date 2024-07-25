import Destination from "../components/Destination";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import WelcomeMessage from "../components/WelcomeMessage";
import RealTime from "../components/RealTime";

function Home(){

    return(
        <>
        <NavBar/>
        <Hero
            cName="hero"
            heroImg= "https://i.pinimg.com/564x/7f/a0/93/7fa0937009e90356eeef1f3c09d8c592.jpg"
            title = "Explore All Of The World"
            desc = "Discover All beautiful places in the world"
            url = "/"
            button="Browse Destinations"
            welcomeMessage = {<WelcomeMessage/>}
            realTime = {<RealTime/>}
        />
        <br></br>

        <Destination/>
        </>
    )
}
export default Home;