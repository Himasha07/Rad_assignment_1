import "./HeroStyles.css";

function Hero(props){
    return(
        <>
            <div className={props.cName}>
                <img alt="Img1" src={props.heroImg}>
                </img>
            </div>

            <div className="heroText">
                <h1>{props.title}</h1>
                <br></br>
                <p><h2>{props.desc}</h2></p>
                <br></br>
                <a href={props.url}>{props.button}</a>
                <br></br><br></br>
                {props.welcomeMessage}
                {props.realTime}
            </div>
        </>
    )
}
export default Hero;