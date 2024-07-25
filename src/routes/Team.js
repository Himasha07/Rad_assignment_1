import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutNavBar from "../components/AboutNavBar"

function Team(){
    return(
        <>
                <NavBar/>
                <Hero
                cName="heroAbout"
                heroImg= "https://i.pinimg.com/564x/19/08/38/19083819ee564d042e86087be2bd737f.jpg"
                
                desc = ""
            />  

                <AboutNavBar/>


                <h1>Team</h1>
                <div className="aboutdes">
                    <p>
                    Welcome to the TravelBuddy Team page, where our diverse group of travel enthusiasts comes together to inspire
                     and empower. Meet our dedicated team members, each bringing unique talents and a shared passion for exploration.
                      Discover the faces behind TravelBuddy, committed to curating unforgettable travel experiences and providing personalized 
                      support every step of the way.
                    </p>
            </div>
            
        </>
    )
}
export default Team;