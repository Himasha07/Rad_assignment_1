import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutNavBar from "../components/AboutNavBar"

function History(){
    return(
        <>
                <NavBar/>
                <Hero
                cName="heroAbout"
                heroImg= "https://i.pinimg.com/564x/ff/81/40/ff8140aaadbc57a6c15ae3776731f542.jpg"
                
                desc = ""
            />  
                <AboutNavBar/>

                <h1 >History</h1>
                <div className="aboutdes">
                    <p>
                    Step into the history of TravelBuddy—a journey marked by passion, innovation, and a deep love for travel. 
                    Explore our origins, from the inception of our vision to the milestones that have shaped our growth. 
                    Learn about the challenges we've overcome, the partnerships we've forged, and the evolving landscape of travel
                     experiences we continue to enrich. Join us as we celebrate our history and look forward to a future filled with
                      new adventures.
                    </p>
            </div>
            
        </>
    )
}
export default History
;