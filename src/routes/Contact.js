import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";


function Contact(){
    return(
        <>
            <NavBar/>
            <Hero
            cName="heroContact"
            heroImg= "https://i.pinimg.com/564x/11/84/9b/11849b476eb5207b199f93f3f88cf397.jpg"
            
        /> 
        <ContactForm/>
        <ContactInfo/>
        </>
    )
}
export default Contact;